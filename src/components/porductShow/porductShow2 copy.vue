<template>
  <div>
    <nav-bar title="商品展示2"></nav-bar>
    <div class="div2" v-for="(item, index) in tables" :key="index">
      <div style="display: flex">
        <div style="width:14%;border: 1px solid #64bff1;">
          <el-table
            :data="item.tableData6"
            border
            :cell-style="tableRowStyle"
            :header-cell-style="tableHeaderStyle"
            :show-header="index === 0"
            :span-method="objectSpanMethod"
            style="width: 100%">
            
              <el-table-column  label="仓库" >
                <el-table-column  label="仓库名称" prop="cangku" >
                </el-table-column>
              </el-table-column>
          </el-table>
        </div>
        <div style="width:73%">
            <div style="display: flex">
           <div style="border: 1px solid #64bff1;">
            <el-table
            :data="item.tableData3"
            border
            :show-header="index === 0"
            style="width: 100%">
            <el-table-column label="风险预估">
              <el-table-column label="接受单量" prop="revSingleVolume" width="70"></el-table-column>
              <el-table-column label="待接受" prop="ToBeAccepted" width="70"></el-table-column>
              <el-table-column label="超时单量" prop="overTime" width="70"></el-table-column>
              <el-table-column label="清理进度" prop="CleaningProgress" width="70"></el-table-column>
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
          <div style="border: 1px solid #64bff1;"> 
            <div v-if="index === 0" style="background:#eef1f6;color:#606266;height:50px;border-bottom:#000 solid 1px;display:flex ;">
                <div style="width:50%;line-height: 50px;">单量接受：XXX单</div>
                <div style="width:50%;border-left:#000 solid 1px;display:flex;line-height: 50px; text-align: center;">积压：XXX单</div>
            </div>
            <el-table
              :data="item.tableData4"
              :cell-style="tableRowStyle2"
              border
              :header-cell-style="{background:'#eef1f6',color:'#606266',height:'92px'}"
              :show-header="index === 0"
              style="width: 100%">
                <el-table-column label="统计维度" prop="tongJiWeiDu" width="100"></el-table-column>
                <el-table-column label="总量" prop="zongLiang" width="70"></el-table-column>
                <el-table-column label="10点" prop="time10" width="70"></el-table-column>
                <el-table-column label="11点" prop="time11" width="70"></el-table-column>
                <el-table-column label="13点" prop="time13" width="70"></el-table-column>
                <el-table-column label="14点" prop="time14" width="70"></el-table-column>
                <el-table-column label="15点" prop="time15" width="70"></el-table-column>
            </el-table>
            <el-table
              :data="item.tableData5"
              border
              :header-cell-style="{background:'#eef1f6',color:'#606266',height:'70px'}"
              style="width: 100%">
                <el-table-column style="height: 100px;" label="人员" prop="renyuan" width="160"></el-table-column>
                <el-table-column label="单量涨幅" prop="danliangzhangfu" width="100"></el-table-column>
                <el-table-column label="风险" prop="fengxian" width="100"></el-table-column>
                <el-table-column label="风险最低产能" prop="fengxianzuidichanneng" width="160"></el-table-column>
            </el-table>
          </div>
        </div>
        </div>
        
       
      </div>
    </div>
  </div>

