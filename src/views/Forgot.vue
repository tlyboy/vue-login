<template>
  <div class="forgot"></div>
</template>

<script>
export default {
  name: 'Forgot',
  components: {}
}
</script>

<style lang="less" scoped>
.forgot {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  &::before {
    content: '';
    position: fixed;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: center no-repeat url('../assets/img/bg.jpg');
    background-size: cover;
  }
}
</style>
