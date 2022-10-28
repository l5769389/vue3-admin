<template>
  <div class="login-container">
    <el-form
        ref="loginRef"
        :rules="loginRule"
        class="login-form"
             :model="loginForm">
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>
      <el-form-item prop="username">
          <span class="svg-container" >
              <svg-icon icon="https://res.lgdsunday.club/user.svg" />
          </span>
        <el-input
          placeholder="username"
          name="username"
          type="text"
          v-model="loginForm.username"
        />
      </el-form-item>

      <el-form-item prop="password">
          <span class="svg-container">
              <svg-icon icon="password" />
          </span>
        <el-input
          placeholder="password"
          name="password"
          v-model="loginForm.password"
          :type="passwordType"
        />
        <span class="show-pwd" @click="onPasswordTypeChange">
            <svg-icon :icon="passwordType ==='password' ? 'eye':'eye-open'" />
        </span>
      </el-form-item>

      <el-button type="primary" style="width: 100%; margin-bottom: 30px"
                 @click="handleLogin"
      >登录
      </el-button
      >
    </el-form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { ElMessage } from 'element-plus'
import router from '@/router'
/**
 * 引入 store
 * @type {Store<any>}
 */
const store = useStore()

const loginForm = ref({
  username: '',
  password: ''
})
const passwordType = ref('password')
const loginRule = reactive({
  username: [
    {
      required: true,
      message: '必填',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '必填',
      trigger: 'blur'
    }
  ]
})
const onPasswordTypeChange = () => {
  if (passwordType.value === 'password') {
    passwordType.value = ''
  } else {
    passwordType.value = 'password'
  }
}

/**
 * 绑定表单
 * @type {null}
 */
const loginRef = ref(null)
const handleLogin = async () => {
  try {
    await validateForm(loginRef)
    const res = await store.dispatch('user/login', loginForm.value)
    if (res.data.code === 200) {
      ElMessage({
        message: 'Success',
        type: 'success'
      })
      await router.push('/')
    }
  } catch (e) {
    console.log(e)
  }
}
const validateForm = (formRef) => {
  return new Promise((resolve, reject) => {
    formRef.value.validate((valid, fields) => {
      if (valid) {
        resolve()
      } else {
        reject(new Error('error'))
      }
    })
  })
}

</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;

    ::v-deep .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }

    ::v-deep .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;

      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        caret-color: $cursor;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
