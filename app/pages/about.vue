<template>
  <section class="space-y-6">
    <MiniHero :title="t('about.hero.title')" :subtitle="t('about.hero.subtitle')" />

    <div class="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
      <h3 class="text-xl font-semibold text-white">{{ t('about.summary.title') }}</h3>
      <div class="space-y-3 text-slate-300">
        <p>
          {{ t('about.summary.p1') }}
        </p>
        <p>
          {{ t('about.summary.p2') }}
        </p>
        <p>
          {{ t('about.summary.p3') }}
        </p>
        <p>
          {{ t('about.summary.p4') }}
        </p>
      </div>
    </div>

    <div class="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
      <h3 class="text-xl font-semibold text-white">{{ t('about.availability.title') }}</h3>
      <div class="space-y-3 text-slate-300">
        <p>
          {{ t('about.availability.p1') }}
        </p>
        <p class="font-semibold text-white">{{ t('about.availability.summaryTitle') }}</p>
        <ul class="list-disc space-y-1 pl-5">
          <li>{{ t('about.availability.list.fullTime') }}</li>
          <li>{{ t('about.availability.list.presence') }}</li>
          <li>{{ t('about.availability.list.travel') }}</li>
          <li>{{ t('about.availability.list.syncTeam') }}</li>
          <li>{{ t('about.availability.list.async') }}</li>
        </ul>
        <p>
          {{ t('about.availability.p2') }}
        </p>
        <p>
          {{ t('about.availability.p3') }}
        </p>
      </div>
    </div>

    <div class="grid gap-4 md:grid-cols-2">
      <div class="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
        <h4 class="text-lg font-semibold text-white">{{ t('about.details.title') }}</h4>
        <ul class="list-disc space-y-1 pl-5 text-slate-300">
          <li>{{ t('about.details.items.vat') }}</li>
          <li>{{ t('about.details.items.licenses') }}</li>
        </ul>
      </div>

      <div class="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
        <h4 class="text-lg font-semibold text-white">{{ t('about.languages.title') }}</h4>
        <ul class="list-disc space-y-1 pl-5 text-slate-300">
          <li>{{ t('about.languages.items.it') }}</li>
          <li>{{ t('about.languages.items.en') }}</li>
          <li>{{ t('about.languages.items.es') }}</li>
          <li>{{ t('about.languages.items.jp') }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n()
</script>
