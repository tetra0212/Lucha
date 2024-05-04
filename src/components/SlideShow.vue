<template>
  <div class="slide m-2 h-[600px] w-[1024px]">
    <img
      decoding="async"
      src="@/assets/slide01.jpg"
      class="slide1 object-cover"
    />
    <img
      decoding="async"
      src="@/assets/slide02.jpg"
      class="slide2 object-cover"
    />
    <img
      decoding="async"
      src="@/assets/slide03.jpg"
      class="slide3 object-cover"
    />
    <img
      decoding="async"
      src="@/assets/slide04.jpg"
      class="slide4 object-cover"
    />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<style>
.slide {
  position: relative;
  width: 70%;
  height: 300px;
  overflow: hidden;
  margin: 0 auto;
}
.slide1,
.slide2,
.slide3,
.slide4 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
}
.slide1 {
  animation: slide-animation-01 24s infinite;
}
.slide2 {
  animation: slide-animation-02 24s infinite;
}
.slide3 {
  animation: slide-animation-03 24s infinite;
}
.slide4 {
  animation: slide-animation-04 24s infinite;
}
@keyframes slide-animation-01 {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  20% {
    opacity: 1;
    transform: scale(1.15);
  }
  30% {
    opacity: 0;
    transform: scale(1.15);
  }
  95% {
    opacity: 0;
    transform: scale(1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes slide-animation-02 {
  0% {
    opacity: 0;
    transform: scale(1);
  }
  20% {
    opacity: 0;
    transform: scale(1.15);
  }
  25% {
    opacity: 1;
    transform: scale(1.15);
  }
  45% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(1);
  }
}
@keyframes slide-animation-03 {
  0% {
    opacity: 0;
    transform: scale(1);
  }
  45% {
    opacity: 0;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
  70% {
    opacity: 1;
    transform: scale(1.15);
  }
  75% {
    opacity: 0;
    transform: scale(1.15);
  }
  100% {
    opacity: 0;
    transform: scale(1);
  }
}
@keyframes slide-animation-04 {
  0% {
    opacity: 0;
    transform: scale(1);
  }
  70% {
    opacity: 0;
    transform: scale(1.15);
  }
  75% {
    opacity: 1;
    transform: scale(1.15);
  }
  95% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(1);
  }
}
</style>
