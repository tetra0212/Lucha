<template>
    <header class="bg-gray-300">
      <img src="@/assets/logo.svg" class="w-[200px] m-auto block">
      <nav class="w-full text-lg text-center mt-8">
          <RouterLink to="/" class="inline-block px-1 border-l text-blue-700">
            <div class="inline">
              <a>ホーム</a>
              <a>Home</a>
            </div>
          </RouterLink>
          <RouterLink to="/salon" class="inline-block px-1 border-l text-blue-700">Salon</RouterLink>
          <RouterLink to="/menu" class="inline-block px-1 border-l text-blue-700">Menu</RouterLink>
          <RouterLink to="/gallery" class="inline-block px-1 border-l text-blue-700">Gallery</RouterLink>
          <RouterLink to="/blog" class="inline-block px-1 border-l text-blue-700">Blog</RouterLink>
          <RouterLink to="/access" class="inline-block px-1 border-l text-blue-700">Access</RouterLink>
          <RouterLink to="/recruit" class="inline-block px-1 border-l text-blue-700">Recruit</RouterLink>
      </nav>
    </header>
</template>

<script setup lang="ts">
import { RouterLink} from 'vue-router'
</script>

<style>

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a:first-of-type {
  border: 0;
}
</style>