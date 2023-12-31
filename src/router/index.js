import { createRouter, createWebHashHistory } from "vue-router";
import PresentationView from "../views/Presentation/PresentationView.vue";
import AboutView from "../views/LandingPages/AboutUs/AboutView.vue";
import SponsorView from "../views/SponsorView.vue";
import Directions from "../views/Directions.vue";
import PlaylistView from "../views/PlaylistView.vue";
const router = createRouter({
  history: createWebHashHistory(),
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
      path: "/playlist",
      name: "playlist",
      component: PlaylistView,
    },
    {
      path: "/directions",
      name: "directions",
      component: Directions,
    },
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: PresentationView,
      redirect: "/"
    }
  ],
});

export default router;
