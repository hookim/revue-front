import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../views/MainPage.vue";
import MapPage from "../views/MapPage.vue";

const routes =  [
  {path : "", name: "main", component : MainPage},
  {path : "/map", name: "map",  component : MapPage},
]

const router  = createRouter({
  history : createWebHistory(),
  routes 
})

export default router;