<template>
  <div class="flex w-full justify-center bg-lucha-blue">
    <div class="flex w-full max-w-7xl items-center justify-between">
      <RouterLink to="/">
        <img
          decoding="async"
          src="@/assets/logo2.svg"
          alt="Logo"
          class="m-2 w-40 hover:opacity-50"
        />
      </RouterLink>

      <div class="mx-2 flex items-center justify-center">
        <RouterLink to="/">
          <p class="font-semiboldf p-2 text-sm text-white hover:opacity-50">
            ホーム
          </p>
        </RouterLink>
        <RouterLink to="/salon">
          <p class="p-2 text-sm font-medium text-white hover:opacity-50">
            サロン
          </p>
        </RouterLink>
        <RouterLink to="/menu">
          <p class="p-2 text-sm font-medium text-white hover:opacity-50">
            メニュー
          </p>
        </RouterLink>
        <RouterLink to="/news">
          <p class="p-2 text-sm font-medium text-white hover:opacity-50">
            ニュース
          </p>
        </RouterLink>
        <RouterLink to="/blog">
          <p class="p-2 text-sm font-medium text-white hover:opacity-50">
            ブログ
          </p>
        </RouterLink>
        <RouterLink to="/access">
          <p class="p-2 text-sm font-medium text-white hover:opacity-50">
            アクセス
          </p>
        </RouterLink>
        <RouterLink to="/recruit">
          <p class="p-2 text-sm font-medium text-white hover:opacity-50">
            求人
          </p>
        </RouterLink>
      </div>
    </div>
  </div>

  <div class="flex w-full justify-center bg-lucha-blue">
    <div class="flex w-full max-w-7xl items-end justify-center">
      <p class="m-2 text-xs text-white">
        Copyright © 2024 LUCHA LIBRE All Rights Reserved.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
