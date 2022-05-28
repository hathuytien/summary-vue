<template>
  <main>
    <!-- Header -->
    <m-header/>
    <!-- Content -->
    <!-- prettier-ignore -->
    <!-- eslint-disable -->
    <section class="nav-target">
    <div class="row wrap">
      <div class="left">
        <div id="sec1" class="pb20">
          <h2>Contact information</h2>
          <div class="info">
            <!-- eslint-disable-next-line -->
            <!-- prettier-ignore -->
            <dl class="wow fadeInUp" v-for="(item, index) in information" :key="index">
              <dt><i class="fas" v-bind:class="item.icon"></i></dt>
              <dd v-if="item.IsLink == true"><a v-bind:href="item.title" target="_blank">{{item.title}}</a></dd>
              <dd v-else>{{item.title}}</dd>
            </dl>
			    </div>
        </div>
        <div id="sec2" class="pb20">
          <h2>Objective</h2>
          <ul>
            <li class="wow fadeInUp" v-for="(item, index) in objective" :key="index">- {{item}}</li>
          </ul>
        </div>
        <div id="sec3" class="pb20">
          <h2>Skills</h2>
          <div class="list-item">
            <div class="item wow" v-for="(item, index) in skills" :key="index">
              <h4>{{item.title}}</h4>
              <p class="line"><span class="wow fadeInLeft" v-bind:style="{width: item.width + '%'}"></span></p>
            </div>
          </div>
        </div>
		  <div id="sec4" class="pb20">
			  <h2>Interests</h2>
			  <ul class="df">
				  <li class="wow rotateIn" v-for="(item, index) in interests" :key="index"><span><i class="fas" v-bind:class="item.icon"></i> {{item.title}}</span></li>
			  </ul>
		  </div>
		  <div id="sec5" class="pb20">
			  <h2>Position desired</h2>
			  <ul>
				  <li class="wow fadeInUp" v-for="(item, index) in ShowPosition" :key="index">- {{item.title}}</li>
			  </ul>
		  </div>
      </div>
      <div class="right">
		  <div id="sec6" class="pb20">
			  <h2>Education</h2>
			  <div class="list">
				  <div class="item wow" v-for="(item, index) in education" :key="index">
					  <p class="time"><span class="wow fadeInUp">{{item.period}}</span></p>
					  <p class="school wow fadeInRight">{{item.title}}</p>
					  <p class="major wow fadeInRight">Major: {{item.major}}</p>
					  <p class="specialized wow fadeInRight">{{item.decription}}</p>
				  </div>
			  </div>
		  </div>
		  <!-- <div id="sec7" class="pb20">
			  <h2>Activities</h2>
			  <div class="list">
				  <div class="item wow animated" style="visibility: visible;">
					  <p class="time"><span class="wow fadeInUp" style="visibility: visible; animation-name: fadeInUp;">September 2019 - Precent</span></p>
					  <p class="company wow fadeInRight" style="visibility: visible; animation-name: fadeInRight;">FCV badminton club</p>
					  <p class="position wow fadeInRight" style="visibility: visible; animation-name: fadeInRight;">Member</p>
					  <p class="detail wow fadeInRight" style="visibility: visible; animation-name: fadeInRight;">I joined the company's badminton club to improve my health</p>
				  </div>
			  </div>
		  </div> -->
		  <div id="sec8" class="pb20">
			  <h2>Work experience</h2>
			  <div class="list">
				  <div class="item wow" v-for="(item, index) in experience" :key="index">
					  <p class="time"><span class="wow fadeInUp">{{item.time}}</span></p>
					  <p class="company wow fadeInRight">{{item.company}}</p>
					  <p class="position wow fadeInRight">{{item.position}}</p>
					  <p class="detail wow fadeInRight">{{item.detail}}</p>
				  </div>
				 <!--  <div class="item wow" style="visibility: hidden; animation-name: none;">
					  <p class="time"><span class="wow fadeInUp" style="visibility: hidden; animation-name: none;">September 2019 - Precent</span></p>
					  <p class="company wow fadeInRight" style="visibility: hidden; animation-name: none;">FoodConnection</p>
					  <p class="position wow fadeInRight" style="visibility: hidden; animation-name: none;">Frontend Developer</p>
					  <p class="detail wow fadeInRight" style="visibility: hidden; animation-name: none;">I have created a responsive website that will work on many browser, on all devices, PC, laptop, tablet, and phone from design AI, PTS, XD</p>
				  </div> -->
			  </div>
		  </div>
      
      <div id="sec9" class="pb20">
			  <h2 class="mb20">Product</h2>
			  <CListProduct v-bind:listproduct="listproduct"/>
		  </div>
      <!-- <div id="sec9">
			  <h2 class="mb20">Product</h2>
			  <div class="list">
          <div class="item wow mb10" v-for="(item, index) in product" :key="index">
            <p class="product wow fadeInRight">{{item.restaurant}}</p>
					  <p class="link-product wow fadeInRight"><a v-bind:href="item.link_product" target="_blank">{{item.link_product}}</a></p>
          </div>
			  </div>
		  </div> -->
      <div id="sec10">
        <h2 class="mb20">My Project</h2>
				<div class="list">
          <div class="item">
            <p class="name wow fadeInRight">Jewelry</p>
            <p class="technology wow fadeInRight">Technology: HTML, CSS, Jquery, VueJs basic</p>
            <p class="detail wow fadeInRight">Website introducing jewelry of Kim Long MeKong store</p>
            <p class="btn-cus"><router-link :to="{name: 'Jewelry'}" tag="p" target="_blank">Demo</router-link></p>
          </div>
        </div>
      </div>
		</div>
    </div>
  </section>
  <!-- eslint-enable -->
    <m-footer/>
  </main>
