<script setup lang="ts">
import {computed} from "vue";

interface Props {
  btn_type: string
}
const props = defineProps<Props>()

const btnType = {
  "message" : "py-[18.5px] px-[32px] text-[20px]",
  "not_found": "py-[14.5px] px-[63px] text-[16px]"
}
const classes = computed(()=>{
  return btnType[props.btn_type]
})
</script>

<template>
  <button
      :class="classes"
      class="bg-red text-[#fff] rounded-[10px] border-0 font-semibold"
  >
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">

</style>