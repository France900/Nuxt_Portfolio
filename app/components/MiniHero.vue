<template>
    <div class="min-h-[220px] rounded-2xl bg-slate-900/70 p-10 shadow-xl ring-1 ring-slate-800 flex flex-col">
        <h1 class="mt-3 mr-auto text-3xl font-semibold tracking-tight text-white">{{ props.title }}</h1>
        <h2 class="mt-2 mr-auto text-slate-300">{{ props.subtitle }}</h2>
        <!-- <div class="bg-[url('/little_mask.png')] bg-contain bg-no-repeat bg-right-bottom m-8" /> -->
        <img src="/little_mask.png" class="ml-auto mt-auto md:max-w-[80%]" alt="">
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        default: 'About',
    },
    subtitle: {
        type: String,
        default: 'Chi sono e Disponibilita',
    },
})
</script>
