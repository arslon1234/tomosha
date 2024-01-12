<script setup lang="ts">
defineProps({
  url: {
    type: String,
    default: "src/assets/film.png"
  },
  age: {
    type: String,
    default: "16+"
  },
  title: {
    type: String,
    default: "Название фильма"
  },
  desc: {
    type: String,
    default: "Бесплатно"
  }
})

</script>
<template>
  <div class="movie-card">
    <div class="movie-card__img">
      <img :src="url" alt="No">
      <div class="movie-card__age">
        {{ age }}
      </div>
    </div>
    <div class="flex flex-col gap-[9px]">
      <div class="movie-card__title">
        <p class="text-white">
          {{ title }}
        </p>
      </div>
      <div class="movie-card__desc">
        <span class="text-black-0.5">
          {{ desc }}
        </span>
      </div>

    </div>
  </div>
</template>


<style scoped lang="scss">
.movie-card {
  display: flex;
  flex-direction: column;
  gap: 20px;

  &__age {
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: rgba(255, 255, 255, 0.75);
    background: rgba(165, 165, 165, 0.10);
    padding: 7px;
    border-radius: 6px;
    height: 24px;
    width: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    backdrop-filter: blur(5px);
  }

  &__img {
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__title {

  }

  &__desc {

  }


}
</style>