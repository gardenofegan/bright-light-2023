import { createRouter, createWebHistory } from "vue-router";
import PresentationView from "../views/Presentation/PresentationView.vue";
import AboutView from "../views/LandingPages/AboutUs/AboutView.vue";
import SponsorView from "../views/SponsorView.vue";
import Directions from "../views/Directions.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "presentation",
      component: PresentationView,
    },
    {
      path: "/about-us",
      name: "about",
      component: AboutView,
    },
    {
      path: "/sponsors",
      name: "sponsors",
      component: SponsorView,
    },
    {
      path: "/directions",
      name: "directions",
      component: Directions,
    },
  ],
});

export default router;
