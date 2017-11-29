<template >
  <div class="phone-box">
    <div class="phone-header">
      <h3 class="title"><i class="fa fa-mobile  fa-lg fa-fw"  ></i>手机</h3>
    </div>
    <!-- 手机列表 -->
    <div class="phone-list">
      <ul class="list">
        <router-link to='/phoneInfo'>
          <li v-for="phone in phoneList" class="item" :key="phone">
            <div class="item-left">
              <img :src="phone.imgSrc" alt="" class="phone-image">
            </div>
            <div class="item-right">
              <h3 class="phonetitle">{{phone.title}}</h3>
              <p class="desc">{{phone.desc}}</p>
              <span class="price">¥ {{phone.price}} 起</span>
            </div>
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      phoneList: [
        {
          imgSrc: 'http://mshopimg2.meitudata.com/591011329cdb454882.jpg',
          title: '美图T8',
          desc: '个性定制',
          price: 2588
        },
        {
          imgSrc: 'http://mshopimg1.meitudata.com/5910126d54d1369100.jpg',
          title: '美图M8-白月光',
          desc: 'hello kitty 特别版',
          price: 2788
        },
        {
          imgSrc: 'http://mshopimg1.meitudata.com/58d3a217e67a582323.jpg',
          title: '美图T8-幻影黑 ',
          desc: 'Angelababy参与设计',
          price: 3599
        },
        {
          imgSrc: 'https://mtshop1.meitudata.com/59e88b8a66d6079466.jpg',
          title: '美图M6s',
          desc: '让你的自拍清晰又好看',
          price: 2399
        },
        {
          imgSrc: 'http://mshopimg1.meitudata.com/58d3a217e67a582323.jpg',
          title: '美图T8-幻影黑',
          desc: 'Angelababy参与设计',
          price: 3599
        },
      ]
    }
  }
}
</script>

<style lang="css">
.phone-list {
  background-color: #fff;
  padding-bottom: 10px;
}
.phone-list ul a :hover{
  box-shadow: 15px 1px 15px 1px #999;
  transition: all 0.6s;
}
.phone-list ul li :hover{
  box-shadow: 1px 1px 20px white;
}
.phone-header .title{
  font-size: 1.6rem;
  height: 4.6rem;
  line-height: 4.6rem;
  color: 	#515151;
  font-weight: normal;
  margin-left: -2px;
}
.phone-header .title:hover{
  color:gray;
}
.phone-list .list .item{
  width: 100%;
  height: 12rem;
  display: flex;

}
.item-left{
  width: 9.6rem;
  height: 9.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 26%;
}
.item-left:hover{
  background-color:#CDC9C9;
  border-radius: 60%;
  transition: all 0.8s;
}
.item-left img{
  display: block;
  width: 9rem;
  height: 9rem;
  border-radius: 50%;
}
.item-right {
  margin-left: 5rem;
  flex:1;
  width: 70%;
}
.item-right .phonetitle {
  line-height: 2;
  font-size: 1.5rem;
  color: #424242;
  font-weight: normal;
}
.item-right .desc {
  line-height: 2;
  color: #a2a0a3;
  font-size: 1.2rem;
}
.item-right .price {
  line-height: 2;
  color: #f55669;
  font-weight: bold;
  font-size: 1.4rem;
}
</style>
