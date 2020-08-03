<template>
  <div>
      <el-table
      :data="tableData3"
      border
      stripe
      :span-method="objectSpanMethod"
      height="600"
      style="width: 100%">
      <el-table-column label="全国" align="center">
        <el-table-column fixed label="仓库">
          <el-table-column label="仓库名称" prop="cangku" width="70"></el-table-column>
        </el-table-column>
        <el-table-column label="风险预估">
          <el-table-column label="生产结束时间" prop="endTime" width="100"></el-table-column>
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
        <el-table-column width="550">
          <template slot="header" slot-scope="scope">    
          <div style="height:48px; border-bottom:#ebeef5 solid 1px;display:flex;">
              <div style="width:270px;line-height: 50px;text-align: center;">
                单量接受：XXX单
              </div>
              <div style=" width:270px;border-left:#ebeef5 solid 1px;line-height: 50px;text-align: center;">
                积压：XXX单
              </div>
          </div>
          <div style="height:102px;display:flex;">
              <div style="width:100px;line-height: 102px;text-align: center;">
                统计维度
              </div>
              <div style=" width:70px;border-left:#ebeef5 solid 1px;line-height: 102px;text-align: center;">
                总量
              </div>
              <div style="width:70px; border-left:#ebeef5 solid 1px;line-height: 102px;text-align: center;">
                10点
              </div>
              <div style=" width:70px;border-left:#ebeef5 solid 1px;line-height: 102px;text-align: center;">
                11点
              </div>
              <div style=" width:70px;border-left:#ebeef5 solid 1px;line-height: 102px;text-align: center;">
                13点
              </div>
              <div style=" width:70px;border-left:#ebeef5 solid 1px;line-height: 102px;text-align: center;">
                14点
              </div>
              <div style=" width:70px;border-left:#ebeef5 solid 1px;line-height: 102px;text-align: center;">
                15点
              </div>
          </div>
          </template>
          <template slot-scope="scope">
            <div style="background:#eef1f6;">
            <el-table
                :data="scope.row.datatest2"
                border
                stripe
                :show-header="false"
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
                :data="scope.row.datatest"
                border
                stripe
                :header-cell-style="{background:'#eef1f6',color:'#606266',height:'70px'}"
                style="width: 100%">
                  <el-table-column style="height: 100px;" label="人员" prop="renyuan" width="160"></el-table-column>
                  <el-table-column label="单量涨幅" prop="danliangzhangfu" width="100"></el-table-column>
                  <el-table-column label="风险" prop="fengxian" width="100"></el-table-column>
                  <el-table-column label="风险最低产能" prop="fengxianzuidichanneng" width="160"></el-table-column>
              </el-table>
            </div>
          </template>
        </el-table-column>
      </el-table-column>
    </el-table> 
         
  </div>

</template>
<script>
  export default {
    data() {
      return {
        tableData3:[{
                cangku:"仓库11",
                endTime:'2020-2-31',
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
                daiDaBao:"213",
                datatest:[{
                  renyuan:"213",
                  danliangzhangfu:"123",
                  fengxian:"123",
                  fengxianzuidichanneng:"132"
                }],
                datatest2:[{
                  tongJiWeiDu:"213",
                  zongLiang:"123",
                  time10:"123",
                  time11:"123",
                  time13:"123",
                  time14:"123",
                  time15:"132"
                },
                {
                  tongJiWeiDu:"213",
                  zongLiang:"123",
                  time10:"123",
                  time11:"123",
                  time13:"123",
                  time14:"123",
                  time15:"132"
                },
                {
                  tongJiWeiDu:"213",
                  zongLiang:"123",
                  time10:"123",
                  time11:"123",
                  time13:"123",
                  time14:"123",
                  time15:"132"
                },
                {
                  tongJiWeiDu:"213",
                  zongLiang:"123",
                  time10:"123",
                  time11:"123",
                  time13:"123",
                  time14:"123",
                  time15:"132"
                }
                ]
              },
              {
                cangku:"仓库12",
                endTime:'2020-2-31',
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
                cangku:"仓库13",
                endTime:'2020-2-31',
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
                cangku:"仓库14",
                endTime:'2020-2-31',
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
                cangku:"仓库15",
                endTime:'2020-2-31',
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
                cangku:"仓库16",
                endTime:'2020-2-31',
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
                cangku:"仓库21",
                endTime:'2020-2-31',
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
                daiDaBao:"213",
                datatest:[{
                  renyuan:"213",
                  danliangzhangfu:"123",
                  fengxian:"123",
                  fengxianzuidichanneng:"132"
                }],
                datatest2:[{
                  tongJiWeiDu:"213",
                  zongLiang:"123",
                  time10:"123",
                  time11:"123",
                  time13:"123",
                  time14:"123",
                  time15:"132"
                },
                {
                  tongJiWeiDu:"213",
                  zongLiang:"123",
                  time10:"123",
                  time11:"123",
                  time13:"123",
                  time14:"123",
                  time15:"132"
                },
                {
                  tongJiWeiDu:"213",
                  zongLiang:"123",
                  time10:"123",
                  time11:"123",
                  time13:"123",
                  time14:"123",
                  time15:"132"
                },
                {
                  tongJiWeiDu:"213",
                  zongLiang:"123",
                  time10:"123",
                  time11:"123",
                  time13:"123",
                  time14:"123",
                  time15:"132"
                }
                ]
              },
              {
                cangku:"仓库12",
                endTime:'2020-2-31',
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
                cangku:"仓库13",
                endTime:'2020-2-31',
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
                cangku:"仓库14",
                endTime:'2020-2-31',
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
                cangku:"仓库15",
                endTime:'2020-2-31',
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
                cangku:"仓库16",
                endTime:'2020-2-31',
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
                rowspan: 6,
                colspan: 1
              };
            }else{
              return {
                rowspan: 0,
                colspan: 0
              };
            } 
          }else if(columnIndex === 15){
            if (rowIndex % 6 === 0) {
              return {
                rowspan: 6,
                colspan: 1
              };
            }else{
              return {
                rowspan: 0,
                colspan: 0
              };
            } 
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
