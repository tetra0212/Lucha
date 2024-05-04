<template>
  <RouterLink :to="props.to">
    <div
      @mouseover="mouseOverAction"
      @mouseleave="mouseLeaveAction"
      class="btn relative z-10 col-start-2 flex h-[50px] w-[220px] cursor-pointer items-center justify-center overflow-hidden border border-lucha-blue before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:bg-lucha-blue"
    >
      <p class="mx-2 whitespace-nowrap text-sm font-medium">{{ props.text }}</p>
      <img
        v-if="!hoverFlag"
        decoding="async"
        src="@/assets/arrow-right-circle-fill-blue.svg"
      />
      <img
        v-if="hoverFlag"
        decoding="async"
        src="@/assets/arrow-right-circle-fill-white.svg"
      />
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { RouterLink, useRouter } from "vue-router";
const router = useRouter();
const props = defineProps({
  to: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

const hoverFlag = ref(false);
const mouseOverAction = () => {
  hoverFlag.value = true;
};
const mouseLeaveAction = () => {
  hoverFlag.value = false;
};
</script>

<style>
.btn::before {
  transform: translateX(-100%);
  transition: all 0.3s;
}
.btn:hover p {
  font-weight: 700;
  color: rgb(255 255 255);
}
.btn:hover::before {
  transform: translateX(0);
}
</style>
