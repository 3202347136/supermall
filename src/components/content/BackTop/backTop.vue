<template >
  <div class="box">
    <img src="~assets/img/top.svg" alt="">
  </div>
</template>

<script>
export default {
  name: 'backtop'
}
</script>

<style  scoped>
.box {
  position: fixed;
  bottom: 55px;
  right: 10px;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #F7F5F6;
  text-align: center;
  padding-top: 10px;
}

img {
  width: 30px;
  height: 30px;
}
</style>