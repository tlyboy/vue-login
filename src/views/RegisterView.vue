<template>
  <div class="register"></div>
</template>

<script>
export default {
  name: 'RegisterView'
}
</script>

<style lang="less" scoped>
.register {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  &::before {
    content: '';
    position: fixed;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: center no-repeat url('../assets/img/register_bg.jpg');
    background-size: cover;
  }
}
</style>
