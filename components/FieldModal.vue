<script setup lang="ts">
  import { Product } from '~/types';

  const props = defineProps<{ close: () => void, product?: Product }>();
  const fields = ref({ name: '', price: '', stock: '', image: '' });

  onMounted(() => {
    if (props.product) {
      fields.value.name = props.product.name;
      fields.value.price = props.product.price.toString();
      fields.value.stock = props.product.stock.toString();
      fields.value.image = props.product.image || '';
    }
  });
</script>

<template>
  <NuxtLayout name="background-modal">
    <div v-click-outside="close" class="relative w-[500px] p-6 bg-white rounded shadow-xl">
      <button class="absolute text-zinc-600 right-2 top-2" @click="close">
        <SVGClose />
      </button>

      <h1 class="text-3xl text-zinc-600 font-bold">
        {{ product ? 'Editar' : 'Criar novo' }} produto
      </h1>
      <Input id="product-name" v-model="fields.name" label="Nome" class="mt-4" type="text" />
      <Input id="product-price" v-model="fields.price" label="Valor" class="mt-4" type="number" />
      <Input id="product-stock" v-model="fields.stock" label="Qtd" class="mt-4" type="number" />
      <Input id="product-image" v-model="fields.image" label="URL da imagem" class="my-4" type="text" />

      <button
        class="w-full block border-2 hover:text-white transition-all text-2xl font-bold p-2"
        :class="product ? `border-yellow-500 hover:bg-yellow-500 text-yellow-500` : `border-green-500 hover:bg-green-500 text-green-500`"
      >
        {{ product ? 'Editar' : 'Criar' }}
      </button>
    </div>
  </NuxtLayout>
</template>
