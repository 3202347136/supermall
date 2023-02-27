<template>
  <div class="check-button" :class="{check: isChecked}">
    <img src="~assets/img/tick.svg" alt="">
  </div>
</template>

<script>
  export default {
    name: "CheckButton",
    props: {
      isChecked: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style  scoped>
.check-button {
  width: 20px;
  height: 20px;
  border-radius: 10px;
}
.check-button img {
  width: 100%;
  height: 100%;
}
.check {
  width: 20px;
  height: 20px;
  background-color: red;
  border-color: red;
  border-radius: 10px;
}
</style>