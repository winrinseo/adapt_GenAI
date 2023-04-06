import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// import MainPage from "@/components/view/MainPage";
// import BookList from "@/components/view/BookList";
// import UserModify from "@/components/view/UserModify";
import TextToImage from "@/components/view/TextToImg";
import ImageToImage from "@/components/view/ImgToImg";
import ImgInpaint from "@/components/view/ImgInpaint";
const routes = [
  {
    path: "/",
    name: "t2i",
    component: TextToImage,
  },
  {
    path: "/t2i",
    name: "t2i",
    component: TextToImage,
  },
  {
    path: "/i2i",
    name: "i2i",
    component: ImageToImage,
  },
  {
    path: "/ipt",
    name: "ipt",
    component: ImgInpaint,
  },
];
export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
