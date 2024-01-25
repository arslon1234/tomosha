<script setup lang="ts">
import {defineProps, reactive} from 'vue';

const { onClick, genre_dropdown } = defineProps(['onClick', 'genre_dropdown']);
const genre_lists = reactive([
  {title: 'Комедия'},
  {title: 'Мелодрама'},
  {title: 'Приключения'},
  {title: 'Детектив'},
  {title: 'Военный'},
  {title: 'Мультфильмы'},
  {title: 'Драма'},
  {title: 'Семейный'},
  {title: 'Фантастика'},
  {title: 'Боевик'},
  {title: 'Фэнтези'},
  {title: 'История'},
])

const handleButtonClick = (event: MouseEvent) => {
  onClick(event);
};
</script>

<template>
  <div v-show="genre_dropdown" @click="handleButtonClick" class="fixed inset-0 z-10 w-full h-full"></div>
  <transition enter-active-class="transition duration-150 ease-out transform" enter-from-class="scale-95 opacity-0"
              enter-to-class="scale-100 opacity-100" leave-active-class="transition duration-150 ease-in transform"
              leave-from-class="scale-100 opacity-100" leave-to-class="scale-95 opacity-0">
    <div v-show="genre_dropdown" class="absolute left-0 z-32 flex flex-wrap items-center justify-center mt-2 bg-black-3 rounded-lg p-[30px]">
    <ul class="flex flex-wrap content-center gap-[20px]">
      <li v-for="(item, index) in genre_lists" :key="index" class="z-50">
        <router-link :to="{path: `/genres/${item.title}`}">{{item.title}}</router-link>
      </li>
    </ul>
    </div>
  </transition>
</template>

<style scoped lang="scss">

</style>