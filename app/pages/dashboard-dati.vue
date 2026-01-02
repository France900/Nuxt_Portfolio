<script setup>
const filters = [
  { label: 'Periodo', value: 'Ultimi 30 giorni' },
  { label: 'Categoria', value: 'Tutte' },
  { label: 'Stato', value: 'Attivo' }
]

const chartData = [
  { label: 'Lun', value: 32 },
  { label: 'Mar', value: 45 },
  { label: 'Mer', value: 28 },
  { label: 'Gio', value: 52 },
  { label: 'Ven', value: 47 },
  { label: 'Sab', value: 34 },
  { label: 'Dom', value: 22 }
]

const apiCards = [
  {
    title: 'GET /api/metrics',
    description: 'Restituisce i KPI aggregati per periodo.',
    status: '200 OK'
  },
  {
    title: 'POST /api/filters',
    description: 'Applica filtri avanzati e restituisce i dati filtrati.',
    status: '201 Created'
  },
  {
    title: 'GET /api/exports',
    description: 'Avvia l’esportazione CSV/JSON dei risultati correnti.',
    status: '202 Accepted'
  }
]
</script>

<template>
  <section class="space-y-8">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-3xl font-semibold tracking-tight text-white">Dashboard dati</h1>
        <p class="text-slate-300">Spazio per visualizzazioni e metriche.</p>
      </div>
      <button
        type="button"
        class="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-500"
      >
        Aggiorna dati
      </button>
    </div>

    <div class="grid gap-4 md:grid-cols-3">
      <div
        v-for="filter in filters"
        :key="filter.label"
        class="rounded-xl border border-slate-800 bg-slate-900/70 p-4 shadow"
      >
        <p class="text-sm text-slate-400">{{ filter.label }}</p>
        <p class="text-lg font-semibold text-white">{{ filter.value }}</p>
        <div class="mt-3 flex gap-2 text-sm">
          <button class="rounded-md bg-slate-800 px-3 py-1 text-slate-200 hover:bg-slate-700">Modifica</button>
          <button class="rounded-md border border-slate-700 px-3 py-1 text-slate-300 hover:border-slate-500">
            Reset
          </button>
        </div>
      </div>
    </div>

    <div class="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow">
      <div class="flex items-center justify-between">
        <div>
          <h3 class="text-xl font-semibold text-white">Grafico (placeholder)</h3>
          <p class="text-slate-400">Esempio di barre animate (Chart.js/ApexCharts integrabili qui).</p>
        </div>
        <div class="flex gap-2 text-sm">
          <button class="rounded-md bg-slate-800 px-3 py-1 text-slate-200 hover:bg-slate-700">Linea</button>
          <button class="rounded-md bg-blue-600 px-3 py-1 text-white hover:bg-blue-500">Barre</button>
          <button class="rounded-md bg-slate-800 px-3 py-1 text-slate-200 hover:bg-slate-700">Torta</button>
        </div>
      </div>
      <div class="grid grid-cols-7 gap-3">
        <div
          v-for="point in chartData"
          :key="point.label"
          class="flex flex-col items-center gap-2"
        >
          <div class="flex h-40 w-full items-end rounded-md bg-slate-800/70 p-1">
            <div
              class="w-full rounded-sm bg-gradient-to-t from-blue-600 to-cyan-400 transition-all"
              :style="{ height: `${point.value}%` }"
            />
          </div>
          <span class="text-xs text-slate-400">{{ point.label }}</span>
        </div>
      </div>
    </div>

    <div class="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow">
      <div class="flex items-center justify-between">
        <div>
          <h3 class="text-xl font-semibold text-white">API</h3>
          <p class="text-slate-400">Esempi di endpoint Nitro per alimentare dashboard e filtri.</p>
        </div>
        <button class="rounded-md bg-slate-800 px-3 py-1 text-sm text-slate-200 hover:bg-slate-700">
          Test endpoints
        </button>
      </div>
      <div class="grid gap-4 md:grid-cols-3">
        <div
          v-for="api in apiCards"
          :key="api.title"
          class="rounded-xl border border-slate-800 bg-slate-900/60 p-4"
        >
          <p class="text-sm text-blue-400">{{ api.status }}</p>
          <h4 class="mt-1 text-lg font-semibold text-white">{{ api.title }}</h4>
          <p class="mt-2 text-sm text-slate-300">{{ api.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
