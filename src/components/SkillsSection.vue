<template>
  <section
    id="skills"
    aria-label="Habilidades Técnicas e Tecnologias"
    class="w-full h-full overflow-y-auto overflow-x-hidden select-text"
  >
    <!-- Wrapper com min-h-full que centraliza quando cabe e rola do topo com segurança quando transborda -->
    <div
      class="min-h-full w-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-28 sm:pb-32"
    >
      <div class="w-full max-w-5xl flex flex-col gap-6 sm:gap-7">
        
        <!-- Section Header -->
        <div class="text-center flex flex-col items-center">
          <span
            class="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-verdeDark/40 border border-verdeLight/30 text-verdeLight text-xs font-mono uppercase tracking-widest mb-2 shadow-[0_0_12px_rgba(0,179,126,0.15)]"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-verdeLight animate-pulse"></span>
            02 // Tech Stack & Especialidades
          </span>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Habilidades & Tecnologias
          </h2>
          <p class="text-gray-300 text-xs sm:text-sm max-w-lg mx-auto mt-2 leading-relaxed">
            Stack tecnológica moderna e ferramentas que utilizo no dia a dia para desenvolver produtos de alto impacto para web, mobile e IoT.
          </p>

          <!-- Filtro Estilo Apple Glass Segmented Control -->
          <div class="w-full max-w-2xl mt-4 sm:mt-5 overflow-x-auto scrollbar-none py-1">
            <div
              role="tablist"
              aria-label="Filtrar categorias de habilidades"
              class="apple-glass p-1 rounded-full flex items-center justify-between mx-auto"
            >
              <button
                v-for="cat in skillCategories"
                :key="cat.id"
                type="button"
                role="tab"
                :aria-selected="selectedCategory === cat.id"
                @click="selectedCategory = cat.id"
                class="px-3 sm:px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer whitespace-nowrap active:scale-95 flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-azul focus-visible:outline-none"
                :class="[
                  selectedCategory === cat.id
                    ? 'apple-glass-pill text-white font-semibold shadow-[0_0_16px_rgba(0,179,126,0.3)]'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                ]"
              >
                <span>{{ cat.label }}</span>
                <span
                  class="text-[10px] px-1.5 py-0.2 rounded-full font-mono"
                  :class="[
                    selectedCategory === cat.id
                      ? 'bg-verdeLight text-preto font-bold'
                      : 'bg-white/10 text-white/70'
                  ]"
                >
                  {{ cat.count }}
                </span>
              </button>
            </div>
          </div>
        </div>

        <!-- VISÃO GERAL (TODAS) EM BENTO GRID EQUILIBRADO -->
        <div v-if="selectedCategory === 'all'" class="flex flex-col gap-4 sm:gap-5">
          
          <!-- Bento Card 1 (Destaque Principal): Front-end & Mobile -->
          <div
            class="p-5 sm:p-7 rounded-3xl bg-pretoLight/85 border border-verdeLight/30 shadow-lg hover:border-verdeLight hover:shadow-[0_0_30px_rgba(0,179,126,0.2)] transition-all duration-300 backdrop-blur-md relative overflow-hidden"
          >
            <!-- Background Glow Accent -->
            <div
              class="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-verdeLight/10 blur-3xl pointer-events-none"
            ></div>

            <div class="relative z-10 flex flex-col gap-4">
              <!-- Header do Card -->
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
                <div class="flex items-center gap-2.5">
                  <div class="p-2 rounded-xl bg-verdeDark/40 text-verdeLight border border-verdeLight/30">
                    <span class="w-3 h-3 rounded-full bg-verdeLight inline-block animate-pulse"></span>
                  </div>
                  <div>
                    <h3 class="text-white text-base sm:text-lg font-bold">
                      Front-end & Mobile
                    </h3>
                    <p class="text-gray-400 text-xs">
                      Core Stack • SPAs reativas e aplicativos nativos/híbridos publicados nas lojas
                    </p>
                  </div>
                </div>

                <span class="self-start sm:self-auto text-[11px] font-mono px-2.5 py-1 rounded-full bg-verdeDark/30 text-verdeLight border border-verdeLight/20">
                  8 Tecnologias Principais
                </span>
              </div>

              <!-- Grid Responsiva de Chips (1 coluna no mobile para não cortar texto, 2 no tablet, 4 no desktop) -->
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 pt-1">
                <div
                  v-for="skill in frontendSkills"
                  :key="skill.name"
                  class="group/item flex items-center gap-3 p-2.5 sm:p-3 rounded-2xl bg-black/40 border border-white/5 hover:border-verdeLight/40 hover:bg-verdeDark/20 transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-verdeLight focus-visible:outline-none"
                  tabindex="0"
                  :aria-label="skill.name + ': ' + skill.tag"
                >
                  <img
                    :src="skill.icon"
                    :alt="skill.name"
                    loading="lazy"
                    class="w-7 h-7 sm:w-8 sm:h-8 object-contain shrink-0 group-hover/item:scale-110 transition-transform"
                  />
                  <div class="min-w-0 flex-1">
                    <p class="text-xs sm:text-sm font-bold text-white group-hover/item:text-verdeLight transition-colors">
                      {{ skill.name }}
                    </p>
                    <p class="text-[11px] text-gray-400">
                      {{ skill.tag }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Bento Linha 2: 3 Cards Perfeitamente Equilibrados (Backend, Dados, Hardware) -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            
            <!-- Card 2: Backend & Serviços -->
            <div
              class="p-5 sm:p-6 rounded-3xl bg-pretoLight/85 border border-azul/30 shadow-lg hover:border-azul hover:shadow-[0_0_24px_rgba(129,216,247,0.2)] transition-all duration-300 backdrop-blur-md flex flex-col justify-between"
            >
              <div>
                <div class="flex items-center justify-between mb-2">
                  <h3 class="text-white text-base sm:text-lg font-bold flex items-center gap-2">
                    <span class="w-2.5 h-2.5 rounded-full bg-azul animate-pulse"></span>
                    Backend & APIs
                  </h3>
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-azul/10 text-azul border border-azul/20">
                    Serviços
                  </span>
                </div>
                <p class="text-gray-400 text-xs mb-4">
                  APIs escaláveis, microsserviços e integrações corporativas.
                </p>
              </div>

              <!-- Lista de Chips -->
              <div class="flex flex-col gap-2">
                <div
                  v-for="skill in backendSkills"
                  :key="skill.name"
                  class="group/item flex items-center gap-3 p-2.5 rounded-2xl bg-black/40 border border-white/5 hover:border-azul/40 hover:bg-azul/10 transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-azul focus-visible:outline-none"
                  tabindex="0"
                  :aria-label="skill.name + ': ' + skill.tag"
                >
                  <img
                    :src="skill.icon"
                    :alt="skill.name"
                    loading="lazy"
                    class="w-7 h-7 object-contain shrink-0 group-hover/item:scale-110 transition-transform"
                  />
                  <div class="min-w-0 flex-1">
                    <p class="text-xs sm:text-sm font-bold text-white group-hover/item:text-azul transition-colors">
                      {{ skill.name }}
                    </p>
                    <p class="text-[11px] text-gray-400">
                      {{ skill.tag }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Card 3: Banco de Dados -->
            <div
              class="p-5 sm:p-6 rounded-3xl bg-pretoLight/85 border border-verdeLight/30 shadow-lg hover:border-verdeLight hover:shadow-[0_0_24px_rgba(0,179,126,0.18)] transition-all duration-300 backdrop-blur-md flex flex-col justify-start"
            >
              <div>
                <div class="flex items-center justify-between mb-2">
                  <h3 class="text-white text-base sm:text-lg font-bold flex items-center gap-2">
                    <span class="w-2.5 h-2.5 rounded-full bg-verde animate-pulse"></span>
                    Banco de Dados
                  </h3>
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-verde/15 text-verdeLight border border-verde/20">
                    Dados
                  </span>
                </div>
                <p class="text-gray-400 text-xs mb-4">
                  Modelagem relacional, consultas estruturadas e integridade.
                </p>
              </div>

              <!-- Lista de Chips -->
              <div class="flex flex-col gap-2">
                <div
                  v-for="skill in databaseSkills"
                  :key="skill.name"
                  class="group/item flex items-center gap-3 p-2.5 rounded-2xl bg-black/40 border border-white/5 hover:border-verdeLight/40 hover:bg-verdeDark/20 transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-verdeLight focus-visible:outline-none"
                  tabindex="0"
                  :aria-label="skill.name + ': ' + skill.tag"
                >
                  <img
                    :src="skill.icon"
                    :alt="skill.name"
                    loading="lazy"
                    class="w-7 h-7 object-contain shrink-0 group-hover/item:scale-110 transition-transform"
                  />
                  <div class="min-w-0 flex-1">
                    <p class="text-xs sm:text-sm font-bold text-white group-hover/item:text-verdeLight transition-colors">
                      {{ skill.name }}
                    </p>
                    <p class="text-[11px] text-gray-400">
                      {{ skill.tag }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Card 4: Microcontroladores & IoT -->
            <div
              class="p-5 sm:p-6 rounded-3xl bg-pretoLight/85 border border-emerald-500/30 shadow-lg hover:border-emerald-400 hover:shadow-[0_0_24px_rgba(52,211,153,0.2)] transition-all duration-300 backdrop-blur-md flex flex-col justify-start"
            >
              <div>
                <div class="flex items-center justify-between mb-2">
                  <h3 class="text-white text-base sm:text-lg font-bold flex items-center gap-2">
                    <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    IoT & Hardware
                  </h3>
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/20">
                    Embarcados
                  </span>
                </div>
                <p class="text-gray-400 text-xs mb-4">
                  Automação, sensores, microcontroladores e módulos Wi-Fi.
                </p>
              </div>

              <!-- Lista de Chips -->
              <div class="flex flex-col gap-2">
                <div
                  v-for="skill in hardwareSkills"
                  :key="skill.name"
                  class="group/item flex items-center gap-3 p-2.5 rounded-2xl bg-black/40 border border-white/5 hover:border-emerald-400/40 hover:bg-emerald-950/30 transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
                  tabindex="0"
                  :aria-label="skill.name + ': ' + skill.tag"
                >
                  <img
                    :src="skill.icon"
                    :alt="skill.name"
                    loading="lazy"
                    class="w-7 h-7 object-contain shrink-0 group-hover/item:scale-110 transition-transform"
                  />
                  <div class="min-w-0 flex-1">
                    <p class="text-xs sm:text-sm font-bold text-white group-hover/item:text-emerald-300 transition-colors">
                      {{ skill.name }}
                    </p>
                    <p class="text-[11px] text-gray-400">
                      {{ skill.tag }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <!-- VISÃO FILTRADA (QUANDO UMA CATEGORIA ESPECÍFICA É SELECIONADA) -->
        <div v-else class="w-full animate-in fade-in duration-300">
          <div
            class="p-6 sm:p-8 rounded-3xl bg-pretoLight/90 border border-verdeLight/40 shadow-2xl backdrop-blur-xl relative overflow-hidden"
          >
            <!-- Header da Categoria Selecionada -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4 mb-6">
              <div>
                <span class="text-xs font-mono uppercase text-verdeLight tracking-widest">
                  Categoria Selecionada
                </span>
                <h3 class="text-xl sm:text-2xl font-extrabold text-white mt-1">
                  {{ currentCategoryData.title }}
                </h3>
                <p class="text-gray-300 text-xs sm:text-sm mt-1">
                  {{ currentCategoryData.description }}
                </p>
              </div>

              <button
                type="button"
                @click="selectedCategory = 'all'"
                class="self-start sm:self-center px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/15 text-xs font-medium transition-colors cursor-pointer"
              >
                &larr; Ver todas as categorias
              </button>
            </div>

            <!-- Grid Ampla de Tecnologias Filtradas -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              <div
                v-for="skill in currentCategoryData.skills"
                :key="skill.name"
                class="group flex items-center gap-3.5 p-3.5 rounded-2xl bg-black/50 border border-white/10 hover:border-verdeLight/50 hover:bg-verdeDark/20 transition-all duration-200 cursor-pointer shadow-md"
              >
                <img
                  :src="skill.icon"
                  :alt="skill.name"
                  loading="lazy"
                  class="w-8 h-8 object-contain shrink-0 group-hover:scale-110 transition-transform"
                />
                <div class="min-w-0 flex-1">
                  <p class="text-sm font-bold text-white group-hover:text-verdeLight transition-colors">
                    {{ skill.name }}
                  </p>
                  <p class="text-xs text-gray-400">
                    {{ skill.tag }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const selectedCategory = ref('all')

const skillCategories = [
  { id: 'all', label: 'Todas', count: '15' },
  { id: 'frontend', label: 'Front & Mobile', count: '8' },
  { id: 'backend', label: 'Backend', count: '3' },
  { id: 'database', label: 'Banco de Dados', count: '2' },
  { id: 'hardware', label: 'IoT & Hardware', count: '2' },
]

const frontendSkills = [
  { name: 'Vue.js 3', tag: 'Framework SPA Reativo', icon: 'https://img.icons8.com/color/48/000000/vue-js.png' },
  { name: 'React Native', tag: 'Mobile Android & iOS', icon: 'https://img.icons8.com/color/48/000000/react-native.png' },
  { name: 'JavaScript', tag: 'ES6+ / Moderno & Async', icon: 'https://img.icons8.com/fluency/48/000000/javascript.png' },
  { name: 'TypeScript', tag: 'Tipagem Estática & Escala', icon: 'https://img.icons8.com/color/48/000000/typescript.png' },
  { name: 'Tailwind CSS', tag: 'Design System & Utility CSS', icon: 'https://img.icons8.com/color/48/000000/tailwind_css.png' },
  { name: 'HTML5', tag: 'Semântica & Acessibilidade', icon: 'https://img.icons8.com/color/48/000000/html-5--v1.png' },
  { name: 'CSS3', tag: 'Animações & Layout Moderno', icon: 'https://img.icons8.com/color/48/000000/css3.png' },
  { name: 'AngularJS', tag: 'Sistemas & Migração Legada', icon: 'https://img.icons8.com/color/48/000000/angularjs.png' },
]

const backendSkills = [
  { name: 'C# (.NET)', tag: 'Backend Corporativo & APIs', icon: 'https://img.icons8.com/color/48/000000/c-sharp-logo.png' },
  { name: 'Node.js', tag: 'Runtime JS & Microsserviços', icon: 'https://img.icons8.com/fluency/48/000000/node-js.png' },
  { name: 'REST APIs', tag: 'Arquitetura HTTP & Integração', icon: 'https://img.icons8.com/color/48/000000/api.png' },
]

const databaseSkills = [
  { name: 'SQL Server', tag: 'T-SQL, Queries & Procedures', icon: 'https://img.icons8.com/color/48/000000/microsoft-sql-server.png' },
  { name: 'Modelagem', tag: 'Estruturação & Integridade', icon: 'https://img.icons8.com/color/48/000000/database.png' },
]

const hardwareSkills = [
  { name: 'Arduino', tag: 'Automação & Sensores (C++)', icon: 'https://img.icons8.com/fluency/48/000000/arduino.png' },
  { name: 'ESP8266', tag: 'IoT, Wi-Fi & WebSockets', icon: 'https://img.icons8.com/color/48/000000/circuit.png' },
]

const currentCategoryData = computed(() => {
  switch (selectedCategory.value) {
    case 'frontend':
      return {
        title: 'Front-end & Mobile',
        description: 'Construção de interfaces web de alto nível e aplicativos móveis em produção nas lojas Google Play e App Store.',
        skills: frontendSkills,
      }
    case 'backend':
      return {
        title: 'Backend & Serviços',
        description: 'Desenvolvimento de APIs robustas em C# e Node.js com integrações e regras de negócio estruturadas.',
        skills: backendSkills,
      }
    case 'database':
      return {
        title: 'Banco de Dados & Storage',
        description: 'Modelagem relacional de dados, consultas T-SQL, procedures e persistência confiável.',
        skills: databaseSkills,
      }
    case 'hardware':
      return {
        title: 'Microcontroladores & IoT',
        description: 'Prototipagem de hardware, sensores industriais/comerciais e conectividade Wi-Fi.',
        skills: hardwareSkills,
      }
    default:
      return {
        title: 'Todas as Habilidades',
        description: 'Visão geral de todo o conjunto de habilidades.',
        skills: [...frontendSkills, ...backendSkills, ...databaseSkills, ...hardwareSkills],
      }
  }
})
</script>
