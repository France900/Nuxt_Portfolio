<template>
    <div class="min-h-[220px] rounded-2xl bg-slate-900/70 p-10 shadow-xl ring-1 ring-slate-800 flex flex-col">
        <h1 class="mt-3 mr-auto text-3xl font-semibold tracking-tight text-white">{{ title }}</h1>
        <h2 class="mt-2 mr-auto text-slate-300">{{ subtitle }}</h2>
        <!-- <div class="bg-[url('/little_mask.png')] bg-contain bg-no-repeat bg-right-bottom m-8" /> -->
        <img src="/little_mask.png" class="ml-auto mt-auto md:max-w-[80%]" alt="">
    </div>
</template>

<script setup lang="ts">
const props = withDefaults(
    defineProps<{
        title?: string
        subtitle?: string
    }>(),
    {
        title: 'About',
        subtitle: 'Chi sono e Disponibilita',
    },
)

const { title, subtitle } = props
</script>
