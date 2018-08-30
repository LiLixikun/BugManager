<style lang="less">
    @import './index.less';
</style>
<template>
<div class="main">
  <!--header-->
  <div>
    <div>
      <div  class="survey_header flex justify_spaceBetween">
        <div class="survey_header_left ">
          <h2 class="inline-block">项目概况</h2>
          <p class="inline-block help">帮助台</p>
          <p class="inline-block system_info">系统信息</p>
        </div> 
        <div class="survey_header_right ">
          <p class="inline-block">发布通知</p>
          <p class="inline-block">发布版本</p>
          <p class="inline-block">提交问题</p>
        </div>
      </div>
    </div>
  </div>
  <!--breadlist-->
  <div class="content">
    <div class="flex bread_list1" >
      <!-- 总数 -->
      <div  class="flex flex1"> 
        <div class="bread bread0">
          <span>总数</span><br />
          <span>111</span>
        </div>
      </div>
      <!--  -->
      <div  class="flex flex3"> 
        <div  class="flex flex1">
           <div class="bread bread1">
              <span>总数</span><br />
              <span>111</span>
            </div>
        </div>
         <div  class="flex flex1">
           <div class="bread bread2">
              <span>总数</span><br />
              <span>111</span>
            </div>
        </div>
         <div  class="flex flex1">
           <div class="bread bread3">
              <span>总数</span><br />
              <span>111</span>
            </div>
        </div>
      </div>
      <!-- 已解决 -->
      <div class="flex flex1"> 
          <div class="bread bread4">
            <span>已解决</span><br />
            <span>111</span>
          </div>
        
      </div>
      <div class="flex flex1"> 
        <div class="bread bread5">
           <span>已延期</span><br />
            <span>111</span>
         </div>
      </div>
      <div class="flex flex1"> 
        <div class="bread bread6">
           <span>已关闭</span><br />
            <span>111</span>
         </div>
      </div>
    </div>
    <!--第二排-->
    <div class="flex bread_list2" style="margin-top:15px;">
      <!-- 总数 -->
      <div  class="flex flex1"> 
        <div class="bread bread_hover bread0" style="background:#BB3936;position:relative">
          <div class="text_top">
            <span>健康指数</span><br />
            </div>
            
          <span style="line-height:50px;font-size:25px">20</span><br />

         <div class="text_bottom">
            <a-icon type="copy" />
            </div>
        </div>
      </div>
     
      <div  class="flex flex3 flex-direction" >
        <div class="flex">
          <div  class="flex flex1">
            <div class="bread" >
              <div class="bread1 bread_hover" style="height:140%;position:relative;border-radius: 8px;margin-top:-15px;">
                <div class="text_top" style="margin-top:0;">
                  <span>缺陷</span><br />
                </div>
                  <span style="line-height:30px">15</span><br />
               </div> 
            </div>
          </div>
          <div  class="flex flex1">
            <div  class="flex flex1">
              <div class="bread" >
                <div class="bread1 bread_hover" style="height:140%;position:relative;border-radius: 8px;margin-top:-15px;">
                  <div class="text_top" style="margin-top:0;">
                    <span>缺陷</span><br />
                  </div>
                    <span style="line-height:30px">15</span><br />
                </div> 
              </div>
            </div>
          </div>
          <div  class="flex flex1">
            <div  class="flex flex1">
              <div class="bread" >
                <div class="bread1 bread_hover" style="height:140%;position:relative;border-radius: 8px;margin-top:-15px;">
                  <div class="text_top" style="margin-top:0;">
                    <span>缺陷</span><br />
                  </div>
                    <span style="line-height:30px">15</span><br />
                </div> 
              </div>
            </div>
          </div>
        </div>
        
        <div style="width:100%;" class="footer_list">
          <div style="background:blue;margin:0 5px;" class="flex justify_spaceBetween">
            <div class="flex1 bread_footer" style="text-align:center;background:#D9534F;padding:5px 0;">
              <span>急</span><span>9</span>
            </div>
            <div class="flex1 bread_footer" style="text-align:center;background:#F0AD4E;padding:5px 0;"> 
              
              <span>急</span><span>9</span>
            </div>
            <div class="flex1 bread_footer" style="text-align:center;background:#337AB7;padding:5px 0;">
              <span>急</span><span>9</span>
            </div>
            <div class="flex1 bread_footer" style="text-align:center;background:#5ABDDB;padding:5px 0">
              <span>急</span><span>9</span>
              </div>
          </div>
        </div>
      </div>
      
      <div class="flex flex1"> 
          <div class="bread bread_hover bread0" style="background:#EAA84C;position:relative">
            <div class="text_top">
              <span>健康指数</span><br />
              </div>
              
            <span style="line-height:50px;font-size:25px">20</span><br />

          <div class="text_bottom">
              <a-icon type="copy" />
              </div>
          </div>
        
      </div>
      <div class="flex flex1"> 
        <div class="bread bread_hover bread0" style="background:#01AEEF;position:relative">
          <div class="text_top">
            <span>健康指数</span><br />
            </div>
            
          <span style="line-height:50px;font-size:25px">20</span><br />

         <div class="text_bottom">
            <a-icon type="copy" />
            </div>
        </div>
      </div>
      <div class="flex flex1"> 
        <div class="bread bread_hover bread0" style="background:#01AEEF;position:relative">
          <div class="text_top">
            <span>健康指数</span><br />
            </div>
            
          <span style="line-height:50px;font-size:25px">20</span><br />

         <div class="text_bottom">
            <a-icon type="copy" />
            </div>
        </div>
      </div>
    </div>
    <!--第三排-->
      <div class="flex bread_list3" style="margin-top:15px">
      <div  class="flex flex1" > 
        <div class="bread bread0" style="border:1px solid #A2A2A2">
          <span style="display:block;height:30px;background: #A2A2A2;line-height:30px">今天</span>
          <span style="display:block;height:45px;color:#A2A2A2;line-height:45px">100</span>
        </div>
      </div>
      <div  class="flex flex3"> 
        <div  class="flex flex1">
           <div class="bread bread0" style="border:1px solid #D9534F">
              <span style="display:block;height:30px;background: #D9534F;line-height:30px">今天</span>
              <span style="display:block;height:45px;color:#D9534F;line-height:45px">100</span>
            </div>
        </div>
         <div  class="flex flex1">
            <div class="bread bread0" style="border:1px solid #A2A2A2">
              <span style="display:block;height:30px;background: #A2A2A2;line-height:30px">今天</span>
              <span style="display:block;height:45px;color:#A2A2A2;line-height:45px">100</span>
            </div>
        </div>
         <div  class="flex flex1">
            <div class="bread bread0" style="border:1px solid #A2A2A2">
              <span style="display:block;height:30px;background: #A2A2A2;line-height:30px">今天</span>
              <span style="display:block;height:45px;color:#A2A2A2;line-height:45px">100</span>
            </div>
          </div>
      </div>
    
      <div class="flex flex1"> 
            <div class="bread bread0" style="border:1px solid #A2A2A2">
              <span style="display:block;height:30px;background: #A2A2A2;line-height:30px">今天</span>
              <span style="display:block;height:45px;color:#A2A2A2;line-height:45px">100</span>
            </div>
        
      </div>
      <div class="flex flex1"> 
       <div class="bread bread0" style="border:1px solid #5BC0DE">
          <span style="display:block;height:30px;background: #5BC0DE;line-height:30px">今天</span>
          <span style="display:block;height:45px;color:#5BC0DE;line-height:45px">100</span>
        </div>
      </div>
      <div class="flex flex1"> 
        <div class="bread bread0" style="border:1px solid #5BC0DE">
          <span style="display:block;height:30px;background: #5BC0DE;line-height:30px">今天</span>
          <span style="display:block;height:45px;color:#5BC0DE;line-height:45px">100</span>
        </div>
      </div>
    </div>

  </div>

  <div style="margin-top:25px;padding-bottom:15px">
    <div class="inline-block" style="width:520px">
      <span>最新问题</span>&nbsp;<a href="###">更多</a>
    </div>
    <div class="inline-block">
      <span>更多通知</span>&nbsp;<a href="###">更多</a>
    </div>
  </div>
  <div>
    <breadText />
  </div>
  <div>
    <breadText />
  </div>
  <div>
    <breadText />
  </div>
  <div>
    <breadText />
  </div>
  <div>
     
  </div>
</div>
  
</template>
<script>
import HoverBtn from "../../components/HoverButton.vue";
import hoverbutton from '@/components/button.vue'
import breadText from '@/components/breadText.vue'
export default {
  name: "bugStatMenu",
  components: { HoverBtn,hoverbutton,breadText },
  data() {
    return {
      collapsed: false
    };
  },
  created(){
   // alert('11')
  }
};
</script>
<style>
.main {
}
</style>
