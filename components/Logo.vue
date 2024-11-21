<script setup>
// export default {
//   data() {
//     return {
//       // Assuming you have a way to determine the current theme
//       currentTheme: 'light', // Example default theme
//     };
//   },
//   computed: {
//     logoSrc() {
//       return this.currentTheme === 'dark' ? '/logo-dark.png' : '/logo-light.png';
//     },
//   },
// };
const logoSrc = '/logo.png'
</script>

<template>
  <div class="border-red-500">
    <!-- <NuxtImg class="filter invert" width="100" height="100" :src="logoSrc" alt="AOForge Logo" /> -->
  </div>
</template>

<style scoped>
.filter {
  filter: invert(1);
}
.border-red-500 {
  border: 2px solid red;
}
</style>
