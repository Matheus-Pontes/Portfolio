<template>
  <div class="relative w-screen h-screen overflow-hidden bg-preto text-white font-roboto select-none">
    <!-- Link de Acessibilidade: Pular para Conteúdo -->
    <a
      href="#conteudo-principal"
      class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-verde focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-azul"
    >
      Pular para o conteúdo principal
    </a>

    <!-- Fundo Ambiental com Gradientes Vivos -->
    <div class="ambient-mesh" aria-hidden="true">
      <div class="ambient-blob-1"></div>
      <div class="ambient-blob-2"></div>
    </div>

    <!-- Barra de Progresso Superior Discreta com Glassmorphism Apple -->
    <header class="fixed top-4 left-0 right-0 z-30 flex items-center justify-between px-4 sm:px-8 pointer-events-none">
      <div class="pointer-events-auto apple-glass px-2 py-2 rounded-full flex items-center gap-2">
        <span class="text-xs font-mono font-bold tracking-widest text-verdeLight bg-verdeDark/40 px-2 py-0.5 rounded-xl border border-verdeLight/30">
          Dev Pontes
        </span>
        <span class="text-xs text-white/90 font-medium hidden sm:inline-block">
          Portfólio
        </span>
      </div>

      <!-- Indicadores de Pontos (Dots) das Seções -->
      <nav aria-label="Progresso das seções" class="pointer-events-auto apple-glass flex items-center gap-2 px-3.5 py-2 rounded-full">
        <button
          v-for="(title, idx) in sectionTitles"
          :key="title"
          type="button"
          :aria-label="'Navegar para seção ' + title"
          :aria-current="activeIndex === idx ? 'step' : false"
          @click="goToSection(idx)"
          class="h-2 rounded-full transition-all duration-300 focus-visible:ring-2 focus-visible:ring-azul focus-visible:outline-none cursor-pointer"
          :class="[
            activeIndex === idx
              ? 'w-6 bg-verdeLight shadow-[0_0_10px_#00b37e]'
              : 'w-2 bg-white/30 hover:bg-white/60'
          ]"
        ></button>
      </nav>
    </header>

    <!-- Botões de Navegação Lateral Acessíveis (Desktop) -->
    <div class="hidden md:flex items-center justify-between fixed inset-y-0 left-0 right-0 px-4 pointer-events-none z-30">
      <!-- Botão Anterior -->
      <button
        v-if="activeIndex > 0"
        type="button"
        @click="goPrev"
        aria-label="Ir para a seção anterior"
        class="pointer-events-auto apple-glass p-3 rounded-full text-white/80 hover:text-white transition-all duration-300 hover:scale-110 active:scale-95 shadow-2xl cursor-pointer focus-visible:ring-2 focus-visible:ring-azul focus-visible:outline-none"
      >
        <Icon name="chevron-left" className="w-5 h-5" />
      </button>
      <div v-else class="w-11"></div>

      <!-- Botão Próximo -->
      <button
        v-if="activeIndex < 3"
        type="button"
        @click="goNext"
        aria-label="Ir para a próxima seção"
        class="pointer-events-auto apple-glass p-3 rounded-full text-white/80 hover:text-white transition-all duration-300 hover:scale-110 active:scale-95 shadow-2xl cursor-pointer focus-visible:ring-2 focus-visible:ring-azul focus-visible:outline-none"
      >
        <Icon name="chevron-right" className="w-5 h-5" />
      </button>
      <div v-else class="w-11"></div>
    </div>

    <!-- Conteúdo Principal com Swiper -->
    <main id="conteudo-principal" class="w-full h-full relative z-10">
      <Swiper
        :speed="800"
        :grab-cursor="true"
        :space-between="0"
        :slides-per-view="1"
        class="w-full h-full"
        @swiper="onSwiperInit"
        @slide-change="onSlideChange"
      >
        <!-- Slide 1: Sobre -->
        <SwiperSlide
          role="region"
          aria-roledescription="slide"
          aria-label="1 de 4: Sobre Mim"
          class="w-full h-full flex items-center justify-center"
        >
          <AboutSection @navigate-to="goToSection" />
        </SwiperSlide>

        <!-- Slide 2: Habilidades -->
        <SwiperSlide
          role="region"
          aria-roledescription="slide"
          aria-label="2 de 4: Habilidades Técnicas"
          class="w-full h-full flex items-center justify-center"
        >
          <SkillsSection />
        </SwiperSlide>

        <!-- Slide 3: Projetos -->
        <SwiperSlide
          role="region"
          aria-roledescription="slide"
          aria-label="3 de 4: Projetos e Entregas"
          class="w-full h-full flex items-center justify-center"
        >
          <ProjectsSection @open-video="isVideoModalOpen = true" />
        </SwiperSlide>

        <!-- Slide 4: Contato -->
        <SwiperSlide
          role="region"
          aria-roledescription="slide"
          aria-label="4 de 4: Contato"
          class="w-full h-full flex items-center justify-center"
        >
          <ContactSection />
        </SwiperSlide>
      </Swiper>
    </main>

    <!-- Barra de Navegação Inferior (Thumbnails com Ícones) -->
    <NavbarThumbs
      :active-index="activeIndex"
      @change-section="goToSection"
    />

    <!-- Modal de Demonstração em Vídeo -->
    <VideoModal
      :is-open="isVideoModalOpen"
      @close="isVideoModalOpen = false"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

import Icon from './components/icons/Icon.vue'
import SwipeIndicator from './components/SwipeIndicator.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'
import NavbarThumbs from './components/NavbarThumbs.vue'
import VideoModal from './components/VideoModal.vue'

const activeIndex = ref(0)
const isVideoModalOpen = ref(false)
const showSwipeHint = ref(true)
let swiperInstance = null

const sectionTitles = ['Sobre', 'Habilidades', 'Projetos', 'Contato']

const onSwiperInit = (swiper) => {
  swiperInstance = swiper
}

const onSlideChange = (swiper) => {
  activeIndex.value = swiper.activeIndex
  if (swiper.activeIndex > 0) {
    showSwipeHint.value = false
  }
}

const goToSection = (index) => {
  if (swiperInstance) {
    swiperInstance.slideTo(index)
  }
}

const goPrev = () => {
  if (swiperInstance && activeIndex.value > 0) {
    swiperInstance.slidePrev()
  }
}

const goNext = () => {
  if (swiperInstance && activeIndex.value < 3) {
    swiperInstance.slideNext()
  }
}

const handleKeydown = (e) => {
  if (isVideoModalOpen.value) return
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
    goNext()
  } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
    goPrev()
  } else if (e.key === 'Home') {
    goToSection(0)
  } else if (e.key === 'End') {
    goToSection(3)
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>
