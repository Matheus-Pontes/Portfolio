<template>
  <div
    v-if="visible"
    class="auxiliar-visitante fixed top-1/2 -translate-y-1/2 right-[2%] z-30 text-white pointer-events-none transition-opacity duration-500"
    :class="{ 'opacity-0': !showHint, 'opacity-100': showHint }"
    title="Arraste para o lado"
  >
    <div class="animate-pulse">
      <Icon name="hand-swipe" className="w-8 h-8 md:w-10 md:h-10 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]" />
    </div>
  </div>
</template>

<script setup>
import Icon from './icons/Icon.vue'

defineProps({
  visible: {
    type: Boolean,
    default: true,
  },
  showHint: {
    type: Boolean,
    default: true,
  },
})
</script>

