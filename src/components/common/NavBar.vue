<template>
    <div class="cms-s-header">
        <h1 @click="goback">&lt</h1>
        <h1 class="page-title">{{title}}</h1>
    </div>
</template>
<script>
export default {
    name:'nav-bar',
    props:['title'],
    methods:{
        goback(){
            this.$router.go(-1)
        }
    }
}
</script>
<style scoped>
    .cms-s-header{
        height:40px;
        background-color: #0000ff;
        text-align: left;
    }
    .page-title{
        margin-left:25%;
    }
    h1{
        display:inline-block;
        margin-top:0px;
        margin-bottom:0px;
        
    }
</style>