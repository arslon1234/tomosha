<script setup lang="ts">
import AppTransition from "@/components/ui/app-transition.vue";
interface IProps {
  modelValue: boolean
}
const props = defineProps<IProps>()
</script>

<template>
  <div>
    <div class="app-modal" :class="{ 'app-modal-show': modelValue }">
      <app-transition>
        <div v-if="modelValue" class="app-modal__body">
          <slot></slot>
        </div>
      </app-transition>
    </div>
    <app-transition>
      <span
          @click="$emit('update:modelValue', false)"
          v-if="modelValue"
          class="app-modal-shadow"
      ></span>
    </app-transition>
  </div>
</template>

<style>
.app-modal {
  position: fixed;
  transform: translate(-50%, -50%);
  left: 50%;
  width: 50%;
  max-height: 600px;
  top: 30%;
  background-color: #1E1E1E;
  z-index: -1;
  opacity: 0;
  overflow: auto;
  border-radius: 0.5rem;
}
.app-modal-show {
  opacity: 1;
  z-index: 100;
}
::-webkit-scrollbar {
  display: none;
}
.app-modal__body {
  padding: 20px;
}
.app-modal-shadow {
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  backdrop-filter:blur(4px);
  z-index: 99;
}
@media (max-width: 990px) {
  .app-modal{
    width: 70%;
  }
}
@media (max-width: 768px) {
  .app-modal{
    width: 80%;
  }
}
@media (max-width: 576px) {
  .app-modal{
    width: 90%;
  }
}
</style>