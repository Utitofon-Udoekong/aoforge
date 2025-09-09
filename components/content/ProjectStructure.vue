<template>
  <div class="project-structure">
    <h3 class="structure-title">Generated Project Structure</h3>
    <div class="structure-content">
      <pre class="structure-tree">{{ structure }}</pre>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  framework: {
    type: String,
    default: 'nextjs'
  }
})

const structure = computed(() => {
  if (props.framework === 'nuxtjs') {
    return `my-app/
├── README.md
├── package.json
├── ao.config.yml
├── tsconfig.json
├── nuxt.config.ts
├── tailwind.config.js
├── app.vue
├── ao/
│   └── counter.lua
└── public/
    └── favicon.ico`
  } else {
    return `my-app/
├── README.md
├── package.json
├── ao.config.yml
├── tsconfig.json
├── next.config.js
├── tailwind.config.js
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   └── ao/
│       └── counter.lua
└── public/
    └── favicon.ico`
  }
})
</script>

<style scoped>
.project-structure {
  @apply bg-gray-50 border border-gray-200 rounded-lg p-6;
}

.structure-title {
  @apply text-lg font-semibold text-gray-900 mb-4;
}

.structure-content {
  @apply bg-gray-900 rounded p-4 overflow-x-auto;
}

.structure-tree {
  @apply text-green-400 font-mono text-sm whitespace-pre;
}
</style>
