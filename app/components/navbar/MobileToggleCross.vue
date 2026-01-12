<template>
  <button
    type="button"
    class="flex h-10 w-10 items-center justify-center rounded-md border border-slate-800 bg-slate-900 text-slate-100 transition hover:bg-slate-800"
    :aria-expanded="open"
    :aria-controls="ariaControls"
    :aria-label="open ? t('navbar.mobile.close') : t('navbar.mobile.open')"
    @click="$emit('toggle')"
  >
    <span class="sr-only">{{ open ? t('navbar.mobile.close') : t('navbar.mobile.open') }}</span>
    <div class="hamburger pointer-events-none">
      <div :class="lineClasses('line1')"></div>
      <div :class="lineClasses('line2')"></div>
      <div :class="lineClasses('line3')"></div>
    </div>
  </button>
</template>

<script setup>
const { t } = useI18n()

const props = defineProps({
  open: {
    type: Boolean,
    required: true,
  },
  ariaControls: {
    type: String,
    default: undefined,
  },
})

defineEmits(['toggle'])

const lineClasses = (line) => [line, 'divLinea', { active: props.open }]
</script>

<style scoped>
.hamburger {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 24px;
  height: 18px;
}
.divLinea {
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: white;
  height: 3px;
  width: 22px;
  border-radius: 999px;
  transform-origin: center;
  transition: transform 0.25s ease, opacity 0.2s ease;
}

.line1 {
  transform: translateY(-6px);
}

.line2 {
  transform: translateY(0);
}

.line3 {
  transform: translateY(6px);
}

.line1.active {
  transform: translateY(0) rotate(45deg);
}

.line2.active {
  opacity: 0;
}

.line3.active {
  transform: translateY(0) rotate(-45deg);
}
</style>
