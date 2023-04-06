<template>
  <div class="page-body-wrapper null">
    <!-- Page Sidebar Start-->
    <nav-bar></nav-bar>
    <!-- Page Sidebar Ends-->

    <div class="page-body">
      <div class="form-builder-2-header justify-content-between">
        <ul class="nav nav-primary mb-1">
          <li class="nav-item" @click="selectT2I">
            <a class="nav-link" :class="{ active: selectedT2I }"
              >Text to Image</a
            >
          </li>
          <li class="nav-item" @click="selectI2I">
            <a class="nav-link" :class="{ active: selectedI2I }"
              >Image to Image</a
            >
          </li>
          <li class="nav-item" @click="selectInpaint">
            <a class="nav-link" :class="{ active: selectedInpaint }">inpaint</a>
          </li>
        </ul>
      </div>

      <router-view></router-view>
    </div>
    <!-- footer start-->
    <main-footer></main-footer>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
import MainFooter from "./MainFooter.vue";

//라우터 사용
import router from "@/routers/routers.js";

export default {
  components: {
    NavBar,
    MainFooter,
  },
  router,
  data() {
    return {
      selected: 0,
      selectedT2I: true,
      selectedI2I: false,
      selectedInpaint: false,
    };
  },
  methods: {
    selectT2I() {
      if (!this.selectedT2I) {
        this.selectedT2I = true;
        this.selectedI2I = false;
        this.selectedInpaint = false;
        this.$router.push("t2i");
      }
    },
    selectI2I() {
      if (!this.selectedI2I) {
        this.selectedT2I = false;
        this.selectedI2I = true;
        this.selectedInpaint = false;
        this.$router.push("i2i");
      }
    },
    selectInpaint() {
      if (!this.selectedInpaint) {
        this.selectedT2I = false;
        this.selectedI2I = false;
        this.selectedInpaint = true;
        this.$router.push("ipt");
      }
    },
  },
};
</script>

<style></style>
