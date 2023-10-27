<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import DefaultNavbar from "../../../examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../../../examples/footers/FooterDefault.vue";

//image
import bg0 from "@/assets/img/bright-lights-1.jpg";


const body = document.getElementsByTagName("body")[0];
//hooks
onMounted(() => {
  body.classList.add("about-us");
  body.classList.add("bg-gray-200");
});

onUnmounted(() => {
  body.classList.remove("about-us");
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
              About Bright Lights
            </h1>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="card card-body shadow-xl mx-3 mx-md-4 mt-n6">
    <!-- <Information />
    <AboutTeam />
    <Featuring />
    <Newsletter /> -->
    <div class="py-lg-4 px-lg-8 py-2 px-2">
      <p class="lead">
        Bright Lights is open rain or shine every Friday, Saturday, and Sunday December 1st - January 6th from 6pm - 10pm.
      </p>
      <p class="lead">
        Restrooms are available for use at the entrance of the show
      </p>
      <p class="lead">
        For your safety, please do not exit your vehicle while driving through this experience
      </p>
      <hr/>
      <h2>
        Our Story
      </h2>
      <p class="lead">
        St. Teresa Parish was founded in the year 2,000 as a way to minister and serve the people in Bright, IN. Our large property and facilities have a story that speaks of generosity, community and joy!
      </p>
      <p class="lead">
        Recently a conversation began around inviting people onto our beautiful property to experience joy, hope and the message of Christ- this Bright Lights was born.
      </p>
      <p class="lead">
        The vast majority of the lights and displays that you see were donated by local residents, with the exception of our animated light show. We are delighted to keep the tradition of two prominent Lights Shows: Craven Lights and Santa Claus Lane alive here at Bright Lights.
      </p>
      <p class="lead">
        Countless volunteer hours were put into this display and its execution. Our greeters and workers each night are volunteers excited to help you experience Christmas Joy!
      </p>
      <p class="lead">
        Enjoy!
      </p>
    </div>
  </div>
  <DefaultFooter />
</template>
