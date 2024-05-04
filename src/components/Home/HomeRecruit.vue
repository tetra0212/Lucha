<template>
  <div class="mx-2 my-16 flex max-w-4xl flex-col items-center justify-center">
    <p
      class="mb-4 flex w-[450px] items-center justify-center border-b-2 border-b-lucha-blue text-lg font-medium"
    >
      CONTACT
    </p>
    <div class="mb-2 flex w-full items-center gap-10">
      <div class="flex justify-center">
        <div
          class="flex h-[200px] w-[420px] flex-col items-center justify-center bg-lucha-main1 p-2"
        >
          <div class="mb-2 flex items-center justify-center">
            <img
              decoding="async"
              src="@/assets/telephone-fill.svg"
              class="mx-2"
            />
            <p class="text-lg font-semibold">03-6912-4805</p>
          </div>
          <div class="mb-2 grid grid-cols-2 gap-2">
            <div class="flex flex-col items-center justify-center">
              <p class="text-sm font-semibold">平日受付</p>
              <p class="text-sm">10:00 - 20:00</p>
            </div>
            <div class="flex flex-col items-center justify-center">
              <p class="text-sm font-semibold">祝日受付</p>
              <p class="text-sm">10:00 - 19:00</p>
            </div>
            <div class="flex flex-col items-center justify-center">
              <p class="text-sm font-semibold">定休日</p>
              <p class="text-sm">火, 第2,3水曜日</p>
            </div>
          </div>

          <Button2 to="" text="電話で問い合わせする" />
        </div>
      </div>

      <div class="flex justify-center">
        <div
          class="flex h-[200px] w-[420px] flex-col items-center justify-center bg-lucha-main1 p-2"
        >
          <p class="mb-2 text-lg font-semibold">
            一緒に働いてくれるスタッフ募集中
          </p>
          <p class="mx-12 mb-2 text-sm font-medium">
            スタッフみんながお互いに尊重しあえるように、チームワークとコミュニケーションを
            重視しています。 皆さんが仕事をしやすい環境を創ることを約束します。
          </p>
          <Button2 class="col-start-2" to="recruit" text="求人をもっとみる" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button2 from "@/components/Button/Button2.vue";
</script>
