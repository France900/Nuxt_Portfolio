<template>
  <button
    type="button"
    class="flex h-10 w-10 items-center justify-center rounded-md border border-slate-800 bg-slate-900 text-slate-100 transition hover:bg-slate-800"
    :aria-label="ariaLabel"
    @click="onToggle"
  >
    <span class="sr-only">{{ ariaLabel }}</span>
    <span
      class="pointer-events-none inline-grid h-4 w-6 place-items-center transition-transform duration-300 ease-out"
      :class="{ 'rotate-180': !isItalian }"
    >
      <img
        class="h-[14px] w-[22px] rounded-sm object-cover shadow-[0_0_0_1px_rgba(255,255,255,0.15)]"
        :src="flagSrc"
        :alt="flagAlt"
      >
    </span>
  </button>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const emit = defineEmits(['toggle'])

const isItalian = ref(true)

onMounted(() => {
  const lang = (navigator.languages && navigator.languages[0]) || navigator.language || ''
  isItalian.value = lang.toLowerCase().startsWith('it')
})

const flagSrc = computed(() => (isItalian.value ? '/Italy.svg' : '/UK.svg'))
const flagAlt = computed(() => (isItalian.value ? 'Bandiera italiana' : 'Bandiera inglese'))
const ariaLabel = computed(() =>
  isItalian.value ? 'Mostra bandiera inglese' : 'Mostra bandiera italiana'
)

const onToggle = () => {
  isItalian.value = !isItalian.value
  emit('toggle')
}
</script>
