<template>
  <div class="mx-2 my-16 flex w-full flex-col items-center">
    <p
      class="mb-4 flex w-[450px] items-center justify-center border-b-2 border-b-lucha-blue text-lg font-medium"
    >
      NEWS
    </p>

    <RouterLink
      to="/"
      v-for="news in getHomeNews"
      class="m-1 h-[65px] w-full max-w-4xl border border-lucha-blue bg-lucha-main1 p-2 hover:opacity-50"
    >
      <p class="text-base font-medium">{{ news.title }}</p>
    </RouterLink>

    <Button2 to="/news" text="お知らせをもっと見る" class="mt-2" />
  </div>
</template>

<script setup lang="ts">
import Button2 from "@/components/Button/Button2.vue";
import { useNewsStore } from "@/store/NewsStore";
import { storeToRefs } from "pinia";

const newsStore = useNewsStore();
const { getHomeNews } = storeToRefs(newsStore);
</script>
