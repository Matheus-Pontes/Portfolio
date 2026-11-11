<template>
  <div
    class="fixed bottom-0 left-0 right-0 z-40 flex flex-col items-center pointer-events-none pb-4 sm:pb-6 transition-all duration-300"
  >
    <!-- Toggle Menu Caret Icon (Apple Glass Pill) -->
    <div
      class="self-end mr-5 sm:mr-10 mb-2 pointer-events-auto"
    >
      <button
        type="button"
        @click="toggleMenu"
        :aria-expanded="!isCollapsed"
        aria-label="Alternar visibilidade do menu inferior"
        class="apple-glass p-2.5 rounded-full text-white/80 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer focus-visible:ring-2 focus-visible:ring-azul focus-visible:outline-none"
      >
        <Icon
          name="caret-up-down"
          className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300"
          :class="{ 'rotate-180': isCollapsed }"
        />
      </button>
    </div>

    <!-- Apple-style Glassmorphism Floating Dock -->
    <div
      class="pointer-events-auto transition-all duration-500 ease-out transform flex justify-center w-full px-4"
      :class="[
        isCollapsed ? 'translate-y-28 opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
      ]"
    >
      <nav
        role="tablist"
        aria-label="Navegação estilo dock do portfólio"
        class="apple-glass rounded-full p-1.5 sm:p-2 flex items-center justify-center gap-1 sm:gap-2 shadow-[0_20px_50px_rgba(0,0,0,0.7)] max-w-xl w-auto"
      >
        <button
          v-for="(item, index) in navItems"
          :key="item.id"
          type="button"
          role="tab"
          :aria-selected="activeIndex === index"
          :aria-controls="item.id"
          @click="$emit('changeSection', index)"
          class="relative group flex flex-1 items-center gap-2 py-2 px-3.5 sm:px-5 rounded-full transition-all duration-300 ease-out cursor-pointer active:scale-95 focus-visible:ring-2 focus-visible:ring-azul focus-visible:outline-none"
          :class="[
            activeIndex === index
              ? 'apple-glass-pill text-white font-semibold shadow-[0_0_20px_rgba(0,179,126,0.3)]'
              : 'text-white/60 hover:text-white hover:bg-white/10'
          ]"
        >
          <!-- Active Dot Accent (Apple indicator) -->
          <span
            v-if="activeIndex === index"
            class="w-1.5 h-1.5 rounded-full bg-verdeLight animate-pulse shrink-0 inline-block"
          ></span>

          <!-- Icon -->
          <Icon
            :name="item.icon"
            className="w-5 h-5 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110"
          />

          <!-- Label -->
          <span
            class="text-xs sm:text-sm tracking-wide transition-opacity duration-200 sm:inline-block hidden"
            :class="[
              activeIndex === index ? 'opacity-100' : 'opacity-75 group-hover:opacity-100'
            ]"
          >
            {{ item.label }}
          </span>
        </button>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Icon from './icons/Icon.vue'

defineProps({
  activeIndex: {
    type: Number,
    default: 0,
  },
})

defineEmits(['changeSection'])

const isCollapsed = ref(false)

const toggleMenu = () => {
  isCollapsed.value = !isCollapsed.value
}

const navItems = [
  { id: 'sobre', label: 'Sobre', icon: 'user-circle' },
  { id: 'skills', label: 'Habilidades', icon: 'atom' },
  { id: 'projetos', label: 'Projetos', icon: 'codepen' },
  { id: 'contato', label: 'Contato', icon: 'envelope' },
]
</script>
