<script setup lang="ts">

import {onMounted, reactive, ref} from "vue";

const tab_lists = reactive([
  {id: 1,title: "Все", url: "",},
  {id: 2,title: "Семья", url: ""}
])
const activeTab = ref(1)
const changeTabList =(id)=> {
  activeTab.value = id
  localStorage.setItem('active_tab', activeTab.value)
}
onMounted(()=>{
  let val = +localStorage.getItem('active_tab')
  if(val){
    activeTab.value = val
  }else {
    activeTab.value = 1
  }
})
</script>

<template>
<section>
  <article v-for="(item,index) in tab_lists" :key="index">
    <button type="submit" @click="changeTabList(item.id)" :class="activeTab === item.id ? 'bg-[#FF3B30]' : 'bg-black-4'" class="w-[132px] h-[47px] text-[16px] text-[#fff] font-semibold rounded-[14px]">{{item.title}}</button>
  </article>
</section>
</template>

<style scoped lang="scss">

</style>