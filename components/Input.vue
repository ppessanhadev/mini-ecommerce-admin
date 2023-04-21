<script setup lang="ts">
  const props = defineProps<{
    id: string;
    label: string;
    type: 'text' | 'password' | 'number';
    modelValue: string;
    class?: string;
    placeholder?: string;
  }>();

  defineEmits(['update:modelValue']);
</script>

<template>
  <label :for="props.id" :class="`flex flex-col text-zinc-500 font-bold ${props.class}`">
    {{ props.label }}
    <input
      :id="id"
      :type="type"
      :placeholder="props.placeholder"
      :value="modelValue"
      class="bg-gray-100 p-2 border font-normal"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    >
  </label>
</template>
