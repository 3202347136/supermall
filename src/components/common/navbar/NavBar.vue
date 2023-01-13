<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style>
.nav-bar {
  position: fixed;
  top: 0;
  display: flex;
  line-height: 44px;
  z-index: 2;
  width: 100%;
}

.left,
.right {
  width: 60px;
  text-align: center;
  /* background-color: red; */
}

.center {
  right: 0;
  flex: 1;
  /* background-color: skyblue; */
  text-align: center;
  color: #fff;
}
</style>