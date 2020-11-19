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
      <el-input v-model="input" placeholder="活动名称" class="kkr"></el-input>
      <template>
        <el-select v-model="value" placeholder="请选择" class="kkrr">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
         <div class="block" id="aac">
    <el-date-picker 
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
  </div>
        <el-button type="primary" class="cx20">查询</el-button>
        <el-button class="cz20">重置</el-button>
      </template>
    </div>
    <div class="tjan">
      <el-button type="primary" class="kc">+创建活动</el-button>
      </div>
    <template>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column
      type="selection"
      width="55">
    </el-table-column>
        <el-table-column prop="date" label="活动ID" width="160"></el-table-column>
        <el-table-column prop="address" label="活动名称" width="100"></el-table-column>
        <el-table-column prop="tjsj" label="购买时间" width="320"></el-table-column>
        <el-table-column prop="kclx" label="活动状态" width="120"></el-table-column>
        <el-table-column prop="mf" label="开团人数" width="80">
        </el-table-column>
    
         <el-table-column prop="name" label="操作" width="100">
              <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData)"
          type="text"
          size="small">
          结束
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
          date: "20190909120909",
          name: "教学观",
          address: "名称",
          zj:"综合素质",
          kclx:"已结束",
          rs:"123",
          tjsj:"2019-09-09 12:09:09 至2019-09-09 12:09:09",
          mf:"2"
        },
        {
          date: "20190909120909",
          name: "教学观",
          address: "名称",
          zj:"综合素质",
          kclx:"进行中",
          rs:"123",
          tjsj:"2019-09-09 12:09:09 至2019-09-09 12:09:09",
          mf:"2"
        },
        {
          date: "20190909120909",
          name: "教学观",
          address: "名称",
          zj:"综合素质",
          kclx:"未开始",
          rs:"123",
          tjsj:"2019-09-09 12:09:09 至2019-09-09 12:09:09",
          mf:"2"
        },
        {
          date: "20190909120909",
          name: "教学观",
          address: "名称",
          zj:"综合素质",
          kclx:"未开始",
          rs:"123",
          tjsj:"2019-09-09 12:09:09 至2019-09-09 12:09:09",
          mf:"2"
        },
        {
          date: "20190909120909",
          name: "教学观",
          address: "名称",
          zj:"综合素质",
          kclx:"未开始",
          rs:"123",
          tjsj:"2019-09-09 12:09:09 至2019-09-09 12:09:09",
          mf:"2"
        },
        {
          date: "20190909120909",
          name: "教学观",
          address: "名称",
          zj:"综合素质",
          kclx:"未开始",
          rs:"123",
          tjsj:"2019-09-09 12:09:09 至2019-09-09 12:09:09",
          mf:"2"
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
  margin-top: 1px;
}
.kkr {
  width: 200px;
  float: left;
  margin-left: 10px;
  margin-top: 30px;
}
.kkrr {
  width: 200px;
  margin-top: 30px;
  margin-right: 460px;
}
.cx20 {
  position: absolute;
  right: 150px;
  top: 128px;
}
.cz20 {
  position: absolute;
  left: 1140px;
    top: 128px;
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
#aac{
  position: absolute;
  margin-top: -40px;
  margin-left:460px;
  width: 200px;
}
</style>