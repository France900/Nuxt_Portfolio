<template>
  <div class="flex min-h-screen flex-col bg-slate-950 text-slate-50">
    <AppNavbar />

    <main class="flex-1">
      <div class="mx-auto max-w-6xl px-6 py-10 overflow-hidden">
        <slot />
      </div>
    </main>

    <AppFooter />
  </div>
</template>
