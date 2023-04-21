<template>
  <article class="flex flex bg-zinc-200 border border-zinc-300 w-auto">
    <figure>
      <div class="w-24 h-24 bg-red-500" />
    </figure>

    <div class="flex flex-col justify-center ml-2">
      <h2 class="text-2xl text-zinc-800 font-bold">
        Product name
      </h2>
      <h4 class="text-zinc-600">
        <b>Valor:</b> {{ useCurrencyFormatter(79.90) }}
      </h4>
      <h4 class="text-zinc-600">
        <b>Estoque:</b> 25
      </h4>
    </div>

    <div class="flex flex-col justify-center sm:flex-row sm:self-center ml-auto mr-4 gap-2">
      <button class="w-10 h-10 bg-red-500">
        b
      </button>
      <button class="w-10 h-10 bg-red-500">
        b2
      </button>
    </div>
  </article>
</template>
