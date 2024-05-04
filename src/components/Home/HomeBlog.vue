<template>
  <div class="mx-2 my-16 flex max-w-4xl flex-col items-center justify-center">
    <p
      class="mb-4 flex w-[450px] items-center justify-center border-b-2 border-b-lucha-blue text-lg font-medium"
    >
      Blog
    </p>
    <div class="mb-2 flex w-full items-center">
      <RouterLink
        to="/"
        v-for="blog in getHomeBlog"
        class="mx-6 flex flex-col items-center justify-center"
      >
        <img
          v-if="blog.imageUrl"
          decoding="async"
          :src="blog.imageUrl"
          class="mb-2 h-[200px] w-[200px] border-2 border-lucha-blue bg-lucha-main1 object-cover p-2"
        />
        <img
          v-if="!blog.imageUrl"
          decoding="async"
          src="@/assets/logo2.png"
          class="mb-2 h-[200px] w-[200px] border-2 border-lucha-blue bg-lucha-main1 object-cover p-2"
        />
        <p class="text-sm font-medium text-gray-500">
          {{ blog.publishedAt.getFullYear() + "." }}
          {{ blog.publishedAt.getMonth() + 1 + "." }}
          {{ blog.publishedAt.getDate() }}
        </p>
        <p class="text-base font-medium">{{ blog.title }}</p>
      </RouterLink>
    </div>
    <Button2 to="/blog" text="ブログをもっと見る" class="mt-2" />
  </div>
</template>

<script setup lang="ts">
import Button2 from "@/components/Button/Button2.vue";
import { useNewsStore } from "@/store/NewsStore";
import { storeToRefs } from "pinia";

const newsStore = useNewsStore();
const { getHomeBlog } = storeToRefs(newsStore);
</script>
