import Vue from "vue";
import Router from "vue-router";
import Rideshare from "@/components/Rideshare";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Rideshare",
      component: Rideshare
    }
  ]
});
