<script setup lang="ts">
import {defineProps} from 'vue';
import USER from '@/assets/user.svg'
const { onClick, profile_dropdown } = defineProps(['onClick', 'profile_dropdown']);
import {useRouter} from "vue-router";
const router = useRouter()
const handleButtonClick = (event: MouseEvent) => {
  onClick(event);
};
const movePersonalPage =()=>{
    router.push({name: 'saved'})
}

</script>

<template>
  <div v-show="profile_dropdown" @click="handleButtonClick" class="fixed inset-0 z-10 w-full h-full"></div>
  <transition enter-active-class="transition duration-150 ease-out transform" enter-from-class="scale-95 opacity-0"
              enter-to-class="scale-100 opacity-100" leave-active-class="transition duration-150 ease-in transform"
              leave-from-class="scale-100 opacity-100" leave-to-class="scale-95 opacity-0">
    <div v-show="profile_dropdown" class="absolute w-[332px] z-10 top-[60px] right-0 z-32 flex flex-wrap items-center justify-center mt-2 bg-black-3 rounded-lg p-[30px]">
      <article class="w-[100%] flex items-center justify-around cursor-pointer" @click="movePersonalPage">
        <div class="bg-black-4 w-[62px] h-[62px] rounded-[50%] flex items-center justify-center cursor-pointer">
          <img :src="USER" alt="user">
        </div>
        <h2 class="text-[18px] font-normal text-[#fff]">ArslonBek Ro'ziboyev</h2>
      </article>
    </div>
  </transition>
</template>

<style scoped lang="scss">

</style>