<template>
  <div class="main">
    <Navbar navbar_style="transparent"/>
  </div>
  <div class="relative ">

    <el-carousel indicator-position="outside" trigger="click">
      <el-carousel-item v-for="item in data" :key="item">
        <h3 text="2xl" justify="center">{{ item.title }}</h3>
        <div class="img_wrap">
          <img :src="item.image" alt="no image">
        </div>
      </el-carousel-item>
    </el-carousel>

  </div>
</template>

<script setup lang="ts">
import main_1 from "@/assets/main_1.png";
import {reactive} from "vue";
import Navbar from "@/layout/Navbar.vue";

const data = reactive([
  {
    title: "Xatiko 1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur eius obcaecati repudiandae.\n",
    image: main_1
  },
  {
    title: "Xatiko 2",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur eius obcaecati repudiandae.\n",
    image: main_1

  },
  {
    title: "Xatiko 3",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur eius obcaecati repudiandae.\n",
    image: main_1

  },
  {
    title: "Xatiko 4",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur eius obcaecati repudiandae.\n",
    image: main_1

  }, {
    title: "Xatiko 5",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur eius obcaecati repudiandae.\n",
    image: main_1

  }

])
</script>

<style scoped>
</style>