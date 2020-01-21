<template>
  <div class="index">
      {{msg}}
  </div>
</template>

<script>
// const tcb = require("tcb-js-sdk");

export default {
  name: 'index',
  data () {
    return {
      msg: 'This is my components!'
    }
  },
  created (){

    tcb.init({
        env: 'qinyuapp-gka41'
    });

    let auth = tcb.auth({
      persistence: 'local' //用户显式退出或更改密码之前的30天一直有效
    }).weixinAuthProvider({
      appid: 'wx09cbc5db59eae584',
      scope: 'snsapi_base'
    }).signIn().then(() => {
      console.log("登录成功");
    }).catch(err => {
      console.log("登录失败" + err);
    })


    
    console.log("我是组件，我被创建了");
  }
}
</script>

<style scoped>
.index{
  height: 100vh;
  border: 1px solid red;
  box-sizing: border-box;
}
</style>
