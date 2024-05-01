<template>
  <div class="mx-2 my-16 flex max-w-4xl flex-col items-center justify-center">
    <p class="mb-4 text-lg font-medium">Blog</p>
    <div class="mb-2 flex w-full items-center">
      <RouterLink
        to="/"
        v-for="blog in blogList"
        class="mx-6 flex flex-col items-center justify-center"
      >
        <img
          decoding="async"
          :src="blog.imageUrl[0]"
          class="mb-2 h-[200px] w-[200px] border-2 border-lucha-blue bg-lucha-main1 p-2"
        />
        <p class="text-sm font-medium text-gray-500">
          {{ blog.publishedAt.getFullYear() + "." }}
          {{ blog.publishedAt.getMonth() + 1 + "." }}
          {{ blog.publishedAt.getDate() }}
        </p>
        <p class="text-base font-medium">{{ blog.title }}</p>
      </RouterLink>
    </div>
    <Button1 to="/blog" text="ブログをもっと見る" class="mt-2" />
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { onMounted, ref, type Ref } from "vue";
import Button1 from "../Button1.vue";
type Blog = {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  publishedAt: Date;
  categoryId: string;
};
const blogList: Ref<Blog[]> = ref([]);

const extractLink = (text: string) => {
  const reg =
    /https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
  const ulr = text?.match(reg);
  return ulr ? ulr : ["/src/assets/logo2.png"];
};

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
          .filter((blog: any) => blog.category.id === "ftnz1ahl9a")
          .slice(0, 3)
          .map((blog: any) => {
            return {
              id: blog.id,
              title: blog.title,
              content: blog.content,
              imageUrl: extractLink(blog.content),
              publishedAt: new Date(blog.publishedAt),
              categoryId: blog.category.id,
            };
          })),
    )
    .catch((error) => console.log(error));
});
</script>