</template>
<script>
  export default {
    data() {
      return {
        tables:[
          {
            tableShowHeader4:true,
            tableData3: [{
                revSingleVolume:"123",
                ToBeAccepted:"123",
                overTime:"123",
                CleaningProgress:"123",
                daiChan:"123",
                zongLiang:"132",
                daiBuHuo:"123",
                daiShouGongDingWei:"132",
                daiFenPei:"132",
                daiJianHuo:"312",
                daiHeLiu:"132",
                daiFuHe:"132",
                daiDaBao:"213"
              },
              {
                revSingleVolume:"123",
                ToBeAccepted:"123",
                overTime:"123",
                CleaningProgress:"123",
                daiChan:"123",
                zongLiang:"132",
                daiBuHuo:"123",
                daiShouGongDingWei:"132",
                daiFenPei:"132",
                daiJianHuo:"312",
                daiHeLiu:"132",
                daiFuHe:"132",
                daiDaBao:"213"
              },
              {
                revSingleVolume:"123",
                ToBeAccepted:"123",
                overTime:"123",
                CleaningProgress:"123",
                daiChan:"123",
                zongLiang:"132",
                daiBuHuo:"123",
                daiShouGongDingWei:"132",
                daiFenPei:"132",
                daiJianHuo:"312",
                daiHeLiu:"132",
                daiFuHe:"132",
                daiDaBao:"213"
              },{
                revSingleVolume:"123",
                ToBeAccepted:"123",
                overTime:"123",
                CleaningProgress:"123",
                daiChan:"123",
                zongLiang:"132",
                daiBuHuo:"123",
                daiShouGongDingWei:"132",
                daiFenPei:"132",
                daiJianHuo:"312",
                daiHeLiu:"132",
                daiFuHe:"132",
                daiDaBao:"213"
              },{
                revSingleVolume:"123",
                ToBeAccepted:"123",
                overTime:"123",
                CleaningProgress:"123",
                daiChan:"123",
                zongLiang:"132",
                daiBuHuo:"123",
                daiShouGongDingWei:"132",
                daiFenPei:"132",
                daiJianHuo:"312",
                daiHeLiu:"132",
                daiFuHe:"132",
                daiDaBao:"213"
              },{
                revSingleVolume:"123",
                ToBeAccepted:"123",
                overTime:"123",
                CleaningProgress:"123",
                daiChan:"123",
                zongLiang:"132",
                daiBuHuo:"123",
                daiShouGongDingWei:"132",
                daiFenPei:"132",
                daiJianHuo:"312",
                daiHeLiu:"132",
                daiFuHe:"132",
                daiDaBao:"213"
              }
            ],
            tableData4: [{
                tongJiWeiDu:"接受单量",
                zongLiang:"1233",
                time10:"1233",
                time11:"1233",
                time13:"1233",
                time14:"1233",
                time15:"1233"
              },
              {
                tongJiWeiDu:"拣货单量",
                zongLiang:"1233",
                time10:"1233",
                time11:"1233",
                time13:"1233",
                time14:"1233",
                time15:"1233"
              },
              {
                tongJiWeiDu:"复核单量",
                zongLiang:"1233",
                time10:"1233",
                time11:"1233",
                time13:"1233",
                time14:"1233",
                time15:"1233"
              },{
                tongJiWeiDu:"打包单量",
                zongLiang:"1233",
                time10:"1233",
                time11:"1233",
                time13:"1233",
                time14:"1233",
                time15:"1233"
              }
            ],
            tableData5: [{
                renyuan: '123',
                danliangzhangfu: '213',
                fengxian: '123',
                fengxianzuidichanneng: '123'
              }
            ],
            tableData6: [{
                cangku:'仓库1'
              }
            ]
          },
          {
            tableShowHeader4:true,
            tableData3: [{
                revSingleVolume:"123",
                ToBeAccepted:"123",
                overTime:"123",
                CleaningProgress:"123",
                daiChan:"123",
                zongLiang:"132",
                daiBuHuo:"123",
                daiShouGongDingWei:"132",
                daiFenPei:"132",
                daiJianHuo:"312",
                daiHeLiu:"132",
                daiFuHe:"132",
                daiDaBao:"213"
              },
              {
                revSingleVolume:"123",
                ToBeAccepted:"123",
                overTime:"123",
                CleaningProgress:"123",
                daiChan:"123",
                zongLiang:"132",
                daiBuHuo:"123",
                daiShouGongDingWei:"132",
                daiFenPei:"132",
                daiJianHuo:"312",
                daiHeLiu:"132",
                daiFuHe:"132",
                daiDaBao:"213"
              },
              {
                revSingleVolume:"123",
                ToBeAccepted:"123",
                overTime:"123",
                CleaningProgress:"123",
                daiChan:"123",
                zongLiang:"132",
                daiBuHuo:"123",
                daiShouGongDingWei:"132",
                daiFenPei:"132",
                daiJianHuo:"312",
                daiHeLiu:"132",
                daiFuHe:"132",
                daiDaBao:"213"
              },{
                revSingleVolume:"123",
                ToBeAccepted:"123",
                overTime:"123",
                CleaningProgress:"123",
                daiChan:"123",
                zongLiang:"132",
                daiBuHuo:"123",
                daiShouGongDingWei:"132",
                daiFenPei:"132",
                daiJianHuo:"312",
                daiHeLiu:"132",
                daiFuHe:"132",
                daiDaBao:"213"
              },{
                revSingleVolume:"123",
                ToBeAccepted:"123",
                overTime:"123",
                CleaningProgress:"123",
                daiChan:"123",
                zongLiang:"132",
                daiBuHuo:"123",
                daiShouGongDingWei:"132",
                daiFenPei:"132",
                daiJianHuo:"312",
                daiHeLiu:"132",
                daiFuHe:"132",
                daiDaBao:"213"
              },{
                revSingleVolume:"123",
                ToBeAccepted:"123",
                overTime:"123",
                CleaningProgress:"123",
                daiChan:"123",
                zongLiang:"132",
                daiBuHuo:"123",
                daiShouGongDingWei:"132",
                daiFenPei:"132",
                daiJianHuo:"312",
                daiHeLiu:"132",
                daiFuHe:"132",
                daiDaBao:"213"
              }
            ],
            tableData4: [{
                tongJiWeiDu:"接受单量",
                zongLiang:"1233",
                time10:"1233",
                time11:"1233",
                time13:"1233",
                time14:"1233",
                time15:"1233"
              },
              {
                tongJiWeiDu:"拣货单量",
                zongLiang:"1233",
                time10:"1233",
                time11:"1233",
                time13:"1233",
                time14:"1233",
                time15:"1233"
              },
              {
                tongJiWeiDu:"复核单量",
                zongLiang:"1233",
                time10:"1233",
                time11:"1233",
                time13:"1233",
                time14:"1233",
                time15:"1233"
              },{
                tongJiWeiDu:"打包单量",
                zongLiang:"1233",
                time10:"1233",
                time11:"1233",
                time13:"1233",
                time14:"1233",
                time15:"1233"
              }
            ],
            tableData5: [{
                renyuan: '123',
                danliangzhangfu: '213',
                fengxian: '123',
                fengxianzuidichanneng: '123'
              }
            ],
            tableData6: [{
                cangku:'仓库2'
              }
            ]
          }
        ]
      }
    },
    methods: {
        tableHeaderStyle({row, column, rowIndex, columnIndex}) {
          if (rowIndex === 1) {
            return `
              height: 96px;
              `
          }
        },
        objectSpanMethod({ row, column, rowIndex, columnIndex }) {
          if (columnIndex === 0) {
            if (rowIndex % 6 === 0) {
              return {
                rowspan: 0,
                colspan: 1
              };
            
            }
          }else if(columnIndex === 0){
              return {
                rowspan: 0,
                colspan: 0
              };
            } 
        },
        tableRowStyle({row, rowIndex}) {
          return `
                height:287px;
                `
        },
        tableRowStyle2({row, rowIndex}) {
          return `
                height:20px;
                `
        }
      }
  }

</script>
<style scoped>
  .div1 {
    width: 100%;
    height: 100px;
  }
  .div2 {
    width: 100%;
    
  }

  .newsList_div {
    text-align: left;
  }

  .newsList_detail_div {
    display: inline-block;
    vertical-align: top;

  }

  .newsList_detail_div1 {
    height: 50px;
    position: relative;

  }

  .newsList_detail_div1 {
    height: 50px;
    position: relative;

  }

  .newsList_span_2 {
    color: #0000FF;
  }

</style>
