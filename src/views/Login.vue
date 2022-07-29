<template>
  <t-background>
    <div class="t-login">
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
.t-login {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
</style>
