<template>
  <section
    class="relative cursor-pointer select-none text-slate-100"
    @mouseenter="open = true"
    @mouseleave="open = false"
  >
    <span
      class="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition hover:bg-slate-800/80"
      :class="isActive ? 'bg-blue-600 text-white' : ''"
    >
      {{ props.title }}
    </span>
    <div
      v-show="open"
      class="absolute left-0 top-full z-20 flex min-w-[180px] w-[80vw] flex-col gap-1 rounded-lg border border-slate-800 bg-slate-800/95 p-2 shadow-xl backdrop-blur md:w-auto md:bg-slate-900/90"
    >
      <NuxtLink
        v-for="(item, index) in items"
        :key="index"
        :to="item.to"
        class="rounded-md px-3 py-2 text-sm text-slate-100 transition hover:bg-slate-700/80 aria-[current=page]:bg-blue-600"
        @click="handleSelect"
      >
        {{ item.label }}
      </NuxtLink>
    </div>
  </section>
</template>

<!-- Script Code //*////////////////////////////////////////*//*////////////////////////////////////////*//*////////////////////////////////////////*/ -->

<script setup>
import { computed, ref } from 'vue'
import { useRoute } from '#imports'
const emit = defineEmits(['select'])

const open = ref(false)

// Props
const props = defineProps({
  title: {
    type: String,
    default: 'Undefined' // Valore di default se non viene passato title dal padre
  },
  items: {
    type: Array,
    required: true // Deve essere passato dal padre
  }
})

const route = useRoute()
// Highlight the dropdown trigger when any child link matches the active route
const isActive = computed(() => props.items?.some((item) => route.path.startsWith(item.to)))

// Close dropdown immediately after selecting a link
const handleSelect = () => {
  open.value = false
  emit('select')
}
</script>
