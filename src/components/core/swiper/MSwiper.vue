
<template>
<swiper class="mySwiper"
  :loop="true"
  :autoplay="autoplay"
  >
  <swiper-slide 
    v-for="(ite, index) in imgUrls" :key="index"
    ><img :src="ite" />
  </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
// import Swiper core and required modules
import SwiperCore, {
  Autoplay
} from 'swiper';
SwiperCore.use([Autoplay]);
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    autoplay: {
      type: Object,
      default: () => {
        return {
          delay: 5000
        }
      }
    },
    imgUrls: {
      type : Array,
      default : [
        "src/assets/images/index/key1.jpg"
      ]
    }
  },
  data() {
    return {
    };
  },
  methods: {
  }
}
</script>
<style scoped>
</style>