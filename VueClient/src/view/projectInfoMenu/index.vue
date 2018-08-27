<template>
<div class="main">主页
  <a-row type="flex">
   <hover-btn title='总数' number="363" background="#00aeef"></hover-btn>
   <hover-btn title='未解决' number="45" background="#d9534f"></hover-btn>
   <hover-btn title="待审核" number="20" background="#f0ad4e"></hover-btn>
   <hover-btn title="已拒绝" number="3" background="#f0ad4e"></hover-btn>
   <hover-btn title="已解决" number="193" background="#5cb85c"></hover-btn>
  <hover-btn title="已延期" number="13" background="#5cb85c"></hover-btn>
  <hover-btn title="已关闭" number="94" background="#5cb85c"></hover-btn>
  </a-row>

</div>
  
</template>
<script>
import HoverBtn from "../../components/HoverButton.vue";
export default {
  name: "bugStatMenu",
  components: { HoverBtn },
  data() {
    return {
      collapsed: false
    };
  }
};
</script>
<style>
.main {
}
</style>
