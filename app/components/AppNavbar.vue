<template>
  <header class="sticky top-0 z-50 border-b border-slate-800 bg-slate-900/70 backdrop-blur">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <!-- Brand -->
      <NuxtLink to="/" class="flex items-center gap-3">
        <img src="/logo_navbar.png" alt="Nuxt Portfolio" class="h-8 w-auto" />
      </NuxtLink>

      <!-- Mobile toggle -->
      <MobileToggleCross class="md:hidden" :open="isOpen" aria-controls="mobile-menu" @toggle="toggleMenu" />

      <!-- Nav links (collapsible on mobile) -->
      <nav
        id="mobile-menu"
        :class="[
          'flex flex-col items-start gap-2 text-sm md:flex md:flex-row md:items-center md:gap-2',
          isOpen ? 'absolute left-0 right-0 top-full z-30 mx-6 mt-3 rounded-xl border border-slate-800 bg-slate-900 p-4 shadow-lg md:static md:mx-0 md:mt-0 md:border-0 md:bg-transparent md:p-0 md:shadow-none' : 'hidden md:flex'
        ]"
      >
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="w-full rounded-md px-3 py-2 text-slate-100 transition hover:bg-slate-800/80 aria-[current=page]:bg-blue-600 aria-[current=page]:text-white md:w-auto"
          @click="closeMenu"
        >
          {{ link.label }}
        </NuxtLink>
        <Tendina />
        <Tendina_props :title="propsMenu1.title" :items="propsMenu1.items" />
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import MobileToggleCross from './navbar/MobileToggleCross.vue'
import Tendina from './navbar/Tendina.vue';
import Tendina_props from './navbar/Tendina_props.vue';

// Link list rendered both on mobile and desktop
const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/landing', label: 'Landing' },
  { to: '/whats-here', label: 'Whats here' },
  { to: '/dashboard-dati', label: 'Dashboard dati' },
  { to: '/saas', label: 'SaaS' },
  { to: '/about', label: 'About' }
]

const propsMenu1 = {
  title: 'Props-1',
  items: [
    { to: '/propSample1', label: 'Link Esempio 1' },
    { to: '/propSample2', label: 'Link Esempio 2' },
    { to: '/propSample3', label: 'Link Esempio 3' }
  ]
}

const isOpen = ref(false)
// Toggle state for the mobile menu
const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
// Close menu when a link is clicked
const closeMenu = () => {
  isOpen.value = false
}
</script>
