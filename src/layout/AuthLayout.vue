<template>
  <div class="relative w-full h-[100vh] auth">
    <div class="login-form  bg-black-2">
      <router-view/>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.auth {
  background-image: url("../assets/auth_bg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}


</style>