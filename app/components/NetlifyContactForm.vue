<template>
  <!-- Wrapper del form con styling coerente con il tema -->
  <section class="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 mt-12">
    <!-- Titolo e microcopy introduttivo -->
    <div class="space-y-1">
      <h3 class="text-xl font-semibold text-red-800">{{ t('temporary.underDevelopment') }}</h3>
      <h3 class="text-xl font-semibold text-white">Contattami</h3>
      <p class="text-sm text-slate-300">Compila il form e ti rispondo appena possibile.</p>
    </div>

    <!-- Form Netlify: attributi richiesti per la raccolta submissions -->
    <form
      ref="formRef"
      class="mt-6 space-y-4"
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      @submit.prevent="handleSubmit"
    >
      <!-- action="/thanks" -->
      <!-- Campo hidden che Netlify usa per associare la submission al form -->
      <input type="hidden" name="form-name" value="contact" />

      <!-- Honeypot anti-spam: deve restare nascosto agli utenti -->
      <p class="hidden">
        <label>
          Do not fill this out if you are human:
          <input name="bot-field" />
        </label>
      </p>

      <!-- Campo Nome -->
      <label class="block space-y-2">
        <span class="text-sm font-medium text-slate-200">Nome</span>
        <input
          class="w-full rounded-xl border border-slate-800 bg-slate-950/70 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/60"
          type="text" name="name" autocomplete="name" required placeholder="Il tuo nome" />
      </label>

      <!-- Campo Email -->
      <label class="block space-y-2">
        <span class="text-sm font-medium text-slate-200">Email</span>
        <input
          class="w-full rounded-xl border border-slate-800 bg-slate-950/70 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/60"
          type="email" name="email" autocomplete="email" required placeholder="nome@dominio.com" />
      </label>

      <!-- Campo Messaggio -->
      <label class="block space-y-2">
        <span class="text-sm font-medium text-slate-200">Messaggio</span>
        <textarea
          class="w-full min-h-[140px] rounded-xl border border-slate-800 bg-slate-950/70 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/60"
          name="message" required placeholder="Scrivi qui la tua richiesta"></textarea>
      </label>

      <!-- Footer form: note privacy + CTA -->
      <div class="flex flex-wrap items-center justify-between gap-4">
        <div class="text-xs text-slate-400">
          <p>I dati sono usati solo per rispondere al messaggio.</p>
          <p v-if="status === 'success'" class="text-emerald-300">Messaggio inviato. Grazie!</p>
          <p v-else-if="status === 'error'" class="text-rose-300">Invio fallito. Riprova tra poco.</p>
        </div>
        <button
          class="inline-flex items-center justify-center rounded-xl bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-60"
          type="submit"
          :disabled="status === 'sending'"
        >
          <span v-if="status === 'sending'">Invio...</span>
          <span v-else>Invia messaggio</span>
        </button>
      </div>
    </form>
  </section>
</template>

<script setup>
// Ref al nodo form per leggere i campi e inviarli via fetch
const { t } = useI18n()
const formRef = ref(null)
const status = ref('idle')

// Submit custom: evita il reload e invia i dati a Netlify
const handleSubmit = async () => {
  // Se il ref non e ancora pronto, esci in sicurezza
  if (!formRef.value || status.value === 'sending') {
    return
  }

  status.value = 'sending'

  // Serializza i dati del form in formato URL encoded
  const formData = new FormData(formRef.value)
  const body = new URLSearchParams(formData).toString()

  // Invio a Netlify tramite POST senza refresh pagina
  try {
    const response = await fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body,
    })

    if (!response.ok) {
      throw new Error('Netlify form submit failed')
    }

    formRef.value.reset()
    status.value = 'success'
  } catch (error) {
    status.value = 'error'
  }
}
</script>
