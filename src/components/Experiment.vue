<template>
  <div class="h-[3000px] bg-black">
    <div class="reveal mb-10 h-[200px] w-[200px] bg-white">aaa</div>
    <div class="reveal h-[200px] w-[200px] bg-white">aaa</div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  window.addEventListener("load", () => {
    const items = document.querySelectorAll(".reveal");
    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return null;

        const el = entry.target;
        el.classList.add("active");

        console.log("fired");
      });
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    };

    const observer = new IntersectionObserver(callback, options);

    items?.forEach((item) => {
      observer.observe(item);
    });
  });
});
</script>

<style>
.reveal {
  position: relative;
  transform: translateY(100px);
  opacity: 0;
  transition: 0.5s;
}
.reveal.active {
  transform: translateY(0);
  opacity: 1;
}
</style>
