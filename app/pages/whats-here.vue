<template>
  <section class="space-y-8">
    <MiniHero title="Whats here" subtitle="Panoramica di cosa puoi trovare qui" />

    <div class="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
      <div class="flex items-center gap-3">
        <div class="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-sky-300 font-semibold">
          UI
        </div>
        <div>
          <p class="text-sm uppercase tracking-wide text-slate-400">Standard elements</p>
          <h3 class="text-xl font-semibold text-white">Blocchi riutilizzabili che trovi in homepage</h3>
        </div>
      </div>
      <div class="grid gap-4 md:grid-cols-2">
        <div class="space-y-2 rounded-xl border border-slate-800/80 bg-slate-900/60 p-4">
          <div class="flex items-center gap-2">
            <span class="text-lg">🎯</span>
            <h4 class="text-lg font-semibold text-white">Jumbo animato</h4>
          </div>
          <p class="text-slate-300">
            Hero con layering di sfumature e immagini, animazione di ingresso morbida e call-to-action ben evidenziata.
            Pensato per essere riutilizzabile cambiando copy, pulsanti e asset.
          </p>
        </div>
        <div class="space-y-2 rounded-xl border border-slate-800/80 bg-slate-900/60 p-4">
          <div class="flex items-center gap-2">
            <span class="text-lg">🧭</span>
            <h4 class="text-lg font-semibold text-white">Navbar parametrizzata</h4>
          </div>
          <p class="text-slate-300">
            Menu principale con logo e voci configurabili via props, burger menu animato su mobile e gestione stati attivi.
            Pensata per supportare temi e traduzioni.
          </p>
        </div>
      </div>
    </div>

    <div class="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
      <div class="flex items-center gap-3">
        <div class="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-emerald-300 font-semibold">
          Dev
        </div>
        <div>
          <p class="text-sm uppercase tracking-wide text-slate-400">Tecnologie usate</p>
          <h3 class="text-xl font-semibold text-white">Stack e come lo sto applicando qui</h3>
        </div>
      </div>
      <div class="grid gap-4 md:grid-cols-2">
        <div class="space-y-2 rounded-xl border border-slate-800/80 bg-slate-900/60 p-4">
          <div class="flex items-center gap-2">
            <div class="flex h-9 w-9 items-center justify-center rounded-md bg-emerald-900/40 text-emerald-300 font-bold">N</div>
            <h4 class="text-lg font-semibold text-white">Nuxt</h4>
          </div>
          <p class="text-slate-300">SSG/SSR, routing file-based e componenti auto-registrati. Layout puliti e ottimizzazioni out-of-the-box.</p>
        </div>
        <div class="space-y-2 rounded-xl border border-slate-800/80 bg-slate-900/60 p-4">
          <div class="flex items-center gap-2">
            <div class="flex h-9 w-9 items-center justify-center rounded-md bg-sky-900/40 text-sky-300 font-bold">TW</div>
            <h4 class="text-lg font-semibold text-white">Tailwind</h4>
          </div>
          <p class="text-slate-300">Utility-first per tipografia, layout e stati. Dark e light mode previsti (switcher in arrivo) con token condivisi.</p>
        </div>
        <div class="space-y-2 rounded-xl border border-slate-800/80 bg-slate-900/60 p-4">
          <div class="flex h-9 w-9 items-center justify-center rounded-md bg-indigo-900/40 text-indigo-300 font-bold">i18n</div>
          <h4 class="text-lg font-semibold text-white">i18n</h4>
          <p class="text-slate-300">Localizzazione pronta: chiavi testuali centralizzate e switch di lingua che potremo attivare sulle pagine principali.</p>
        </div>
        <div class="space-y-2 rounded-xl border border-slate-800/80 bg-slate-900/60 p-4">
          <div class="flex h-9 w-9 items-center justify-center rounded-md bg-orange-900/40 text-orange-300 font-bold">Mail</div>
          <h4 class="text-lg font-semibold text-white">EmailJS vs n8n</h4>
          <p class="text-slate-300">Valutazione per invio form: EmailJS per rapidita client-side, n8n per flussi piu robusti (log, retry, webhooks).</p>
        </div>
        <div class="space-y-2 rounded-xl border border-slate-800/80 bg-slate-900/60 p-4">
          <div class="flex h-9 w-9 items-center justify-center rounded-md bg-lime-900/40 text-lime-300 font-bold">NL</div>
          <h4 class="text-lg font-semibold text-white">Netlify</h4>
          <p class="text-slate-300">Hosting JAMstack con deploy continui, redirect gestiti e edge functions per futuri endpoint leggeri.</p>
        </div>
        <div class="space-y-2 rounded-xl border border-slate-800/80 bg-slate-900/60 p-4">
          <div class="flex h-9 w-9 items-center justify-center rounded-md bg-purple-900/40 text-purple-300 font-bold">CX</div>
          <h4 class="text-lg font-semibold text-white">Codex</h4>
          <p class="text-slate-300">Assistente di sviluppo per scaffolding, refactoring rapido e documentazione inline mentre evolvo il progetto.</p>
        </div>
      </div>
    </div>

    <div class="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
      <div class="flex items-center gap-3">
        <div class="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-amber-300 font-semibold">
          Ops
        </div>
        <div>
          <p class="text-sm uppercase tracking-wide text-slate-400">Altre competenze</p>
          <h3 class="text-xl font-semibold text-white">Strumenti di supporto che uso spesso</h3>
        </div>
      </div>
      <div class="grid gap-4 md:grid-cols-2">
        <div class="space-y-2 rounded-xl border border-slate-800/80 bg-slate-900/60 p-4">
          <div class="flex items-center gap-2">
            <div class="flex h-9 w-9 items-center justify-center rounded-md bg-amber-900/40 text-amber-300 font-bold">CU</div>
            <h4 class="text-lg font-semibold text-white">ClickUp</h4>
          </div>
          <p class="text-slate-300">Usato come PM per startup: roadmap, backlog grooming, automazioni per ticket e monitoraggio dei KPI di delivery.</p>
        </div>
        <div class="space-y-2 rounded-xl border border-slate-800/80 bg-slate-900/60 p-4">
          <div class="flex items-center gap-2">
            <div class="flex h-9 w-9 items-center justify-center rounded-md bg-pink-900/40 text-pink-300 font-bold">Fg</div>
            <h4 class="text-lg font-semibold text-white">Figma</h4>
          </div>
          <p class="text-slate-300">Wireframe e handoff: traccio layout o seguo i design ricevuti, importo componenti e li traduco in UI aderenti.</p>
        </div>
      </div>
    </div>
  </section>
</template>
