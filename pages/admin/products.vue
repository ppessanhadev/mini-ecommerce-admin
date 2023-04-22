<script setup lang="ts">
  import { Product } from '~/types';

  useHead({ title: 'MiniEcommerce | Produtos' });
  const auth = ref(false);

  const { data: products, pending } = useApi<Product[]>('/api/v1/product', {
    server: auth.value,
  });

  onMounted(async () => {
    const token = localStorage.getItem('token');

    if (!token) {
      return navigateTo('/admin');
    }
    auth.value = true;
  });
</script>

<template>
  <main v-if="auth" class="w-auto">
    <section v-if="pending" class="flex w-full h-screen justify-center items-center">
      <Loading class="h-16 w-16" />
    </section>

    <section v-else class="flex flex-col m-auto mt-20 w-screen lg:w-[960px] gap-4">
      <CreateProduct />
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </section>
  </main>
</template>
