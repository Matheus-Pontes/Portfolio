<template>
  <section
    id="projetos"
    aria-label="Projetos Desenvolvidos por Matheus Pontes"
    class="w-full h-full overflow-y-auto overflow-x-hidden select-text"
  >
    <div
      class="min-h-full w-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-28 sm:pb-32"
    >
      <div class="max-w-6xl w-full flex flex-col gap-8">
        
        <!-- Section Header -->
        <div class="text-center flex flex-col items-center">
          <span
            class="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-verdeDark/40 border border-verdeLight/30 text-verdeLight text-xs font-mono uppercase tracking-widest mb-2 shadow-[0_0_12px_rgba(0,179,126,0.15)]"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-verdeLight animate-pulse"></span>
            03 // Portfólio & Entregas
          </span>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Projetos em Destaque
          </h2>
          <p class="text-gray-300 text-xs sm:text-sm max-w-xl mx-auto mt-2 leading-relaxed">
            Aplicações web modernas, interfaces reativas, integração de visão computacional e protótipos de hardware IoT.
          </p>

          <!-- Filtros de Categorias Estilo Apple Glass -->
          <div class="w-full max-w-md mt-4 sm:mt-5 overflow-x-auto scrollbar-none py-1">
            <div
              role="tablist"
              aria-label="Filtrar projetos por categoria"
              class="apple-glass p-1 rounded-full inline-flex sm:flex items-center justify-between mx-auto"
            >
              <button
                v-for="cat in categories"
                :key="cat.id"
                type="button"
                role="tab"
                :aria-selected="activeCategory === cat.id"
                @click="activeCategory = cat.id"
                class="px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer whitespace-nowrap active:scale-95 focus-visible:ring-2 focus-visible:ring-azul focus-visible:outline-none"
                :class="[
                  activeCategory === cat.id
                    ? 'apple-glass-pill text-white font-semibold shadow-[0_0_16px_rgba(0,179,126,0.3)]'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                ]"
              >
                {{ cat.label }}
              </button>
            </div>
          </div>
        </div>

        <!-- PROJETO EM DESTAQUE DO GITHUB: BlinkLed com Gestos -->
        <div
          v-if="activeCategory === 'todos' || activeCategory === 'iot'"
          class="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-pretoLight via-[#101915] to-verdeDark/20 border-2 border-verdeLight/50 shadow-[0_0_35px_rgba(0,179,126,0.18)] hover:border-verdeLight transition-all duration-500 overflow-hidden"
        >
          <!-- Background Glow Accent -->
          <div
            class="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-verdeLight/10 blur-3xl pointer-events-none"
          ></div>

          <div class="relative z-10 flex flex-col lg:flex-row items-center gap-8 justify-between">
            <!-- Text and Highlights -->
            <div class="flex-1 text-left">
              <div class="flex flex-wrap items-center gap-2 mb-3">
                <span
                  class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-verde text-white text-xs font-bold tracking-wide shadow-md"
                >
                  <Icon name="star" className="w-3.5 h-3.5 text-yellow-300" />
                  Destaque no GitHub
                </span>
                <span
                  class="px-2.5 py-0.5 rounded-full bg-azul/15 text-azul border border-azul/30 text-xs font-medium"
                >
                  Visão Computacional & IoT
                </span>
              </div>

              <h3 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
                BlinkLed com Gestos
              </h3>

              <p class="text-gray-300 text-sm sm:text-base leading-relaxed mt-2.5">
                Projeto interativo que une inteligência artificial e hardware: utiliza visão computacional para reconhecer gestos manuais via câmera em tempo real e controlar o acionamento de LEDs e atuadores físicos em um microcontrolador Arduino.
              </p>

              <!-- Highlights Técnicos -->
              <div class="mt-4 p-4 rounded-2xl bg-black/40 border border-white/5 space-y-2">
                <div class="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                  <span class="text-verdeLight font-bold">🖐️ Rastreamento em Tempo Real:</span>
                  <span>Mapeamento de marcos das mãos via webcam com detecção precisa de gestos.</span>
                </div>
                <div class="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                  <span class="text-azul font-bold">⚡ Comunicação Serial & Arduino:</span>
                  <span>Envio instantâneo de sinais para a placa física comutar estados dos circuitos.</span>
                </div>
                <div class="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                  <span class="text-emerald-400 font-bold">🎥 Demonstração Gravada:</span>
                  <span>Vídeo real demonstrativo integrado com reprodução direta no site.</span>
                </div>
              </div>

              <!-- Tech Badges -->
              <div class="flex flex-wrap gap-2 mt-4">
                <span class="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-gray-200">
                  Python & OpenCV
                </span>
                <span class="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-gray-200">
                  MediaPipe
                </span>
                <span class="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-gray-200">
                  Arduino / C++
                </span>
                <span class="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-gray-200">
                  Comunicação Serial
                </span>
                <span class="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-gray-200">
                  IoT & Hardware
                </span>
              </div>

              <!-- Action Links -->
              <div class="flex flex-wrap items-center gap-3 mt-6">
                <!-- Botão GitHub -->
                <a
                  href="https://github.com/Matheus-Pontes/BlinkLedWithGestures"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-pretoLight hover:bg-white/10 text-white font-semibold text-xs sm:text-sm transition-all duration-200 hover:scale-105 border border-white/15 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
                  aria-label="Ver código fonte do BlinkLed com Gestos no GitHub (abre em nova aba)"
                >
                  <Icon name="github" className="w-4 h-4" />
                  <span>Código no GitHub</span>
                </a>
              </div>
            </div>

            <!-- Mockup Visual Interativo com Play Button -->
            <div
              class="w-full lg:w-80 group/mockup relative rounded-2xl overflow-hidden border border-verdeLight/40 bg-black/60 shadow-2xl cursor-pointer"
              @click="$emit('openVideo')"
              title="Clique para assistir ao vídeo do projeto"
            >
              <div class="relative aspect-video w-full overflow-hidden">
                <img
                  src="/img/blinkled.png"
                  alt="Prévia do projeto BlinkLed com Gestos"
                  loading="lazy"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover/mockup:scale-105"
                />

                <!-- Play Overlay Backdrop -->
                <div
                  class="absolute inset-0 bg-black/40 group-hover/mockup:bg-black/25 flex flex-col items-center justify-center transition-all duration-300"
                >
                  <div
                    class="w-16 h-16 rounded-full bg-verde/90 group-hover/mockup:bg-verdeLight text-white flex items-center justify-center shadow-glow-verde transform transition-transform duration-300 group-hover/mockup:scale-110"
                  >
                    <Icon name="play" className="w-7 h-7 ml-0.5" />
                  </div>
                  <span
                    class="mt-3 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-[11px] font-medium text-white border border-white/10"
                  >
                    Assistir Demonstração
                  </span>
                </div>
              </div>

              <div class="p-3 bg-pretoLight/90 border-t border-white/10 text-center">
                <p class="text-xs font-semibold text-white">Demonstração Interativa Gravada</p>
                <p class="text-[11px] text-gray-400 mt-0.5">Clique para abrir o player de vídeo</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Grid de Outros Projetos Relevantes do GitHub -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div
            v-for="project in filteredProjects"
            :key="project.title"
            class="card-perspective group relative flex flex-col h-full"
          >
            <div
              class="card-inner relative w-full h-full rounded-2xl border border-verde/40 bg-pretoLight/90 backdrop-blur-md overflow-hidden flex flex-col justify-between shadow-lg hover:border-verdeLight transition-all duration-300"
            >
              <!-- Project Image / Banner -->
              <div class="relative h-36 w-full overflow-hidden bg-black/60 border-b border-verde/20">
                <img
                  :src="project.image"
                  :alt="'Imagem do projeto ' + project.title"
                  loading="lazy"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span
                  class="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-sm text-[11px] font-mono text-verdeLight border border-verdeLight/30"
                >
                  {{ project.categoryLabel }}
                </span>
              </div>

              <!-- Project Details -->
              <div class="p-4 flex flex-col flex-1 justify-between gap-3 text-left">
                <div>
                  <h3 class="text-white font-bold text-base group-hover:text-verdeLight transition-colors">
                    {{ project.title }}
                  </h3>
                  <p class="text-gray-400 text-xs leading-relaxed mt-1 line-clamp-3">
                    {{ project.description }}
                  </p>
                </div>

                <!-- Tags -->
                <div class="flex flex-wrap gap-1.5 pt-1">
                  <span
                    v-for="tag in project.tags"
                    :key="tag"
                    class="text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 text-gray-300 border border-white/5"
                  >
                    {{ tag }}
                  </span>
                </div>

                <!-- Action Links -->
                <div class="flex items-center gap-2 pt-2 border-t border-white/5">
                  <a
                    v-if="project.codeUrl"
                    :href="project.codeUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex-1 py-1.5 text-center bg-white/5 hover:bg-verde hover:text-white text-gray-200 text-xs font-semibold rounded-lg border border-white/10 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-verde focus-visible:outline-none"
                    :aria-label="'Ver código fonte de ' + project.title + ' no GitHub (abre em nova aba)'"
                  >
                    Código
                  </a>

                  <a
                    v-if="project.liveUrl"
                    :href="project.liveUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex-1 py-1.5 text-center bg-verde hover:bg-verdeLight text-white text-xs font-semibold rounded-lg shadow transition-all duration-200 focus-visible:ring-2 focus-visible:ring-verdeLight focus-visible:outline-none"
                    :aria-label="'Acessar demonstração ao vivo de ' + project.title + ' (abre em nova aba)'"
                  >
                    Acessar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Repositórios do GitHub -->
        <div class="text-center pt-4">
          <a
            href="https://github.com/Matheus-Pontes?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-pretoLight hover:bg-verdeDark/30 text-gray-200 hover:text-white border border-gray-700 hover:border-verdeLight font-medium text-xs sm:text-sm transition-all duration-300 hover:scale-105 group focus-visible:ring-2 focus-visible:ring-azul focus-visible:outline-none"
            aria-label="Explorar mais repositórios no perfil do GitHub de Matheus Pontes (abre em nova aba)"
          >
            <Icon name="plus-circle" className="w-4 h-4 text-verdeLight group-hover:rotate-90 transition-transform duration-300" />
            <span>Ver mais projetos no perfil do GitHub</span>
          </a>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import Icon from './icons/Icon.vue'

