<template>
  <div class="cart-bottom">
    <div class="selectAll">
      <CheckButton class="check-button" :isChecked="isSelectAll" @click.native="selectAll" ref="checkButton"></CheckButton>
    </div>
    <div class="text">全选</div>
    <div class="total">合计:{{ totalPrice }}</div>
    <div class="calculate" @click="calclick">
      去结算({{checkedLength}})
    </div>
    <Toast :isShow="show" :message="message"></Toast>
  </div>
</template>

<script>
import CheckButton from 'components/content/CheckButton/CheckButton.vue';
import Toast from 'components/common/toast/toast'
export default {
  name: "shopBottomBar",
  data(){
    return {
      message: '',
      show: false
    }
  },
  components: {
    CheckButton,
    Toast
  },
  computed: {
    totalPrice(){
      return '￥' + this.$store.state.cartList.filter( item => {
        return item.checked
      }).reduce((preValue, item) => {
        return preValue + item.price * item.count
      },0).toFixed(2)
    },
    checkedLength(){
      return this.$store.state.cartList.filter( item => item.checked).length
    },
    isSelectAll(){
      if( this.$store.state.cartList.length === 0 ){
        return false
      }
      return !this.$store.state.cartList.some( item => !item.checked)
    }
  },
  methods: {
    selectAll(){
      if(this.isSelectAll){
        this.$store.state.cartList.forEach(item => item.checked = false)
      }
      else{
        this.$store.state.cartList.forEach(item => item.checked = true)
      }
    },
    calclick(){
      if(!this.isSelectAll) {
        this.message = '请先选择商品'
        this.show = true
        setTimeout(() => {
          this.show = false
        },1500)
      }
    }
  }
}
</script>

<style scoped>
.cart-bottom {
  width: 100%;
  float: left;
  height: 40px;
  position: relative;
  bottom: 40px;
  z-index: 11;
  background-color: #EEEDEF;
  line-height: 40px;
}
.selectAll {
  float: left;
  border: 1px #DCDBDC solid;
  margin: 8px 10px 0 10px;
  border-radius: 10px;
}
.check-button {
  line-height: 20px;
}
.text {
  float: left;
  padding-right: 30px;
}
.calculate {
  float: right;
  height: 40px;
  width: 100px;
  color: white;
  background-color: red;
  text-align: center;
}
.total {
  float: left;
}
</style>