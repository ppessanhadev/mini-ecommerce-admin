<script setup lang="ts">
  import { Product } from '~/types';

  const props = defineProps<{ close: () => void, product?: Product, invalidate: () => Promise<void> }>();
  const fields = ref({ name: '', price: '', stock: '', image: '' });
  const error = ref('');

  async function handleAction() {
    const token = localStorage.getItem('token');
    if (!token) return navigateTo('/admin');

    if (!fields.value.name || !fields.value.price || !fields.value.stock) {
      return error.value = 'Os campos "Nome", "Valor" e "Qtd" são obrigatorios';
    }

    await useApi('/api/v1/product', {
      method: props.product ? 'PATCH' : 'POST',
      params: { id: props.product?.id || null },
      body: {
        name: fields.value.name,
        price: Number(fields.value.price),
        stock: Number(fields.value.stock),
        image: fields.value.image
      },
      headers: {
        authorization: `Bearer ${token}`
      }
    });
    props.close();
    props.invalidate();
  }

  onMounted(() => {
    if (props.product) {
      fields.value.name = props.product.name;
      fields.value.price = props.product.price.toFixed(2);
      fields.value.stock = props.product.stock.toString();
      fields.value.image = props.product.image || '';
    }
  });
</script>

<template>
  <NuxtLayout name="background-modal">
    <form v-click-outside="close" class="relative w-[500px] p-6 bg-white rounded shadow-xl">
      <button type="button" class="absolute text-zinc-600 right-2 top-2" @click="close">
        <SVGClose />
      </button>

      <h1 class="text-3xl text-zinc-600 font-bold mb-4">
        {{ product ? 'Editar' : 'Criar novo' }} produto
      </h1>
      <WarningBox v-if="error" :error="error" />
      <Input id="product-name" v-model="fields.name" label="Nome" type="text" />
      <Input id="product-price" v-model="fields.price" label="Valor" class="mt-4" type="number" />
      <Input id="product-stock" v-model="fields.stock" label="Qtd" class="mt-4" type="number" />
      <Input id="product-image" v-model="fields.image" label="URL da imagem" class="my-4" type="text" />

      <button
        type="button"
        class="w-full block border-2 hover:text-white transition-all text-2xl font-bold p-2"
        :class="product ? `border-yellow-500 hover:bg-yellow-500 text-yellow-500` : `border-green-500 hover:bg-green-500 text-green-500`"
        @click="handleAction"
      >
        {{ product ? 'Editar' : 'Criar' }}
      </button>
    </form>
  </NuxtLayout>
</template>
