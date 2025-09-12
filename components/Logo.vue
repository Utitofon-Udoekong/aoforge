<script setup lang="ts">
const colorMode = useColorMode()
</script>

<template>
  <img v-if="colorMode.value === 'light'" src="/logo-light.png" height="100"  alt="AOForge Logo" />
  <img v-else src="/logo-dark.png" height="100"  alt="AOForge Logo" />
</template>

