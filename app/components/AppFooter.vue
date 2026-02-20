<template>
  <footer class="mt-16 border-t border-slate-800/90 bg-gradient-to-b from-slate-900/90 to-slate-950">
    <div class="mx-auto max-w-6xl px-6 py-12">
      <div class="grid grid-cols-1 gap-10 md:grid-cols-3">
        <section>
          <NuxtLink to="/" class="inline-flex items-center gap-3">
            <img src="/logo_navbar.png" :alt="t('footer.brand.logoAlt')" class="h-9 w-auto" />
            <span class="text-base font-semibold tracking-wide text-slate-100">{{ t('footer.brand.titleLine1') }} <br> {{ t('footer.brand.titleLine2') }}</span>
          </NuxtLink>
          <p class="mt-4 max-w-sm text-sm leading-6 text-slate-400">
            {{ t('footer.brand.description') }}
          </p>
        </section>

        <section>
          <h3 class="text-sm font-semibold uppercase tracking-[0.16em] text-slate-200">{{ t('footer.navigation.title') }}</h3>
          <ul class="mt-4 space-y-2 text-sm text-slate-300">
            <li>
              <NuxtLink to="/" class="transition hover:text-bottone">{{ t('footer.navigation.home') }}</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/whats-here" class="transition hover:text-bottone">{{ t('footer.navigation.whatsHere') }}</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/landing" class="transition hover:text-bottone">{{ t('footer.navigation.landing') }}</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about" class="transition hover:text-bottone">{{ t('footer.navigation.about') }}</NuxtLink>
            </li>
          </ul>
        </section>

        <section>
          <h3 class="text-sm font-semibold uppercase tracking-[0.16em] text-slate-200">{{ t('footer.contacts.title') }}</h3>
          <div class="mt-4 space-y-2 text-sm text-slate-300">
            <a href="mailto:francesco.em.livio@gmail.com" class="block transition hover:text-bottone">
              francesco.em.livio@gmail.com
            </a>
            <a href="tel:+393403791979" class="block transition hover:text-bottone">
              {{ t('footer.contacts.phone') }}
            </a>
          </div>
          <div class="mt-5 flex items-center gap-3">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"
              class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-200 transition hover:border-bottone hover:text-bottone"
              :aria-label="t('footer.social.linkedinAria')">
              in
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"
              class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-200 transition hover:border-bottone hover:text-bottone"
              :aria-label="t('footer.social.instagramAria')">
              ig
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"
              class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-200 transition hover:border-bottone hover:text-bottone"
              :aria-label="t('footer.social.githubAria')">
              gh
            </a>
          </div>
        </section>
      </div>

      <div class="mt-10 border-t border-slate-800/90 pt-5 text-xs text-slate-500">
        <p>&copy; {{ currentYear }} {{ t('footer.bottom.copyright') }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const { t } = useI18n()
const currentYear = new Date().getFullYear()
</script>
