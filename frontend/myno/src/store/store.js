//index.js
import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    test: "test",
    menu: [
      { name: "선택해주세요.", value: "" },
      { name: "name1", value: "a" },
      { name: "name2", value: "b" },
      { name: "name3", value: "c" },
    ],
  },
  mutations: {},
  actions: {},
  getters: {},
});
