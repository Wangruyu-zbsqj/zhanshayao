<template>
  <div class="add1">
    <div class="tbu1">
      <p>页面导航</p>
      <img src="../img/tu1.png" />
      <p>
        admin
        退出
      </p>
    </div>
  <div class="zj">
    <br>
    <br>
    <br>
    <div class="dds">
      <p><span class="ling">0</span><img src="../img/tu3.png"></p>
      <p class="dds1">今日订单总数</p>
    </div>
    <div class="dds">
      <p><span class="ling">90.00</span><img src="../img/tu3.png"></p>
      <p class="dds2">今日订单总额</p>
    </div>
    <div class="dds">
      <p><span class="ling">0</span><img src="../img/tu3.png"></p>
      <p class="dds3">今日订单总数</p>
    </div>
    <div class="dds">
      <p><span class="ling">0</span><img src="../img/tu3.png"></p>
      <p class="dds4">今日订单总数</p>
    </div>
      <div class="ddtj">
    <p>
订单统计
    </p>
    <p><template>
       <p class="black">今日 <span class="blue">本周</span> 本月</p>
  <div class="block">
    <el-date-picker class="sj"
      v-model="value"
      type="daterange"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :default-time="['00:00:00', '23:59:59']">
    </el-date-picker>
  </div>
</template></p>
  </div>
  <div class="llt">
    <div class="tu1">
      <img src="../img/tu6.png" width="13%">
    </div>
    <p class="jyz">近一周订单统计</p>
  </div>
  <img src="../img/tu4.png" width="70%" class="lltu">
  </div>
    </div>
</template>
</script>
<style>
.tbu1 {
  width: 110%;
  height: 100px;
  background: white;
  margin-top: -50px;
}
.tbu1 > p:nth-of-type(1) {
  float: left;
  color: #9a9a9a;
  font-weight: bold;
  line-height: 90px;
  margin-left: 100px;
}
.tbu1 > img {
  width: 5%;
  margin-top: 45px;
  margin-left: 300px;
}
.tbu1 > p:nth-of-type(2) {
  margin-top: -35px;
  position: relative;
  right: -250px;
  color: #9a9a9a;
}
.zj{
  margin-top: 50px;
  width: 110%;
  height: 1000px;
  background: white;
  position: relative;
}
.dds{
  width: 198px;
  height: 100px;
  border: 1px solid #e4e4e4;  
  margin-left: 40px;
  border-radius: 10px 10px 0 0;
  float: left;
  margin-left: 25px;
}
.dds>p:nth-of-type(1){
  font-size: 30px;
  font-weight: bold;
  line-height: 130px;
  display: inline-block;
}
.dds>p:nth-of-type(1)>img{
  margin-left: 25px;
}
*{
  margin: 0;
  padding: 0;
}
.dds>p:nth-of-type(2){
  width: 198px;
  margin-left: -1px;
  margin-top: -30px;
  /* background: #67cccc; */
  height: 30px;
  color: white;
  line-height: 30px;
  border-radius: 0 0 10px 10px;
}
.dds1{
  background:#67cccc;
  border: 1px solid #67cccc;
}
.dds2{
  background:#349aff;
  border: 1px solid #349aff;
}
.dds3{
  background:#ffcc9a;
  border: 1px solid #ffcc9a;
}
.dds4{
  background:#c9c9c9;
  border: 1px solid #c9c9c9;
}
.ddtj{
  margin-top: 200px;
  margin-left: -880px;
}
.llt{
  width: 95%;
  height: 355px;
  border: 1px solid #e4e4e4;
  margin-left: 25px;
  border-radius: 5px;
  margin-top: 20px;
}
.tu1{
  margin-left: -780px;
  margin-top: 30px;
  border-right: 1px solid #e4e4e4;
}
.tu1>img:nth-of-type(1){
  margin-top: -28px;
  margin-left: 80px;
}
.llt>p:nth-of-type(1){
  margin-left: -260px;
  margin-top: -340px;
  font-weight: bold;
}
.sj{
  position: absolute;
  left: 600px;
  top: 320px;
}
.black{
  color: #999999;
  margin-left: 600px;
  font-weight: bold;
  position: absolute;
   left: -120px;
  top:330px;
}
.blue{
  color: #128fe9;
}
.lltu{
  margin-left: -230px;
  position: absolute;
  top: 440px;
}
</style>