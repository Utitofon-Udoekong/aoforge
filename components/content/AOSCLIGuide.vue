<template>
  <div class="aos-guide">
    <h3 class="guide-title">Using AOS CLI</h3>
    <p class="guide-description">
      For advanced AO process management, use the AOS CLI:
    </p>
    <div class="aos-commands">
      <div class="command-item">
        <code class="command">npm i -g https://get_ao.g8way.io</code>
        <span class="command-description">Install AOS CLI</span>
      </div>
      <div class="command-item">
        <code class="command">aos [process-name]</code>
        <span class="command-description">Start a process</span>
      </div>
      <div class="command-item">
        <code class="command">aos [process-name] --load ./ao/contract.lua</code>
        <span class="command-description">Load a contract</span>
      </div>
      <div class="command-item">
        <code class="command">aos [process-name] --eval "Send({Target = 'process-id', Action = 'increment'})"</code>
        <span class="command-description">Send a message</span>
      </div>
    </div>
  </div>
</template>

<script setup>
// No additional logic needed for this component
</script>

<style scoped>
.aos-guide {
  @apply bg-blue-50 border border-blue-200 rounded-lg p-6;
}

.guide-title {
  @apply text-lg font-semibold text-blue-900 mb-2;
}

.guide-description {
  @apply text-blue-800 mb-4;
}

.aos-commands {
  @apply space-y-3;
}

.command-item {
  @apply flex flex-col sm:flex-row sm:items-center gap-2;
}

.command {
  @apply bg-gray-900 text-green-400 font-mono text-sm px-3 py-2 rounded flex-shrink-0;
}

.command-description {
  @apply text-blue-700 text-sm;
}
</style>
