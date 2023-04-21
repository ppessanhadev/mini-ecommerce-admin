<script setup lang="ts">
  const fields = ref({ user: '', password: '' });

  function mostrar() {
    console.log(fields.value);
  }
</script>

<template>
  <Head>
    <title>ME | Login</title>
  </Head>

  <main class="w-full h-screen bg-gray-100 flex justify-center content-center">
    <form class="m-auto bg-white rounded-lg p-4 w-96 border shadow-md">
      <Input id="user" v-model="fields.user" label="Usuário" type="text" placeholder="User" />
      <Input id="password" v-model="fields.password" label="Senha" type="password" placeholder="Password" class="my-4" />

      <button
        type="button"
        class="w-full block border-2 border-green-500 hover:bg-green-500 hover:text-white transition-all text-green-500 text-2xl font-bold p-2"
        @click="mostrar"
      >
        Entrar
      </button>
    </form>
  </main>
</template>
