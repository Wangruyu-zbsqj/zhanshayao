<template>
  <div class="add">
    <div class="tbu">
      <p>页面导航</p>
      <img src="../img/tu1.png" />
      <p>
        admin
        <span class="di2">退出</span>
      </p>
    </div>
    <div class="k2">
      <el-input v-model="input" placeholder="请输入内容" class="kkk"></el-input>
      <template>
        <el-button type="primary" class="cx12">查询</el-button>
        <el-button class="cz12">重置</el-button>
      </template>
    </div>
    <div class="tjan">
      <el-button type="primary" class="kc">+添加选择题</el-button>
      </div>
    <template>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column
      type="selection"
      width="55">
    </el-table-column>
        <el-table-column prop="date" label="题目ID" width="100"></el-table-column>
        <el-table-column prop="name" label="题目内容" width="120"></el-table-column>
        <el-table-column prop="address1" label="选项A" width="100">
        </el-table-column>
        <el-table-column prop="address" label="选项B" width="100"></el-table-column>
        <el-table-column prop="zj" label="选项C" width="100"></el-table-column>
        <el-table-column prop="js" label="选项D" width="100"></el-table-column>
        <el-table-column prop="rs" label="排序" width="100"></el-table-column>
        <el-table-column prop="tjsj" label="添加时间" width="160"></el-table-column>
         <el-table-column prop="name" label="操作" width="160">
              <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData)"
          type="text"
          size="small">
          移除
        </el-button>
      </template>
         </el-table-column>
      </el-table>
    </template>
    <div class="fy">
      <el-pagination 
  background
  layout="prev, pager, next"
  :total="1000">
</el-pagination>
    </div>
  </div>
</template>
<script>
export default {
   methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      }
    },
  data() {
    return {
      tableData: [
        {
          date: "2019999",
          name: "教学观是指()",
          address: "内容B",
          zj:"内容C",
          js:"内容D",
          kclx:"综合素质",
          rs:"1",
          tjsj:"2017-07-19 14:48:38",
          address1:"内容A"
        },
        {
          date: "2019999",
          name: "教学观是指()",
          address: "内容B",
          zj:"内容C",
          js:"内容D",
          kclx:"教育教学能力",
          rs:"2",
          tjsj:"2017-07-19 14:48:38",
          address1:"内容A"
        },
        {
          date: "2019999",
          name: "教学观是指()",
      address: "内容B",
          zj:"内容C",
          js:"内容D",
          kclx:"综合素质",
          rs:"3",
          tjsj:"2017-07-19 14:48:38",
          address1:"内容A"
        },
        {
          date: "2019999",
          name: "教学观是指()",
       address: "内容B",
          zj:"内容C",
          js:"内容D",
          kclx:"综合素质",
          rs:"4",
          tjsj:"2017-07-19 14:48:38",
          address1:"内容A"
        },
        {
          date: "2019999",
          name: "教学观是指()",
        address: "内容B",
          zj:"内容C",
          js:"内容D",
          kclx:"综合素质",
          rs:"5",
          tjsj:"2017-07-19 14:48:38",
          address1:"内容A"
        },
        {
          date: "2019999",
        address: "内容B",
        name: "教学观是指()",
          zj:"内容C",
          js:"内容D",
          kclx:"综合素质",
          rs:"6",
          tjsj:"2017-07-19 14:48:38",
          address1:"内容A"
        }
      ],
      multipleSelection: [],
      options: [
        {
          value: "选项1",
          label: "课程类型"
        },
        {
          value: "选项2",
          label: "综合素质"
        },
        {
          value: "选项3",
          label: "教育教学能力"
        }
      ],
      value: ""
    };
  }
};
</script>
<style>
.tbu {
  width: 100%;
  height: 100px;
  background: white;
  margin-top: -50px;
}
.tbu > p:nth-of-type(1) {
  float: left;
  color: #9a9a9a;
  font-weight: bold;
  line-height: 90px;
  margin-left: 20px;
}
.tbu > img {
  width: 5%;
  margin-top: 45px;
  margin-left: 500px;
}
.di2 {
  margin-left: 20px;
}
.tbu > p:nth-of-type(2) {
  color: #676767;
  margin-left: 760px;
  margin-top: -35px;
}
.k2 {
  width: 100%;
  height: 100px;
  background: white;
  margin-top: 20px;
}
.el-table {
  margin-top: 20px;
}
.kkk {
  width: 250px;
  float: left;
  margin-left: 40px;
  margin-top: 30px;
}
.kk2 {
  margin-top: 30px;
  margin-right: 250px;
}
.cx12 {
  position: relative;
  right: 200px;
  top: 30px;
}
.cz12 {
  position: relative;
  left: -150px;
  top:30px;
}
.fy{
  background: white;
  margin-top: 10px;
}
.tjan{
  width: 100%;
  height: 70px;
  background: white;
  margin-top: 20px;
}
.kc{
  margin-top: 15px;
  margin-left: 20px;
  float: left;
}
</style>