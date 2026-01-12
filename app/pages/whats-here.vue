<template>
  <!-- Pagina: panoramica dei contenuti disponibili, organizzata in tre macro-sezioni -->
  <section class="space-y-8">
    <!-- Hero compatto con titolo e sottotitolo della pagina -->
    <MiniHero title="Whats here" subtitle="Panoramica di cosa puoi trovare qui" />
    <h3 class="text-xl font-semibold text-red-800">Ancora in sviluppo</h3>
    <!-- Sezione UI: componenti/elementi riutilizzabili presenti in homepage -->
    <div class="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
      <!-- Intestazione di sezione con badge e descrizione -->
      <div class="flex items-center gap-3">
        <div class="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-sky-300 font-semibold">
          UI
        </div>
        <div>
          <p class="text-sm uppercase tracking-wide text-slate-400">Standard elements</p>
          <h3 class="text-xl font-semibold text-white">Blocchi riutilizzabili che trovi in homepage</h3>
        </div>
      </div>
      <!-- Griglia di card descrittive dei blocchi UI -->
      <div class="grid gap-4 md:grid-cols-2">
        <!-- Card: jumbo/hero animato -->
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
        <!-- Card: navbar configurabile via props -->
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
          sviluppo per l’ottimizzazione dei processi. Le varie parti del sito sono nell'indice sottostante, con un link
          rapido per andarne a vedere il funzionamento:
        </p>
      </div>

      <!-- Cards riepilogo pagine -->
      <div class="grid gap-4 md:grid-cols-2">

        <!-- Pagina 2 / Landing -->
        <div class="space-y-3 rounded-xl border border-slate-800 bg-slate-900/60 p-6">
          <h4 class="text-lg font-semibold text-white">Landing Page Esempio</h4>
          <p>Contiene alcuni elementi standard semplici, fra cui:</p>
          <ul class="list-disc space-y-1 pl-5 text-slate-300">
            <li>Video Embed;</li>
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
