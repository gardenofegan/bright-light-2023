<script setup>
import logoDark from "@/assets/img/apple-icon.png";
defineProps({
  brand: {
    type: Object,
    name: String,
    logo: String,
    route: "",
    default: () => ({
      name: "Bright Lights",
      logo: logoDark,
      route: "/"
    })
  },
  socials: {
    type: Array,
    icon: String,
    link: String,
    default: () => [
      {
        icon: '<i class="fab fa-facebook text-lg opacity-8"></i>',
        link: "https://www.facebook.com/profile.php?id=100087295817417"
      },
      {
        icon: '<i class="fab fa-instagram text-lg opacity-8"></i>',
        link: "https://www.instagram.com/brightlightsdcc/"
      }
    ]
  },
  menus: {
    type: Array,
    name: String,
    items: {
      type: Array,
      name: String,
      href: String
    },
    default: () => [
      {
        name: "",
        items: []
      },
      {
        name: "",
        items: []
      },
      {
        name: "",
        items: []
      },
      {
        name: "Links",
        items: [
          {
            name: "About",
            href: "/about-us"
          },
          {
            name: "Sponsors",
            href: "/sponsors"
          },
          {
            name: "Directions & Hours",
            href: "/directions"
          }
        ]
      }
    ]
  }
});
</script>
<template>
  <footer class="footer pt-8 mt-5">
    <div class="container">
      <div class="row">
        <div class="col-md-3 mb-4 ms-auto">
          <div>
            <a :href="brand.route">
              <img :src="brand.logo" class="mb-3" style="max-width: 128px;" alt="main_logo" />
            </a>
            <h6 class="font-weight-bolder mb-4">{{ brand.name }}</h6>
          </div>
          <div>
            <ul class="d-flex flex-row ms-n3 mt-3 nav">
              <li
                class="nav-item"
                v-for="{ icon, link } of socials"
                :key="link"
              >
                <a
                  class="nav-link pe-1"
                  :href="link"
                  target="_blank"
                  v-html="icon"
                >
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="col-md-2 col-sm-6 col-6 mb-4"
          v-for="{ name, items } of menus"
          :key="name"
        >
          <h6 class="text-sm">{{ name }}</h6>
          <ul class="flex-column ms-n3 nav">
            <li class="nav-item" v-for="item of items" :key="item.name">
              <RouterLink class="nav-link" :to="item.href">
                {{ item.name }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <div class="col-12">
          <div class="text-center">
            <p class="text-dark my-4 text-sm font-weight-normal">
              &#160;
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
