<template>
  <div id="add">
    <el-container style="height:800px; border: 1px solid #eee">
      <el-aside width="300px" style="background-color: rgb(238, 241, 246)">
        <el-menu class="ys">
          <div class="logo">
            <p>logo</p>
          </div>
          <el-submenu index="1">
            <template slot="title">课程管理</template>
            <router-link tag="el-menu-item" to="mianfeike">·免费课</router-link>
            <router-link tag="el-menu-item" to="jingpingke">·精品课</router-link>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">综合素质题库管理</template>
            <router-link tag="el-menu-item" to="kaoshidagang">·考试大纲</router-link>
            <router-link tag="el-menu-item" to="linianzhenti">·历年真题</router-link>
            <router-link tag="el-menu-item" to="monishijuan">·模拟试卷</router-link>
            <router-link tag="el-menu-item" to="xuanzeti">·选择题</router-link>
            <router-link tag="el-menu-item" to="jiandati">·简答题</router-link>
            <router-link tag="el-menu-item" to="cailiaofenxiti">·材料分析题</router-link>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">教育教学能力题库管理</template>
            <router-link tag="el-menu-item" to="kaoshidagang2">·考试大纲</router-link>
            <router-link tag="el-menu-item" to="linianzhenti2">·历年真题</router-link>
            <router-link tag="el-menu-item" to="monishijuan2">·模拟试卷</router-link>
            <router-link tag="el-menu-item" to="xuanzeti2">·选择题</router-link>
            <router-link tag="el-menu-item" to="jiandati2">·简答题</router-link>
            <router-link tag="el-menu-item" to="cailiaofenxiti2">·材料分析题</router-link>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">学员成果管理</template>
            <router-link tag="el-menu-item" to="tongxueshuo">·同学说</router-link>
            <router-link tag="el-menu-item" to="tongxueganyan">·同学感言</router-link>
            <router-link tag="el-menu-item" to="shangkebiji">·上课笔记</router-link>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">订单管理</template>
            <router-link tag="el-menu-item" to="dingdanguanli">·订单管理</router-link>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">数据中心</template>
            <router-link tag="el-menu-item" to="shujuganlan">·数据概览</router-link>
          </el-submenu>
          <el-submenu index="7">
            <template slot="title">运营管理</template>
            <router-link tag="el-menu-item" to="duorenpingtuan">·多人拼团</router-link>
          </el-submenu>
          <el-submenu index="8">
            <template slot="title">用户管理</template>
              <router-link tag="el-menu-item" to="yonghuguanli">·用户管理</router-link>
          </el-submenu>
          <el-submenu index="9">
            <template slot="title">登录账号管理</template>
                <router-link tag="el-menu-item" to="dengluzhanghaoguanli">·登录账号管理</router-link>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style>
.ys {
  background: #404040;
}

.el-menu-item {
  background: #435267;
}
.ys {
  color: white;
}
.logo {
  height: 40px;
}
.logo > p {
  width: 200px;
  /* padding-left: 125px; */
  border-radius: 10px;
  text-align: center;
  height: 30px;
  line-height: 30px;
  margin-left: 50px;
  background: #989898;
}
.logo > p:hover {
  background: #128fe9;
}
.el-menu-item {
  color: white;
}
.el-submenu__title {
  color: white;
}

.submenu__title * {
  color: #ffffff;
  text-decoration: none;
}
</style>
<script>
export default {};
</script>