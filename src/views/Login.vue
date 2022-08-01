<template>
  <t-background>
    <div class="login">
      <t-login-form />
    </div>
  </t-background>
</template>

<script>
import TLoginForm from '@/components/TLoginForm.vue'

export default {
  components: {
    TLoginForm
  }
}
</script>

<style lang="less" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
</style>
