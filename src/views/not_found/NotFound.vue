<script setup lang="ts">
import Navbar from "../../layout/Navbar.vue";
import Footer from "../../layout/Footer.vue";
import TabSwitcher from "../../components/helpers/TabSwitcher.vue";
</script>

<template>
<section class="w-full">
  <Navbar navbar_style="dark"/>
  <main class="flex justify-center items-center py-[52px] bg-[#000]">
  <div class="flex items-center flex-col max-w-[680px]">
    <h1 class="text-[120px] font-bold text-[#FF3B30]">404</h1>
    <p class="text-[38px] font-bold text-[#fff]">Страница не найдена</p>
    <p class="text-center mt-[12px] text-[20px] font-medium text-[#FFFFFFBF]">
      К сожалению, запрашиваемая страница не найдена. Пожалуйста, вернитесь на главную страницу, нажав на кнопку ниже. На главную
    </p>
    <button class="mt-[20px] bg-red text-[#fff] rounded-[10px] border-0 font-semibold py-[14.5px] px-[63px] text-[16px]">На главную</button>
  </div>
  </main>
  <Footer/>
<!--  <TabSwitcher/>-->
</section>
</template>

<style scoped lang="scss">

</style>