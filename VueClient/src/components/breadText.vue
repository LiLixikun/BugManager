<style lang="less" scoped>
.flex{
    display: flex;
    display: -webkit-flex;
}
.justify{
    justify-content:space-between;
    -webkit-justify-content:space-between;
    -ms-justify-content:space-between;
    -moz-justify-content:space-between; 
}
.breadFooter_list{
    background: #fff;
    padding:10px 15px;
    width: 520px;
    border-radius: 5px;
    margin-top: 15px;
    .bread_footer{
         padding-top: 20px;
        .bread_right{
            span{
                color:#fff;
                padding:4px 5px
            }
        }
    }
    
}  
 .breadFooter_list:hover{
    cursor: pointer;
    box-shadow: 0 4px 23px 5px rgba(0,0,0,.2), 0 2px 6px rgba(0,0,0,.15)
 }
</style>
<template>
    <div class="breadFooter_list">
        <span style="word-wrap: break-word">
            #381 exchange2 邀请挖矿 【生产环境】首页——我的邀请——关联关系丢失
        </span>
        <div class="flex justify bread_footer">
            <div class="bread_right">
                <span :style="{background:'red'}">缺陷</span>
                <span :style="{background:'#EC971F'}">待审核</span>
                <span :style="{background:'red'}">急</span>
            </div>
            <span>2018-8-22</span>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
