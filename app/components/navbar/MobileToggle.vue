<template>
  <button
    type="button"
    class="flex h-10 w-10 items-center justify-center rounded-md border border-slate-800 bg-slate-900 text-slate-100 transition hover:bg-slate-800"
    :aria-expanded="open"
    :aria-controls="ariaControls"
    @click="$emit('toggle')"
  >
    <span class="sr-only">Apri il menu</span>
    <svg
      v-if="!open"
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="1.5"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M4 7h16M4 12h16M4 17h16" />
    </svg>
    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="1.5"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M6 18L18 6" />
    </svg>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  open: boolean
  ariaControls?: string
}>()

defineEmits<{
  toggle: []
}>()
</script>
