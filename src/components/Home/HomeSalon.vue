<template>
  <div class="my-16 w-full max-w-5xl">
    <div class="mb-16 ml-2 mr-10 flex items-center justify-around">
      <img decoding="async" src="@/assets/salon01.png" class="w-[300px]" />

      <div class="ml-2 w-[450px]">
        <p
          class="mb-4 flex justify-center border-b-2 border-b-lucha-blue text-lg font-medium"
        >
          CONCEPT
        </p>
        <div class="flex justify-center">
          <div
            class="flex w-[420px] flex-col items-center justify-center bg-lucha-main1 p-2"
          >
            <p class="text-lg font-semibold">リラックスした時間</p>
            <p class="mb-2 text-lg font-semibold">再現しやすいスタイル</p>
            <p class="mx-12 mb-4 text-sm font-medium">
              地中海をモチーフにした落ち着いた空間でお客様と向き合い、ご自宅に帰られた後も再現しやすいスタイリングを心がけています。
            </p>
            <Button2
              class="col-start-2"
              to="salon"
              text="コンセプトをもっとみる"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="mb-16 ml-10 mr-2 flex items-center justify-around">
      <div class="mr-2 w-[450px]">
        <p
          class="mb-4 flex justify-center border-b-2 border-b-lucha-blue text-lg font-medium"
        >
          STYLIST
        </p>
        <div class="flex justify-center">
          <div
            class="flex w-[420px] flex-col items-center justify-center bg-lucha-main1 p-2"
          >
            <p class="mb-2 text-lg font-semibold">ルチャリブレ代表 松川和弘</p>
            <p class="mb-2 text-sm font-semibold">
              ひとりひとりに似合わせます。
            </p>
            <p class="mx-12 mb-2 text-sm font-medium">
              カウンセリングを大切にして、毎朝楽にまとまるスタイルを提案します。楽しい時間をお届けしたいです。
            </p>
            <Button2
              class="col-start-2"
              to="salon"
              text="スタイリストをもっとみる"
            />
          </div>
        </div>
      </div>

      <img decoding="async" src="@/assets/salon02.png" class="w-[300px]" />
    </div>

    <div class="ml-2 mr-10 flex items-center justify-around">
      <img decoding="async" src="@/assets/salon03.png" class="w-[300px]" />

      <div class="ml-2 w-[450px]">
        <p
          class="mb-4 flex justify-center border-b-2 border-b-lucha-blue text-lg font-medium"
        >
          MENU
        </p>
        <div class="flex justify-center">
          <div
            class="flex w-[420px] flex-col items-center justify-center bg-lucha-main1 p-2"
          >
            <p class="mb-2 text-lg font-semibold">
              こだわりをもったスタイリングを
            </p>
            <p class="mx-12 text-sm font-medium">
              頭の形、輪郭、毛の流れなどを見てデザイン提案させて頂きます。
            </p>
            <p class="mx-12 mb-4 text-sm font-medium">
              カラーやパーマはこだわった薬剤を使用しており頭皮に低刺激です。
            </p>
            <Button2
              class="col-start-2"
              to="menu"
              text="メニューをもっとみる"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button2 from "@/components/Button/Button2.vue";
</script>
