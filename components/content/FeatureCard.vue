<template>
  <div class="feature-card">
    <div class="feature-icon">
      <Icon :name="icon" class="w-8 h-8" />
    </div>
    <div class="feature-content">
      <h3 class="feature-title">{{ title }}</h3>
      <p class="feature-description">{{ description }}</p>
      <div class="feature-actions" v-if="actions && actions.length">
        <a 
          v-for="action in actions" 
          :key="action.label"
          :href="action.href"
          class="feature-action"
        >
          {{ action.label }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  actions: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped>
.feature-card {
  @apply bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow;
}

.feature-icon {
  @apply text-blue-600 mb-4;
}

.feature-content {
  @apply space-y-3;
}

.feature-title {
  @apply text-xl font-semibold text-gray-900;
}

.feature-description {
  @apply text-gray-600;
}

.feature-actions {
  @apply flex flex-wrap gap-2 pt-2;
}

.feature-action {
  @apply text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors;
}
</style>
