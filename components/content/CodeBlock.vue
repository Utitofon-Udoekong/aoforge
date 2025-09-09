<template>
  <div class="code-block">
    <div class="code-header" v-if="title || showCopy">
      <span class="code-title" v-if="title">{{ title }}</span>
      <button 
        v-if="showCopy"
        @click="copyCode" 
        class="copy-button"
        :class="{ 'copied': copied }"
      >
        {{ copied ? 'Copied!' : 'Copy' }}
      </button>
    </div>
    <div class="code-content">
      <pre><code :class="languageClass">{{ code }}</code></pre>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  code: {
    type: String,
    required: true
  },
  language: {
    type: String,
    default: 'bash'
  },
  title: {
    type: String,
    default: ''
  },
  showCopy: {
    type: Boolean,
    default: true
  }
})

const copied = ref(false)

const languageClass = computed(() => {
  return `language-${props.language}`
})

const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(props.code)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy code:', err)
  }
}
</script>

<style scoped>
.code-block {
  @apply bg-gray-900 rounded-lg overflow-hidden;
}

.code-header {
  @apply flex items-center justify-between p-3 bg-gray-800 border-b border-gray-700;
}

.code-title {
  @apply text-gray-300 font-medium text-sm;
}

.copy-button {
  @apply px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 transition-colors;
}

.copy-button.copied {
  @apply bg-green-600;
}

.code-content {
  @apply p-4 overflow-x-auto;
}

.code-content pre {
  @apply text-gray-300 font-mono text-sm;
}

.code-content code {
  @apply text-gray-300;
}
</style>
