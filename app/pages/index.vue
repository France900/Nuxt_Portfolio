<template>
  <section class="space-y-12">
        
    <Hero />

    <!-- Link alla repository -->
    <div class="space-y-3">
      <h3 class="text-lg font-semibold text-white">Esplora la repo</h3>
      <p class="text-slate-300">
        Per esplorare la GitHub Repository di questo sito sequi pure questo link
        <NuxtLink to="https://google.com" class="text-blue-400 underline hover:text-blue-300">link</NuxtLink>.
      </p>
      <p class="text-sm text-slate-500">Questo sito è volutamente non indicizzato per privacy.</p>
    </div>

    <!-- Casi studio -->
    <div class="space-y-6">
      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.18em] text-blue-400">Casi Studio</p>
        <h3 class="mt-2 text-2xl font-semibold text-white">
          Questo sito raccoglie alcuni esempi di componenti, view e dipendenze
        </h3>
      </div>

      <div class="space-y-4 rounded-xl border border-slate-800 bg-slate-900/60 p-6">
        <h4 class="text-lg font-semibold text-white">Costruzione</h4>
        <p class="text-slate-300">
          Il sito è fatto con Nuxt 3, SFC, Tailwind e i18n utilizzando Codex come integrazione allo
          sviluppo per l’ottimizzazione dei processi. E’ possibile procedere all’esplorazione del sito nelle
          seguenti parti-studio:
        </p>
      </div>

      <!-- Cards riepilogo pagine -->
      <div class="grid gap-4 md:grid-cols-2">

        <!-- Pagina 2 / Landing -->
        <div class="space-y-3 rounded-xl border border-slate-800 bg-slate-900/60 p-6">
          <h4 class="text-lg font-semibold text-white">Pagina 2 / landing page</h4>
          <ul class="list-disc space-y-1 pl-5 text-slate-300">
            <li>Video Embed</li>
            <li>Cards (con shadow)</li>
            <li>Carosello</li>
            <li>Buttons</li>
            <li>Email-JS</li>
          </ul>
        </div>

        <!-- Pagina 3 / Whats here -->
        <div class="space-y-3 rounded-xl border border-slate-800 bg-slate-900/60 p-6">
          <h4 class="text-lg font-semibold text-white">Pagina 3 / whats here</h4>
          <p class="text-slate-300">Standards elements (gia presenti in homepage e evidenziati qui)</p>
          <ul class="list-disc space-y-1 pl-5 text-slate-300">
            <li>Jumbo (con animazione)</li>
            <li>Navbar (parametrizzata, burgher menu animato)</li>
          </ul>
          <div>
            <p class="font-semibold text-white">Tecnologie usate</p>
            <ul class="list-disc space-y-1 pl-5 text-slate-300">
              <li>Nuxt</li>
              <li>TailWind</li>
              <li>i18n</li>
              <li>Email-JS vs n8n</li>
              <li>Netlify</li>
              <li>Codex</li>
            </ul>
          </div>
          <div>
            <p class="font-semibold text-white">Altre competenze:</p>
            <ul class="list-disc space-y-1 pl-5 text-slate-300">
              <li>ClickUp</li>
              <li>Figma</li>
            </ul>
          </div>
        </div>

        <!-- Pagina 4 / Dashboard Dati -->
        <div class="space-y-3 rounded-xl border border-slate-800 bg-slate-900/60 p-6">
          <h4 class="text-lg font-semibold text-white">Pagina 4 / Dashboard Dati</h4>
          <ul class="list-disc space-y-1 pl-5 text-slate-300">
            <li>Filtri</li>
            <li>Grafici</li>
            <li>API</li>
          </ul>
        </div>

        <!-- Pagina 5 - SaaS (Software as a Service) -->
        <div class="space-y-3 rounded-xl border border-slate-800 bg-slate-900/60 p-6">
          <h4 class="text-lg font-semibold text-white">Pagina 5 - SaaS (Software as a Service)</h4>
          <ul class="list-disc space-y-1 pl-5 text-slate-300">
            <li>Form email/password per sign up</li>
            <li>Login Frontend</li>
            <li>
              Dashboard utente con: sidebar di navigazione, header, statistiche fittizie, grafico (Chart.js o
              ApexCharts), tabella dati filtrabile
            </li>
            <li>Gestione profilo: form “modifica dati” (non salva davvero).</li>
            <li>Lista oggetti: clienti, task, progetti.</li>
            <li>CRUD finto: “Aggiungi” crea riga in più (solo client-side).</li>
          </ul>
        </div>

        <!-- Pagina 6 / About -->
        <div class="space-y-3 rounded-xl border border-slate-800 bg-slate-900/60 p-6">
          <h4 class="text-lg font-semibold text-white">Pagina 6 / About</h4>
          <ul class="list-disc space-y-1 pl-5 text-slate-300">
            <li>Riepilogo</li>
            <li>Disponibilità</li>
            <li>Patenti</li>
            <li>Lingue</li>
          </ul>
        </div>

      </div>
    </div>
  </section>
</template>
