<template>
  <div v-bind:style="{ background:background}" class="large">
    <div>{{title}}</div>
    <div style="font-size:22px">{{number}}</div>
  </div>
</template>

<script>
export default {
  name: "HoverBtn",
  components: {},
  data() {
    return {
      colors: ["#00aeef","#d9534f","#f0ad4e","#5cb85c"]
    };
  },
  props: {
    title: {
      default: "按钮",
      required: true
    },
    number: {
      default: 0
    },
    background: {
      default: "#f9f9f9"
    }
  }
};
</script>
<style>
.large {
  width: 13.4%;
  height: 79px;
  padding: 10px;
  margin: 5px;
  font-size: 18px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
  border-radius: 10px;
}

.large:hover{

}
</style>
