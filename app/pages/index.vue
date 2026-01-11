<template>
  <div class="space-y-12">

    <Hero />

    <!-- Link alla repository -->
    <div class="space-y-1 !mt-3">
      <p class="text-slate-300">
        Per esplorare la Repository GitHub di questo sito sequi pure questo
        <NuxtLink to="https://github.com/France900/Nuxt_Portfolio" class="text-blue-400 underline hover:text-blue-300">
          link
        </NuxtLink>.
      </p>
      <p class="text-sm text-slate-500">Questo sito è volutamente non indicizzato per privacy.</p>
    </div>

    <!-- Intro -->
    <section class="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 lg:p-10">
      <div class="flex flex-col gap-6 lg:flex-row lg:items-start">
        <div class="shrink-0">
          <img src="/avatar_placeholder.jpg" alt="Avatar placeholder"
            class="h-40 w-40 rounded-2xl object-cover ring-1 ring-slate-800" />
        </div>
        <div class="space-y-4 text-slate-300">
          <p>
            Ciao, mi chiamo Francesco e lavoro nell’ambito IT da ormai più di 5 anni, anche se in ruoli diversi e
            occupandomi di attività eterogenee, dalla parte tecnica allo sviluppo di progetti personali.
          </p>
          <p>
            Questo sito raccoglie esperimenti, studi e lavori legati allo sviluppo web, usati come spazio di crescita,
            documentazione e per fornire un esempio delle mie competenze pratiche in ambito web.
          </p>
          <p>
            Se vuoi un contesto più completo sul mio percorso e sulle mie disponibilità, trovi tutto nella sezione
            <NuxtLink to="/about" class="text-blue-400 underline hover:text-blue-300">About</NuxtLink>.
          </p>
        </div>
      </div>
    </section>

    <!-- Sezione Dev: stack tecnico e motivazioni d'uso -->
    <div class="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
      <!-- Intestazione e descrizione -->
      <div class="flex items-center gap-3">
        <div
          class="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-emerald-300 font-semibold">
          Dev
        </div>
        <div>
          <p class="text-sm uppercase tracking-wide text-slate-400">Tecnologie usate</p>
          <h3 class="text-xl font-semibold text-white">
            Stack e come lo sto applicando qui; scopri di piu in 
            <NuxtLink to="/whats-here" class="text-blue-400 underline hover:text-blue-300"> whats here</NuxtLink>
          </h3>
        </div>
      </div>

       <!-- Griglia di card: tecnologia + note di utilizzo -->
      <div class="grid gap-4 md:grid-cols-2">
        <div v-for="(item, index) in stackItems" :key="index"
          class="space-y-2 rounded-xl border border-slate-800/80 bg-slate-900/60 p-4">
          <div class="flex items-center gap-2">
            <div class="flex h-9 w-9 items-center justify-center rounded-md font-bold" :class="item.classes">
              {{ item.badge }}
            </div>
            <h4 class="text-lg font-semibold text-white">
              {{ item.title }}
            </h4>
          </div>
          <p class="text-slate-300">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>

    <!-- Sezione Ops: tool operativi/di supporto -->
    <div class="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
      <!-- Intestazione di sezione con badge e descrizione -->
      <div class="flex items-center gap-3">
        <div class="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-amber-300 font-semibold">
          Ops
        </div>
        <div>
          <p class="text-sm uppercase tracking-wide text-slate-400">Altre competenze</p>
          <h3 class="text-xl font-semibold text-white">Strumenti di supporto che uso spesso</h3>
        </div>
      </div>
      <!-- Griglia di card con strumenti operativi -->
      <div class="grid gap-4 md:grid-cols-2">
        <!-- Card: ClickUp -->
        <div class="space-y-2 rounded-xl border border-slate-800/80 bg-slate-900/60 p-4">
          <div class="flex items-center gap-2">
            <div class="flex h-9 w-9 items-center justify-center rounded-md bg-amber-900/40 text-amber-300 font-bold">CU
            </div>
            <h4 class="text-lg font-semibold text-white">ClickUp</h4>
          </div>
          <p class="text-slate-300">Usato come PM per startup: roadmap, backlog grooming, automazioni per ticket e
            monitoraggio dei KPI di delivery.</p>
        </div>
        <!-- Card: Figma -->
        <div class="space-y-2 rounded-xl border border-slate-800/80 bg-slate-900/60 p-4">
          <div class="flex items-center gap-2">
            <div class="flex h-9 w-9 items-center justify-center rounded-md bg-pink-900/40 text-pink-300 font-bold">Fg
            </div>
            <h4 class="text-lg font-semibold text-white">Figma</h4>
          </div>
          <p class="text-slate-300">Wireframe e handoff: traccio layout o seguo i design ricevuti, importo componenti e
            li traduco in UI aderenti.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const stackItems = [
  {
    badge: 'N',
    title: 'Nuxt',
    description:
      'Struttura intuitiva del progetto e navigazione fluida senza ricaricare la pagina: rende lo sviluppo più semplice, ordinato e naturale anche su progetti complessi.',
    classes: 'bg-emerald-900/40 text-emerald-300',
  },
  {
    badge: 'TW',
    title: 'Tailwind',
    description:
      'Sistema di stile snello, rapido e uniforme: usa classi leggibili e chiare soprattutto uniformando il modo di lavorare sullo stile tra più persone nello stesso progetto.',
    classes: 'bg-sky-900/40 text-sky-300',
  },
  {
    badge: 'i18n',
    title: 'i18n',
    description:
      'Gestione centralizzata delle lingue: testi organizzati in un unico punto e possibilità di attivare facilmente il cambio lingua sulle pagine principali.',
    classes: 'bg-indigo-900/40 text-indigo-300',
  },
  {
    badge: 'Mail',
    title: 'EmailJS vs n8n',
    description:
      'n8n è più potente e flessibile ma richiede una gestione della struttura, mentre EmailJS è gratuito e integrabile direttamente via JavaScript con la propria email.',
    classes: 'bg-orange-900/40 text-orange-300',
  },
  {
    badge: 'NL',
    title: 'Netlify',
    description:
      'Pubblicazione semplice del sito: collegamento a GitHub, deploy automatico a ogni aggiornamento e hosting gratuito per progetti frontend',
    classes: 'bg-lime-900/40 text-lime-300',
  },
  {
    badge: 'CX',
    title: 'Codex',
    description:
      'Assistente di sviluppo che, se usato con controllo sul codice, permette di aumentare la velocità di programmazione supportando scaffolding, refactoring e organizzazione del progetto.',
    classes: 'bg-purple-900/40 text-purple-300',
  },
]
</script>