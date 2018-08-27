<template>
  <a-layout id="components-layout-demo-top-side">
    <a-layout-header class="header">
      <a-row type="flex" align="middle" justify="space-between">
        <a-col :span="5">
          <div class="logo" />
          <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed"
        />
        </a-col>
     
      <a-col>
        <span style="marginRight:24px"><a-badge count=10><a-avatar shape="square" icon="bell" /></a-badge></span>
        <span style="marginRight:24px"><a-badge count=5><a-avatar shape="square" icon="notification" /></a-badge></span>
        <span style="marginRight:24px"><a-badge count=6><a-avatar icon="user" /></a-badge></span>
       <a-dropdown>
    <a class="ant-dropdown-link" href="#">
      席坤 <a-icon type="down" />
    </a>
    <a-menu slot="overlay">
      <a-menu-item>
        <a href="javascript:;"><a-icon type="user" />修改邮箱</a>
      </a-menu-item>
      <a-menu-item>
        <a href="javascript:;"><a-icon type="lock" />修改密码</a>
      </a-menu-item>
      <a-menu-item>
        <a href="javascript:;"><a-icon type="phone" />修改手机号</a>
      </a-menu-item>
      <a-menu-item>
        <a href="javascript:;"><a-icon type="logout" />修改手机号</a>
      </a-menu-item>
    </a-menu>
  </a-dropdown>
       </a-col>
      </a-row>
    </a-layout-header>
    <a-layout>
    <a-layout-sider width="200"  style="background: #fff;height:90ch"
      :trigger="null"
      collapsible
      v-model="collapsed"
      >
        <a-menu
            mode="inline"
            theme="dark"
            :defaultSelectedKeys="['']"
            :selectedKeys = "[selectIndex]"
            :style="{ height: '100%', borderRight: 0 }"
          >
            <a-menu-item key="1"><router-link to="/projectInfoMenu"><a-icon type="bars" /><span>项目概况</span> </router-link> </a-menu-item>
            <a-menu-item key="2"><router-link to="/bugActiveMenu"><a-icon type="line-chart" /><span>活动问题</span> </router-link></a-menu-item>
            <a-menu-item key="3"><router-link to="/bugAllMenu"><a-icon type="appstore" /><span>所有问题</span></router-link></a-menu-item>
            <a-menu-item key="4"><router-link to="/bugStatMenu"><a-icon type="pie-chart" /><span>问题统计</span></router-link></a-menu-item>
            <a-menu-item key="5"><router-link to="/bugAssignToMeMenu"><a-icon type="user" /><span>我的待办</span></router-link></a-menu-item>
             <a-menu-item key="6"><router-link to="/bugFixByMeMenu"><a-icon type="skin" /><span>分配给我</span></router-link></a-menu-item>
            <a-menu-item key="7"><router-link to="/bugAssignByMeMenu"><a-icon type="link" /><span>我的分配</span></router-link></a-menu-item>
            <a-menu-item key="8"><router-link to="/bugFocusMenu"><a-icon type="sound" /><span>我的关注</span></router-link></a-menu-item>
            <a-menu-item key="9"><router-link to="/noticeAllMenu"><a-icon type="pushpin-o" /><span>项目通知</span></router-link></a-menu-item>
            <a-menu-item key="10"><router-link to="/versionMenu"><a-icon type="link" /><span>版本管理</span></router-link></a-menu-item>
      <a-icon type="" />
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px;">
       
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content :style="{ background: '#fff', padding: 10, margin: 0, minHeight: '280px', backgroundColor: '#f0f0f0' }">
       <router-view></router-view>
        </a-layout-content>
           <a-layout-footer style="textAlign: center">
             <div @click="add">

               <span>11111111</span>
             </div>
      </a-layout-footer>
      </a-layout>
     
    </a-layout>
  
  </a-layout>
  
</template>
<script>
import { getUserList } from "../../api/user.js";
import { mapState } from "vuex";
export default {
  name: "App",
  components: {},
  data() {
    return {
      collapsed: false,
      selectIndex: "4"
    };
  },

  computed: mapState({
    dataList: state => state.user.list
  }),

  mounted() {
    this.$store.dispatch("user/getList");
  },

  methods: {
    add() {
      this.selectIndex = "3";
      alert(this.selectIndex);
    },
    change() {
      this.parms = "我是父组件传过去的!";
    },
    //子组件改变父组件
    change1(data) {
      this.parms = data;
    }
  },
  watch: {
    dataList(old) {
      console.log(old);
    },
    $route(to, from) {
      console.log(this.selectIndex);
      window.p = this;
      switch (to.path) {
        case "/projectInfoMenu":
          this.selectIndex = "1";
          break;
        case "/bugActiveMenu":
          this.selectIndex = "2";
          break;
        case "/bugAllMenu":
          this.selectIndex = "2";
          break;
        case "/bugStatMenu":
          this.selectIndex = "4";
          break;
        case "/bugAssignToMeMenu":
          this.selectIndex = "5";
          break;
        case "/bugFixByMeMenu":
          this.selectIndex = "6";
          break;
        case "/bugAssignByMeMenu":
          this.selectIndex = "7";
          break;
        case "/bugFocusMenu":
          this.selectIndex = "8";
          break;
        case "/noticeAllMenu":
          this.selectIndex = "9";
          break;
        case "/versionMenu":
          this.selectIndex = "10";
          break;
        default:
          this.selectIndex = "0";
          break;
      }
    }
  }
};
</script>

<style>
#components-layout-demo-top-side .logo {
  width: 120px;
  height: 31px;
  background: black;
  margin: 16px 28px 16px 0;
  float: left;
}

.header {
  background-color: #ffffff;
}
.trigger {
  font-size: 18px;
  line-height: 64px;
  cursor: pointer;
  transition: color 0.3s;
}

.ant-menu-dark.ant-menu-inline .ant-menu-item:hover {
  background: #1890ff;
  color: rgba(255, 255, 255);
}
</style>
