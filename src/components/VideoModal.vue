<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity duration-300"
      @click.self="close"
    >
      <div
        class="bg-pretoLight border border-verde/40 rounded-3xl p-4 sm:p-5 w-full max-w-2xl shadow-2xl flex flex-col gap-3 relative animate-in fade-in zoom-in-95 duration-200"
      >
        <div class="flex items-center justify-between pb-1 border-b border-white/10">
          <h3 id="video-modal-title" class="text-white font-bold text-sm sm:text-base flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-verdeLight animate-ping"></span>
            Demonstração: BlinkLed com Gestos
          </h3>
          <button
            type="button"
            @click="close"
            aria-label="Fechar modal de vídeo"
            class="flex items-center gap-1.5 px-3 py-1.5 bg-red-700/80 hover:bg-red-700 text-white rounded-xl text-xs sm:text-sm font-semibold transition-colors duration-200 cursor-pointer shadow focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
          >
            <Icon name="close" className="w-4 h-4" />
            <span>Fechar</span>
          </button>
        </div>

        <div class="w-full rounded-2xl overflow-hidden bg-black aspect-video flex items-center justify-center shadow-inner">
          <video
            ref="videoRef"
            controls
            autoplay
            class="w-full h-full object-contain rounded-2xl"
          >
            <source src="/gifs/Video blink led with gestures2.mp4" type="video/mp4" />
            Seu navegador não suporta vídeos HTML5.
          </video>
        </div>

        <p class="text-gray-400 text-xs text-center">
          Dica: Pressione <kbd class="px-1.5 py-0.5 rounded bg-black/50 border border-white/20 text-gray-200 font-mono">ESC</kbd> para fechar o vídeo a qualquer momento.
        </p>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import Icon from './icons/Icon.vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['close'])
const videoRef = ref(null)

const close = () => {
  if (videoRef.value) {
    videoRef.value.pause()
  }
  emit('close')
}

const handleKeydown = (e) => {
  if (e.key === 'Escape' && props.isOpen) {
    close()
  }
}

watch(
  () => props.isOpen,
  (val) => {
    if (!val && videoRef.value) {
      videoRef.value.pause()
    }
  }
)

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>