</template>

<script>
// @ is an alias to /src
import MFooter from '../components/templates/MFooter.vue';
import MHeader from '../components/templates/MHeader.vue';
import CListProduct from '../components/templates/CListProduct.vue';
import { ref, reactive, onBeforeUpdate, watchEffect } from 'vue';
import WOW from "wow.js";

export default {
  name: "Home",
  components: {
    MFooter,
    MHeader,
    CListProduct
  },
  data() {
    return {
      information: [
        {
          icon: "fa-birthday-cake",
          title: "01/11/1995",
          IsLink: false
        },
        {
          icon: "fa-female",
          title: "Female",
          IsLink: false
        },
        {
          icon: "fa-phone-alt",
          title: "0777777078",
          IsLink: false
        },
        {
          icon: "fa-envelope-open",
          title: "thuytienha127@gmail.com",
          IsLink: false
        },
        {
          icon: "fa-envelope-open",
          title: "https://hathuytien.github.io/summary-vue/",
          IsLink: true
        },
        {
          icon: "fa-home",
          title: "Hamlet 3, Hoa Thanh Village, Tam Binh District, Vinh Long province",
          IsLink: false
        }
      ],
      objective: [
        "Looking for a chance to work in a professional working environment to learn knowledge and experience.",
        "Find the right job with myself.",
        "Improve professional knowledge, the skills necessary during the work. And, I will contribute to development of Company."
      ],
      skills: [
        {
          title: "HTML",
          width: 80,
        },
        {
          title: "CSS,SCSS",
          width: 80,
        },
        {
          title: "Jquery",
          width: 50,
        },
        {
          title: "Bootstrap",
          width: 60,
        },
        {
          title: "Ajax",
          width: 50,
        },
        {
          title: "Adobe Photoshop",
          width: 80,
        },
        {
          title: "Adobe Illustrator",
          width: 80,
        },
        {
          title: "Adobe XD",
          width: 60,
        },
        {
          title: "Figma",
          width: 50,
        },
      ],
      interests: [
        {
          icon:"fa-plane-departure",
          title:"Travel"
        },
        {
          icon:"fa-palette",
          title:"Painting"
        },
        {
          icon:"fa-camera",
          title:"Take photo"
        },
        {
          icon:"fa-photo-video",
          title:"Photoshop"
        }
      ],
      position:[
        {
          isActive: true,
          title:"Front-end Developer",
        },
        {
          isActive: false,
          title:"Web Graphic Designer",
        }
      ],
      education: [
        {
          period: "2013 - 2017",
          title: "Ho Chi Minh City University of Food Industry (HUFI)",
          major: "information technology",
          decription: "Specialized: information system"
        },
        {
          period: "2014 - 2016",
          title: "Computer center College of Natural Science Ho Chi Minh city",
          major: "information technology",
          decription: "Specialized: Application programming, graphic design"
        },
        {
          period: "Febnuary 2017- June 2017",
          title: "Saigon institute of Technology",
          major: "information technology",
          decription: "Specialized: Web programming"
        },
        {
          period: "January 2018 - August 2018",
          title: "Computer center College of Natural Science Ho Chi Minh city",
          major: "information technology",
          decription: "Specialized: Web programming"
        }
      ],
      experience: [
        {
          time: "August 2017 - August 2019",
          company: "Computer center College of Natural Science Ho Chi Minh city",
          position: "Designer and Software Developer",
          detail: "I used to design layout website, layout desktop and layout mobile. I was worked for software developer position. And, I used ASP.NET MVC technology to programming. I was worked for front end developer position."
        },
        {
          time: "September 2019 - May 2022",
          company: "FoodConnection",
          position: "Frontend Developer",
          detail: "I have created a responsive website using HTML / CSS / JavaScript for Japanese customers. The website will work on many browser, on all devices: PC, laptop, tablet, and smartphone from design AI, PTS, XD. I check perfect pixel for website."
        }
      ],
      listproduct: [
        {
          id:"0",
          restaurant: "おはしダイニングシェル (ohashi dining shell)",
          link_product: "https://www.ohashi-dining-shell.com/"
        },
        {
          id:"1",
          restaurant: "アカツキスモーク (akatsukismoke)",
          link_product: "https://www.akatsukismoke.com/"
        },
        {
          id:"2",
          restaurant: "アルボ (Arubo)",
          link_product: "https://www.arubo.jp/"
        },
        {
          id:"3",
          restaurant: "新宿の電源・Wi-FiカフェCafe＆Bar Village ビレッジ (village-tokyo)",
          link_product: "https://www.village-tokyo.jp/"
        },
        {
          id:"4",
          restaurant: "八重子さんの餃子 (yaeko gyoza)",
          link_product: "https://www.yaeko-gyoza.com/"
        },
        {
          id:"5",
          restaurant: "とり幸 (torikou)",
          link_product: "https://www.torikou.net/"
        },
      ]
    };
  },
  computed: {
    ShowPosition() {
      return this.position.filter(function (p) {
        return p.isActive;
      });
    }
  },
  mounted() {
    var wow = new WOW({
      boxClass: "wow", // animated element css class (default is wow)
      animateClass: "animated", // animation css class (default is animated)
      offset: 0, // distance to the element when triggering the animation (default is 0)
      mobile: true, // trigger animations on mobile devices (default is true)
      live: true, // act on asynchronously loaded content (default is true)
      callback: function (box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null, // optional scroll container selector, otherwise use window,
      resetAnimation: true, // reset animation on end (default is true)
    });
    wow.init();
  },
};
</script>
<style >
@import '@/assets/css/animate.min.css';
@import '@/assets/css/swiper.min.css';
@import '@/assets/css/common.css';
@import '@/assets/css/animate.min.css';
@import '@/assets/css/slick.min.css';
@import '@/assets/css/shared.css';
@import '@/assets/css/responsive.css';
@import '@/assets/css/modal.css';
@import '@/assets/css/cv2.css';
@import '@/assets/css/fontawesome-free-5.13.0-web/css/all.min.css';
</style>
