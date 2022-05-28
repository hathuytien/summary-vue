<template>
  <main>
    <!--<button onclick="topFunction()" id="myBtn" title="Go to top"><img src="images/jewelry/up.png" style="width:100%" /></button>-->
    <p class="btn-call"><a href="tel:0907989297" class="telhref" onclick="ga('send', 'event', 'tel', 'click', 'fixed_phone');"><img src="/images/jewelry/phone.png" style="width:100%" /></a></p>
    <div class="menu">
		<div class="container">
			<div class="nav navbar row" id="nav">
				<p class="logo col-xl-2 col-lg-2 col-md-4 col-sm-12 col-12"><a href="index.html"><img src="/images/jewelry/Logo.png" width="100%" /></a></p>
				<div class="nav navbar-nav col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
						<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
							<span class="fa fa-bars"></span>
						</button>
						<ul class="nav navbar-nav collapse navbar-collapse" id="navbarNavDropdown">
							<li><a href="./index.html">Trang chủ</a></li>
							<li><a href="./GioiThieu.html">Giới thiệu</a></li>
							<li><a href="#">Sản phẩm</a></li>
							<li><a href="./TinTuc.html">Tin Tức</a></li>
							<li><a href="./LienHe.html">Liên hệ</a></li>
						</ul>
				</div>
				<div class="col-xl-4 col-lg-4 col-md-8 col-sm-12 col-12 search_procduct">
					<input type="text" class="form-control timsanpham" placeholder="Tên sản phẩm"/><i class="glyphicon glyphicon-search tim"></i>
				</div>
				
			</div>
		</div>
	</div>
    <div style="position: relative;padding-left:0;padding-right:0">
		<!--<ul class="banner">
			<li> <img src="images/jewelry/banner.jpg" style="width:100%" /></li>
			<li> <img src="images/jewelry/banner.jpg" style="width:100%" /></li>
			<li> <img src="images/jewelry/banner.jpg" style="width:100%" /></li>
		</ul>
    <VueSlickCarousel :arrows="false" :dots="true">
      <li> <img src="images/jewelry/banner.jpg" style="width:100%" /></li>
			<li> <img src="images/jewelry/banner.jpg" style="width:100%" /></li>
			<li> <img src="images/jewelry/banner.jpg" style="width:100%" /></li>
    </VueSlickCarousel>
	<m-swiper
        :imgUrls="imgSlide"
    />-->
	<!-- <swiper class="swiper" :loop="true" :autoplay="{ delay: 3500, disableOnInteraction: false }" :modules="modules" :pagination="{ clickable: true }">
		<swiper-slide class="slide" v-for="(ite, index) in imgSlide" :key="index">
			<img :src="ite" />
		</swiper-slide>
	</swiper> -->
    </div>
	<div class="clearfix" style="margin-top:10px;margin-bottom:10px;"></div>
    <div class="container">
		<div id="SanPhamMoi">
			<h2><span>SẢN PHẨM MỚI</span></h2>
			<div class="row">
			   <div class="col-lg-3 col-md-4 col-sm-6 col-6 item" v-for="(item, index) in ListJewelry" :key="index">
					<p class="photo"><img v-bind:src="item.img" style="width:100%" /></p>
					<p class="id_product">{{item.id_product}}</p>
					<p class="name_product">{{item.name}}</p>
				</div>
			</div>
			<button class="btn-custom">Xem thêm</button>
		</div>
		 <div class="clearfix" style="margin-top:30px;margin-bottom:30px;"></div>
		<div id="DanhMucSanPham">
			<h2><span>DANH MỤC SẢN PHẨM</span></h2>
			<nav class="nav-fl">
				<div class="dropdown" v-for="(item, index) in ListMenu" :key="index">
					<a v-bind:href="item.link" class="dropbtn">{{item.menu}}</a>
					<div class="dropdown-content" v-if="item.sub.length != 0" >
						<a v-bind:href="item.link" v-for="(item, index) in item.sub" :key="index">{{item.menu}}</a>
					</div>
				</div>
				<!--<div class="dropdown">
					<a class="dropbtn">Bông tai</a>
					<div class="dropdown-content">
						<a href="#">Nhẫn cưới</a>
						<a href="#">Nhẫn nam</a>
						<a href="#">Nhẫn kiểu</a>
						<a href="#">Nhẫn em bé</a>
					</div>
				</div>
				<div class="dropdown">
					<a class="dropbtn">Lắc</a>
					<div class="dropdown-content">
						<a href="#">Nhẫn cưới</a>
						<a href="#">Nhẫn nam</a>
						<a href="#">Nhẫn kiểu</a>
						<a href="#">Nhẫn em bé</a>
					</div>
				</div>
				<div class="dropdown">
					<a class="dropbtn">Vòng</a>
					<div class="dropdown-content">
						<a href="#">Nhẫn cưới</a>
						<a href="#">Nhẫn nam</a>
						<a href="#">Nhẫn kiểu</a>
						<a href="#">Nhẫn em bé</a>
					</div>
				</div>
				<div class="dropdown">
					<a class="dropbtn">Dây chuyền</a>
					<div class="dropdown-content">
						<a href="#">Nhẫn cưới</a>
						<a href="#">Nhẫn nam</a>
						<a href="#">Nhẫn kiểu</a>
						<a href="#">Nhẫn em bé</a>
					</div>
				</div>
				<div class="dropdown">
					<a class="dropbtn">Kiềng</a>
					<div class="dropdown-content">
						<a href="#">Nhẫn cưới</a>
						<a href="#">Nhẫn nam</a>
						<a href="#">Nhẫn kiểu</a>
						<a href="#">Nhẫn em bé</a>
					</div>
				</div>
				<div class="dropdown">
					<a class="dropbtn">Khác</a>
					<div class="dropdown-content">
						<a href="#">Nhẫn cưới</a>
						<a href="#">Nhẫn nam</a>
						<a href="#">Nhẫn kiểu</a>
						<a href="#">Nhẫn em bé</a>
					</div>
				</div>-->
			</nav>
		</div>
		</div>
		 <div class="clearfix" style="margin-top:30px;margin-bottom:30px;"></div>
		 <div id="SanPhamBanChay">
			<div class="container">
			<h2 class="sp-view"><span>SẢN PHẨM BÁN CHẠY</span></h2>
			<div class="row">
				<div class="col-lg-3 col-md-6 col-sm-12 col-12 bestseller">
					<h2>SẢN PHẨM BÁN CHẠY</h2>
					<h4>Khám phá những sản phẩm bán chạy nhất tại Kim Long</h4>
					<p class="photo"><img src="/images/jewelry/IMG2.png" style="width:100%" /></p>
					<button class="btn-view">Khám phá ngay</button>
				</div>
				<!-- <swiper
				class="swiper product_bestseller col-lg-9 col-md-6 col-sm-12 col-12"
				:modules="modules"
				direction="horizontal"
				:slides-per-view="3"
				:space-between="10"
				:navigation="true"
				@swiper="setSwiperRef"
				@resize="handleResize"
				:breakpoints="swiperOptions.breakpoints"
			>
				<swiper-slide class="slide item" v-for="(item, index) in ListJewelry" :key="index">
					<p class="photo"><img v-bind:src="item.img" style="width:100%" /></p>
					<p class="id_product">{{item.id_product}}</p>
					<p class="name_product">{{item.name}}</p>
				</swiper-slide>
			</swiper> -->
			</div>
			</div>
		</div>
		 <div class="clearfix" style="margin-top:30px;margin-bottom:30px;"></div>
		 <div class="container">
		 <div id="SanPhamTieuBieu">
			<h2><span>SẢN TIÊU BIỂU</span></h2>
			<!-- <swiper
				class="swiper product_slider"
				:modules="modules"
				direction="horizontal"
				:slides-per-view="4"
				:space-between="30"
				:navigation="true"
				@swiper="setSwiperRef"
				@resize="handleResize"
				:breakpoints="swiperOptions2.breakpoints"
			>
				<swiper-slide class="slide item" v-for="(item, index) in ListJewelry" :key="index">
					<p class="photo"><img v-bind:src="item.img" style="width:100%" /></p>
					<p class="id_product">{{item.id_product}}</p>
					<p class="name_product">{{item.name}}</p>
				</swiper-slide>
			</swiper> -->
		</div>
		 <div class="clearfix" style="margin-top:30px;margin-bottom:30px;"></div>
		 <div id="TinTuc">
			<h2><span>TIN TỨC - SỰ KIỆN</span></h2>
			<div class="row">
                <div class="col-lg-7 col-md-5 col-sm-12 col-12 tintuc_news" v-bind:onclick="'window.location.href='+item.link" v-for="(item, index) in NewsTop" :key="index">
                    <p class="photo"><img v-bind:src="item.img" style="width:100%" /></p>
                    <h5>{{item.title}}</h5>
                    <p>{{item.desc}}</p>
                    <h6>{{item.date}}</h6>
                </div>
                <div class="col-lg-5 col-md-7 col-sm-12 col-12">
                    <div class="tintuc row" v-bind:onclick="'window.location.href='+item.link" v-for="(item, index) in News" :key="index">
                        <div class="col-lg-6 col-md-5 col-sm-12 col-12 photo">
                            <img v-bind:src="item.img" style="width:100%" />
                        </div>
                        <div class="col-lg-6 col-md-7 col-sm-12 col-12" style="padding-right:0px">
							<h5>{{item.title}}</h5>
							<p>{{item.desc}}</p>
							<h6>{{item.date}}</h6>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                </div>
            </div>
			<div class="clearfix" style="margin-top:10px;margin-bottom:10px;"></div>
			<button class="btn-custom">Xem thêm</button>
        </div>
		<div class="clearfix" style="margin-top:30px;margin-bottom:30px;"></div>
		 <div id="BieuDo">
			<h2><span>BIỂU ĐỒ GIÁ VÀNG</span></h2>
			<div class="row">
                <div class="col-lg-8 col-md-8 col-sm-12 col-12 bieudogiavang">
                    <a href="http://www.kitco.com/images/live/gold.gif"><img src="http://www.kitco.com/images/live/gold.gif" alt="" style="width: 100%;"/></a>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-12">
					<ul class="group_banner">
						<li v-for="(item, index) in ListBanner" :key="index"><a v-bind:href="item.link"><img v-bind:src="item.img"/></a></li>
					</ul>
                </div>
            </div>
        </div>
    </div>
    <div class="clearfix" style="margin-top:30px;margin-bottom:30px;"></div>
    <div class="footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12 col-12 info">
                    <h5 style="font-weight:bold">CÔNG TY TNHH MTV VÀNG BẠC ĐÁ QUÝ KIM LONG MEKONG</h5>
                    <h5>Địa chỉ: 3 - 5 Đỗ Công Tường, P2, Tp Cao Lãnh, Đồng Tháp</h5>
                    <h5>Điện thoại: 0277 6250 351 - 0907 98 92 97</h5>
                    <h5>Email:  kimlongmekong@gmail.com</h5>
                </div>
				<div class="col-lg-3 col-md-3 col-sm-12 col-12">
					<h5>Liên kết với chúng tôi</h5>
					<ul class="social">
						<li><a href="#"><img src="/images/jewelry/facebook.jpg"/></a></li>
						<li><a href="#"><img src="/images/jewelry/youtube.jpg"/></a></li>
					</ul>
				</div>
                <div class="col-lg-3 col-md-3 col-sm-12 col-12 group_time">
                    <h5>Giờ làm việc: Thứ 2 - thứ 7</h5>
                    <ul class="time">
						<li>Sáng: 8:00 - 11:00</li>
						<li>Chiều: 13:30 - 16:30</li>
					</ul>
                </div>
            </div>
        </div>
    </div>
  </main>
