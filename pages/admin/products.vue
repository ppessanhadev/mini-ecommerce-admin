<script setup lang="ts">
  useHead({ title: 'MiniEcommerce | Produtos' });
  const auth = ref(false);
  // const { data: products } = useApi('/api/v1/product', {
  //   server: auth.value,
  // });

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
    <section class="flex flex-col m-auto mt-20 w-screen lg:w-[960px] gap-4">
      <button class="w-full sm:w-auto self-end text-white font-bold py-2 px-4 border-2 border-green-500 bg-green-400 hover:bg-green-500 transition-all">
        Novo Produto
      </button>
      <ProductCard />
      <ProductCard />
    </section>
  </main>
</template>
