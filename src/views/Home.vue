<template>
  <div class="flex w-full items-center justify-center bg-lucha-main2">
    <SlideShow />
  </div>

  <div class="flex w-full items-center justify-center bg-lucha-base">
    <HomeSalon />
  </div>

  <div class="flex w-full items-center justify-center bg-lucha-main2">
    <HomeNews />
  </div>

  <div class="flex w-full items-center justify-center bg-lucha-base">
    <HomeBlog />
  </div>

  <div class="flex w-full items-center justify-center bg-lucha-main2">
    <HomeAccess />
  </div>

  <div class="flex w-full items-center justify-center bg-lucha-base">
    <HomeRecruit />
  </div>
</template>

<script setup lang="ts">
import SlideShow from "@/components/SlideShow.vue";
import HomeNews from "@/components/Home/HomeNews.vue";
import HomeSalon from "@/components/Home/HomeSalon.vue";
import HomeBlog from "@/components/Home/HomeBlog.vue";
import HomeAccess from "@/components/Home/HomeAccess.vue";
import HomeRecruit from "@/components/Home/HomeRecruit.vue";
</script>
