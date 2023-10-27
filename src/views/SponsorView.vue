<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import DefaultNavbar from "../examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../examples/footers/FooterDefault.vue";

//image
import bg0 from "@/assets/img/bright-lights-2.jpg";

const body = document.getElementsByTagName("body")[0];
//hooks
onMounted(() => {
  body.classList.add("sponsor-view");
  body.classList.add("bg-gray-200");
});

onUnmounted(() => {
  body.classList.remove("sponsor-view");
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
              Sponsors
            </h1>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="card card-body shadow-xl mx-3 mx-md-4 mt-n6">
    <div class="py-lg-4 px-lg-6 py-2 px-2">
      <div class="row">
        <div class="col-lg-3">
          <h3>
            <i class="fas fa-solid fa-certificate" style="color: #e5e4e2;"></i>
            Platinum
          </h3>
          <ul>
            <li>Badinghaus Construction & Trinity Design & Remodel</li>
            <li>FCN Bank</li>
            <li>St Teresa K of C Council 14862</li>
            <li>Sub Station II</li>
          </ul>
        </div>
        <div class="col-lg-3">
          <h3>
            <i class="fas fa-solid fa-certificate" style="color: #FEE101;"></i>
            Gold
          </h3>
          <ul>
            <li>Logan Supermart</li>
            <li>Robert's Auto Body</li>
          </ul>
        </div>
        <div class="col-lg-3">
          <h3><i class="fas fa-solid fa-certificate" style="color: #A7A7AD;"></i>
            Silver</h3>
          <ul>
            <li>B.E.S. Racing Engines</li>
            <li>Fehrman Realty</li>
            <li>Haag Ford</li>
            <li>Los Primos</li>
            <li>Roger Lake Trucking Inc.</li>
            <li>St. Leon Tavern</li>
            <li>Suzanne E. Martini MD</li>
            <li>Whitaker Family</li>
          </ul>
        </div>
        <div class="col-lg-3">
          <h3><i class="fas fa-solid fa-certificate" style="color: #A77044;"></i>
            Bronze</h3>
          <ul>
            <li>All Saints Ladies Sodality</li>
            <li>Bright Veterinary Clinic</li>
            <li>Neidhard-Minges Funeral Home</li>
            <li>Rick Niklas, Interstate Insurance Agency</li>
            <li>St. Leon Properties LLC</li>
            <li>The Friendship State Bank</li>
            <li>Subway - St. Leon, Bright, Milan, Aurora</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="py-lg-4 px-lg-6 py-2 px-2">
      <p class="lead">
        Bright Lights would like to thank all of our sponsors for their support
      </p>
      
    </div>
  </div>
  <DefaultFooter />
</template>
