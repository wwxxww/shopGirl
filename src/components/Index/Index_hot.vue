<template lang="html">
  <div class="hot-container">
    <div class="hot-header">
      <h3 class="title"><i class="fa fa-heart-o   fa-fw"  ></i>热门推荐</h3>
    </div>
    <swiper :options="swiperOption1" ref="mySwiper" class="swiper-container1">
      <swiper-slide>
        <img src="http://mshopimg1.meitudata.com/577b6c126884c98714.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="http://mshopimg2.meitudata.com/584545674579f47971.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="http://mshopimg4.meitudata.com/57ba9c0ec94f532807.jpg" alt="">
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  data () {
    return {
      swiperOption1: {
        slidesPerView: 'auto',
  	    spaceBetween: 30,
      }
    }
  }
}
</script>

<style lang="css" scoped>
.hot-container {
  width: 100%;
}
.hot-header .title{
  font-size: 1.6rem;
  height: 4.6rem;
  line-height: 4.6rem;
  color: 	#EE1289;
  margin-top: 2px;
  margin-left: 0px;
  font-weight: normal;
}
.hot-header .title:hover{
  color: gray;
}
 .swiper-slide{
  height: 12rem;
  width: 50% !important;
  text-align: left;
  display: block;
}
.swiper-container1 .swiper-slide img{
  width: 100%;
  display: inline-block;
  height: 100%;
  padding-left: -20px;
}
</style>