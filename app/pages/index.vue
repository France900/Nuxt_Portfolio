<template>
  <div class="space-y-12">
    <Hero />

    <!-- Link alla repository -->
    <div class="space-y-1 !mt-3">
      <p class="text-slate-300">
        {{ t('home.repo.textBeforeLink') }}
        <NuxtLink to="https://github.com/France900/Nuxt_Portfolio" class="text-blue-400 underline hover:text-blue-300">
          {{ t('home.repo.linkLabel') }}
        </NuxtLink>.
      </p>
      <p class="text-sm text-slate-500">{{ t('home.repo.privacy') }}</p>
    </div>

    <!-- Altri lavori -->
    <p class="text-slate-300">
      Ulteriori siti da me realizzati:
      <br>
      Sito realizato per un professionista in psicologia in VUE "<NuxtLink
        to="https://sito-giuseppe-marchi.netlify.app/">Giuseppe Marchi</NuxtLink>" con la repo a questo
      <NuxtLink to="https://github.com/France900/Sito_Giuseppe_Marchi"
        class="text-blue-400 underline hover:text-blue-300">
        {{ t('home.repo.linkLabel') }}
      </NuxtLink>.
      Vecchio sito Gecko Developers realizato in react e recisionato: Coming soon
    </p>

    <!-- Intro -->
    <section class="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 lg:p-10">
      <div class="flex flex-col gap-6 lg:flex-row lg:items-start">
        <div class="shrink-0">
          <img src="/avatar.png" :alt="t('home.intro.avatarAlt')"
            class="h-40 w-40 rounded-2xl object-cover ring-1 ring-slate-800" />
        </div>
        <div class="space-y-4 text-slate-300">
          <p>
            {{ t('home.intro.paragraph1') }}
          </p>
          <p>
            {{ t('home.intro.paragraph2') }}
          </p>
          <p>
            {{ t('home.intro.morePrefix') }}
            <NuxtLink to="/about" class="text-blue-400 underline hover:text-blue-300">
              {{ t('home.intro.moreLink') }}
            </NuxtLink>{{ t('home.intro.moreSuffix') }}
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
          {{ t('home.dev.badge') }}
        </div>
        <div>
          <p class="text-sm uppercase tracking-wide text-slate-400">{{ t('home.dev.kicker') }}</p>
          <h3 class="text-xl font-semibold text-white">
            {{ t('home.dev.titlePrefix') }}
            <NuxtLink to="/whats-here" class="text-blue-400 underline hover:text-blue-300">
              {{ t('home.dev.titleLink') }}
            </NuxtLink>.
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
              {{ t(`home.stack.items.${item.key}.title`) }}
            </h4>
          </div>
          <p class="text-slate-300">
            {{ t(`home.stack.items.${item.key}.description`) }}
          </p>
        </div>
      </div>
    </div>

    <!-- Sezione Ops: tool operativi/di supporto -->
    <div class="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
      <!-- Intestazione di sezione con badge e descrizione -->
      <div class="flex items-center gap-3">
        <div class="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-amber-300 font-semibold">
          {{ t('home.ops.badge') }}
        </div>
        <div>
          <p class="text-sm uppercase tracking-wide text-slate-400">{{ t('home.ops.kicker') }}</p>
          <h3 class="text-xl font-semibold text-white">{{ t('home.ops.title') }}</h3>
        </div>
      </div>
      <!-- Griglia di card con strumenti operativi -->
      <div class="grid gap-4 md:grid-cols-2">
        <!-- Card: ClickUp -->
        <div class="space-y-2 rounded-xl border border-slate-800/80 bg-slate-900/60 p-4">
          <div class="flex items-center gap-2">
            <div class="flex h-9 w-9 items-center justify-center rounded-md bg-amber-900/40 text-amber-300 font-bold">
              CU
            </div>
            <h4 class="text-lg font-semibold text-white">{{ t('home.ops.items.clickup.title') }}</h4>
          </div>
          <p class="text-slate-300">{{ t('home.ops.items.clickup.description') }}</p>
        </div>
        <!-- Card: Figma -->
        <div class="space-y-2 rounded-xl border border-slate-800/80 bg-slate-900/60 p-4">
          <div class="flex items-center gap-2">
            <div class="flex h-9 w-9 items-center justify-center rounded-md bg-pink-900/40 text-pink-300 font-bold">
              Fg
            </div>
            <h4 class="text-lg font-semibold text-white">{{ t('home.ops.items.figma.title') }}</h4>
          </div>
          <p class="text-slate-300">{{ t('home.ops.items.figma.description') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { t } = useI18n()

const stackItems = [
  {
    badge: 'N',
    key: 'nuxt',
    classes: 'bg-emerald-900/40 text-emerald-300',
  },
  {
    badge: 'TW',
    key: 'tailwind',
    classes: 'bg-sky-900/40 text-sky-300',
  },
  {
    badge: 'i18n',
    key: 'i18n',
    classes: 'bg-indigo-900/40 text-indigo-300',
  },
  {
    badge: 'Mail',
    key: 'emailjs',
    classes: 'bg-orange-900/40 text-orange-300',
  },
  {
    badge: 'NL',
    key: 'netlify',
    classes: 'bg-lime-900/40 text-lime-300',
  },
  {
    badge: 'CX',
    key: 'codex',
    classes: 'bg-purple-900/40 text-purple-300',
  },
]
</script>
