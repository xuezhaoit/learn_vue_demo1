<template>
  <div>
    <nav-bar title="商品展示"></nav-bar>
    <div style="display:flex;">
      <div class="test1">
        <el-table
          :data="tableData3"
          border
          style="width: 100%">
          <el-table-column label="风险预估">
            <el-table-column label="生产结束时间" prop="endTime" width="110"></el-table-column>
            <el-table-column label="接受单量" prop="revSingleVolume" width="110"></el-table-column>
            <el-table-column label="待接受" prop="ToBeAccepted" width="110"></el-table-column>
            <el-table-column label="超时单量" prop="overTime" width="110"></el-table-column>
            <el-table-column label="清理进度" prop="CleaningProgress" width="110"></el-table-column>
          </el-table-column>
          <el-table-column label="各环节积压" >
            <el-table-column label="待产" prop="daiChan" width="50"></el-table-column>
            <el-table-column label="带定位" >
              <el-table-column label="总量" prop="zongLiang" width="50"></el-table-column>
              <el-table-column label="待补货" prop="daiBuHuo" width="80"></el-table-column>
              <el-table-column label="待手工定位" prop="daiShouGongDingWei" width="100"></el-table-column>
            </el-table-column>
            <el-table-column label="待分配" prop="daiFenPei" width="70"></el-table-column>
            <el-table-column label="待拣货" prop="daiJianHuo" width="70"></el-table-column>
            <el-table-column label="待合流" prop="daiHeLiu" width="70"></el-table-column>
            <el-table-column label="待复核" prop="daiFuHe" width="70"></el-table-column>
            <el-table-column label="待打包" prop="daiDaBao" width="70"></el-table-column>
          </el-table-column>  
        </el-table> 
      </div>
      <div class="test">
        <el-table :data="tableData2"
          border
          :show-header="status"
          style="width: 100%">
          <el-table-column
            label="gdsfgds"
            width="230">
          </el-table-column>
          <el-table-column
            label="213123"
            width="230">
          </el-table-column>>
        </el-table>
      </div>
    </div>
  </div>

</template>
 <script>
    export default {
      data() {
        return {
          status:false,
          tableData: [{
            warehouse:"仓库1",
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }],
          tableData2: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }],
        tableData3:[]
        }
      },
      methods: {
        objectSpanMethod({ row, column, rowIndex, columnIndex }) {
          if (columnIndex === 0) {
            if (rowIndex % 6 === 0) {
              return {
                rowspan: 6,
                colspan: 1
              };
            } else {
              return {
                rowspan: 0,
                colspan: 0
              };
            }
          }
        }
      }
    }
  </script>
<style scoped>
  .test{
     
      height: 100px;
      background-color: darkmagenta;
  }
  .test1{
 
      height: 100px;
      background-color: darkred;
  }

</style>
