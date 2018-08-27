<template>
    <div>
        <div class="index">   
           <logo-tip />
           <div style="height:40px"></div>
        <router-view></router-view>
        </div>
    </div>
</template>
<script>
import LogoTip from "../../components/LogoTip";
export default {
  name: "UserLayout",
  components: { LogoTip }
};
</script>

<style>
.index {
  margin: 0 auto;
  width: 520px;
  margin-top: 50px;
  padding: 85px;
}
</style>
