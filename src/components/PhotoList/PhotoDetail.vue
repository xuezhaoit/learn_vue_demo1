<template>
  <div>
    <nav-bar title="图文详情"></nav-bar>
	<div class="w30_h5" border="0"></div>
	<div class="photoDetailTitle" border="0">
		<label>{{data.title}}</label>
	</div>
	<div class="w30_h5" border="0"></div>
	<div class="photoDetaildate">
		<label>发起日期：{{ data.add_time | converTime('YYYY-MM-DD') }}</label>
		<label class="w10"></label>
		<label>{{ data.click }} 次浏览</label>
		<label class="w10"></label>
		<label>分类：{{ data.type }}</label>
	</div>
	<div class="photoDetail_img1" border="0">
		<vue-preview 
			:list="data.img_url"
			:thumbImageStyle="{width: '100px', height: '100px', margin: '5px'}"
			:previewBoxStyle="{border: '1px solid #eee'}"
			:tapToClose="true"
			@close="closeHandler"
			@destroy="destroyHandler" />
	</div>
	<div class="photoDetail_detail">
		<label>{{data.detail}}</label>
	</div>

    
  </div>

</template>
<script>
  export default {
    data() {
      return {
        data: {
            id: 1,
            title: '现代简约明亮的外表无视卧室背景墙、吊顶黄色',
            add_time: '2015-04-16T03:50:28',
			type:"民生经济",
            zhaiyao: '房企一季度销售业绩陆续公布，课余瑞研究中心统计',
            click: 1,
            img_url: [
				{
					src:'../../../static/img/newslist1.jpg',
					w:300,
					h:300

				},
				{
					src:'../../../static/img/newslist2.jpg',
					w:300,
					h:300
				},
				{
					src:'../../../static/img/newslist3.jpg',
					w:300,
					h:300
				},
				{
					src:'../../../static/img/newslist4.jpg',
					w:300,
					h:300
				},
			],
            detail: '房企一季度销售业绩陆续公布，课余瑞研究中心统计fgsdfgsdfg房企一季度销售业绩陆续公布，课余瑞研究中心统计房企一季度销售业绩陆续公布，课余瑞研究中心统计房企一季度销售业绩陆续公布，课余瑞研究中心统计房企一季度销售业绩陆续公布，课余瑞研究中心统计'
          }
        
      }
    }
  }

</script>
<style scoped>
  
  .photoDetailTitle{
	  color: #26a2ff;
	  font-size:20px;
	  text-align:left
  }
  .photoDetaildate{
	   	text-align:left;
	  	font-size:15px;
  }
  .w30_h5{
	  width:30px;
	  height:5px;
  }
  .w10{
	  width:10px;
  }
  .photoDetail_img{
	  width: 100px;
	  height:100px
  }
  .photoDetail_img1{
	 width:350px;
	 display:flex;
	 flex-wrap:wrap;
	 text-align:left;
  }
  .photoDetail_img2{
	  width:110px;
	  align:center;
  }

  .photoDetail_detail{
	  font-size: 15px;
	  text-align: left;
  }

 

</style>
