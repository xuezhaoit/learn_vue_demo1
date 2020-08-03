<template>
    <div>
        <mt-swipe :auto="3000">
            <mt-swipe-item v-for="(img, index) in imgs" :key="index">
                <img class="mt-swipe-imgItem" :src="img.src">
            </mt-swipe-item>
        </mt-swipe>
        <div class="grid">
            <my-ul>
                <my-li v-for="(grid, index) in grids" :key="index">
                <div style="margin：0 auto;text-align: center;">
                    <router-link :to="grid.router.name" >
                        <img :class="grid.className" :src="grid.src"></img>
                        <label style="display:block;">{{grid.title}}</label>
                    </router-link >
                </div>
                    
                </my-li>
            </my-ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            imgs:[],
            grids:[
                {className:"cms-news",title:"新闻资讯",src:"../../../static/img/test1.png",router:{name:'newsList'}},
                {className:"cms-photo",title:"图文分享",src:"../../../static/img/test2.png",router:{name:'photoList/0'}},
                {className:"cms-news",title:"商品展示",src:"../../../static/img/test3.png",router:{name:'porductShow'}},
                {className:"cms-photo",title:"留言反馈",src:"../../../static/img/test4.png",router:{name:'porductShow2'}},
                {className:"cms-news",title:"搜索资讯",src:"../../../static/img/test5.png",router:{name:'newsList'}},
                {className:"cms-photo",title:"联系我们",src:"../../../static/img/test6.png",router:{name:'newsList'}}
            ]
        }
    },
    created () {
        // this.$axios.get('getlunbo')
        // .then(res=>{
        //     this.imgs = res.data.message;
        //     console.log( res.data.message )
        // })
        // .catch( err=> console.log('轮播图获取异常', err) );
        var imgs_my = [
            // {src="./assets/img/account_serve.png"},
            {src:"static/img/adv1.jpg"},
            {src:"static/img/adv2.jpg"}
        ]
        this.imgs = imgs_my
    }
}
</script>
<style scoped>
    .mint-swipe{
        height:200px;
    }
    .mint-swipe-items-wrap{
        
        height: 200px;
    }
    .mt-swipe-imgItem{
        height: 100%;
        weight: 100%;
    }
    
    /*九宫格图片*/
    .cms-news{
        width: 50px;
        height: 50px;
    } 
    .cms-photo{
        width: 50px;
        height: 50px;
    } 
    
</style>