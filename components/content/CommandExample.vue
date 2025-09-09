<template>
  <div class="command-example">
    <div class="command-header">
      <code class="command-text">{{ command }}</code>
      <button 
        @click="copyCommand" 
        class="copy-button"
        :class="{ 'copied': copied }"
      >
        {{ copied ? 'Copied!' : 'Copy' }}
      </button>
    </div>
    <div class="command-output" v-if="output">
      <pre>{{ output }}</pre>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  command: {
    type: String,
    required: true
  },
  output: {
    type: String,
    default: ''
  }
})

const copied = ref(false)

const copyCommand = async () => {
  try {
    await navigator.clipboard.writeText(props.command)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy command:', err)
  }
}
</script>

<style scoped>
.command-example {
  @apply bg-gray-900 rounded-lg overflow-hidden;
}

.command-header {
  @apply flex items-center justify-between p-4 bg-gray-800;
}

.command-text {
  @apply text-green-400 font-mono text-sm flex-1;
}

.copy-button {
  @apply px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 transition-colors;
}

.copy-button.copied {
  @apply bg-green-600;
}

.command-output {
  @apply p-4 bg-gray-900;
}

.command-output pre {
  @apply text-gray-300 font-mono text-sm whitespace-pre-wrap;
}
</style>
