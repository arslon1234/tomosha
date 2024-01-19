<script setup lang="ts">
import Navbar from "../../layout/Navbar.vue";
import Footer from "../../layout/Footer.vue";
import {useTranslation} from "@/plugins/useTranslation.ts";
const {translate} = useTranslation()
</script>

<template>
<section class="w-full">
  <Navbar navbar_style="dark"/>
  <main class="flex justify-center items-center py-[52px] bg-[#000]">
  <div class="flex items-center flex-col max-w-[680px]">
    <h1 class="text-[120px] font-bold text-[#FF3B30]">404</h1>
    <p class="text-[38px] font-bold text-[#fff]">{{ translate('not_found_text') }}</p>
    <p class="text-center mt-[12px] text-[20px] font-medium text-[#FFFFFFBF]">
      <!--      {{t('not_found_desc')}}-->
      {{translate('not_found_desc')}}
    </p>
    <button class="mt-[20px] bg-red text-[#fff] rounded-[10px] border-0 font-semibold py-[14.5px] px-[63px] text-[16px]">{{translate('move_main_page')}}</button>
  </div>
  </main>
  <Footer/>
<!--  <TabSwitcher/>-->
</section>
</template>

<style scoped lang="scss">

</style>