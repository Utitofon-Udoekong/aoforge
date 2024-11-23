<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')
const logoSrc = computed(() => isDark.value ? '/logo-dark.png' : '/logo-light.png')

</script>

<template>
  <NuxtImg :src="logoSrc" height="100"  alt="AOForge Logo" />
</template>

<style scoped>
.filter {
  filter: invert(1);
}
.border-red-500 {
  border: 2px solid red;
}
</style>
