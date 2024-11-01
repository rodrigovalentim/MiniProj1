<template>
  <div class="bg-white shadow rounded-lg p-6">
    <div class="space-y-4 mb-8">
      <h2 class="text-3xl font-bold text-gray-900">Quem Sou Eu</h2>
      <div class="h-1 w-20 bg-primary-600 rounded"></div>
    </div>

    <div class="space-y-8">
      <div class="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
        <div class="flex items-center space-x-3 mb-4">
          <div class="p-2 bg-primary-100 rounded-lg">
            <User class="w-6 h-6 text-primary-600" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900">Perfil Profissional</h3>
        </div>
        <p class="text-gray-600 leading-relaxed">
          Sou uma pessoa apaixonada por tecnologia, desenvolvimento de sistemas e definições de arquiteturas.
          Com mais de uma década dedicada à tecnologia da saúde, minha missão como CTO na Dr. Monitora é
          liderar a transformação digital em operações hospitalares, empregando expertise em arquitetura
          de software e desenvolvimento de soluções baseadas em nuvem.
        </p>
      </div>

      <div class="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
        <div class="flex items-center space-x-3 mb-4">
          <div class="p-2 bg-primary-100 rounded-lg">
            <GraduationCap class="w-6 h-6 text-primary-600" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900">Formação Acadêmica</h3>
        </div>
        <ul class="space-y-4">
          <li class="relative pl-8 before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-primary-600 before:rounded-full">
            <h4 class="font-medium text-gray-900">Mestrado em Engenharia Informática e Tecnologia Web</h4>
            <p class="text-sm text-primary-600">Universidade Aberta | Em andamento (2024-2026)</p>
          </li>
          <li class="relative pl-8 before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-primary-600 before:rounded-full">
            <h4 class="font-medium text-gray-900">MBA em Arquitetura de Software</h4>
            <p class="text-sm text-primary-600">Instituto de Gestão e Tecnologia da Informação | 2020-2021</p>
          </li>
          <li class="relative pl-8 before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-primary-600 before:rounded-full">
            <h4 class="font-medium text-gray-900">Análise e Desenvolvimento de Sistemas</h4>
            <p class="text-sm text-primary-600">Universidade Jorge Amado | 2010-2012</p>
          </li>
        </ul>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
          <div class="flex items-center space-x-3 mb-4">
            <div class="p-2 bg-primary-100 rounded-lg">
              <Code class="w-6 h-6 text-primary-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900">Especialidades</h3>
          </div>
          <ul class="space-y-2 text-gray-600">
            <li class="flex items-start space-x-2">
              <span class="text-primary-600 mt-1">•</span>
              <span>Arquitetura de Software</span>
            </li>
            <li class="flex items-start space-x-2">
              <span class="text-primary-600 mt-1">•</span>
              <span>Desenvolvimento de Soluções em Nuvem</span>
            </li>
            <li class="flex items-start space-x-2">
              <span class="text-primary-600 mt-1">•</span>
              <span>Liderança Técnica</span>
            </li>
            <li class="flex items-start space-x-2">
              <span class="text-primary-600 mt-1">•</span>
              <span>Gestão de Equipes</span>
            </li>
          </ul>
        </div>

        <div class="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
          <div class="flex items-center space-x-3 mb-4">
            <div class="p-2 bg-primary-100 rounded-lg">
              <Award class="w-6 h-6 text-primary-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900">Certificações</h3>
          </div>
          <ul class="space-y-2 text-gray-600">
            <li class="flex items-start space-x-2">
              <span class="text-primary-600 mt-1">•</span>
              <span>Desenvolvimento iOS</span>
            </li>
            <li class="flex items-start space-x-2">
              <span class="text-primary-600 mt-1">•</span>
              <span>Microsoft SQL Server</span>
            </li>
            <li class="flex items-start space-x-2">
              <span class="text-primary-600 mt-1">•</span>
              <span>Desenvolvimento Android</span>
            </li>
            <li class="flex items-start space-x-2">
              <span class="text-primary-600 mt-1">•</span>
              <span>Auditor Interno em Saúde</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
        <div class="flex items-center space-x-3 mb-4">
          <div class="p-2 bg-primary-100 rounded-lg">
            <Globe class="w-6 h-6 text-primary-600" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900">Idiomas</h3>
        </div>
        <div class="grid md:grid-cols-3 gap-4">
          <div class="bg-white p-4 rounded-lg shadow-sm">
            <h4 class="font-medium text-gray-900">Português</h4>
            <p class="text-sm text-primary-600">Nativo</p>
          </div>
          <div class="bg-white p-4 rounded-lg shadow-sm">
            <h4 class="font-medium text-gray-900">Inglês</h4>
            <p class="text-sm text-primary-600">Profissional</p>
          </div>
          <div class="bg-white p-4 rounded-lg shadow-sm">
            <h4 class="font-medium text-gray-900">Francês</h4>
            <p class="text-sm text-primary-600">Básico</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { User, GraduationCap, Code, Award, Globe } from 'lucide-vue-next'
</script>