defineEmits(['openVideo'])

const activeCategory = ref('todos')

const categories = [
  { id: 'todos', label: 'Todos os Projetos' },
  { id: 'web', label: 'Aplicações Web' },
  { id: 'iot', label: 'IoT & Hardware' },
]

const otherProjects = [
  {
    title: 'Gratitude Doçuras Artesanais',
    description: 'Landing page e catálogo comercial desenvolvido para confeitaria artesanal, com apresentação de produtos, cardápio digital e canais de atendimento.',
    category: 'web',
    categoryLabel: 'Web & E-Commerce',
    image: '/img/gratitude-docuras.png',
    codeUrl: 'https://github.com/Matheus-Pontes/GratitudeDocurasArtesanais',
    liveUrl: 'https://gratitude-docuras-artesanais.vercel.app/',
    tags: ['Front-end', 'UI & UX', 'Cardápio Digital', 'Responsivo'],
  },
  {
    title: 'PianoWeb ESP8266',
    description: 'Simulador de piano online conectado via servidor web a um microcontrolador ESP8266 e buzzer para tocar notas sonoras.',
    category: 'iot',
    categoryLabel: 'IoT & Web',
    image: '/img/_pianoWEB.png',
    codeUrl: 'https://github.com/Matheus-Pontes/PianoWebEsp8266',
    tags: ['ESP8266', 'WebSockets', 'HTML/JS', 'Hardware'],
  },
  {
    title: 'Memory Game',
    description: 'Jogo da memória clássico construído com foco em estado dinâmico, animações de cartas e design responsivo.',
    category: 'web',
    categoryLabel: 'Web App',
    image: '/img/memory-card-game.png',
    codeUrl: 'https://github.com/Matheus-Pontes/Memory-Game',
    liveUrl: 'https://memory-game10.vercel.app/',
    tags: ['JavaScript', 'CSS3', 'Vercel Deploy', 'Game UI'],
  },
  {
    title: 'Formatador RTF',
    description: 'Formatador de RICH TEXT (RTF) online, permitindo estilização de texto e a copia do conteúdo formatado para uso em editores de texto compatíveis com RTF.',
    category: 'web',
    categoryLabel: 'Web App',
    image: '/img/formatador-rtf.png',
    codeUrl: 'https://github.com/Matheus-Pontes/Formatador-RTF',
    liveUrl: 'https://matheus-pontes.github.io/Formatador-RTF/',
    tags: ['HTML', 'CSS3', 'Responsividade'],
  },
]

const filteredProjects = computed(() => {
  if (activeCategory.value === 'todos') {
    return otherProjects
  }
  return otherProjects.filter((p) => p.category === activeCategory.value)
})
</script>
