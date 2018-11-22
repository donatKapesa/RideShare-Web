import Vue from "vue";
import Router from "vue-router";
import Rideshare from "@/components/Rideshare";
//import FleetStatus from '@/components/FleetStatus'
//import Rankings from '@/components/Rankings'
import User from "@/components/User";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Rideshare",
      component: Rideshare
    },
    // {
    //   path: '/fleet/status',
    //   name: 'FleetStatus',
    //   component: FleetStatus
    // },
    // {
    //   path: '/rankings',
    //   name: 'Rankings',
    //   component: Rankings
    // },
    // {
    //   path: '/user',
    //   name: 'User',
    //   component: User
    // }
  ]
});
