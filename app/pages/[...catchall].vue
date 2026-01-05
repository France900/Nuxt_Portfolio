<template>
  <div class="flex items-center justify-center bg-slate-950 py-12 text-slate-100">
    <div class="space-y-4 text-center">

      <!-- Messaggio e contatore della pagina di fallback -->
      <p class="text-sm uppercase tracking-[0.2em] text-slate-400">Pagina mancante</p>
      <h1 class="text-3xl font-semibold">Benvenuto nella pagina di fallback</h1>
      <p class="text-slate-300">
        Il contenuto che cerchi non esiste, probabilmente hai cliccato un link di esempio del menu.
      </p>
      <p class="text-sm text-slate-400">Questa fallback e apparsa {{ count }} volte su questo browser.</p>

      <!-- CTA principali: torna alla home o azzera il contatore -->
      <div class="flex flex-wrap items-center justify-center gap-3 pt-2">
        <NuxtLink to="/"
          class="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400">
          Torna alla home
        </NuxtLink>
        <button
          class="inline-flex items-center gap-2 rounded-md border border-slate-700 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-slate-600 hover:bg-slate-800/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500"
          type="button" @click="resetCounter">
          Azzera contatore
        </button>
      </div>

      <!-- GIF/video -->
      <video autoplay muted loop class="w-full md:max-w-[50%] md:mx-auto md:pt-4 rounded-3xl">
        <source src="/video/confused-travolta.mp4" type="video/mp4" />
      </video>

      <!-- GIF/video hidden -->
      <div class="space-y-2 pt-4">
        <button
          type="button"
          class="text-sm uppercase tracking-[0.2em] text-slate-800 transition hover:text-slate-200"
          @click="showEasterEgg = true"
        >
          Behind the scenes
        </button>
        <div v-if="showEasterEgg" class="space-y-2">
          <p class="text-sm font-semibold text-slate-200">"Me" working on this project during the weekends</p>
          <video autoplay muted loop class="w-full md:max-w-[50%] md:mx-auto rounded-3xl">
            <source src="/video/Allmighty.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

    </div>
  </div>

</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const count = ref(0)
const route = useRoute()
const STORAGE_KEY = 'fallbackVisitCount'
const showEasterEgg = ref(false)

const incrementCounter = () => {
  const saved = Number(localStorage.getItem(STORAGE_KEY))
  const next = Number.isFinite(saved) ? saved + 1 : 1
  count.value = next
  localStorage.setItem(STORAGE_KEY, String(next))
}

onMounted(incrementCounter)

watch(
  () => route.fullPath,
  () => {
    incrementCounter()
  }
)

function resetCounter() {
  count.value = 0
  localStorage.removeItem(STORAGE_KEY)
}
</script>
