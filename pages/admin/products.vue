<script setup lang="ts">
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
      <ProductCard />
      <ProductCard />
    </section>
  </main>
</template>
