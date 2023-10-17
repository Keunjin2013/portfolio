<template>
  <div>
    <div class="top">
    </div>
    <div class=" myImgDiv">
        <img class="myImg" src="@/assets/증명사진.jpeg" />
    </div>
  </div>
  <div id="aboutMe">
    <div class="title">
      <h2>한 걸음 더 나아가는 서비스 기획자</h2>
      <h4></h4>
    </div>
    
  </div>
</template>

<script>
import { defineComponent } from 'vue';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import aos from "aos";


// Components
//import HelloWorld from '../components/HelloWorld.vue';

export default defineComponent({

  components: {
    Swiper,
    SwiperSlide,
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

  mounted() {
    aos.init();
  },

  methods: {
    movePage(path) {
      this.$router.push(path);
    }
  },

  name: 'HomeView',
});
</script>

<style>
.top {
  width: 100%;
  height: 300px;
  background-color: #FFF0D6;
}

.myImgDiv {
  text-align: left;
  margin-left: 10%;
  margin-top: -150px;
}

.myImg {
  width: 200px;
  height: 250px;
}

</style>
