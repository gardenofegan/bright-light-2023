<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import DefaultNavbar from "../..//examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../../examples/footers/FooterDefault.vue";
import Header from "../../examples/Header.vue";

//image
import bg0 from "@/assets/img/bg9.jpg";

//hooks
const body = document.getElementsByTagName("body")[0];
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
  <video id="background-video" autoplay loop muted poster="@/assets/img/bright-lights-background-image.png">
        <source src="@/assets/video/bright-lights-optimized.mp4" type="video/mp4">
      </video>
  <DefaultNavbar
    dark
    transparent
  />
  <header class="bg-gradient-dark">
    <div class="page-header min-vh-75">
      
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center mx-auto my-auto">
            <h1 class="text-white">
              Bright Lights
            </h1>
            <h3 class="mt-5 text-white">Biggest Free Light Show in Dearborn County!</h3>
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
      <h2>
        Bright Lights is Truly a Holiday Wonderland!
      </h2>
      <p class="lead">
        Drive your own vehicle through this FREE and amazing light display to discover Joy, Hope and the meaning of Christmas. Allow your eyes and hearts to be entertained and filled with wonder. MAKE IT A FAMILY TRADITION!
      </p>
      <p class="lead">
        BRIGHT LIGHTS has more than 20 themed displays, a light tunnel, holiday music and thousands of lights that will immerse visitors in a megadose of holiday cheer.
      </p>
      <p class="lead">
        It's the only FREE drive through Christmas Light Display in Dearborn County! 
      </p>
      <p class="lead">
        Experience this one of a kind holiday attraction and begin a new family tradition! Load up the kids, set a date with your loved one, or come by yourself and enjoy the sights and sounds of BRIGHT LIGHTS!
      </p>
    </div>
  </div>
  <DefaultFooter />
</template>
<style scoped>
  #background-video {
    width: 100vw;
    height: 60vh;
    object-fit: cover;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }

  @media (max-width: 750px) {
    #background-video { display: none; }
    body {
      background: url("@/assets/img/bright-lights-background-image.png") no-repeat;
      background-size: cover;
    }
}
</style>
