<template>
    <div class="tmp1">
        <div class="news-title">
            <nav-bar title="新闻标题"></nav-bar>
            <p>{{newsDetail.title}}</p>
            <div class="" border="0">
                <span>{{newsDetail.click}}次点击</span>
                <span>分类：民生经济</span>
                <span>添加时间：{{newsDetail.add_time | converTime('YYYY-MM-DD')}}</span>
            </div>
            <div class="news_content" v-html="newsDetail.content" border="0"></div>
        </div>
    </div>
    
</template>
<script>
export default {
    data(){
        return {
            newsDetail:[
            ]
        }
    },
    created() {
        this.$axios.get('getnew/'+'13')
        .then(
            res =>{
                alert(res)
                this.newsDetail = res.data.message[0];
            }
        )
        .catch( err => {
            debugger
            this.newsDetail = {
                id:13,
                title:'买房还是炒股，2015买房无法拒绝的5大理由',
                click: 2,
                add_time:'2015-04-16',
                content:'<div><div class="news_content_div"><span class="news_content_span">&nbsp;&nbsp;&nbsp;&nbsp;中新网北京新闻11月15日电 (记者 杜燕)继去年首次发布后，11月15日上午，北京市工商联合会再次发布2019北京民营企业百强榜单和专项调研分析报告。榜单显示，北京民营企业百强入围门槛为营业收入27.24亿元，比去年提高28.73%；员工人数共计127.82万人，同比增加约21万人；研发投入持续增加达593亿元，同比增长84.89%，</span></div><div class="news_content_div"><span class="news_content_span">&nbsp;&nbsp;&nbsp;&nbsp;中新网北京新闻11月15日电 (记者 杜燕)继去年首次发布后，11月15日上午，北京市工商联合会再次发布2019北京民营企业百强榜单和专项调研分析报告。榜单显示，北京民营企业百强入围门槛为营业收入27.24亿元，比去年提高28.73%；员工人数共计127.82万人，同比增加约21万人；研发投入持续增加达593亿元，同比增长84.89%，</span></div></div>'
            
            }
            console.log(err)
        })
    }
    
}
</script>
<style scoped>
    .news-title{
        margin-top: 5px;
        border-bottom: 1px solid rgba(0,0,0,0.2);
         text-align: left;
    }
    .news-title p {
        color: #0a87f8;
        font-size: 20px;
        font-weight: bold;
       
    }
    .news-title span{
        margin-right: 30px;

    }
    .news_content_span{

    }
    .news_content_div{
        text-align: left;
    }
</style>