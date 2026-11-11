<template>
  <section
    id="sobre"
    aria-label="Sobre Matheus Pontes"
    class="w-full h-full overflow-y-auto overflow-x-hidden select-text"
  >
    <div
      class="min-h-full w-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-10 pt-16 sm:pt-20 pb-28 sm:pb-32"
    >
      <div class="max-w-5xl w-full flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8">
        
        <!-- CARD 1: Perfil Principal & Identidade Rápida (Coluna Esquerda) -->
        <div
          class="w-full lg:w-5/12 p-6 sm:p-8 rounded-3xl bg-pretoLight/85 border border-white/10 backdrop-blur-xl shadow-2xl flex flex-col items-center text-center justify-center gap-12 relative overflow-hidden"
        >
          <!-- Glow de fundo sutil -->
          <div
            class="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-verde/15 blur-2xl pointer-events-none"
          ></div>

          <!-- Avatar com Ring Glow -->
          <div class="relative group my-1">
            <div
              class="absolute -inset-1 rounded-full bg-gradient-to-r from-verde via-azul to-verdeLight opacity-60 blur-md group-hover:opacity-100 transition duration-500"
            ></div>
            <figure
              class="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full p-1 bg-preto ring-2 ring-verdeLight/40 shadow-glow-verde overflow-hidden transition-transform duration-300 group-hover:scale-105"
            >
              <img
                src="https://github.com/Matheus-Pontes.png"
                alt="Foto de perfil de Matheus Pontes"
                loading="lazy"
                width="144"
                height="144"
                class="w-full h-full object-cover rounded-full"
              />
            </figure>
          </div>

          <!-- Nome (sem animação de digitação/stroke) e Título Fullstack -->
          <div class="flex flex-col items-center">
            <h1 class="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Matheus Pontes
            </h1>
            <p class="text-gray-200 font-semibold text-base sm:text-lg mt-1">
              Desenvolvedor Fullstack
            </p>

            <!-- Badges Concisos: Idade, Localização e Empresa -->
            <div class="flex flex-wrap items-center justify-center gap-2 mt-3.5">
              <span class="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-gray-300">
                🎂 {{ age }} anos
              </span>
              <span class="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-gray-300">
                📍 São Paulo, SP
              </span>
              <a
                href="https://intertox.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                class="px-2.5 py-1 rounded-lg bg-azul/10 hover:bg-azul/20 border border-azul/30 text-xs text-azul font-semibold inline-flex items-center gap-1 transition-colors focus-visible:ring-2 focus-visible:ring-azul focus-visible:outline-none"
                aria-label="Intertox (abre em nova aba)"
              >
                <span>@Intertox</span>
                <Icon name="external-link" className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        <!-- CARD 2: Central de Informações Organizadas Sem Repetições (Coluna Direita) -->
        <div
          class="w-full lg:w-7/12 p-6 sm:p-8 rounded-3xl bg-pretoLight/85 border border-white/10 backdrop-blur-xl shadow-2xl flex flex-col justify-between gap-6"
        >
          <!-- Navegação das Abas -->
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="text-[11px] font-mono uppercase tracking-widest text-verdeLight bg-verdeDark/30 px-2.5 py-1 rounded-md border border-verdeLight/20">
                01 // PERFIL & EXPERIÊNCIA
              </span>
              <span class="text-xs text-gray-400 font-mono">
                Selecione o tópico
              </span>
            </div>

            <div
              role="tablist"
              aria-label="Tópicos sobre Matheus Pontes"
              class="grid grid-cols-2 gap-2 p-1 bg-black/50 border border-white/5 rounded-2xl"
            >
              <button
                v-for="tab in tabs"
                :key="tab.id"
                type="button"
                role="tab"
                :aria-selected="activeTab === tab.id"
                :aria-controls="'tab-panel-' + tab.id"
                @click="activeTab = tab.id"
                class="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-azul focus-visible:outline-none"
                :class="[
                  activeTab === tab.id
                    ? 'bg-verde text-white shadow-glow-verde font-bold'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                ]"
              >
                <Icon :name="tab.icon" className="w-4 h-4 shrink-0" />
                <span>{{ tab.label }}</span>
              </button>
            </div>
          </div>

          <!-- CONTEÚDO DAS ABAS (ENXUTO E DIRETO AO PONTO) -->
          <div class="flex-1 flex flex-col justify-center min-h-[200px]">
            
            <!-- ABA 1: Trajetória & Fullstack -->
            <div
              v-if="activeTab === 'bio'"
              id="tab-panel-bio"
              role="tabpanel"
              class="flex flex-col gap-4 animate-in fade-in duration-300 text-left"
            >
              <h2 class="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-verdeLight"></span>
                Desenvolvimento de Software de Ponta a Ponta
              </h2>
              <p class="text-gray-300 text-sm sm:text-base leading-relaxed">
                Tenho 25 anos, moro em São Paulo, SP e atuo como desenvolvedor Fullstack. Construo soluções completas: desde a arquitetura de backend, bancos de dados relacionais e APIs até interfaces reativas e aplicativos móveis com alta usabilidade e performance.
              </p>
              
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div class="p-3.5 rounded-xl bg-black/40 border border-white/5">
                  <p class="text-xs text-verdeLight font-bold flex items-center gap-1.5">
                    <span>💻</span> Front-end & Mobile
                  </p>
                  <p class="text-xs text-gray-300 mt-1 leading-normal">
                    Vue.js 3, React, React Native, TypeScript e Tailwind CSS para interfaces modernas e fluidas.
                  </p>
                </div>
                <div class="p-3.5 rounded-xl bg-black/40 border border-white/5">
                  <p class="text-xs text-azul font-bold flex items-center gap-1.5">
                    <span>⚙️</span> Backend & Banco
                  </p>
                  <p class="text-xs text-gray-300 mt-1 leading-normal">
                    C# (.NET), Node.js, arquitetura de REST APIs e banco de dados SQL Server.
                  </p>
                </div>
              </div>
            </div>

            <!-- ABA 2: Mobile & Publicação nas Lojas -->
            <div
              v-else-if="activeTab === 'mobile'"
              id="tab-panel-mobile"
              role="tabpanel"
              class="flex flex-col gap-4 animate-in fade-in duration-300 text-left"
            >
              <h2 class="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-azul"></span>
                Sustentação de Apps & Lojas Oficiais
              </h2>
              <p class="text-gray-300 text-sm sm:text-base leading-relaxed">
                Na <strong class="text-white">Intertox</strong>, sou responsável pelo ciclo contínuo do aplicativo corporativo <strong class="text-azul">Safetychem Mobile</strong>:
              </p>
              
              <div class="space-y-2.5 pt-1">
                <div class="flex items-start gap-3 p-3 rounded-xl bg-black/40 border border-white/5">
                  <div class="p-1.5 rounded-lg bg-azul/15 text-azul shrink-0 mt-0.5">
                    <Icon name="google-play" className="w-4 h-4" />
                  </div>
                  <div>
                    <p class="text-xs font-bold text-white">Publicação & Deploy nas Lojas</p>
                    <p class="text-xs text-gray-400">Gerenciamento completo no Google Play Console e Apple App Store Connect.</p>
                  </div>
                </div>

                <div class="flex items-start gap-3 p-3 rounded-xl bg-black/40 border border-white/5">
                  <div class="p-1.5 rounded-lg bg-verdeDark/30 text-verdeLight shrink-0 mt-0.5">
                    <Icon name="smartphone" className="w-4 h-4" />
                  </div>
                  <div>
                    <p class="text-xs font-bold text-white">Sustentação & Evolução</p>
                    <p class="text-xs text-gray-400">Resolução de chamados, novas features, conformidade com normas regulatórias e otimização de performance.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <!-- Rodapé da Central: Resumo de Competências em Chips -->
          <div class="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs text-gray-400">
            <span class="font-mono text-[11px] text-gray-400">Especialidades:</span>
            <div class="flex flex-wrap gap-1.5">
              <span class="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-gray-300 text-[11px]">Fullstack</span>
              <span class="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-gray-300 text-[11px]">Mobile Deploy</span>
              <span class="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-gray-300 text-[11px]">Vue.js / React</span>
              <span class="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-gray-300 text-[11px]">C# & Node</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import Icon from './icons/Icon.vue'

defineEmits(['navigateTo'])

const activeTab = ref('bio')
const age = new Date().getFullYear() - 2001

const tabs = [
  { id: 'bio', label: 'Sobre Mim', icon: 'user-circle' },
  { id: 'mobile', label: 'Mobile & Lojas', icon: 'smartphone' },
]
</script>
