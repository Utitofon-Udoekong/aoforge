import { BaseCommand } from './base-command.js';
import { CommandOption } from '../../types/cli.js';
import { ProjectManager } from '../managers/project-manager.js';
import { ConfigManager } from '../managers/config-manager.js';
import { ProcessManager } from '../managers/process-manager.js';
import path from 'path';
import fs from 'fs-extra';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export class BuildCommand extends BaseCommand {
  name = 'build';
  description = 'Build the project for production';
  options: CommandOption[] = [
    {
      flag: '-o, --output <dir>',
      description: 'Output directory for build artifacts',
      required: false,
      defaultValue: 'dist'
    },
    {
      flag: '--clean',
      description: 'Clean output directory before building',
      required: false
    }
  ];

  async execute(options: any): Promise<void> {
    this.logStart('Building project for production');
    
    try {
      // Determine project path
      const projectPath = this.determineProjectPath();
      
      // Check if project exists
      if (!(await this.projectExists(projectPath))) {
        throw new Error('No AO project found. Run "ao-forge init" to create a new project.');
      }
      
      // Load configuration
      const configManager = new ConfigManager(projectPath);
      const config = await configManager.loadConfig();
      
      // Create managers
      const projectManager = new ProjectManager(projectPath);
      const processManager = new ProcessManager();
      
      // Clean output directory if requested
      if (options.clean) {
        await this.cleanOutputDirectory(options.output);
      }
      
      // Build framework
      await this.buildFramework(projectManager, config, options);
      
      // TODO: AO process building will be handled by AOS CLI
      // Users should run: aos [process-name] --load ./ao/contract.lua
      
      // Generate build artifacts
      await this.generateBuildArtifacts(projectPath, config, options);
      
      this.logSuccess('Project built successfully');
      
      // Show build summary
      this.showBuildSummary(options.output);
      
    } catch (error) {
      this.logError('Build failed', error as Error);
      throw error;
    }
  }

  private determineProjectPath(): string {
    return process.cwd();
  }

  private async projectExists(projectPath: string): Promise<boolean> {
    try {
      const packageJsonPath = path.join(projectPath, 'package.json');
      const configPath = path.join(projectPath, 'ao.config.yml');
      
      return await fs.pathExists(packageJsonPath) || await fs.pathExists(configPath);
    } catch {
      return false;
    }
  }

  private async cleanOutputDirectory(outputDir: string): Promise<void> {
    const outputPath = path.resolve(outputDir);
    if (await fs.pathExists(outputPath)) {
      await fs.remove(outputPath);
      this.logInfo(`Cleaned output directory: ${outputDir}`);
    }
  }

  private async buildFramework(projectManager: ProjectManager, config: any, options: any): Promise<void> {
    this.logInfo('Building framework...');
    
    try {
      const pm = config.packageManager || 'npm';
      const buildCommand = `${pm} run build`;

      this.logInfo(`Running: ${buildCommand}`);
      
      // Execute the build command
      const projectPath = this.determineProjectPath();
      const { stdout, stderr } = await execAsync(buildCommand, { cwd: projectPath });
      
      if (stderr && !stderr.includes('warning')) {
        this.logInfo(`Build warnings: ${stderr}`);
      }
      
      this.logSuccess('Framework built successfully');
      
    } catch (error) {
      this.logError('Framework build failed', error as Error);
      throw error;
    }
  }

  private async buildAOProcess(processManager: ProcessManager, config: any, options: any): Promise<void> {
    this.logInfo('Building AO process...');
    
    try {
      // Check AOS installation
      const aosInstalled = await processManager.checkAOSInstallation();
      if (!aosInstalled) {
        throw new Error('AOS is not installed. Please install AOS first: npm i -g https://get_ao.g8way.io');
      }
      
      // Find Lua files
      const luaFiles = await processManager.findLuaFiles(process.cwd());
      if (luaFiles.length === 0) {
        this.logInfo('No Lua files found for AO process');
        return;
      }
      
      // TODO: Implement AO process build logic
      // This should compile and optimize the Lua files
      this.logSuccess('AO process built successfully');
      
    } catch (error) {
      this.logError('AO process build failed', error as Error);
      throw error;
    }
  }

  private async generateBuildArtifacts(projectPath: string, config: any, options: any): Promise<void> {
    this.logInfo('Generating build artifacts...');
    
    try {
      const outputPath = path.resolve(options.output);
      await fs.ensureDir(outputPath);
      
      // Copy build artifacts
      await this.copyBuildArtifacts(projectPath, outputPath, config);
      
      // Generate deployment manifest
      await this.generateDeploymentManifest(outputPath, config);
      
      this.logSuccess('Build artifacts generated successfully');
      
    } catch (error) {
      this.logError('Failed to generate build artifacts', error as Error);
      throw error;
    }
  }

  private async copyBuildArtifacts(projectPath: string, outputPath: string, config: any): Promise<void> {
    // Copy framework build output
    const frameworkOutputs = {
      'nextjs': '.next',
      'nuxtjs': '.nuxt',
      'svelte': 'build',
      'react': 'dist',
      'vue': 'dist'
    };
    
    const frameworkOutput = frameworkOutputs[config.framework as keyof typeof frameworkOutputs];
    if (frameworkOutput) {
      const sourcePath = path.join(projectPath, frameworkOutput);
      const destPath = path.join(outputPath, 'framework');
      
      if (await fs.pathExists(sourcePath)) {
        await fs.copy(sourcePath, destPath);
      }
    }
    
    // Copy AO process files
    if (config.luaFiles && config.luaFiles.length > 0) {
      const aosPath = path.join(outputPath, 'aos');
      await fs.ensureDir(aosPath);
      
      for (const luaFile of config.luaFiles) {
        const sourcePath = path.join(projectPath, luaFile);
        const destPath = path.join(aosPath, luaFile);
        
        if (await fs.pathExists(sourcePath)) {
          await fs.copy(sourcePath, destPath);
        }
      }
    }
  }

  private async generateDeploymentManifest(outputPath: string, config: any): Promise<void> {
    const manifest = {
      version: '1.0.0',
      timestamp: new Date().toISOString(),
      framework: config.framework,
      aos: config.aos,
      processName: config.processName,
      files: await this.getBuildFiles(outputPath)
    };
    
    await fs.writeJSON(path.join(outputPath, 'manifest.json'), manifest, { spaces: 2 });
  }

  private async getBuildFiles(outputPath: string): Promise<string[]> {
    const files: string[] = [];
    
    const walk = async (dir: string, baseDir: string) => {
      const entries = await fs.readdir(dir, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        const relativePath = path.relative(baseDir, fullPath);
        
        if (entry.isDirectory()) {
          await walk(fullPath, baseDir);
        } else {
          files.push(relativePath);
        }
      }
    };
    
    await walk(outputPath, outputPath);
    return files;
  }

  private showBuildSummary(outputDir: string): void {
    this.logInfo('\n📦 Build Summary:');
    this.logInfo(`Output directory: ${outputDir}`);
    this.logInfo('Framework build completed successfully');
    this.logInfo('');
    this.logInfo('For AO process deployment, use the AOS CLI:');
    this.logInfo('  npm i -g https://get_ao.g8way.io');
    this.logInfo('  aos [process-name] --load ./ao/contract.lua');
  }

  protected getHelpText(): string {
    return `
Build the project for production deployment.

The build process will:
- Compile and optimize the framework code
- Generate deployment artifacts
- Create a deployment manifest

Examples:
  ao-forge build                    # Build with default settings
  ao-forge build -o ./build        # Specify output directory
  ao-forge build --clean           # Clean output before building

Note: AO process building is handled by the AOS CLI:
  npm i -g https://get_ao.g8way.io
  aos [process-name] --load ./ao/contract.lua
    `;
  }
} 