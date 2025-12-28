<script setup lang="ts">
const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/landing', label: 'Landing' },
  { to: '/whats-here', label: 'Whats here' },
  { to: '/dashboard-dati', label: 'Dashboard dati' },
  { to: '/saas', label: 'SaaS' },
  { to: '/about', label: 'About' }
]
</script>

<template>
  <header class="border-b border-slate-800 bg-slate-900/70 backdrop-blur">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <div class="text-lg font-semibold tracking-tight">Nuxt Portfolio</div>
      <nav class="flex flex-wrap gap-2 text-sm">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="rounded-md px-3 py-2 text-slate-100 transition hover:bg-slate-800/80 aria-[current=page]:bg-blue-600 aria-[current=page]:text-white"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>
