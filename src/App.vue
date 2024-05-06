<script setup lang="ts">
import { RouterView } from "vue-router";
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import { useNewsStore } from "./store/NewsStore";
const newsStore = useNewsStore();
const init = async () => {
  try {
    await newsStore.init();
  } catch (error) {
    throw error;
  }
};

init();
</script>

<template>
  <AppHeader />
  <RouterView />
  <AppFooter />
</template>
