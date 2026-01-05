<script setup>
const props = defineProps({
	servizio: Object,
});
</script>

<template>
	<!-- {{ servizio }} -->
	<div
		class="bg-card rounded-2xl flex flex-col items-center p-5 lg:p-8 border-card border-2 hover:border-bottone">
		<img :src="servizio.icona" alt="immagine" class="h-24 lg:h-40" />
		<h3 class="text-specifiche p-4 text-xl font-semibold leading-snug">
			{{ servizio.titolo_riga_1 }}<br />{{ servizio.titolo_riga_2 }}
		</h3>
		<p class="text-base text-center leading-snug">
			{{ servizio.descrizione }}
		</p>
		<span class="pt-6 text-specifiche text-lg">{{ servizio.prezzo }}</span>
	</div>
</template>
