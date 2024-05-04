<template>
  <div class="my-16 w-full max-w-5xl">
    <div class="ml-10 mr-2 flex items-center justify-around">
      <div class="mr-2 w-[450px]">
        <p
          class="mb-4 flex justify-center border-b-2 border-b-lucha-blue text-lg font-medium"
        >
          ACCESS
        </p>
        <div class="flex justify-center">
          <div
            class="flex w-[420px] flex-col items-center justify-center bg-lucha-main1 p-2"
          >
            <div class="mb-2">
              <p class="text-sm font-semibold">〒173-0004</p>
              <p class="text-sm font-semibold">
                東京都板橋区板橋1-34-7 平嶋ビル101
              </p>
            </div>
            <p class="mx-12 text-sm font-medium">JR板橋駅, 三田線新板橋駅,</p>
            <p class="mx-12 mb-2 text-sm font-medium">
              東上線下板橋駅 それぞれ徒歩7分
            </p>
            <Button2
              class="col-start-2"
              to="salon"
              text="アクセスをもっとみる"
            />
          </div>
        </div>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.0876921407425!2d139.71341207623348!3d35.748649326266865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018929758210517%3A0xd742f38085602cf5!2z576O5a655a6kIExVQ0hBIExJQlJF!5e0!3m2!1sja!2sjp!4v1714615953480!5m2!1sja!2sjp"
        width="300"
        height="300"
        style="border: 0"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button2 from "@/components/Button/Button2.vue";
</script>
