<script setup lang="ts">
  defineProps<{ error?: string }>();
</script>

<template>
  <p class="bg-red-500 text-white text-md text-center rounded p-3 border-2 border-red-600 mb-4">
    {{ error }}
  </p>
</template>
