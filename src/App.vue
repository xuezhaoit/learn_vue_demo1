<template>
  <div id="app">
    <mt-header fixed title="信息管理系统"></mt-header>
    <router-view/>
   

    
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
