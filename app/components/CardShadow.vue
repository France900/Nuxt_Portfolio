<template>

	<section id="serviceCard">
		<div class="carta_container z-[2]">
			<NuxtLink class="carta" to="/sample" target="_blank">
				<div class="flex items-center mb-[5%]">
					<img src="/old_favicon.ico" alt="" class="w-[17px] h-[17px] mr-[10px]" />
					<h3 class="font-[grotisque,sans-serif] text-[19.5px] leading-[19px] text-[color:var(--text)]">TITOLO</h3>
				</div>
				<p class="text-[color:var(--muted)] text-[14.5px] leading-[18px] text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</p>
				<span class="inline-flex items-center px-[4.7%] pr-[3.7%] py-[0.8%] text-white bg-[var(--accent)] absolute bottom-[2vw] right-[2.5vw] rounded-full">view more</span>
			</NuxtLink>
		</div>
	</section>

</template>



<style scoped>
#serviceCard {
	--accent: #4aa5f0;
	--card-bg: #1d233c;
	--text: #ffffff;
	--muted: #afb6d2;
	position: relative;
	width: 100%;
	min-height: 328px; /* allineato alle card servizi */
	margin: 0;
}

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

.carta_container {
	position: relative;
	width: 100%;
	height: 100%;
}

.carta {
	--notchSize: 18px;
	position: relative;
	padding: 1.7vw 2.5vw;
	background-color: var(--card-bg);
	text-decoration: none;
	color: var(--text);
	min-height: 100%;
	display: flex;
	flex-direction: column;
	gap: 12px;
	clip-path: polygon(0% var(--notchSize), 0 0, calc(100% - var(--notchSize)) 0, 100% var(--notchSize), 100% calc(100% - var(--notchSize)), 100% 100%, var(--notchSize) 100%, 0 calc(100% - var(--notchSize)));
	display: block;
}
</style>
