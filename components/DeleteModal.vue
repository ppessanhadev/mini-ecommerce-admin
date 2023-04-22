<script setup lang="ts">
  import { Product } from '~/types/Product';

  const props = defineProps<{ close: () => void, product: Product, invalidate: () => Promise<void> }>();

  async function handleDelete() {
    const token = localStorage.getItem('token');
    if (!token) return navigateTo('/admin');

    props.close();

    await useApi('/api/v1/product', {
      method: 'DELETE',
      params: { id: props.product.id },
      headers: {
        authorization: `Bearer ${token}`
      }
    });

    props.invalidate();
  }

</script>

<template>
  <NuxtLayout name="background-modal">
    <section v-click-outside="close" class="relative w-auto p-6 bg-white rounded shadow-xl">
      <button class="absolute text-zinc-600 right-2 top-2" @click="close">
        <SVGClose />
      </button>

      <h1 class="text-2xl my-4">
        Tem certeza que deseja deletar "<b class="text-red-700">{{ product.name }}</b>"?
      </h1>

      <div class="flex justify-center gap-4">
        <button class="text-red-600 text-xl font-bold py-2 px-4 border-2 border-red-600 hover:bg-red-600 hover:text-white transition-all" @click="handleDelete">
          Sim
        </button>
        <button class="text-green-500 text-xl font-bold py-2 px-4 border-2 border-green-500 hover:bg-green-500 hover:text-white transition-all" @click="close">
          Não
        </button>
      </div>
    </section>
  </NuxtLayout>
</template>
