<template>
  <div>
    <nav-bar title="新闻列表"></nav-bar>
    <div class="newsList_div" v-for="(item, index) in data" :key="index">
      <router-link :to="{name:'newsDetail',query:{id:item.id }}">
        <img class="newsList_img" :src="item.img_url" />
        <div class="newsList_detail_div" border="0">
          <div class="newsList_detail_div1" border="0">
            <span>{{item.title}}</span>
          </div>
          <div class="newsList_detail_div1">
            <span class="newsList_span_2">点击数{{item.click}}</span>
            <span class="newsList_span_2">{{item.add_time | converTime('YYYY-MM-DD')}}</span>
          </div>
        </div>
      </router-link>
    </div>
  </div>

</template>
<script>
  export default {
    data() {
      return {
        data: [{
            id: 1,
            title: '1季度多家房企利润跌幅50%，去库存促销战打响',
            add_time: '2015-04-16T03:50:28',
            zhaiyao: '房企一季度销售业绩陆续公布，课余瑞研究中心统计',
            click: 1,
            img_url: '../../../static/img/newslist1.jpg',
            detail: 'jdskajfadsjsadkfjladsjfklajdsfljasdkl;fjadsljf'
          },
          {
            id: 2,
            title: '2季度多家房企利润跌幅60%，去库存促销战打响',
            add_time: '2016-04-16T03:50:28',
            zhaiyao: '房企二季度销售业绩陆续公布，课余瑞研究中心统计',
            click: 1,
            img_url: '../../../static/img/newslist2.jpg'
          },
          {
            id: 3,
            title: '3季度多家房企利润跌幅70%，去库存促销战打响',
            add_time: '2017-04-16T03:50:28',
            zhaiyao: '房企三季度销售业绩陆续公布，课余瑞研究中心统计',
            click: 1,
            img_url: '../../../static/img/newslist3.jpg'
          },
          {
            id: 4,
            title: '4季度多家房企利润跌幅80%，去库存促销战打响',
            add_time: '2018-04-16T03:50:28',
            zhaiyao: '房企四季度销售业绩陆续公布，课余瑞研究中心统计',
            click: 1,
            img_url: '../../../static/img/newslist4.jpg'
          },
          {
            id: 4,
            title: '4季度多家房企利润跌幅80%，去库存促销战打响',
            add_time: '2018-04-16T03:50:28',
            zhaiyao: '房企四季度销售业绩陆续公布，课余瑞研究中心统计',
            click: 1,
            img_url: '../../../static/img/newslist4.jpg'
          },
          {
            id: 4,
            title: '4季度多家房企利润跌幅80%，去库存促销战打响',
            add_time: '2018-04-16T03:50:28',
            zhaiyao: '房企四季度销售业绩陆续公布，课余瑞研究中心统计',
            click: 1,
            img_url: '../../../static/img/newslist4.jpg'
          },
          {
            id: 4,
            title: '4季度多家房企利润跌幅80%，去库存促销战打响',
            add_time: '20180416',
            zhaiyao: '房企四季度销售业绩陆续公布，课余瑞研究中心统计',
            click: 1,
            img_url: '../../../static/img/newslist4.jpg'
          },
          {
            id: 4,
            title: '4季度多家房企利润跌幅80%，去库存促销战打响',
            add_time: '20180416',
            zhaiyao: '房企四季度销售业绩陆续公布，课余瑞研究中心统计',
            click: 1,
            img_url: '../../../static/img/newslist4.jpg'
          },
          {
            id: 4,
            title: '4季度多家房企利润跌幅80%，去库存促销战打响',
            add_time: '20180416',
            zhaiyao: '房企四季度销售业绩陆续公布，课余瑞研究中心统计',
            click: 1,
            img_url: '../../../static/img/newslist4.jpg'
          }
        ]
      }
    }
  }

</script>
<style scoped>
  .newsList_img {
    width: 100px;
    height: 100px;
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
