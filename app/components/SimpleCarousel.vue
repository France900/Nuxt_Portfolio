<template>
  <section class="gk--container flex flex-col items-center my-5 lg:my-8">
    <h3 class="text-xl text-bottone">{{ t('landing.carousel.subtitle') }}</h3>
    <h2 class="text-3xl lg:text-4xl text-titoli text-center text-nowrap font-semibold">
      {{ t('landing.carousel.title') }}
    </h2>

    <article class="relative flex gap-2 lg:gap-6 overflow-x-auto py-2.5 lg:py-10 snap-x snap-mandatory max-w-full">
      <div
        v-for="(image, index) in heroImages"
        :key="index"
        class="snap-center shrink-0"
      >
        <img
          :src="image"
          alt="Hero carousel item"
          class="w-72 h-48 lg:w-80 lg:h-56 rounded-2xl object-cover shadow-lg cursor-pointer transition hover:opacity-90"
          @click="openLightbox(index)"
        />
      </div>
    </article>
    <p class="max-lg:hidden pt-2">
      {{ t('landing.carousel.shiftHint') }}
    </p>

    <!-- Lightbox overlay -->
    <transition name="fade">
      <div
        v-if="lightboxOpen"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
        role="dialog"
        aria-modal="true"
      >
        <button
          type="button"
          class="absolute right-6 top-6 rounded-full bg-slate-900/80 p-3 text-white shadow-lg transition hover:bg-slate-800"
          aria-label="Chiudi"
          @click="closeLightbox"
        >
          ✕
        </button>

        <button
          type="button"
          class="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-slate-900/80 p-3 text-white shadow-lg transition hover:bg-slate-800"
          aria-label="Immagine precedente"
          @click="prevImage"
        >
          ‹
        </button>

        <img
          :src="heroImages[activeIndex]"
          alt="Immagine ingrandita"
          class="max-h-[80vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl border border-slate-800"
        />

        <button
          type="button"
          class="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-slate-900/80 p-3 text-white shadow-lg transition hover:bg-slate-800"
          aria-label="Immagine successiva"
          @click="nextImage"
        >
          ›
        </button>
      </div>
    </transition>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const { t } = useI18n()

const heroImages = [
  '/mossyRiverInAForest1.png',
  '/mossyRiverInAForest2.png',
  '/mossyRiverInAForest3.png',
  '/mossyRiverInAForest4.png'
]

const lightboxOpen = ref(false)
const activeIndex = ref(0)

const openLightbox = (index) => {
  activeIndex.value = index
  lightboxOpen.value = true
}

const closeLightbox = () => {
  lightboxOpen.value = false
}

const nextImage = () => {
  activeIndex.value = (activeIndex.value + 1) % heroImages.length
}

const prevImage = () => {
  activeIndex.value = (activeIndex.value - 1 + heroImages.length) % heroImages.length
}

const handleKeydown = (event) => {
  if (!lightboxOpen.value) return
  if (event.key === 'Escape') closeLightbox()
  if (event.key === 'ArrowRight') nextImage()
  if (event.key === 'ArrowLeft') prevImage()
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>
