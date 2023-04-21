<template>
  <article class="flex flex bg-stone-200 border border-zinc-300 w-auto">
    <figure>
      <div class="w-24 h-24 bg-red-500 rounded-full m-2" />
    </figure>

    <div class="flex flex-col justify-center">
      <h2 class="text-2xl text-zinc-700 font-bold">
        Product name
      </h2>
      <h4 class="text-zinc-500">
        <b>Valor:</b> {{ useCurrencyFormatter(79.90) }}
      </h4>
      <h4 class="text-zinc-500">
        <b>Estoque:</b> 25
      </h4>
    </div>

    <div class="flex flex-col justify-center sm:flex-row sm:self-center ml-auto mr-4 gap-2">
      <button class="w-10 h-10 bg-yellow-500 hover:bg-yellow-600 border-2 border-yellow-600 text-gray-200 hover:text-gray-300">
        <SVGPencil class="m-auto" />
      </button>
      <button class="w-10 h-10 bg-red-500 hover:bg-red-600 border-2 border-red-600 text-gray-200 hover:text-gray-300">
        <SVGTrash class="m-auto" />
      </button>
    </div>
  </article>
</template>
