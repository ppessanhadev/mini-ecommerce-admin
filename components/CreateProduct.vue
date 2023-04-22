<script setup lang="ts">
  const showCreation = ref(false);

  const handleModal = () =>{
    showCreation.value = !showCreation.value;
  };
</script>

<template>
  <button class="w-full sm:w-auto self-end text-white font-bold py-2 px-4 border-2 border-green-500 bg-green-400 hover:bg-green-500 transition-all" @click="handleModal">
    Novo Produto
  </button>
  <FieldModal v-if="showCreation" :close="handleModal" />
</template>
