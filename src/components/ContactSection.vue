<template>
  <section
    id="contato"
    aria-label="Entre em contato com Matheus Pontes"
    class="w-full h-full overflow-y-auto overflow-x-hidden select-text"
  >
    <div class="min-h-full w-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-28 sm:pb-32 text-center">
      <div class="max-w-3xl w-full flex flex-col items-center gap-8">
      <!-- Section Header -->
      <div>
        <span
          class="inline-block px-3.5 py-1 rounded-full bg-verdeDark/40 border border-verdeLight/30 text-verdeLight text-xs font-mono uppercase tracking-widest mb-2"
        >
          04 // Conexões & Oportunidades
        </span>
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Vamos Conversar?
        </h2>
        <p class="text-gray-300 text-sm sm:text-base max-w-lg mx-auto mt-2 leading-relaxed">
          Estou aberto a novas propostas de trabalho, projetos freelance e conversas sobre desenvolvimento fullstack e mobile.
        </p>
      </div>

      <!-- Redes Sociais Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl">
        <!-- LinkedIn -->
        <a
          href="https://www.linkedin.com/in/matheuspontes000/"
          target="_blank"
          rel="noopener noreferrer"
          class="group p-5 rounded-2xl bg-pretoLight/80 border border-azul/20 hover:border-azul flex flex-col items-center gap-3 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_28px_rgba(129,216,247,0.2)] focus-visible:ring-2 focus-visible:ring-azul focus-visible:outline-none"
          aria-label="Acessar o perfil de Matheus Pontes no LinkedIn (abre em nova aba)"
        >
          <div class="p-3 rounded-2xl bg-azul/10 text-azul group-hover:scale-110 transition-transform duration-300">
            <Icon name="linkedin" className="w-8 h-8" />
          </div>
          <div>
            <p class="text-white font-bold text-sm">LinkedIn</p>
            <p class="text-gray-400 text-xs mt-0.5">matheuspontes000</p>
          </div>
          <span class="text-[11px] font-medium text-azul">Conectar-se &rarr;</span>
        </a>

        <!-- GitHub -->
        <a
          href="https://github.com/Matheus-Pontes"
          target="_blank"
          rel="noopener noreferrer"
          class="group p-5 rounded-2xl bg-pretoLight/80 border border-white/10 hover:border-white/40 flex flex-col items-center gap-3 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_28px_rgba(255,255,255,0.15)] focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
          aria-label="Acessar o perfil de Matheus Pontes no GitHub (abre em nova aba)"
        >
          <div class="p-3 rounded-2xl bg-white/10 text-white group-hover:scale-110 transition-transform duration-300">
            <Icon name="github" className="w-8 h-8" />
          </div>
          <div>
            <p class="text-white font-bold text-sm">GitHub</p>
            <p class="text-gray-400 text-xs mt-0.5">@Matheus-Pontes</p>
          </div>
          <span class="text-[11px] font-medium text-gray-300">Ver projetos &rarr;</span>
        </a>

        <!-- WhatsApp -->
        <a
          href="https://wa.me/5511942968278/?text=Ol%C3%A1%20Matheus!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade."
          target="_blank"
          rel="noopener noreferrer"
          class="group p-5 rounded-2xl bg-pretoLight/80 border border-verdeLight/20 hover:border-verdeLight flex flex-col items-center gap-3 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_28px_rgba(0,179,126,0.2)] focus-visible:ring-2 focus-visible:ring-verdeLight focus-visible:outline-none"
          aria-label="Enviar mensagem no WhatsApp para Matheus Pontes (abre em nova aba)"
        >
          <div class="p-3 rounded-2xl bg-verdeLight/10 text-verdeLight group-hover:scale-110 transition-transform duration-300">
            <Icon name="whatsapp" className="w-8 h-8" />
          </div>
          <div>
            <p class="text-white font-bold text-sm">WhatsApp</p>
            <p class="text-gray-400 text-xs mt-0.5">Mensagem direta</p>
          </div>
          <span class="text-[11px] font-medium text-verdeLight">Conversar &rarr;</span>
        </a>
      </div>

      <!-- Mensagem de Fechamento -->
      <div class="p-4 rounded-2xl bg-black/40 border border-white/5 max-w-md w-full">
        <h3 class="text-white text-lg font-medium">
          Aguardo seu contato 🤙
        </h3>
        <p class="text-gray-400 text-xs mt-1">
          São Paulo, SP • Aberto a posições presenciais, híbridas ou remotas
        </p>
      </div>
    </div>
  </div>
</section>
</template>

<script setup>
import Icon from './icons/Icon.vue'
</script>