</template>

<script>
// @ is an alias to /src
import { ref, reactive, onBeforeUpdate, watchEffect } from 'vue';
import WOW from "wow.js";
// import BootstrapVue3 from "bootstrap-vue-3";
//import "bootstrap/dist/css/bootstrap.css";
//import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
// app.use(BootstrapVue3);

// Import Swiper Vue.js components
import { Pagination, Navigation } from 'swiper'
// import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
export default {
  name: "jewelry",
  components: { 
  },
  setup() {
    return {
	  modules: [Pagination, Navigation]
    };
  },
  data() {
    return {
		imgSlide: [
			"images/jewelry/banner.jpg",
			"images/jewelry/banner.jpg",
			"images/jewelry/banner.jpg"
		],
		swiperOptions: {
          breakpoints: {
			320: {       
				slidesPerView: 1,
				spaceBetween: 10     
			},          
			820: {       
				slidesPerView: 1,       
				spaceBetween:10     
			},   
		
			992: {       
				slidesPerView: 3,       
				spaceBetween: 10     
			} 
		  }
		},
		swiperOptions2: {
          breakpoints: {
			320: {       
				slidesPerView: 1,
				spaceBetween: 10     
			},          
			767: {       
				slidesPerView: 3,       
				spaceBetween:10     
			},   
		
			992: {       
				slidesPerView: 3,       
				spaceBetween: 10     
			} 
		  }
		},
		ListMenu:[
			{
				menu:"Nhẫn",
				link:"#",
				sub:[
					{
						menu:"Nhẫn cưới",
						link:"#",
					},
					{
						menu:"Nhẫn nam",
						link:"",
					},
					{
						menu:"Nhẫn kiểu",
						link:"#",
					},
					{
						menu:"Nhẫn em bé",
						link:"",
					}
				]
			},
			{
				menu:"Bông tai",
				link:"#",
				sub:[]
			},
			{
				menu:"Lắc",
				link:"#",
				sub:[]
			},
			{
				menu:"Vòng",
				link:"#",
				sub:[]
			},
			{
				menu:"Dây chuyền",
				link:"#",
				sub:[]
			},
			{
				menu:"Kiềng",
				link:"#",
				sub:[]
			},
			{
				menu:"Khác",
				link:"#",
				sub:[
					{
						menu: "Charm",
						linl: "#"
					},
					{
						menu: "Vàng miếng",
						linl: "#"
					}
				]
			}
		],
		ListJewelry: [
        {
          img: "images/jewelry/IMG1.jpg",
          id_product: "NC1697",
          name: "Nhẫn đá màu"
        },
		{
          img: "images/jewelry/IMG2.jpg",
          id_product: "NC1697",
          name: "Nhẫn đá màu"
        },
		{
          img: "images/jewelry/IMG3.jpg",
          id_product: "NC1697",
          name: "Nhẫn đá màu"
        },
		{
          img: "images/jewelry/IMG4.jpg",
          id_product: "NC1697",
          name: "Nhẫn đá màu"
        },
		{
          img: "images/jewelry/IMG1.jpg",
          id_product: "NC1697",
          name: "Nhẫn đá màu"
        },
		{
          img: "images/jewelry/IMG2.jpg",
          id_product: "NC1697",
          name: "Nhẫn đá màu"
        },
		{
          img: "images/jewelry/IMG3.jpg",
          id_product: "NC1697",
          name: "Nhẫn đá màu"
        },
		{
          img: "images/jewelry/IMG4.jpg",
          id_product: "NC1697",
          name: "Nhẫn đá màu"
        },
      ],
	  ListNews:[
		{
			img: "images/jewelry/Hinh1.jpg",
		  	title: "Giá vàng hôm nay 29/6: 'Leo dốc' sáng đầu tuần, dự báo tiếp tục tăng bứt phá",
			desc: "Mở cửa phiên giao dịch sáng nay (29/6 theo giờ địa phương), giá vàng thế giới giao ngay ở mức 1.773,14 USD/Ounce. So với chốt phiên cuối tuần, vàng bật tăng khoảng 2 USD/Ounce, hiện đang phá đỉnh 8 năm.",
			date: "Ngày 29/06/2020 09:18 AM",
			link: "'#'",
			IsNew: true
		},
		{
			img: "images/jewelry/Hinh2.jpg",
		  	title: "Giá vàng có thể vọt lên 55 triệu đồng/lượng, đầu tư vàng dài hạn ăn chắc lãi",
			desc: "Nhận định giá vàng có khả năng tăng lên mức 55 triệu đồng/lượng. Đã đầu tư phải bỏ tiền vào vàng ít nhất 6 tháng đến 1 năm thì giá vàng khó có thể xuống được.",
			date: "Ngày 29/06/2020 09:18 AM",
			link: "'#'",
			IsNew: false
		},
		{
			img: "images/jewelry/Hinh3.jpg",
		  	title: "Giá vàng hôm nay 25/6: Lao dốc sau phiên tăng sốc, nhà đầu tư hoảng loạn",
			desc: "Sáng nay giá vàng thế giới hạ nhiệt so với hôm nay nhưng vẫn duy trì ở đỉnh 7 năm.",
			date: "Ngày 29/06/2020 09:18 AM",
			link: "'#'",
			IsNew: false
		},
		{
			img: "images/jewelry/Hinh4.jpg",
		  	title: "Giá vàng hôm nay 16/6: Bất ngờ quay đầu tăng mạnh khi Trung Quốc lo sợ ổ dịch mới",
			desc: "Sau khi quay đầu giảm trong phiên giao dịch ngày hôm qua, sáng nay 16/6 giá vàng bật tăng trở lại.",
			date: "Ngày 29/06/2020 09:18 AM",
			link: "'#sec2'",
			IsNew: false
		}
	  ],
	  ListBanner:[
		{
			img: "images/jewelry/banner1.jpg",
			link: "#"
		},
		{
			img: "images/jewelry/banner1.jpg",
			link: "#sec1"
		},
		{
			img: "images/jewelry/banner1.jpg",
			link: "#sec2"
		}
	  ]
    };
  },
  computed: {
	NewsTop() {
      return this.ListNews.filter(function (p) {
        return p.IsNew;
      });
    },
	News() {
		let arr = [];
		this.ListNews.forEach((value, index) => {
			if(value.IsNew == false){
			  arr.push(value);
		  	}
		});
		return arr;
    }
  },
  mounted() {
    
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
@import '@/assets/css/index.css';
@import '@/assets/css/Style.css';
@import '@/assets/css/fontawesome-free-5.13.0-web/css/all.min.css';
</style>
