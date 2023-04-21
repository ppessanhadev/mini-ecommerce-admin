<script setup lang="ts">
  const auth = ref(false);
  const { data: products } = useApi('/api/v1/product', {
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
  <main v-if="auth">
    <h1>Página de produtos</h1>
    <pre>{{ JSON.stringify(products, null, 2) }}</pre>
  </main>
</template>
