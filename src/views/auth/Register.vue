<script setup lang="ts">
import {reactive, ref} from "vue";
import type {FormInstance, FormRules} from 'element-plus'
import exit from "../../assets/x.svg"
import GOOGLE from "../../assets/google.svg"
import OK from "../../assets/ok.svg"
import FACEBOOK from "../../assets/facebook.svg"
import YANDEX from "../../assets/yandex.svg"

interface RuleForm {
  fio: string,
  phone: string,
  login: string,
  password: string
}

const ruleFormRef = ref<FormInstance>()
//inputs value
const form = reactive({
  fio: "",
  phone: "",
  login: "",
  password: ""
})

//rules
const rules = reactive<FormRules<RuleForm>>({
  fio: [
    {required: true, message: 'Please input Activity name', trigger: 'blur'},
    {min: 4, max: 15, message: 'Length should be 3 to 5', trigger: 'blur'},
  ],
  phone: [
    {required: true, message: 'Please input Activity name', trigger: 'blur'},
    {min: 4, max: 15, message: 'Length should be 3 to 5', trigger: 'blur'},
  ],
  login: [
    {required: true, message: 'Please input Activity name', trigger: 'blur'},
    {min: 4, max: 15, message: 'Length should be 3 to 5', trigger: 'blur'},
  ],
  password: [
    {required: true, message: 'Please input Activity name', trigger: 'blur'},
    {min: 4, max: 15, message: 'Length should be 3 to 5', trigger: 'blur'},
  ]
})

const submitForm = async (formEl: FormInstance | undefined) => {
  console.log("as", formEl)
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
      console.log('form value', form)
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>

<template>
  <div class="login-form  bg-black-2">
    <div class="login-form__title mb-4 flex justify-between text-white">
      <h1 class=" text-3xl">
        Зарегистрироваться
      </h1>
      <el-button class="login-form__exit cursor-pointer">
        <img :src="exit" alt="Exit">
      </el-button>
    </div>
    <div class="login-form__desc mb-4 flex justify-between">
      <p class="text-sm">
        Введите данные для регистрации с сайта.
      </p>
    </div>
    <div class="login-form__inputs">
      <div class="relative">
        <el-form
            class="flex flex-col gap-[20px] mb-[20px] mt-[20px]"
            :rules="rules"
            ref="ruleFormRef"
            :model="form"
        >
          <el-form-item prop="fio">
            <el-input v-model="form.fio" placeholder="ФИО"/>
          </el-form-item>
          <el-form-item prop="phone">
            <el-input v-model="form.phone" placeholder="Номер телефона"/>
          </el-form-item>
          <el-form-item prop="login">
            <el-input v-model="form.login" placeholder="Придумать логин"/>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="form.password" placeholder="Создать пароль"/>
          </el-form-item>
        </el-form>
      </div>
    </div>

    <el-button
        @click="submitForm(ruleFormRef)"
        class=" w-full  text-sm "
    >
      Подтверждение
    </el-button>

    <!--    google yandex facebook ok-->
    <div class="flex gap-[20px] mt-[20px]">
      <button class="p-[12px] bg-black-1 w-[99px] flex justify-center cursor-pointer align-center">
        <img :src="GOOGLE" alt="">
      </button>
      <button class="p-[12px] bg-black-1 w-[99px] flex justify-center cursor-pointer align-center">
        <img :src="YANDEX" alt="">
      </button>
      <button class="p-[12px] bg-black-1 w-[99px] flex justify-center cursor-pointer align-center">
        <img :src="FACEBOOK" alt="">
      </button>
      <button class="p-[12px] bg-black-1 w-[99px] flex justify-center cursor-pointer align-center">
        <img :src="OK" alt="">
      </button>

    </div>

    <div class="mt-1 text-sm">
      <p class="text-[#9A9A9A] mt-[32px]">
        У вас есть аккаунт на сайте?
        <router-link to="/login" class="text-white">
          Login
        </router-link>
      </p>
    </div>
  </div>
</template>


<style lang="scss" scoped>

//form element style
:deep(.el-input__wrapper) {
  background-color: #232424;
  border: 2px solid #232424;
  box-shadow: none;
  border-radius: 6px;
}

:deep(.el-form-item) {
  margin: 0;
}

:deep(.el-input__wrapper.is-focus) {
  border: 2px solid #232424;
  box-shadow: none;
}

:deep(.el-input__inner) {
  color: white;
  padding: 20px 21px;
}

:deep(.el-button) {
  padding: 25px 30px;
  background: #2E2E2D;
  border-radius: 10px;
  border: 1px solid #2E2E2D;
  color: rgba(255, 255, 255, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: white;
  }
}

.login {
  &-form {
    max-width: 522px;
    width: 100%;
    border-radius: 12px;
    padding: 42px 32px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    &__exit {
      width: 32px;
      height: 32px;
      font-size: 24px;
      border-radius: 50%;
      background: #2E2E2D;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 4px;
    }

    &__desc {
      color: #9A9A9A;
      font-weight: 600;
      line-height: 20px;
      word-wrap: break-word;

    }

  }

}


</style>
