<template>

	<section
		id="serviceCard"
		class="relative w-full min-h-[328px] m-0 [--accent:#4aa5f0] [--card-bg:#1d233c] [--text:#ffffff] [--muted:#afb6d2]"
	>
		<div class="relative w-full h-full z-[2]">
			<NuxtLink
				class="relative block min-h-full [--notchSize:18px] p-5 pb-12 md:p-7 lg:p-8 bg-[var(--card-bg)] no-underline text-[color:var(--text)] [clip-path:polygon(0%_var(--notchSize),_0_0,_calc(100%_-_var(--notchSize))_0,_100%_var(--notchSize),_100%_calc(100%_-_var(--notchSize)),_100%_100%,_var(--notchSize)_100%,_0_calc(100%_-_var(--notchSize)))]"
				to="/sample"
				target="_blank"
			>
				<div class="flex items-center mb-[5%]">
					<img src="/old_favicon.ico" alt="" class="w-[17px] h-[17px] mr-[10px]" />
					<h3 class="font-[grotisque,sans-serif] text-[19.5px] leading-[19px] text-[color:var(--text)]">{{ t('landing.services.cards.shadowTitle') }}</h3>
				</div>
				<p class="text-[color:var(--muted)] text-[14.5px] leading-[18px] text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</p>
				<span class="inline-flex items-center px-[4.7%] pr-[3.7%] py-[0.8%] text-white bg-[var(--accent)] absolute bottom-[2vw] right-[2.5vw] rounded-full">view more</span>
			</NuxtLink>
		</div>
	</section>

</template>

<script setup>
const { t } = useI18n()
</script>



<style scoped>
#serviceCard::before,
#serviceCard::after {
	position: absolute;
	content: '';
	background: var(--accent);
	transform-origin: 0 0;
}

#serviceCard::before {
	top: 12px;
	left: 98%;
	width: 200%;
	height: 200%;
	transform: skewY(45deg);
}

#serviceCard::after {
	top: 98%;
	left: 10px;
	width: 200%;
	height: 200%;
	transform: skewX(45deg);
}

/* MOBILE */
@media (max-width: 767px) {
  #serviceCard::before,
  #serviceCard::after {
    content: none;   /* <-- spariscono SOLO loro */
  }
}
</style>
