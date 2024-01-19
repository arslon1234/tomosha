<script setup lang="ts">
import Navbar from "@/layout/Navbar.vue";
import TabSwitcherVersionTwo from "@/components/helpers/TabSwitcherVersionTwo.vue";
import { useI18n } from "vue-i18n";
import Footer from "@/layout/Footer.vue";
const { t } = useI18n({
  inheritLocale: true
});
</script>

<template>
<section>
  <Navbar navbar_style="dark"></Navbar>
  <div class="bg-black-5 px-[100px] pt-[42px]">
    <h1 class="text-[38px] font-bold text-[#fff]">{{t('personal_area')}}</h1>
    <TabSwitcherVersionTwo/>
  </div>
  <Footer/>
</section>
</template>

<style scoped lang="scss">

</style>