<script setup lang="ts">
  defineProps<{ close: () => void, name: string }>();
</script>

<template>
  <NuxtLayout name="background-modal">
    <section v-click-outside="close" class="relative w-auto p-6 bg-white rounded shadow-xl">
      <button class="absolute text-zinc-600 right-2 top-2" @click="close">
        <SVGClose />
      </button>

      <h1 class="text-2xl my-4">
        Tem certeza que deseja deletar "<b class="text-red-700">{{ name }}</b>"?
      </h1>

      <div class="flex justify-center gap-4">
        <button class="text-red-600 text-xl font-bold py-2 px-4 border-2 border-red-600 hover:bg-red-600 hover:text-white transition-all">
          Sim
        </button>
        <button class="text-green-500 text-xl font-bold py-2 px-4 border-2 border-green-500 hover:bg-green-500 hover:text-white transition-all" @click="close">
          Não
        </button>
      </div>
    </section>
  </NuxtLayout>
</template>
