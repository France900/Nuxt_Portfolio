<template>
  <h3 class="text-xl font-semibold text-red-800">{{ t('temporary.underDevelopment') }}</h3>
  <!-- form -->
  <div>
    <form name="contact" method="POST" data-netlify="true" class="flex flex-col gap-4">
      <!-- Campo Nome -->
      <label>
        Your Name: 
        <input type="text" name="name" class="w-full rounded-xl border border-slate-800 bg-slate-950/70 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/60"/>
      </label>

      <!-- Campo Email -->
      <label>
        Your Email: 
        <input type="email" name="email" class="w-full rounded-xl border border-slate-800 bg-slate-950/70 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/60"/>
      </label>

      <!-- campo role -->
    <!--   <label>
        Your Role:
        <select name="role[]" multiple>
          <option value="leader">Leader</option>
          <option value="follower">Follower</option>
        </select>
      </label> -->

      <!-- Campo Messaggio -->
      <label>
        Message: 
        <textarea name="message" class="w-full min-h-[140px] rounded-xl border border-slate-800 bg-slate-950/70 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/60"></textarea>
      </label>

      <!-- campo invio -->
      <button type="submit" class="inline-flex items-center justify-center rounded-xl bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-60">
        Send
      </button>

    </form>
  </div>

</template>

<script setup>
const { t } = useI18n()
</script>