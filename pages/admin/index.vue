<script setup lang="ts">
  import { LoginFailedResponse, LoginSuccessResponse } from '~/types';
  useHead({ title: 'ME Admin | Login' });

  const fields = ref({ username: '', password: '' });
  const loading = ref(false);
  const errorMessage = ref('');

  async function login() {
    if (!fields.value.username || !fields.value.password) {
      return errorMessage.value = 'Preencher campos Usuário/senha';
    }

    loading.value = true;
    const { data, error } = await useApi<LoginSuccessResponse, LoginFailedResponse>('/api/v1/user', {
      method: 'POST' as 'GET',
      body: { ...fields.value },
    });
    loading.value = false;

    if (error.value) {
      return errorMessage.value = errorTreat(error.value?.data.message);
    }

    localStorage.setItem('token', data.value?.token || '');
    navigateTo('/admin/products');
  }
</script>

<template>
  <main class="w-full h-screen flex justify-center content-center">
    <form class="justify-center m-auto bg-white rounded-lg p-4 w-96 border shadow-md">
      <WarningBox v-if="errorMessage" :error="errorMessage" />

      <Input id="user" v-model="fields.username" label="Usuário" type="text" placeholder="User" />
      <Input id="password" v-model="fields.password" label="Senha" type="password" placeholder="Password" class="my-6" />

      <button
        type="button"
        class="w-full block border-2 border-green-500 hover:bg-green-500 hover:text-white transition-all text-green-500 text-2xl font-bold p-2 disabled:opacity-70 disabled:border-yellow-500 disabled:text-yellow-500 disabled:hover:bg-white"
        :disabled="loading"
        @click="login"
      >
        <Loading v-if="loading" />
        <p v-else class="p-1">
          Entrar
        </p>
      </button>
    </form>
  </main>
</template>
