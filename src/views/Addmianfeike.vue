<template>
<div>
    <div class="daohan">
        <p>页面导航</p>
        <p>头像</p>
        <p>admin 退出</p>
    </div>
    <div class="qb">
        <div class="biaoti">
            <p>课程详情</p>
            <p>返回</p>
        </div>
    </div>
    </div>
</template>
<style>
*{
    padding: 0;
    margin: 0;
}
.daohan{
    width: 100%;
    height: 80px;
    background: white;
    position: fixed;
    top: -1px;
}
.daohan>p:nth-of-type(1){
    float: left;
    text-indent: 20px;
    line-height: 80px;
    color: #9f9f9f;
}
.daohan>p:nth-of-type(2){
    border: 1px solid #d0d0d0;
    width: 40px;
    height: 40px;
    margin-left: 700px;
    text-align: center;
    line-height: 40px;
    border-radius: 50%;
    color: white;
    background: #d0d0d0;
    margin-top: 25px;
}
.daohan>p:nth-of-type(3){
    margin-left:370px;
    margin-top: -30px;
}
.qb{
    width: 100%;
    height: 800px;
    background: white;
    margin-top: 100px;
}
.biaoti{
    height: 40px;
    border-bottom: 1px solid #f2f2f2;
}
.biaoti>p:nth-of-type(1){
    float: left;
    margin-left: 20px;
    line-height: 40px;
}
.biaoti>p:nth-of-type(2){
    float: right;
    margin-right: 20px;
    line-height: 25px;
    font-size: 13px;
    border: 1px solid gainsboro;
    width: 50px;
    height: 25px;
    margin-top: 8px;
    cursor: pointer;
}
</style>