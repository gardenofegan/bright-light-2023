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
              Directions & Hours
            </h1>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="card card-body shadow-xl mx-3 mx-md-4 mt-n6">
    <div class="py-lg-4 px-lg-8 py-2 px-2">
      <div class="row pb-6">
        <div class="col-lg-6">
          <h3>Address</h3>
          <p class="lead">
            23345 Gavin Ln<br/>Lawrenceburg, IN<br/>47025
          </p>
        </div>
        <div class="col-lg-6">
          <h3>Hours</h3>
          <p class="lead">
            Friday, Saturday, & Sundays
            <br/>
            6pm - 10pm
          </p>
          <p class="lead">
            December 1st - January 6th
          </p>
        </div>
      </div>
      <div class="google-maps">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3091.4620123564164!2d-84.86288372405753!3d39.20967157165908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88402b1ab04f256d%3A0x6a9a9e3658f77930!2sBright%20Lights!5e0!3m2!1sen!2sus!4v1698367594802!5m2!1sen!2sus" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
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
