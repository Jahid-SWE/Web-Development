<template>
  <div class="home">
    <Slider/>
    <Banner/>
    <BestLook/>
    <Testimonial/>
    <FeaturedProduct/>

  </div>
</template>

<script>
import Slider from "@/components/home/Slider";
import Banner from "@/components/home/Banner";
import BestLook from "@/components/home/BestLook";
import Testimonial from "@/components/home/Testimonial";
import FeaturedProduct from "@/components/home/FeaturedProduct";
export default {
  name: 'Home',
  components: {Slider,Banner,BestLook,Testimonial,FeaturedProduct}
}
</script>
