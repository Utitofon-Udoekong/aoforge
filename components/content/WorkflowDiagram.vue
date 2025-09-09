<template>
  <div class="workflow-diagram">
    <h3 class="diagram-title">Development Workflow</h3>
    <div class="diagram-content">
      <div class="workflow-steps">
        <div 
          v-for="(step, index) in steps" 
          :key="index"
          class="workflow-step"
          :class="{ 'active': currentStep === index }"
        >
          <div class="step-number">{{ index + 1 }}</div>
          <div class="step-content">
            <h4 class="step-title">{{ step.title }}</h4>
            <p class="step-description">{{ step.description }}</p>
            <div class="step-commands" v-if="step.commands">
              <code 
                v-for="command in step.commands" 
                :key="command"
                class="step-command"
              >
                {{ command }}
              </code>
            </div>
          </div>
        </div>
      </div>
      <div class="workflow-arrows">
        <div 
          v-for="index in steps.length - 1" 
          :key="index"
          class="arrow"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  steps: {
    type: Array,
    required: true
  },
  autoPlay: {
    type: Boolean,
    default: false
  }
})

const currentStep = ref(0)

onMounted(() => {
  if (props.autoPlay) {
    const interval = setInterval(() => {
      currentStep.value = (currentStep.value + 1) % props.steps.length
    }, 3000)
    
    return () => clearInterval(interval)
  }
})
</script>

<style scoped>
.workflow-diagram {
  @apply bg-white rounded-lg shadow-md p-6;
}

.diagram-title {
  @apply text-xl font-semibold text-gray-900 mb-6;
}

.diagram-content {
  @apply relative;
}

.workflow-steps {
  @apply space-y-6;
}

.workflow-step {
  @apply flex items-start space-x-4 p-4 rounded-lg border-2 border-transparent transition-all;
}

.workflow-step.active {
  @apply border-blue-500 bg-blue-50;
}

.step-number {
  @apply w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0;
}

.workflow-step.active .step-number {
  @apply bg-blue-700;
}

.step-content {
  @apply flex-1;
}

.step-title {
  @apply text-lg font-semibold text-gray-900 mb-2;
}

.step-description {
  @apply text-gray-600 mb-3;
}

.step-commands {
  @apply space-y-1;
}

.step-command {
  @apply block bg-gray-900 text-green-400 font-mono text-sm px-3 py-2 rounded;
}

.workflow-arrows {
  @apply absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300;
}

.arrow {
  @apply absolute w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-300;
  transform: translateX(-50%);
}

.arrow:nth-child(1) { top: 20%; }
.arrow:nth-child(2) { top: 40%; }
.arrow:nth-child(3) { top: 60%; }
.arrow:nth-child(4) { top: 80%; }
</style>
