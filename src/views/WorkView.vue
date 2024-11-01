<template>
  <div class="bg-white shadow rounded-lg p-6">
    <div class="space-y-4 mb-8">
      <h2 class="text-3xl font-bold text-gray-900">O que faço</h2>
      <div class="h-1 w-20 bg-primary-600 rounded"></div>
    </div>

    <div class="space-y-6">
      <div class="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
        <div class="flex items-center space-x-3 mb-4">
          <div class="p-2 bg-primary-100 rounded-lg">
            <Briefcase class="w-6 h-6 text-primary-600" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900">Cargo Atual</h3>
        </div>
        <p class="text-gray-600 mb-4">
          Como CTO na Dr. Monitora, lidero a transformação digital em operações hospitalares, focando em:
        </p>
        <ul class="space-y-3 text-gray-600">
          <li class="flex items-start space-x-2">
            <span class="text-primary-600 mt-1">•</span>
            <span>Definições de Arquitetura e Soluções</span>
          </li>
          <li class="flex items-start space-x-2">
            <span class="text-primary-600 mt-1">•</span>
            <span>Gerenciamento de Demandas e Equipe de Desenvolvimento</span>
          </li>
          <li class="flex items-start space-x-2">
            <span class="text-primary-600 mt-1">•</span>
            <span>Construção de APIs com Arquitetura Hexagonal</span>
          </li>
          <li class="flex items-start space-x-2">
            <span class="text-primary-600 mt-1">•</span>
            <span>Fluxos Inteligentes com Chatbot na plataforma Blip</span>
          </li>
        </ul>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
          <div class="flex items-center space-x-3 mb-4">
            <div class="p-2 bg-primary-100 rounded-lg">
              <Code class="w-6 h-6 text-primary-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900">Backend</h3>
          </div>
          <ul class="space-y-2 text-gray-600">
            <li class="flex items-start space-x-2">
              <span class="text-primary-600 mt-1">•</span>
              <span>Java 8 e 11</span>
            </li>
            <li class="flex items-start space-x-2">
              <span class="text-primary-600 mt-1">•</span>
              <span>Spring Boot, JPA, Cloud</span>
            </li>
            <li class="flex items-start space-x-2">
              <span class="text-primary-600 mt-1">•</span>
              <span>APIs REST com NodeJS</span>
            </li>
            <li class="flex items-start space-x-2">
              <span class="text-primary-600 mt-1">•</span>
              <span>jUnit para Testes Unitários</span>
            </li>
          </ul>
        </div>

        <div class="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
          <div class="flex items-center space-x-3 mb-4">
            <div class="p-2 bg-primary-100 rounded-lg">
              <Cloud class="w-6 h-6 text-primary-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900">Cloud & DevOps</h3>
          </div>
          <ul class="space-y-2 text-gray-600">
            <li class="flex items-start space-x-2">
              <span class="text-primary-600 mt-1">•</span>
              <span>AWS (RDS, SQS, DynamoDB)</span>
            </li>
            <li class="flex items-start space-x-2">
              <span class="text-primary-600 mt-1">•</span>
              <span>CloudWatch, AWS Pipeline</span>
            </li>
            <li class="flex items-start space-x-2">
              <span class="text-primary-600 mt-1">•</span>
              <span>Integrações MV2000 e Soul MV</span>
            </li>
            <li class="flex items-start space-x-2">
              <span class="text-primary-600 mt-1">•</span>
              <span>SonarQube</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
        <div class="flex items-center space-x-3 mb-6">
          <div class="p-2 bg-primary-100 rounded-lg">
            <Clock class="w-6 h-6 text-primary-600" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900">Experiência Profissional</h3>
        </div>
        <div class="space-y-6">
          <div class="relative pl-8 border-l-2 border-primary-200">
            <div class="absolute w-4 h-4 bg-primary-600 rounded-full -left-[9px] top-1"></div>
            <h4 class="font-medium text-lg text-gray-900">CTO - Dr. Monitora</h4>
            <p class="text-sm text-primary-600 font-medium">2023 - Presente | Portugal</p>
            <p class="mt-2 text-gray-600">Transformação digital e arquitetura de sistemas de saúde</p>
          </div>

          <div class="relative pl-8 border-l-2 border-primary-200">
            <div class="absolute w-4 h-4 bg-primary-600 rounded-full -left-[9px] top-1"></div>
            <h4 class="font-medium text-lg text-gray-900">Founder & CTO - Dr. Mobile</h4>
            <p class="text-sm text-primary-600 font-medium">2012 - Presente | São Paulo</p>
            <p class="mt-2 text-gray-600">Desenvolvimento de soluções inovadoras em saúde digital, gerenciamento de equipes e definição de arquitetura de sistemas</p>
          </div>

          <div class="relative pl-8 border-l-2 border-primary-200">
            <div class="absolute w-4 h-4 bg-primary-600 rounded-full -left-[9px] top-1"></div>
            <h4 class="font-medium text-lg text-gray-900">Software Engineering Senior - Zup Innovation</h4>
            <p class="text-sm text-primary-600 font-medium">2020 - 2021 | São Paulo</p>
            <p class="mt-2 text-gray-600">Desenvolvimento de microsserviços e APIs, implementação de arquitetura hexagonal</p>
          </div>

          <div class="relative pl-8 border-l-2 border-primary-200">
            <div class="absolute w-4 h-4 bg-primary-600 rounded-full -left-[9px] top-1"></div>
            <h4 class="font-medium text-lg text-gray-900">Analista de Sistemas Sênior - Hospital 9 de Julho</h4>
            <p class="text-sm text-primary-600 font-medium">2019 - 2020 | São Paulo</p>
            <p class="mt-2 text-gray-600">Integração de sistemas hospitalares e desenvolvimento de soluções em saúde</p>
          </div>

          <div class="relative pl-8 border-l-2 border-primary-200">
            <div class="absolute w-4 h-4 bg-primary-600 rounded-full -left-[9px] top-1"></div>
            <h4 class="font-medium text-lg text-gray-900">Coordenador de TI - IGH</h4>
            <p class="text-sm text-primary-600 font-medium">2018 - 2019 | Salvador</p>
            <p class="mt-2 text-gray-600">Liderança de equipe e implementação de melhorias em processos hospitalares</p>
          </div>
        </div>
      </div>

      <div class="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
        <div class="flex items-center space-x-3 mb-4">
          <div class="p-2 bg-primary-100 rounded-lg">
            <Settings class="w-6 h-6 text-primary-600" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900">Metodologias & Práticas</h3>
        </div>
        <div class="grid md:grid-cols-3 gap-4">
          <div class="bg-white p-4 rounded-lg shadow-sm">
            <h4 class="font-medium text-gray-900">Metodologias Ágeis</h4>
            <p class="text-sm text-gray-600">Scrum e Kanban</p>
          </div>
          <div class="bg-white p-4 rounded-lg shadow-sm">
            <h4 class="font-medium text-gray-900">Arquitetura</h4>
            <p class="text-sm text-gray-600">Hexagonal e Microsserviços</p>
          </div>
          <div class="bg-white p-4 rounded-lg shadow-sm">
            <h4 class="font-medium text-gray-900">DevOps</h4>
            <p class="text-sm text-gray-600">CI/CD e Cloud Services</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Briefcase, Code, Clock, Cloud, Settings } from 'lucide-vue-next'
</script>
