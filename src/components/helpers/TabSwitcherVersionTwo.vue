<script setup lang="ts">
import USER from '@/assets/user.svg'
import COPY from '@/assets/copy.svg'
import {onMounted, reactive, ref} from "vue";
import {useTranslation} from "@/plugins/useTranslation.ts";
const {translate} = useTranslation()
import { useClipboard } from '@/plugins/useClipboard.ts';
const clipboard = useClipboard();
const textToCopy = ref('#000001');
const copied = ref('')
const activeTab = ref(1)
const tab_lists = reactive([
  {id: 1, title: translate('favorites')},
  {id: 2, title: translate('ratings')},
  {id: 3, title: translate('subscribe')},
  {id: 4, title: translate('payment')},
  {id: 5, title: translate('settings')},
])
const changeTab =(id: number)=>{
  activeTab.value = id
  localStorage.setItem('active', activeTab.value)
}
onMounted(()=>{
  let val = +localStorage.getItem('active')
  if(val){
    activeTab.value = val
  }else {
    activeTab.value = 1
  }
})
const handleCopy =()=>{
  clipboard.copyToClipboard(textToCopy.value);
  copied.value = translate('copied')
}
</script>

<template>
  <section class="flex px-[32px] bg-black-2 gap-[100px] rounded-[12px] my-[44px]">
    <div class="flex gap-[20px] my-[20px]">
      <aside class="bg-black-4 w-[52px] h-[52px] rounded-[50%] flex items-center justify-center">
        <img :src="USER" alt="user">
      </aside>
      <article>
        <h2 class="text-[18px] font-medium text-white">Асадбек Шомуродов</h2>
        <p class="flex items-center gap-[4px]">
          <span class="text-[#FFFFFFBF]">ID</span>
          <span class="text-[#fff]">{{textToCopy}}</span>
          <span v-if="copied" class="text-[#FFFFFFBF]">{{copied}}</span>
          <img v-else :src="COPY" alt="copy" class="cursor-pointer" @click="handleCopy">
        </p>
      </article>
    </div>
    <div class="menu-bar">
      <div v-for="(item,index) in tab_lists" :key="index">
        <p :class="activeTab === item.id ? 'active-tab': ''" @click="changeTab(item.id)">{{item.title}}</p>
      </div>
    </div>
  </section>

</template>

<style scoped lang="scss">

.menu-bar{
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  gap: 52px;
    p{
      position: relative;
      display: flex;
      flex-direction: column;
      transition: 0.3s ease all;
      margin-top: 35px;
      cursor: pointer;
      font-weight: 400;
      font-family: Roboto, sans-serif;
      color: #FFFFFFBF;
      &::after{
        content: "";
        margin-top: 35px;
        background-color: #FF3030;
        height: 3px;
        width: 0;
        transition: .3s;
      }
    }
    .active-tab{
      color: #FF3030;
      font-weight: 500;
      transition: none;
      &::after{
        content: "";
        margin-top: 35px;
        background-color: #FF3030;
        height: 3px;
        width: 100%;
        transition: .3s;
      }
    }
}
</style>