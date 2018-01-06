<template>
  <transition name="fade">
    <div class="toast">
      <slot name="header" class="toast-header"></slot>
      <div class="toast-body">
        <slot name="body"></slot>
      </div>

      <slot name="footer" class="toast-footer"></slot>
    </div>
  </transition>
</template>
<script>
  export default {
    name: 'Toast',
  }
</script>
<style lang="less" scoped>
  .toast{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    height: 150px;
    width: 300px;
    z-index: 1;
    background: rgba(0,0,0,0.8);
    padding: 20px;
    &-body{
      text-align: center;
      color: #ffffff;
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
    opacity: 0;
  }
</style>
