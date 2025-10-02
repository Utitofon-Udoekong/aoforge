# AO-Forge

_Repo metadata_

[![GitHub tag](https://img.shields.io/github/tag/Utitofon-Udoekong/aoforge-cli?include_prereleases=&sort=semver&color=blue)](https://github.com/Utitofon-Udoekong/aoforge-cli/releases/)
[![License](https://img.shields.io/badge/License-MIT-blue)](#license)
[![NPM License](https://img.shields.io/npm/l/ao-forge)](https://www.npmjs.com/package/ao-forge)
[![protocol.land](https://arweave.net/eZp8gOeR8Yl_cyH9jJToaCrt2He1PHr0pR4o-mHbEcY)](https://protocol.land/#/repository/802dddb8-55e5-4189-a8c1-21033fc4660a)

🔥 AO-Forge: Your AI-powered CLI companion for building, managing, and deploying AO smart contracts with Next.js, React, Vue, Nuxt.js, and SvelteKit integration.

## Documentation

<div align="center">

[![view - Documentation](https://img.shields.io/badge/view-Documentation-blue?style=for-the-badge)](https://aoforge_arlink.arweave.net/ "Go to project documentation")

</div>

- **[Quick Start Guide](docs/QUICK_START.md)** — Get up and running in minutes
- **[CLI Reference](docs/CLI_REFERENCE.md)** — Complete command documentation and options


## Features

- 🚀 **Streamlined Project Creation** - Clone framework templates directly from GitHub
- 🔄 **Multiple Framework Support** - Next.js, React, Vue, Nuxt.js, and SvelteKit
- 📦 **Automatic Setup** - Dependencies, Git, and AO configuration in one command
- 🎯 **Smart Configuration** - Auto-detects Lua files and creates `ao.config.yml`
- 💻 **Interactive CLI** - User-friendly prompts and guided setup
- ⚡️ **Built with TypeScript** - Full type safety and modern development
- 🖥️ **Integrated Development** - `ao-forge dev` starts both frontend and AO process
- 🤖 **AI-Powered Code Generation** - Generate AO contracts with AI assistance
- 🔨 **Simple Build System** - Framework-agnostic build and deployment
- ⚙️ **Configuration Management** - Centralized AO process configuration
- 🔧 **AO Process Management** - Start, stop, and monitor AO processes with `ao-forge process`

## Built with

TypeScript, Node.js, Commander, Inquirer, OpenAI API, Anthropic API, fs-extra, ora, chalk, Jest, pnpm

## Installation

```bash
# Using npm
npm install -g ao-forge

# Using pnpm (recommended)
pnpm add -g ao-forge

# Or use directly with npx

npx ao-forge init my-app

```

## Quick Start


See the [Quick Start Guide](docs/QUICK_START.md) for step-by-step instructions.

## CLI Usage

See the [CLI Reference](docs/CLI_REFERENCE.md) for all commands, options, and advanced usage.


## AI-Powered Development

Forge includes advanced AI capabilities for AO development. See the [AI Commands section](docs/CLI_REFERENCE.md#ai-commands) in the CLI Reference for details and examples.

## AI Integration

Forge supports AI-powered code generation and AO process management. See [CLI Reference](docs/CLI_REFERENCE.md) for complete documentation.

## Project Structure

```
my-app/
├── README.md
├── node_modules/
├── package.json
├── ao.config.yml      # AO configuration file (auto-generated)
├── tsconfig.json
├── ao/                # AO process files (auto-detected)
│   └── *.lua
└── [framework-specific-files]
    ├── src/           # React/Vue/SvelteKit projects
    ├── app/           # Next.js/Nuxt.js projects
    └── [framework-specific-structure]
```

## Configuration (ao.config.yml)


The configuration file is now fully documented in the [CLI Reference](docs/CLI_REFERENCE.md#configuration-file-ao-config-yml). Use the provided template as a starting point.

---

## Command Options

| Command              | Option                    | Description                                    |
|----------------------|---------------------------|------------------------------------------------|
| `init`               | `-f, --framework`         | Framework (nextjs, react, vue, nuxtjs, svelte) |
|                      | `-p, --path`              | Path to create project                        |
|                      | `--package-manager`       | Package manager (npm, yarn, pnpm)            |
|                      | `--port`                  | Development server port                       |
|                      | `--process-name`          | AO process name                               |
|                      | `--git`                   | Initialize Git repository                     |
| `process start`      | `-n, --name <name>`      | Name for the AO process                       |
|                      | `--wallet <path>`         | Path to wallet file                           |
|                      | `--data <data>`           | Process data                                  |
|                      | `--module <module>`       | Process module                                |
| `process stop`       |                          | Stop running AO process                       |
| `process list`       |                          | List all running processes                    |
| `dev`                | `--port <port>`          | Development server port                       |
|                      | `--process-name <name>`  | AO process name                               |
| `ai generate`        | `-p, --prompt <text>`     | Description of code to generate              |
|                      | `-t, --type <type>`       | Type of code (contract/module/test)          |
|                      | `-o, --output <path>`     | Output file path                             |
|                      | `--provider <provider>`   | AI provider (openai/anthropic)               |
|                      | `--model <model>`         | Specific AI model to use                     |

## Development

```bash
# Clone the repository
git clone https://github.com/Utitofon-Udoekong/aoforge-cli.git
cd aoforge-cli

# Install dependencies
pnpm install

# Build the project
pnpm build

# Link for local testing
pnpm run link:global

# Test the CLI
ao-forge init test-app

# Unlink when done
pnpm run unlink:global
```

### Development Scripts

```bash
pnpm dev           # Watch mode
pnpm build         # Build project
pnpm test:cli      # Test CLI directly
pnpm link:global   # Link globally
pnpm unlink:global # Unlink global installation
```


### Running AO Processes

ao-forge provides streamlined AO process management:

```bash
# Start an AO process (automatically loads Lua files from ao.config.yml)
ao-forge process start

# Start with custom name
ao-forge process start -n "my-process"

# List running processes
ao-forge process list

# Stop a process
ao-forge process stop

# Start development server with AO integration
ao-forge dev
```

The `ao-forge process start` command automatically:
- Detects Lua files in your project
- Loads them into the AO process
- Uses configuration from `ao.config.yml`
- Switches to interactive AOS CLI for real-time development

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

Released under [MIT](/LICENSE) by [@Utitofon-Udoekong](https://github.com/Utitofon-Udoekong).

## Support

For support, please [open an issue](https://github.com/Utitofon-Udoekong/aoforge-cli/issues) on GitHub.
