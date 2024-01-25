<script setup lang="ts">
import {useRoute} from "vue-router";
const route = useRoute()
console.log(route.params.title)
</script>

<template>
<h1>Genres</h1>
</template>

<style scoped lang="scss">

</style>