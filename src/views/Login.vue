<template>
  <div class="login">
    <Background
      :style="{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }"
    >
      <LoginForm />
    </Background>
  </div>
</template>

<script>
import Background from '@/components/Background.vue'
import LoginForm from '@/components/LoginForm.vue'

export default {
  name: 'Login',
  components: {
    Background,
    LoginForm
  }
}
</script>

<style lang="less" scoped></style>
