<script setup lang="ts">
import {computed, reactive} from "vue";
import SEARCH from '../assets/search.svg'
import USER from '../assets/user.svg'
import BookMark from '../assets/bookmark.svg'
const navbar_items = reactive([
  {title: "Премьеры", path: "#"},
  {title: "Жанр", path: "#"},
  {title: "Фильмы", path: "#"},
  {title: "Сериалы", path: "#"},
  {title: "Мультфильмы", path: "#"},
])
interface Props {
  navbar_style: string
}
const props = defineProps<Props>()
const navbarStyle = {
  "dark": "bg-black-2 text-[#FFFFFF8C]",
  "transparent": "bg-[transparent]"
}
const classes = computed(()=>{
  return navbarStyle[props.navbar_style]
})
</script>

<template>
<nav :class="classes" class="w-full py-[20px] px-[100px] flex items-center justify-between">
  <div class="flex gap-[100px]">
    <img src=".././assets/logo.svg" alt="logo">
    <ul class="flex gap-[24px]">
      <li v-for="(item,index) in navbar_items" :key="index">
        <a :href="item.path">{{item.title}}</a>
      </li>
    </ul>
  </div>
  <div class="flex gap-[20px] items-center">
    <img :src="SEARCH" alt="search">
    <img :src="BookMark" alt="bookmark">
    <article class="bg-black-4 w-[62px] h-[62px] rounded-[50%] flex items-center justify-center">
      <img :src="USER" alt="user">
    </article>
  </div>
</nav>
</template>

<style scoped lang="scss">

</style>