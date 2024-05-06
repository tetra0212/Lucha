<template>
  <RouterLink
    :to="props.to"
    class="group border-b-4 border-b-lucha-blue border-opacity-0 p-2 text-base text-black transition-none"
    :class="{
      'border-opacity-100 text-black':
        router.currentRoute.value.path === props.to,
    }"
  >
    <div class="flex flex-col items-end justify-center text-base">
      <a class="font-medium group-hover:opacity-50">{{ props.text }}</a>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
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
</script>
