<template>
  <div class="mx-2 my-16 flex w-full flex-col items-center">
    <p
      class="mb-4 flex w-[450px] items-center justify-center border-b-2 border-b-lucha-blue text-lg font-medium"
    >
      NEWS
    </p>

    <RouterLink
      to="/"
      v-for="blog in blogList"
      class="m-1 h-[65px] w-full max-w-4xl border border-lucha-blue bg-lucha-main1 p-2"
    >
      <p class="text-sm font-medium text-gray-500">
        {{ blog.publishedAt.getFullYear() + "." }}
        {{ blog.publishedAt.getMonth() + 1 + "." }}
        {{ blog.publishedAt.getDate() }}
      </p>
      <p class="text-base font-medium">{{ blog.title }}</p>
    </RouterLink>

    <Button2 to="/news" text="お知らせをもっと見る" class="mt-2" />
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { onMounted, ref, type Ref } from "vue";
import Button2 from "@/components/Button/Button2.vue";

type Blog = {
  id: string;
  title: string;
  content: string;
  publishedAt: Date;
  categoryId: string;
};

const blogList: Ref<Blog[]> = ref([]);
onMounted(() => {
  axios
    .get("https://wdrq6z495s.microcms.io/api/v1/news", {
      headers: {
        "X-MICROCMS-API-KEY": import.meta.env.VITE_HEADLESS_CMS_API_KEY,
      },
    })
    .then(
      (response) =>
        (blogList.value = response.data.contents
          .filter((blog: any) => blog.category.id === "8xko3dvcl")
          .slice(0, 3)
          .map((blog: any) => {
            return {
              id: blog.id,
              title: blog.title,
              content: blog.content,
              publishedAt: new Date(blog.publishedAt),
              categoryId: blog.category.id,
            };
          })),
    )
    .catch((error) => console.log(error));
});
</script>
