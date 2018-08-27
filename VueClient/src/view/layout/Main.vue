<template>
  <div id="main">
      <a-row type="flex" justify="space-between"  align="middle" class="menuTop">
        <a-col :span="4" :offset="1"><img src="../../assets/logo@2x.png"><span class="bug">Bug管理系统</span></a-col>
        <a-col :span="4"><router-link to="/home" style="color:white">工作台</router-link> <span style="padding-left:40px">关于我们</span></a-col>
      </a-row>
      <a-row>
          <img src="../../assets/移动时代首选Bug管理系统@2x.png" class="title1">
      </a-row>
       <a-row>
          <img src="../../assets/Group 2@2x.png" class="title2">
      </a-row>
      <a-row style="padding-top:50px">
        <a-col :span="6" :offset="6"><a-button class="main"><router-link to="/user/login">开始使用</router-link> </a-button></a-col>
        <a-col :span="6" :offset="1"><a-button type="primary" class="main">开始使用</a-button></a-col>
      </a-row>   
  </div>
  
</template>
<script>
import LogoTip from "../../components/LogoTip";
export default {
  name: "Main",
  components: { LogoTip },
  data() {
    return {
      collapsed: false
    };
  },

  methods: {
    change() {
      this.parms = "我是父组件传过去的!";
    },
    //子组件改变父组件
    change1(data) {
      this.parms = data;
    }
  }
};
</script>

<style>
#main {
  width: 100%;
  height: 100%;
  background: url("../../assets/Group.png") no-repeat;
  /* 背景图垂直、水平均居中 */
  background-position: center center;

  /* 当内容高度大于图片高度时，背景图像的位置相对于viewport固定 */
  background-attachment: fixed;
  background-size: cover;
}

.menuTop {
  padding-top: 40px;
  font-size: 14px;
  font-family: PingFangSC-Regular;
  color: rgba(255, 255, 255, 1);
}

.bug {
  padding-left: 20px;
  font-size: 25px;
  font-family: PingFangSC-Medium;
  color: rgba(83, 153, 225, 1);
}
.title1 {
  padding-left: 254px;
  padding-top: 200px;
}

.title2 {
  padding-left: 430px;
  padding-top: 20px;
}
.main.ant-btn-primary,
.main.ant-btn {
  width: 380px;
  height: 40px;
  font-size: 20px;
  font-family: PingFangSC-Regular;
}
</style>
