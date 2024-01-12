<script setup lang="ts">
import {reactive, ref} from "vue";
import exit from "../../assets/x.svg";
import {rules} from "./rules";
import {FormInstance} from "element-plus";

const ruleFormRef = ref<FormInstance>();

const form = reactive({
  login: "",
  password: ""
})

const submitForm = async (formEl: FormInstance | undefined) => {
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
  <!--  <div class="relative w-full h-[100vh] auth">-->
  <div class="login-form  bg-black-2">
    <div class="login-form__title mb-4 flex justify-between text-white">
      <h1 class=" text-3xl">
        Войти
      </h1>
      <el-button class="login-form__exit cursor-pointer">
        <img :src="exit" alt="Exit">
      </el-button>
    </div>
    <div class="login-form__desc mb-4 flex justify-between">
      <p class="text-sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque beatae delectus, doloremque facilis
        fugiat id ipsa mollitia
      </p>
    </div>
    <div class="login-form__inputs">
      <div class="relative">
        <el-form
            ref="ruleFormRef"
            :rules="rules"
            :model="form"
            class="flex flex-col gap-[20px] mb-[20px] mt-[20px]"
        >
          <el-form-item prop="login">
            <el-input v-model="form.login" placeholder="Логин"/>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="form.password" placeholder="Пароль"/>
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

    <div class="mt-1 text-sm">
      <p class="text-[#9A9A9A] mt-[32px]">
        Зарегистрируйтесь, если у вас нет учетной записи:
        <router-link to="/register" class="text-white">
          Регистрация
        </router-link>
      </p>
    </div>
  </div>
  <!--  </div>-->
</template>


<style lang="scss" scoped>

//form element style
:deep(.el-input__wrapper) {
  background-color: #232424;
  border: 2px solid #232424;
  box-shadow: none;
  border-radius: 6px;
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

    &__inputs {
      //width: ;
    }

    &__btn {

    }
  }

}


</style>
