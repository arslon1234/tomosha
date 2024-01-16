<template>
  <div>
    <Carousel>
      <Slide v-for="slide in 10" :key="slide">
        <div class="carousel__item">{{ slide }}
          <img :src="main_1"/></div>
      </Slide>

      <template #addons>
        <Navigation/>
        <Pagination/>
      </template>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
import main_1 from "@/assets/main_1.png";
import {Carousel, Navigation, Pagination, Slide} from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

</script>

<style scoped>

</style>