<template>
    <!-- hero mossy -->
    <section class="relative h-[45vh] md:h-[55vh] lg:h-[66vh] overflow-hidden rounded-2xl text-left">
        <!-- Background crossfade -->
        <Transition enter-active-class="transition ease-linear duration-[3000ms]" enter-from-class="opacity-0"
            enter-to-class="opacity-100" leave-active-class="transition ease-linear duration-[3000ms]"
            leave-from-class="opacity-100" leave-to-class="opacity-0">
            <div :key="images[currentIndex]" class="absolute inset-0 z-[0] bg-center bg-cover bg-no-repeat"
                :style="{ backgroundImage: `url(${images[currentIndex]})` }" />
        </Transition>

        <!-- overlay -->
        <div class="absolute inset-0 bg-black/30 z-[1]" />
        <div class="absolute top-0 left-0 w-full h-[35%] bg-[linear-gradient(rgba(0,0,0,0.4)_0%,rgba(0,0,0,0)_50%)]">
        </div>
        <!-- mask decor bottom right -->
        <div
            class="pointer-events-none absolute bottom-0 right-0 z-[2] h-[100%] w-[80%] bg-[url('/Mask.png')] bg-contain bg-no-repeat bg-right-bottom m-8" />

        <!-- text content -->
        <div class="absolute left-10 top-10 z-[2] max-w-2xl space-y-4">
            <h1 class=" text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Francesco Emanuele Livio
            </h1>
            <h2 class="mt-2 text-xl text-slate-300">Online Portfolio &amp; More</h2>
            <!--<h2 class="mt-2 text-xl text-slate-300">Web Developer Front-End Early-Mid</h2> -->
            <!-- <h2 class="mt-2 text-xl text-slate-300">{{ $t('home.hero.role') }}</h2> -->
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const images = [
    '/mossyRiverInAForest1.png',
    '/mossyRiverInAForest2.png',
    '/mossyRiverInAForest3.png',
    '/mossyRiverInAForest4.png',
];

const currentIndex = ref(0);
let timerId = null;

onMounted(() => {
    timerId = setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % images.length;
    }, 10000); // cambia ogni 10 secondi
});

onBeforeUnmount(() => {
    if (timerId) clearInterval(timerId);
});
</script>
