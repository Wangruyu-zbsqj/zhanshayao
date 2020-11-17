<template>
  <div class="add">
    <div class="login">
      <p>LoGo</p>
    </div>
    <div class="zhdl">
      <p>账号登录</p>
      <input type="search" placeholder="请输入账号">
      <i class="el-icon-mobile"></i>
      <input type="password" placeholder="请输入登录密码">
       <i class="el-icon-unlock"></i>
      <input type="submit" value="登录" @click="to">
      <p><input type="checkbox">记录登录状态</p>
    </div>
  </div>
</template>
<style>
.login>p{
  color: #9a9a9a;
  width: 200px;
  border: 1px solid #f2f2f2;
  background: white;
  height: 200px;
  border-radius: 50%;
  line-height:120px;
  font-size: 20px;
  font-weight: bold;
  margin-left: 510px;
}
body{
  background: #f2f2f2;
}
.zhdl{
  background: white;
  width: 600px;
  height: 700px;
  margin-top: -130px;
  margin-left: 310px;
  border-radius: 15px;
}
.zhdl>p:nth-of-type(1){
  color: #128fe9;
  line-height: 150px;
  font-weight: bold;
  width: 500px;
  text-align: center;
  margin-left: 50px;
  height: 120px;
  border-bottom: 2px solid #128fe9;
}
.zhdl>input{
  width: 400px;
  height: 50px;
  border-radius: 5px;
  border: 2px solid gainsboro;
  margin-top: 20px;
  padding-left:40px;
}
.zhdl>input:nth-of-type(2){
  width: 360px;
}
.zhdl>input:nth-of-type(3){
  background: #128fe9;
  border: white;
  color: white;
  font-weight: 400;
  font-size: 18px;
  margin-left: -20px;
}
.zhdl>input:nth-of-type(3):hover{
  opacity: 0.7;
}
.zhdl>input:nth-of-type(4){
  width: 15px;
  position: absolute;
  top:520px;
  left: 415px;
}
.zhdl>p:nth-of-type(2){
  font-size: 13px;
  color: #c9c9c9;
  margin-left: -305px;
}
.zhdl>i{
  position: relative;
  left: -385px;
}
</style>
<script>
export default {
  name:'app',
    methods:{
        to(){
            this.$router.push({
                path:'/home'
            })
        }
    }
}
</script>