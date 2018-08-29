<!--
使用示例
 <div @click="add">
    <hoverbutton 
        :text-val="'测试'"
        :type="'notification'"
        :color="'red'"
        
      />
  </div>
-->
<style lang="less">
.button{
  // border:1px solod color
  width:90px;
  height: 30px;
  line-height: 30px;
  border-radius: 5px;
  text-align: center;
  border-width: 1px;
  border-style:solid;

}
.button{
     cursor: pointer;
}
</style>

<template>
    <div class="button" :style="{borderColor:color,background:buttonColor,color:textColor}"
    @mouseenter="enter" @mouseleave="leave"
     >
        <p><a-icon :type="type" />{{textVal}}</p>
    </div>
</template>
<script>

export default {
    props:{
        'text-val':[String,Number],//处理文本
        'type':[String],//处理icon
        'color':[String]//处理颜色
    },
    data(){
        return {
            // beforrColor:"",
            textColor:(()=>{
                return this._props.color
            })(),
            buttonColor:"transparent"
        }
    },
    methods:{
        enter(){
            this.textColor = "#fff";
            this.buttonColor = this._props.color;//获取颜色
           
            
        },
        leave(){
            this.textColor = this._props.color;
            this.buttonColor = "transparent"
        }
    }
    
}
</script>

