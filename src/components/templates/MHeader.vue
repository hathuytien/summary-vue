<template>
    <header id="header">
    <div class="wrap df">
		<div id="key" class="on">
      <div class="slider-left">
        <m-swiper
          :imgUrls="imgLeft"
        />
        <!-- <div class="swiper-container swiper-container-initialized swiper-container-horizontal" style="transform: scale(1); transition: all 0.4s ease-out 0s;">
          <ul class="swiper-wrapper" style="transform: translate3d(-400px, 0px, 0px); transition-duration: 0ms;">
            <li class="swiper-slide swiper-slide-duplicate swiper-slide-next swiper-slide-duplicate-prev" data-swiper-slide-index="2" style="width: 100px;"><img src="@/assets/images/index/key2.jpg" alt="name" width="800" height="900"></li>
            <li class="swiper-slide swiper-slide-duplicate-active" data-swiper-slide-index="0" style="width: 100px;"><img src="@/assets/images/index/key3.jpg" alt="name" width="800" height="900"></li>
            <li class="swiper-slide" data-swiper-slide-index="1" style="width: 100px;"><img src="@/assets/images/index/key1.jpg" alt="name" width="800" height="900"></li>
            <li class="swiper-slide swiper-slide-prev swiper-slide-duplicate-next" data-swiper-slide-index="2" style="width: 100px;"><img src="@/assets/images/index/key2.jpg" alt="name" width="800" height="900"></li>
          <li class="swiper-slide swiper-slide-duplicate swiper-slide-active" data-swiper-slide-index="0" style="width: 100px;"><img src="@/assets/images/index/key3.jpg" alt="name" width="800" height="900"></li></ul>
        <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div> -->
      </div>
      <div class="slider-center">
        <m-swiper
          :imgUrls="imgCenter"
        />
        <!-- <div class="swiper-container swiper-container-initialized swiper-container-horizontal" style="transform: scale(1); transition: all 0.4s ease-out 0s;">
          <ul class="swiper-wrapper" style="transform: translate3d(-720px, 0px, 0px); transition-duration: 0ms;">
            <li class="swiper-slide swiper-slide-duplicate swiper-slide-next swiper-slide-duplicate-prev" data-swiper-slide-index="2" style="width: 180px;"><img src="@/assets/images/index/key3.jpg" alt="name" width="800" height="900"></li>
            <li class="swiper-slide swiper-slide-duplicate-active" data-swiper-slide-index="0" style="width: 180px;"><img src="@/assets/images/index/key1.jpg" alt="name" width="800" height="900"></li>
            <li class="swiper-slide" data-swiper-slide-index="1" style="width: 180px;"><img src="@/assets/images/index/key2.jpg" alt="name" width="800" height="900"></li>
            <li class="swiper-slide swiper-slide-prev swiper-slide-duplicate-next" data-swiper-slide-index="2" style="width: 180px;"><img src="@/assets/images/index/key3.jpg" alt="name" width="800" height="900"></li>
          <li class="swiper-slide swiper-slide-duplicate swiper-slide-active" data-swiper-slide-index="0" style="width: 180px;"><img src="@/assets/images/index/key1.jpg" alt="name" width="800" height="900"></li></ul>
        <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div> -->
      </div>
      <div class="slider-right">
        <m-swiper
          :imgUrls="imgRight"
          />
      </div>
    </div>
      <div class="row">
        <h2 class="name">HÀ THỦY TIÊN</h2>
		  <h3 class="position">Front End Developer</h3>
      </div>
    </div>
    <!--<div class="toggle-button sp"><span class="button"></span></div>
    <div class="row2 nav-fixed mobile-nav sp" scroll-active="true">
      <div class="wrap">
        <nav>
          <ul class="nav">
            <li><a href="#sec2"><span>Contact information</span></a></li>
            <li><a href="#sec2"><span>Objective</span></a></li>
            <li><a href="#sec3"><span>Skills</span></a></li>
            <li><a href="#sec4"><span>Interests</span></a></li>
            <li><a href="#sec5"><span>Position desired</span></a></li>
            <li><a href="#sec6"><span>Education</span></a></li>
            <li><a href="#sec7"><span>Activities</span></a></li>
            <li><a href="#sec8"><span>Work experience</span></a></li>
          </ul>
        </nav>
      </div>
    </div>-->
  </header>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import MSwiper from '../core/swiper/MSwiper.vue';
export default {
  name: "MFooter",
  props: {
    msg: String,
  },
  components: {
    Swiper,
    SwiperSlide,
    MSwiper,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
  data() {
    return {
      imgLeft: [
        "images/index/key3.jpg",
        "images/index/key1.jpg",
        "images/index/key2.jpg"
      ],
      imgCenter: [
        "images/index/key1.jpg",
        "images/index/key2.jpg",
        "images/index/key3.jpg"
      ],
      imgRight: [
        "images/index/key2.jpg",
        "images/index/key3.jpg",
        "images/index/key1.jpg"
      ]
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
