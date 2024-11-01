<template>
  <div class="bg-white shadow rounded-lg p-6">
    <div class="space-y-4 mb-8">
      <h2 class="text-3xl font-bold text-gray-900">Hobbies</h2>
      <div class="h-1 w-20 bg-primary-600 rounded"></div>
    </div>

    <div class="space-y-8">
      <div class="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
        <div class="flex items-center space-x-3 mb-4">
          <div class="p-2 bg-primary-100 rounded-lg">
            <Heart class="w-6 h-6 text-primary-600" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900">Equilíbrio & Família</h3>
        </div>
        <p class="text-gray-600 leading-relaxed">
          Com uma vida profissional bastante intensa e dinâmica, aprendi a valorizar cada momento
          livre como uma oportunidade preciosa. Meu principal hobby é dedicar tempo de qualidade
          à família, criando memórias especiais e fortalecendo nossos laços.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-6">
        <div class="bg-primary-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
          <div class="inline-flex p-3 bg-primary-100 rounded-lg mb-4">
            <Users class="w-8 h-8 text-primary-600" />
          </div>
          <h4 class="text-lg font-medium text-gray-900 mb-2">Família</h4>
          <p class="text-gray-600">Momentos especiais com entes queridos</p>
        </div>

        <div class="bg-primary-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
          <div class="inline-flex p-3 bg-primary-100 rounded-lg mb-4">
            <Star class="w-8 h-8 text-primary-600" />
          </div>
          <h4 class="text-lg font-medium text-gray-900 mb-2">Recarregar</h4>
          <p class="text-gray-600">Momentos de relaxamento e energia</p>
        </div>

        <div class="bg-primary-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
          <div class="inline-flex p-3 bg-primary-100 rounded-lg mb-4">
            <Smile class="w-8 h-8 text-primary-600" />
          </div>
          <h4 class="text-lg font-medium text-gray-900 mb-2">Bem-estar</h4>
          <p class="text-gray-600">Foco em qualidade de vida</p>
        </div>
      </div>

      <div class="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
        <div class="flex items-center space-x-3 mb-4">
          <div class="p-2 bg-primary-100 rounded-lg">
            <Star class="w-6 h-6 text-primary-600" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900">Filosofia de Vida</h3>
        </div>
        <p class="text-gray-600 leading-relaxed">
          Acredito que o equilíbrio entre vida profissional e pessoal é fundamental para manter
          a criatividade e a energia necessárias para enfrentar os desafios diários no trabalho.
          Por isso, sempre que possível, priorizo momentos de conexão e diversão com meus
          entes queridos.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Heart, Users, Star, Smile } from 'lucide-vue-next'
</script>
