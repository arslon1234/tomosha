<script setup lang="ts">
import AppModal from "@/components/ui/app-modal.vue";
import XMark from '@/assets/x_mark.svg'
import UserSample from '@/assets/user_sample.jpeg'
import LIKE from '@/assets/like.svg'
import DISLIKE from '@/assets/dislike.svg'
import {ref} from "vue";
const dialog = ref(false)
import {useTranslation} from "@/plugins/useTranslation.ts";
const {translate} = useTranslation()
const openModal =()=>{
  dialog.value = true
}
defineExpose({openModal})
</script>

<template>
<AppModal v-model="dialog">
  <section class="py-[35px] px-[10px] rounded-[12px]">
  <div class="flex justify-end">
    <button @click="dialog = false" class="w-[42px] h-[42px] rounded-[50%] bg-black-3 flex justify-center items-center">
      <img :src="XMark" alt="x_mark">
    </button>
  </div>
    <h1 class="text-[#fff] text-[34px] font-bold">Баба Яга спасает мир, 2023</h1>
    <article class="w-full flex gap-[20px] mt-[35px]">
      <input type="text" class="w-full px-[20px] py-[16px] rounded-[10px] bg-black-4 outline-0 text-[#FFFFFF8C] text-[20px] font-semibold">
      <button class="py-[16px] px-[32px] bg-red rounded-[10px] text-[20px] font-semibold text-[#fff]">{{translate('dispatch')}}</button>
    </article>
    <section class="w-full mt-[35px] flex items-start gap-[38px]">
      <div class="flex items-start gap-[20px]">
        <img :src="UserSample" alt="movie image" class="w-[62px] h-[62px] rounded-[6px]">
        <div>
          <p class="flex gap-[35px] items-center">
            <span class="text-[18px] font-bold text-[#fff]">Максим Ершов</span>
            <span class="text-[16px] font-medium text-[#FFFFFF8C]">9 марта 2021</span>
          </p>
          <p class="text-[16px] font-medium text-[#FFFFFF8F] leading-[22px] max-w-[480px]">
            Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.
          </p>
        </div>
      </div>
      <div class="flex gap-[12px]">
        <img :src="LIKE" alt="like">
        <span class="text-[#fff] text-[18px] font-bold">1</span>
        <img :src="DISLIKE" alt="dislike">
      </div>
    </section>
  </section>
</AppModal>
</template>

<style scoped lang="scss">

</style>