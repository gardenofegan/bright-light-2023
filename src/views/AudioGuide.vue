<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import DefaultNavbar from "../examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../examples/footers/FooterDefault.vue";

//image
import bg0 from "@/assets/img/bright-lights-3.jpg";

const body = document.getElementsByTagName("body")[0];
//hooks
onMounted(() => {
  body.classList.add("direction-view");
  body.classList.add("bg-gray-200");
});

onUnmounted(() => {
  body.classList.remove("direction-view");
  body.classList.remove("bg-gray-200");
});
</script>
<template>
  <DefaultNavbar
    dark
    transparent
  />
  <header class="bg-gradient-dark">
    <div
      class="page-header min-vh-75"
      :style="{ backgroundImage: `url(${bg0})` }"
    >
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center mx-auto my-auto">
            <h1 class="text-white">
              Audio Guide
            </h1>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="card card-body shadow-xl mx-3 mx-md-4 mt-n6">
    <div class="py-lg-4 px-lg-8 py-2 px-2">
        nothing yet
    </div>
  </div>
  <DefaultFooter />
</template>
<style>
  .google-maps {
    position: relative;
    padding-bottom: 75%;
    height: 0;
    overflow: hidden;
  }
  .google-maps iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 100% !important;
  }
</style>
