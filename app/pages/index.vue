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
      <!-- Intestazione di sezione con badge e descrizione -->
      <div class="flex items-center gap-3">
        <div class="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-emerald-300 font-semibold">
          Dev
        </div>
        <div>
          <p class="text-sm uppercase tracking-wide text-slate-400">Tecnologie usate</p>
          <h3 class="text-xl font-semibold text-white">Stack e come lo sto applicando qui</h3>
        </div>
      </div>
      <!-- Griglia di card: tecnologia + note di utilizzo -->
      <div class="grid gap-4 md:grid-cols-2">
        <!-- Card: Nuxt -->
        <div class="space-y-2 rounded-xl border border-slate-800/80 bg-slate-900/60 p-4">
          <div class="flex items-center gap-2">
            <div class="flex h-9 w-9 items-center justify-center rounded-md bg-emerald-900/40 text-emerald-300 font-bold">N</div>
            <h4 class="text-lg font-semibold text-white">Nuxt</h4>
          </div>
          <p class="text-slate-300">SSG/SSR, routing file-based e componenti auto-registrati. Layout puliti e ottimizzazioni out-of-the-box.</p>
        </div>
        <!-- Card: Tailwind -->
        <div class="space-y-2 rounded-xl border border-slate-800/80 bg-slate-900/60 p-4">
          <div class="flex items-center gap-2">
            <div class="flex h-9 w-9 items-center justify-center rounded-md bg-sky-900/40 text-sky-300 font-bold">TW</div>
            <h4 class="text-lg font-semibold text-white">Tailwind</h4>
          </div>
          <p class="text-slate-300">Utility-first per tipografia, layout e stati. Dark e light mode previsti (switcher in arrivo) con token condivisi.</p>
        </div>
        <!-- Card: i18n -->
        <div class="space-y-2 rounded-xl border border-slate-800/80 bg-slate-900/60 p-4">
          <div class="flex h-9 w-9 items-center justify-center rounded-md bg-indigo-900/40 text-indigo-300 font-bold">i18n</div>
          <h4 class="text-lg font-semibold text-white">i18n</h4>
          <p class="text-slate-300">Localizzazione pronta: chiavi testuali centralizzate e switch di lingua che potremo attivare sulle pagine principali.</p>
        </div>
        <!-- Card: EmailJS vs n8n (scelta per form) -->
        <div class="space-y-2 rounded-xl border border-slate-800/80 bg-slate-900/60 p-4">
          <div class="flex h-9 w-9 items-center justify-center rounded-md bg-orange-900/40 text-orange-300 font-bold">Mail</div>
          <h4 class="text-lg font-semibold text-white">EmailJS vs n8n</h4>
          <p class="text-slate-300">Valutazione per invio form: EmailJS per rapidita client-side, n8n per flussi piu robusti (log, retry, webhooks).</p>
        </div>
        <!-- Card: Netlify -->
        <div class="space-y-2 rounded-xl border border-slate-800/80 bg-slate-900/60 p-4">
          <div class="flex h-9 w-9 items-center justify-center rounded-md bg-lime-900/40 text-lime-300 font-bold">NL</div>
          <h4 class="text-lg font-semibold text-white">Netlify</h4>
          <p class="text-slate-300">Hosting JAMstack con deploy continui, redirect gestiti e edge functions per futuri endpoint leggeri.</p>
        </div>
        <!-- Card: Codex -->
        <div class="space-y-2 rounded-xl border border-slate-800/80 bg-slate-900/60 p-4">
          <div class="flex h-9 w-9 items-center justify-center rounded-md bg-purple-900/40 text-purple-300 font-bold">CX</div>
          <h4 class="text-lg font-semibold text-white">Codex</h4>
          <p class="text-slate-300">Assistente di sviluppo per scaffolding, refactoring rapido e documentazione inline mentre evolvo il progetto.</p>
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
            <div class="flex h-9 w-9 items-center justify-center rounded-md bg-amber-900/40 text-amber-300 font-bold">CU</div>
            <h4 class="text-lg font-semibold text-white">ClickUp</h4>
          </div>
          <p class="text-slate-300">Usato come PM per startup: roadmap, backlog grooming, automazioni per ticket e monitoraggio dei KPI di delivery.</p>
        </div>
        <!-- Card: Figma -->
        <div class="space-y-2 rounded-xl border border-slate-800/80 bg-slate-900/60 p-4">
          <div class="flex items-center gap-2">
            <div class="flex h-9 w-9 items-center justify-center rounded-md bg-pink-900/40 text-pink-300 font-bold">Fg</div>
            <h4 class="text-lg font-semibold text-white">Figma</h4>
          </div>
          <p class="text-slate-300">Wireframe e handoff: traccio layout o seguo i design ricevuti, importo componenti e li traduco in UI aderenti.</p>
        </div>
      </div>
    </div>
  </div>
</template>
