<template>
    <div>
        <div class="news-title">
            <nav-bar title="图文列表"></nav-bar>
            <div class="photo-header" border="0">
                <ul>
                    <li v-for="(item, index) in categorys" :key="index">
                        <a @click="loadImgsByCategoryId(item.id)" >{{item.name}}</a>
                    </li>
                </ul>
            </div>
            <div class="photo-list" border="0">
                <ul>
                    <li v-for="(item, index) in imgs" :key="index">
                        <router-link :to="{name:'PhotoDetail',query:{id:item.id}}" >
                            <img v-lazy="item.img_url"/>
                            <p>
                                <span>{{ item.title }}</span>
                                <br/>
                                <span>{{ item.zhaiyao }}</span>
                            </p>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    
</template>
<script>
export default {
    data(){
        return {
            imgs:[],
            categorys:[]
        }
    },
    created() {
        let categoryId = this.$route.params.categoryId;
        console.log("123")
        this.loadImgsByCategoryId(categoryId);
        // 获取分类信息
        this.$axios.get("/getImgcategory")
        .then(res => {
            this.categorys=res.data.categorys
        })
        .catch(err =>{
            this.categorys=[
                {
                    id:"0",
                    name:"全部"
                },
                {
                    id:"1",
                    name:"家具生活"
                },
                {
                    id:"2",
                    name:"摄影设计"
                },
                {
                    id:"3",
                    name:"明星美女"
                },
                {
                    id:"4",
                    name:"空间设计"
                },
                {
                    id:"5",
                    name:"户型建设"
                }
            ]
        })
    },
    beforeRouteUpdate (to, from, next) {
        console.log(to);
        this.loadImgsByCategoryId(to.params.categoryId);
        next();
    },
    methods: {  
        loadImgsByCategoryId( categoryId ){
            console.log("发送的请求:"+categoryId)
            // 获取路由参数
            if(categoryId == '2'){
                this.$message('这是一条消息提示');
                return 
            }
            
            // 通过url拼接参数发请求
            this.$axios.get('getimages/'+categoryId)
            .then(
                res =>{
                    console.log(1234)
                    this.imgs = res.data.message;
                }
            )
            .catch( err => {
                console.log(123)
                this.imgs = [{
                    id: 1,
                    title: '1季度多家房企利润跌幅50%，去库存促销战打响',
                    zhaiyao: '房企一季度销售业绩陆续公布，课余瑞研究中心统计',
                    img_url: '../../../static/img/newslist1.jpg',
                    detail: 'jdskajfadsjsadkfjladsjfklajdsfljasdkl;fjadsljf'
                },
                {
                    id: 2,
                    title: '2季度多家房企利润跌幅60%，去库存促销战打响',
                    zhaiyao: '房企二季度销售业绩陆续公布，课余瑞研究中心统计',
                    img_url: '../../../static/img/newslist2.jpg'
                },
                {
                    id: 3,
                    title: '3季度多家房企利润跌幅70%，去库存促销战打响',
                    zhaiyao: '房企三季度销售业绩陆续公布，课余瑞研究中心统计',
                    img_url: '../../../static/img/newslist3.jpg'
                },
                {
                    id: 4,
                    title: '4季度多家房企利润跌幅80%，去库存促销战打响',
                    zhaiyao: '房企四季度销售业绩陆续公布，课余瑞研究中心统计',
                    img_url: '../../../static/img/newslist4.jpg'
                },
                {
                    id: 4,
                    title: '4季度多家房企利润跌幅80%，去库存促销战打响',
                    zhaiyao: '房企四季度销售业绩陆续公布，课余瑞研究中心统计',
                    img_url: '../../../static/img/newslist4.jpg'
                },
                {
                    id: 4,
                    title: '4季度多家房企利润跌幅80%，去库存促销战打响',
                    zhaiyao: '房企四季度销售业绩陆续公布，课余瑞研究中心统计',
                    img_url: '../../../static/img/newslist4.jpg'
                },
                {
                    id: 4,
                    title: '4季度多家房企利润跌幅80%，去库存促销战打响',
                    zhaiyao: '房企四季度销售业绩陆续公布，课余瑞研究中心统计',
                    img_url: '../../../static/img/newslist4.jpg'
                },
                {
                    id: 4,
                    title: '4季度多家房企利润跌幅80%，去库存促销战打响',
                    zhaiyao: '房企四季度销售业绩陆续公布，课余瑞研究中心统计',
                    img_url: '../../../static/img/newslist4.jpg'
                },
                {
                    id: 4,
                    title: '4季度多家房企利润跌幅80%，去库存促销战打响',
                    zhaiyao: '房企四季度销售业绩陆续公布，课余瑞研究中心统计',
                    img_url: '../../../static/img/newslist4.jpg'
                }]
                console.log(err)
            })
        }   
    }
     
    
}
</script>
<style scoped>
    .photo-header li{
        list-style:none;
        display: inline-block;
        margin-left: 10px;
        height: 30px;
    }

    .photo-header ul{
        white-space: nowrap;
        overflow-x: auto;
        padding-left: 0px;
        margin: 5px;
    }
    .photo-list li{
        list-style: none;
        position: relative;
        display:flex;
        align-items: center;
        justify-content: center;
    }
    .photo-list li img{
        width:300px;
        height: 230px;
        vertical-align: top;
    }
    .photo-list ul{
        padding-left: 0px;
        margin: 0px;
    }
    .photo-list p{
        position: absolute;
        width:300px;
        bottom: 0px;
        color: white;
        text-align: left;
        background-color: rgba(0,0,0,0.3);
        margin-bottom: 0px;
    }
    .photo-list p span:nth-child(1){
        font-weight: bold;
        font-size: 16px;
    }

    /*图片懒加载样式*/

    image[lazy=loading]{
        width: 40px;
        height: 300px;
        margin: auto;
    } 
</style>