<script setup lang="ts">
import {computed, onMounted, reactive, ref} from "vue";
import SearchModal from "@/views/Modals/SearchModal.vue";
import SEARCH from '../assets/search.svg'
import USER from '../assets/user.svg'
import BookMark from '../assets/bookmark.svg'
import LANGUAGE from '../assets/lang.svg'
import {useTranslation} from "@/plugins/useTranslation.ts";
const {translate} = useTranslation()
import i18n from '../plugins/i18n.ts'
import GenreDropdown from "@/components/helpers/GengreDropdown.vue";
import ProfileDropdown from "@/components/helpers/ProfileDropdown.vue";
const navbar_items = reactive([
  {title: translate('premieres'), path: "#"},
  {title: translate('genre'), path: "#"},
  {title: translate('movies'), path: "#"},
  {title: translate('series'), path: "#"},
  {title: translate('cartoons'), path: "#"},
])
const search_modal = ref()
const dropdown_open = ref(false);
const genre_dropdown = ref(false)
const profile_dropdown = ref(false)
const change_lang = ref("Русский")
interface Props {
  navbar_style: string
}
const props = defineProps<Props>()
const navbarStyle = {
  "dark": "bg-black-2 text-[#FFFFFF8C]",
  "transparent": "bg-[transparent] text-[#fff]"
}
const classes = computed(()=>{
  return navbarStyle[props.navbar_style]
})
const path = window.location.href.split('/')[3]

const changeLanguage =(lang: string)=>{
  if(lang === 'ru'){
    change_lang.value = "Русский"
  }else {
    change_lang.value = "Uzbek"
  }
  localStorage.setItem('lang', lang)
  localStorage.setItem('change_lang', change_lang.value)
  i18n.global.locale = lang;
  location.reload();
  dropdown_open.value = false
}
onMounted(()=>{
  let val = localStorage.getItem('change_lang')
  if(val){
    change_lang.value = val
  }else {
    change_lang.value = "Русский"
  }
})
onMounted(() => {
  if (!localStorage.getItem("lang")) {
    localStorage.setItem("lang", "uz");
  }
  i18n.global.locale = localStorage.getItem("lang");
});
const openModal =()=>{
  search_modal.value.openModal()
}
const genreDropdown =()=>{
  genre_dropdown.value = true
}
const handleGenreClick = () => {
 genre_dropdown.value = false
};const handleProfileClick = () => {
 profile_dropdown.value = false
};
</script>

<template>
  <SearchModal ref="search_modal"/>
<nav :class="classes" class="w-full py-[20px] px-[100px] flex items-center justify-between">
  <div class="flex gap-[100px]">
    <img src=".././assets/logo.svg" alt="logo">
    <ul class="flex gap-[24px] relative">
      <li v-for="(item,index) in navbar_items" :key="index">
        <a :href="item.path"
           :class="item.title === translate('genre') ? '' : ''"
           @click="item.title === translate('genre') ? genreDropdown() : ''">
          {{item.title}}
          <GenreDropdown :genre_dropdown="genre_dropdown" :onClick="handleGenreClick"/>
        </a>
      </li>
    </ul>
  </div>
  <div class="flex gap-[20px] items-center">
    <img :src="SEARCH" alt="search" class="cursor-pointer" @click="openModal">
    <router-link to="/saved">
      <img v-if="path !== 'saved'" :src="BookMark" alt="bookmark">
      <span v-if="path == 'saved'" class="text-[#fff] text-[18px]"><i class="fa-solid fa-bookmark"></i></span>
    </router-link>
    <!--      avatar-->
    <div class="relative w-[100px] h-[38px] cursor-pointer">
      <button
          @click="dropdown_open = !dropdown_open"
          class="relative z-10 w-full h-full flex items-center gap-[6px]">
        <img :src="LANGUAGE" alt="language" loading="lazy">
        <span class="text-white">{{change_lang}}</span>
      </button>

      <div v-show="dropdown_open" @click="dropdown_open = false" class="fixed inset-0 z-10 w-full h-full"></div>
      <transition enter-active-class="transition duration-150 ease-out transform" enter-from-class="scale-95 opacity-0"
                  enter-to-class="scale-100 opacity-100" leave-active-class="transition duration-150 ease-in transform"
                  leave-from-class="scale-100 opacity-100" leave-to-class="scale-95 opacity-0">
        <div v-show="dropdown_open" class="absolute right-0 w-32 z-32 flex items-center justify-center mt-2 bg-black-3 rounded-lg ">
          <button v-if="change_lang !== 'Русский'" class="py-[10px] text-white z-50" @click="changeLanguage('ru')">Русский</button>
          <button v-if="change_lang == 'Русский'" class="py-[10px] text-white z-50" @click="changeLanguage('uz')">Uzbek</button>
        </div>
      </transition>
    </div>
    <div class="relative">
      <article class="bg-black-4 w-[62px] h-[62px] rounded-[50%] flex items-center justify-center cursor-pointer" @click="profile_dropdown = true">
        <img :src="USER" alt="user">
      </article>
      <ProfileDropdown :profile_dropdown="profile_dropdown" :onClick="handleProfileClick"/>
    </div>
  </div>
</nav>
</template>

<style scoped lang="scss">

</style>