<template>
  <div
    class="border-b-gray sticky top-0 z-50 flex w-full justify-center border-b bg-lucha-base"
  >
    <div class="flex w-full max-w-7xl items-end justify-between">
      <RouterLink to="/">
        <img
          decoding="async"
          src="@/assets/logo.svg"
          alt="Logo"
          class="m-2 w-40 hover:opacity-50"
        />
      </RouterLink>

      <div class="mx-2 flex items-center justify-center">
        <HeaderLink to="/" text="HOME" subtext="ホーム" />
        <HeaderLink to="/salon" text="SALON" subtext="サロン" />
        <HeaderLink to="/menu" text="MENU" subtext="メニュー" />
        <HeaderLink to="/news" text="NEWS" subtext="ニュース" />
        <HeaderLink to="/blog" text="BLOG" subtext="ブログ" />
        <HeaderLink to="/access" text="ACCESS" subtext="アクセス" />
        <HeaderLink to="/recruit" text="RECRUIT" subtext="求人" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import HeaderLink from "@/components/HeaderLink.vue";
</script>
