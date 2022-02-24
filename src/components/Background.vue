<template>
  <div class="background">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Background'
}
</script>

<style lang="less" scoped>
.background {
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
