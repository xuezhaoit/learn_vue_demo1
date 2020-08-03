<template>
  <div id="app">
    <mt-header fixed title="信息管理系统"></mt-header>
    <router-view/>
    <mt-tabbar v-model="selected" >
      <mt-tab-item id="home">
        <img slot="icon" src="./assets/img/home.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="member">
        <img slot="icon" src="./assets/img/member.png">
        会员
      </mt-tab-item>
      <mt-tab-item id="shopcat">
        <img slot="icon" src="./assets/img/shopcat.png">
        购物车
      </mt-tab-item>
      <mt-tab-item id="findup">
        <img slot="icon" src="./assets/img/findup.png">
        查找
      </mt-tab-item>
    </mt-tabbar>

    
  </div>
</template>

<script>
  export default {
    data () {
      return {
        selected: ''
      }
    },
    watch: {
      selected (newV, oldV) {
        console.log(newV)
        this.$router.push({
          name:newV
        })
     } 
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
