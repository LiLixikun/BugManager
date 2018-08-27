<template>
  <div class="hello">
    主页
      <router-view />
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>


