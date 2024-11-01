<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-white shadow-sm">
      <nav class="max-w-7xl mx-auto px-4 py-4">
        <div class="flex justify-between items-center">
          <h1 class="text-xl font-bold">Rodrigo Valentim</h1>
          <nav class="flex gap-4">
            <router-link to="/" class="text-gray-600 hover:text-gray-900">Quem Sou</router-link>
            <router-link to="/work" class="text-gray-600 hover:text-gray-900">O que faço</router-link>
            <router-link to="/hobbies" class="text-gray-600 hover:text-gray-900">Hobbies</router-link>
          </nav>
        </div>
      </nav>
    </header>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto px-4 py-8">
      <router-view></router-view>
    </main>
  </div>
</template>
