<script setup lang="ts">
  import { Product } from '~/types';

  defineProps<{ product: Product, invalidate: () => Promise<void> }>();

  const modals = ref({ edit: false, delete: false });
  const handleModal = (kind: 'edit' | 'delete') => {
    modals.value[kind] = !modals.value[kind];
  };
</script>

<template>
  <article class="flex flex bg-stone-200 border border-zinc-300 w-auto">
    <figure>
      <div class="w-24 h-24 bg-red-500 rounded-full m-2" />
    </figure>

    <div class="flex flex-col justify-center">
      <h2 class="text-2xl text-zinc-700 font-bold">
        {{ product.name }}
      </h2>
      <h4 class="text-zinc-500">
        <b>Valor:</b> {{ useCurrencyFormatter(product.price) }}
      </h4>
      <h4 class="text-zinc-500">
        <b>Estoque:</b> {{ product.stock }}
      </h4>
    </div>

    <div class="flex flex-col justify-center sm:flex-row sm:self-center ml-auto mr-4 gap-2">
      <button
        class="w-10 h-10 bg-yellow-500 hover:bg-yellow-600 border-2 border-yellow-600 text-gray-200 hover:text-gray-300"
        @click="() => handleModal('edit')"
      >
        <SVGPencil class="m-auto" />
      </button>
      <button
        class="w-10 h-10 bg-red-500 hover:bg-red-600 border-2 border-red-600 text-gray-200 hover:text-gray-300"
        @click="() => handleModal('delete')"
      >
        <SVGTrash class="m-auto" />
      </button>
    </div>
  </article>

  <FieldModal v-if="modals.edit" :close="() => handleModal('edit')" :invalidate="invalidate" :product="product" />
  <DeleteModal v-if="modals.delete" :close="() => handleModal('delete')" :invalidate="invalidate" :name="product.name" />
</template>
