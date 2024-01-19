<script setup lang="ts">
import YuTube from '../assets/yutube.svg'
import TELEGRAM from '../assets/telegram.svg'
import FACEBOOK from '../assets/facebook_v2.svg'
import YANDEX from '../assets/yandex_v2.svg'
import WhatsApp from '../assets/whatsapp.svg'
import INSTAGRAM from '../assets/instagram.svg'
import TikTok from '../assets/tiktok.svg'
import ABS from '../assets/abs.svg'
import GooglePlay from '../assets/google_play.svg'
import GooglePlayText from '../assets/google_play_text.svg'
import GetItOn from '../assets/get_it_in.svg'
import Apple from '../assets/apple.svg'
import AppleDownload from '../assets/download_on.svg'
import AppStore from '../assets/app_store.svg'
import AppleGallery from '../assets/apple_gallery.svg'
import Explore from '../assets/explore.svg'
import AppGalleryText from '../assets/app_gallary_text.svg'
import {reactive} from "vue";
import {useTranslation} from "@/plugins/useTranslation.ts";
const {translate} = useTranslation()

const about = reactive([
  {title: translate('contacts'), path:"#"},
  {title: translate('advertising'), path:"#"},
  {title: translate('support'), path:"#"},
  {title: translate('subscriptions'), path:"#"},
  {title: translate('partners'), path:"#"},
  {title: translate('copyright'), path:"#"},
])
const category = reactive([
  {title: translate('premieres'), path:"#"},
  {title: translate('new_year'), path:"#"},
  {title: translate('cartoons'), path:"#"},
  {title: 'Подборки', path:"#"},
  {title: 'Обратная связь', path:"#"},
])
const others = reactive([
  {title: translate('vacancies'), path:"#"},
  {title: translate('certificate'), path:"#"},
])
const social = reactive([
  {img: TELEGRAM, path: ""},
  {img: INSTAGRAM, path: ""},
  {img: YuTube, path: ""},
  {img: TikTok, path: ""},
  {img: FACEBOOK, path: ""},
  {img: WhatsApp, path: ""},
  {img: YANDEX, path: ""},
])
const programs = reactive([
  {img1: GooglePlay, img2: GetItOn, img3: GooglePlayText, alt:"google play"},
  {img1: Apple, img2: AppleDownload, img3: AppStore, alt:"apple"},
  {img1: AppleGallery, img2: Explore, img3: AppGalleryText, alt: "apple gallery"},
])

</script>

<template>
<footer class="footer">
  <section class="footer__top">
    <div>
      <p class="text-[22px] font-semibold text-[#fff]">{{translate('about_us')}}</p>
      <ul>
        <li v-for="(item,index) in about" :key="index" class="text-[18px] text-[#FFFFFF80]">
          <a :href="item.path">{{item.title}}</a>
        </li>
      </ul>
    </div>
    <div>
      <p class="text-[22px] font-semibold text-[#fff]">{{translate('category')}}</p>
      <ul>
        <li v-for="(item,index) in category" :key="index" class="text-[18px] text-[#FFFFFF80]">
          <a :href="item.path">{{item.title}}</a>
        </li>
      </ul>
    </div>
    <div>
      <p class="text-[22px] font-semibold text-[#fff]" >{{translate('other')}}</p>
      <ul>
        <li v-for="(item,index) in others" :key="index" class="text-[18px] text-[#FFFFFF80]">
          <a :href="item.path">{{item.title}}</a>
        </li>
      </ul>
    </div>
    <div>
      <p class="text-[22px] font-semibold text-[#fff]">{{translate('social_media')}}</p>
      <div class="flex max-w-[252px] flex-wrap gap-[20px]">
        <article class="w-[48px] h-[48px] bg-black-1 rounded-[6px] flex items-center justify-center" v-for="(item,index) in social" :key="index">
          <img :src="item.img" alt="social media">
        </article>
      </div>
    </div>
    <div class="flex flex-col max-w-[280px] gap-[20px] items-center">
     <div class="bg-red p-[12px] rounded-[35px] footer__top-abs">
       <img :src="ABS" alt="advertising">
     </div>
      <p class="text-[18px] text-[#FFFFFFBF] leading-6 text-center">{{translate('watch_without_add')}}</p>
    </div>
  </section>
  <section class="mt-[42px]">
  <h1 class="text-[22px] font-semibold text-[#fff]">{{translate('programs')}}</h1>
    <div class="mt-[30px] flex gap-[20px]">
     <div v-for="(item,index) in programs" :key="index" class="w-[183px] flex gap-[10px] px-[15px] py-[10px] bg-black-1 rounded-[5px]">
       <div>
         <img :src="item.img1" :alt="item.alt">
       </div>
      <div class="">
        <img :src="item.img2" :alt="item.alt">
        <img :src="item.img3" :alt="item.alt" class="mt-[5px]">
      </div>
     </div>
    </div>
  </section>
  <div class="w-full h-[1px] bg-[#FFFFFF1A] mt-[42px] mb-[52px]">
  </div>
  <section class="flex justify-between items-center">
  <p class="text-[18px] font-medium text-[#FFFFFF80]">
    © TOMOSHA.UZ - {{translate('reserved')}}
  </p>
    <p class="text-[18px] font-medium text-[#FFFFFF80]">
      {{translate('producer')}}: Perfect Group
    </p>
  </section>
</footer>
</template>

<style scoped lang="scss">
.footer{
  padding: 52px 100px;
  display: flex;
  flex-direction: column;
  background-color: #1D1F1E;
  .footer__top{
    display: flex;
    gap: 70px;
    justify-content: space-between;
    flex-wrap: wrap;
    ul{
      display: flex;
      flex-direction: column;
      gap: 16px;
      font-family: Roboto;
    }
    .footer__top-abs{
      width: 160px;
      height: 160px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0px 0px 150px 0px #FF3B30;
    }
  }
}
</style>