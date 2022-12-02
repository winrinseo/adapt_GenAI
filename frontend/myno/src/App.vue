<template>
  <div id="app">
    <main-header></main-header>
  </div>
</template>

<script>
import MainHeader from "@/components/common/MainHeader.vue";

export default {
  name: "App",
  components: {
    MainHeader,
  },
  async mounted() {
    // 스크립트 로딩
    await this.$loadScript(this.$hostname + "/assets/js/jquery-3.5.1.min.js");
    await this.$loadScript(this.$hostname + "/assets/js/sidebar-menu.js");
    await this.$loadScript(this.$hostname + "/assets/js/config.js");
    await this.$loadScript(this.$hostname + "/assets/js/script.js");
    await this.$loadScript(
      this.$hostname + "/assets/js/select2/select2.full.min.js"
    );
    await this.$loadScript(
      this.$hostname + "/assets/js/select2/select2-custom.js"
    );
    await this.$loadScript(
      this.$hostname + "/assets/js/owlcarousel/owl.carousel.js"
    );
    await this.$loadScript(
      this.$hostname + "/assets/js/owlcarousel/owl-custom.js"
    );
    await this.$loadScript(
      this.$hostname + "/assets/js/notify/bootstrap-notify.min.js"
    );
    await this.$loadScript(
      this.$hostname + "/assets/js/notify/notify-script.js"
    );
    await this.$loadScript(
      this.$hostname + "/assets/js/notify/bootstrap-notify.min.js"
    );
    await this.$loadScript(
      this.$hostname + "/assets/js/scrollable/perfect-scrollbar.min.js"
    );
    await this.$loadScript(
      this.$hostname + "/assets/js/scrollable/scrollable-custom.js"
    );
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
