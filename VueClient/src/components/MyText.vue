<template>
<div>
<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
  <a-button class="main" @click="change">Default2</a-button>
  <p class="text">{{title}} {{parms}}</p>ffff
  <div v-for="item in array" v-bind:key="item" @click="text(item)">{{item}}</div>
  <input type="text" v-model="title">
</div>
</template>

<script>
import { Avatar } from "vue-antd-ui";

export default {
  components: { Avatar },
  name: "MyText",
  data() {
    return {
      title: "今天星期二",
      array: [1, 2, 3, 4]
    };
  },
  props: ["parms"],
  methods: {
    change() {
      this.title = "我变了";
      console.log("改变!");
      this.$emit("callback", "我是子组件变的11111");
    },
    text(parm) {}
  },
  watch: {
    parms(newParms) {
      if (newParms != this.parms) console.log(newParms);
    }
  }
};
</script>

<style>
.text {
  font-size: 20px;
  color: red;
}
.ant-avatar {
  width: 50px;
  height: 50px;
}
.main.ant-btn {
  background-color: rebeccapurple;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
