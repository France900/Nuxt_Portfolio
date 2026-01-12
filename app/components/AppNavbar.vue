<template>
  <header class="sticky top-0 z-50 border-b border-slate-800 bg-slate-900/70 backdrop-blur">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <!-- Brand -->
      <NuxtLink to="/" class="flex items-center gap-3">
        <img src="/logo_navbar.png" :alt="t('navbar.brandAlt')" class="h-8 w-auto" />
      </NuxtLink>

      <!-- Mobile toggles -->
      <div class="flex">
        <LangSwitch class="md:hidden"/>
        <MobileToggleCross class="md:hidden" :open="isOpen" aria-controls="mobile-menu" @toggle="toggleMenu" />
      </div>

      <!-- Nav links (collapsible on mobile) -->
      <nav id="mobile-menu" :class="[
        'flex flex-col items-start gap-2 text-sm md:flex md:flex-row md:items-center md:gap-2',
        isOpen ? 'absolute left-0 right-0 top-full z-30 mx-6 mt-3 rounded-xl border border-slate-800 bg-slate-900 p-4 shadow-lg md:static md:mx-0 md:mt-0 md:border-0 md:bg-transparent md:p-0 md:shadow-none' : 'hidden md:flex'
      ]">
        <NuxtLink v-for="link in navLinks" :key="link.to" :to="link.to"
          class="w-full rounded-md px-3 py-2 text-slate-100 transition hover:bg-slate-800/80 aria-[current=page]:bg-blue-600 aria-[current=page]:text-white md:w-auto"
          @click="closeMenu">
          {{ link.label }}
        </NuxtLink>
        <Tendina_props :title="propsMenu1.title" :items="propsMenu1.items" @select="closeMenu" />
        <NuxtLink v-for="link in navLinks2" :key="link.to" :to="link.to"
          class="w-full rounded-md px-3 py-2 text-slate-100 transition hover:bg-slate-800/80 aria-[current=page]:bg-blue-600 aria-[current=page]:text-white md:w-auto"
          @click="closeMenu">
          {{ link.label }}
        </NuxtLink>
        <LangSwitch/>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { computed, ref } from 'vue'
import MobileToggleCross from './navbar/MobileToggleCross.vue'
import Tendina_props from './navbar/Tendina_props.vue';
import LangSwitch from './navbar/LangSwitch.vue';

const { t } = useI18n()

// First block of links rendered before the dropdown
const navLinks = computed(() => [
  { to: '/', label: t('navbar.links.home') },
  { to: '/whats-here', label: t('navbar.links.whatsHere') },
])

// Dropdown payload rendered inline between navLinks and navLinks2
const propsMenu1 = computed(() => ({
  title: t('navbar.dropdown.features'),
  items: [
    { to: '/landing', label: t('navbar.dropdown.items.landing') },
    { to: '/dashboard-dati', label: t('navbar.dropdown.items.dashboard') },
    { to: '/login', label: t('navbar.dropdown.items.auth') },
    { to: '/propSample3', label: t('navbar.dropdown.items.sample3') }
  ]
}))

// Second block of links rendered after the dropdown
const navLinks2 = computed(() => [
  { to: '/about', label: t('navbar.links.about') },
  { to: '/sample', label: t('navbar.links.sample') }
])

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
