<template>
  <section class="space-y-4">
    <MiniHero title="Landing Page Esempio" subtitle="Sezione dedicata alla presentazione iniziale" />
  </section>

  <section class="my-5 lg:my-8 grid grid-cols-1 lg:grid-cols-5 gap-y-5 lg:gap-10 items-center pt-10">
    <!-- video ex logo -->
     <div class="flex justify-center items-center lg:col-span-2">
      <video autoplay muted class="w-80 h-80 rounded-full">
        <source src="/video/Animazione_LOGO.mp4" type="video/mp4" />
      </video>
    </div>
    <!-- call to action con pulsante watzapp -->
    <div class="flex justify-center lg:col-span-3 pt-10">
      <a href="https://wa.me/393403791979?text=Ciao%20Francesco%2C%20Ho%20visto%20il%20tuo%20curriculum%20e%20sarei%20interessato%20a%20un%20colloquio.%20Riscrivimi%20pure%20per%20fissare%20un%20incontro" target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center justify-center rounded-xl bg-bottone px-6 py-3 text-base font-semibold text-titoli shadow-lg transition hover:shadow-xl hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bottone">
        Ti piace il mio CV? Scrivimi!
      </a>
    </div>
  </section>

  <!-- Card Examples -->
  <section class="flex items-center flex-col pt-10 overflow-hidden pb-20" id="web">
    <h3 class="text-xl text-bottone">I NOSTRI SERVIZI</h3>
    <h2 class="text-3xl lg:text-4xl text-titoli font-semibold">
      Programmazione Web
    </h2>
    <section class="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10 mt-2.5 lg:mt-10">
      <!-- Card Shadow Examples -->
      <CardShadow />
      <services_card v-for="servizio in limitedServices" :key="servizio.id" :servizio="servizio" class="z-[1]"/>
    </section>
  </section>

<SimpleCarousel />

</template>


<script setup>
import { computed } from "vue";
import { useData } from "@/composables/useData.js";

const { servizi } = useData();
const limitedServices = computed(() => servizi.slice(0, 2));
useHead({
  title: "Servizi",
});
</script>
