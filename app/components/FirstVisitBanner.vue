<template>
  <!-- ClientOnly evita mismatch SSR per il modale -->
  <ClientOnly>
    <!-- Transition gestisce le animazioni di comparsa -->
    <Transition
      appear
      enter-active-class="duration-300 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-200 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <!-- Overlay del banner che blocca l'interfaccia principale -->
      <div v-if="showBanner" class="fixed inset-0 z-[60] flex items-center justify-center px-4">
        <!-- Sfondo cliccabile per chiudere -->
        <div class="absolute inset-0 bg-slate-950/70 backdrop-blur-sm" @click="dismiss('overlay')"></div>

        <!-- Contenitore principale del messaggio di benvenuto -->
        <div class="relative w-full max-w-xl overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/95 shadow-2xl shadow-blue-900/30">
          <div class="flex items-start gap-4 p-6">
            <!-- Icona che evidenzia l'informazione -->
            <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
              <svg class="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h.008v.008H12V7.5Zm0 3v6" />
                <circle cx="12" cy="12" r="9" />
              </svg>
            </div>

            <!-- Testo del messaggio e countdown -->
            <div class="flex-1 space-y-2">
              <p class="text-sm uppercase tracking-[0.2em] text-blue-300">{{ t('firstVisitBanner.badge') }}</p>
              <h2 class="text-xl font-semibold text-white">{{ t('firstVisitBanner.title') }}</h2>
              <p class="text-sm leading-relaxed text-slate-200">{{ t('firstVisitBanner.body') }}</p>
              <!-- Countdown mostrato solo se esiste auto chiusura -->
              <p v-if="autoCloseMs" class="text-xs text-slate-400">
                {{ t('firstVisitBanner.autoClose', { seconds: remainingSeconds },"s") }}
              </p>
            </div>

            <!-- Pulsante chiusura immediata -->
            <button
              type="button"
              class="rounded-full p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white"
              :aria-label="t('firstVisitBanner.closeAria')"
              @click="dismiss('button')"
            >
              <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="m6.75 6.75 10.5 10.5m0-10.5L6.75 17.25" />
              </svg>
            </button>
          </div>

          <!-- Footer con nota di visibilita e CTA -->
          <div class="flex items-center justify-between bg-slate-800/60 px-6 py-3 text-xs text-slate-300">
            <span><!-- Comparira solo al primo accesso --></span>
            <button
              type="button"
              class="rounded-full bg-blue-500 px-3 py-1 font-medium text-white transition hover:bg-blue-400"
              @click="dismiss('button')"
            >
              {{ t('firstVisitBanner.cta') }}
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </ClientOnly>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

// Localizzazione contenuti del banner
const { t } = useI18n()

// Timeout fisso per la chiusura automatica
const autoCloseMs = 35000

// Stato reattivo per visibilità banner e countdown in secondi
const showBanner = ref(false)
const remainingSeconds = ref(Math.ceil(autoCloseMs / 1000))
let dismissTimer
let countdownTimer

// Pulisce eventuali timer attivi per evitare esecuzioni multiple
const clearTimers = () => {
  if (dismissTimer) {
    clearTimeout(dismissTimer)
    dismissTimer = undefined
  }
  if (countdownTimer) {
    clearInterval(countdownTimer)
    countdownTimer = undefined
  }
}

// Avvia il timer di chiusura automatica e il conto alla rovescia
const startTimers = () => {
  if (!autoCloseMs) {
    return
  }

  dismissTimer = setTimeout(() => dismiss('timer'), autoCloseMs)
  countdownTimer = setInterval(() => {
    remainingSeconds.value = Math.max(0, remainingSeconds.value - 1)
  }, 1000)
}

// Nasconde il banner e spegne i timer di auto chiusura
const dismiss = () => {
  showBanner.value = false
  clearTimers()
}

// Mostra il banner alla prima montatura e sincronizza i timer
onMounted(() => {
  showBanner.value = true
  remainingSeconds.value = Math.ceil(autoCloseMs / 1000)
  startTimers()
})

// Garantisce che i timer non restino attivi smontando il componente
onBeforeUnmount(() => {
  clearTimers()
})
</script>






