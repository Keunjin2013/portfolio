<template>
  <div>
      <div class="top">
      </div>
      <div class=" myImgDiv">
          <v-img class="myImg" src="~@/assets/증명사진.jpeg" />
      </div>
  </div>
  <div class="aboutMe">
      <div class="title">
          <h1>한 걸음 더 나아가는 서비스 기획자</h1>
          <h3>조금 더 나은 서비스를 위해, 언제나 할 수 있다는 긍정적인 마인드로</h3>
      </div>

      <div class="menu">
        <router-link to="/" class="menu-title" @click="menu_click('about')" :class="{ active: activeMenuItem === 'about' }">About Me</router-link> |
        <router-link to="/portfolio1" class="menu-title" @click="menu_click('portfolio')" :class="{ active: activeMenuItem === 'portfolio' }">Portfolio</router-link>
      </div>

      <div class="portfolio">
        <h2 class="portfolio-title">📂 포트폴리오</h2>
        <hr>
        <div class="portfolio-content">

          <div class="item" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="500" data-aos-offset="0">
            <div class="portfolio-detail" @click="showDialog1(project1)">
              <v-img class="portfolioImg" src="~@/assets/학원관리시스템.png" />
              <h2>학원관리시스템</h2>
              <a class="tag"># 팀프로젝트</a>
              <a class="tag"># 기획</a>
              <div class="project">
                <div>프로젝트 기간 : 2023.06.26 - 진행중</div>
                <div>참여인원 : 김은진 외 6명</div>
              </div>
            </div>
          </div>

          <div class="item" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="500" data-aos-offset="0">
            <div class="portfolio-detail" @click="showDialog2()">
              <v-img class="portfolioImg" src="~@/assets/MyDrawer.jpeg"/>
              <h2>My Drawer</h2>
              <a class="tag"># 개인프로젝트</a>
              <a class="tag"># 기획</a>
              <a class="tag"># 개발</a>
              <div class="project">
                <div>프로젝트 기간 : 2023.03.02 - 2023.06.08</div>
                <div>참여인원 : 김은진</div>
              </div>
            </div>
          </div>

          <div class="item" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="500" data-aos-offset="0">
            <div class="portfolio-detail" @click="showDialog3()">
              <v-img class="portfolioImg" src="~@/assets/드로잉머신.jpeg" />
              <h2>Drawing Machine 교육</h2>
              <a class="tag"># 팀프로젝트</a>
              <a class="tag"># 기획</a>
              <a class="tag"># 개발</a>
              <div class="project">
                <div>프로젝트 기간 : 2022.08.22 - 2022.08.25</div>
                <div>참여인원 : 김은진</div>
                <div>특이사항 : 최우수상 수상</div>
              </div>
            </div>
          </div>

          <div class="item" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="500" data-aos-offset="0">
            <div class="portfolio-detail" @click="showDialog4()">
              <v-img class="portfolioImg" src="~@/assets/스마트팩토리.png" />
              <h2>스마트 팩토리 </h2>
              <a class="tag"># 팀프로젝트</a>
              <a class="tag"># 기획</a>
              <a class="tag"># 개발</a>
              <div class="project">
                <div>프로젝트 기간 : 2022.04.12 - 2022.11.30</div>
                <div>참여인원 : 김은진</div>
                <div>특이사항 : 한이음</div>
              </div>  
            </div>
          </div>

          <div class="item" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="500" data-aos-offset="0">
            <div class="portfolio-detail" @click="showDialog5()">
              <v-img class="portfolioImg" src="~@/assets/사당동.png" />
              <h2>사당동 머물고 싶은 거리 디지털 트랜스포메이션</h2>
              <a class="tag"># 팀프로젝트</a>
              <a class="tag"># 기획</a>
              <div class="project">
                <div>프로젝트 기간 : 2021.09.06 - 2021.10.22</div>
                <div>참여인원 : 김은진 외 6명</div>
                <div>특이사항 : 장려상 수상</div>
              </div>
            </div>
          </div>


          <div class="item" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="500" data-aos-offset="0">
            <div class="portfolio-detail" @click="showDialog6()">
              <v-img class="portfolioImg" src="~@/assets/김장프로그램.png" />
              <h2>지역 특색 김치를 체험하는 김장 프로그램</h2>
              <a class="tag"># 팀프로젝트</a>
              <a class="tag"># 기획</a>
              <div class="project">
                <div>프로젝트 기간 : 2021.03.01 - 2021.06.21</div>
                <div>참여인원 : 김은진 외 6명</div>
              </div>
            </div>
          </div>

          <div class="item" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="500" data-aos-offset="0">
            <div class="portfolio-detail" @click="showDialog7()">
              <v-img class="portfolioImg" src="~@/assets/떠나요한국으로.jpeg" />
              <h2>떠나요 한국으로</h2>
              <a class="tag"># 팀프로젝트</a>
              <a class="tag"># 기획</a>
              <a class="tag"># 디자인</a>
              <div class="project">
                <div>프로젝트 기간 : 2021.09.06 - 2021.10.22</div>
                <div>참여인원 : 김은진 외 6명</div>
              </div>
            </div>
          </div>

          <div class="item" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="500" data-aos-offset="0">
            <div class="portfolio-detail" @click="showDialog8()">
              <v-img class="portfolioImg" src="~@/assets/학보볼래.jpeg" />
              <h2>명전대학보 학보볼래?</h2>
              <a class="tag"># 개인프로젝트</a>
              <a class="tag"># 기획</a>
              <a class="tag"># 디자인</a>
              <div class="project">
                <div>프로젝트 기간 : 2023.03.02 - 2023.06.08</div>
                <div>참여인원 : 김은진</div>
              </div>
            </div>
          </div>

          <!-- 모달창 -->
          <!-- 학원관리시스템 -->
          <v-dialog v-model="project1" class="dialog">
            <v-card class="item-dialog" :variant="outlined">
              <v-card-title>
                <h2 class="project-title">학원관리시스템</h2>
              </v-card-title>
              <v-card-text>
                <!-- 프로젝트 URL -->
                <v-row>
                  <v-col cols="3">
                    <div>
                      <a class="url"><i class="fa-solid fa-link"> URL</i></a>
                    </div>
                  </v-col>
                  <v-col cols="8">
                    <div class="project">
                      <a href="https://github.com/AcaTechProject" class="href">https://github.com/AcaTechProject</a>
                    </div>
                  </v-col>
                </v-row>
                <!-- 프로젝트 형식 -->
                <v-row>
                  <v-col cols="3">
                    <div>
                      <a><i class="fa-solid fa-file"> 프로젝트형식</i></a>
                    </div>
                  </v-col>
                  <v-col cols="8">
                    <div class="project">
                        <a class="projectTag">웹 프로젝트</a>
                    </div>
                  </v-col>
                </v-row>
                <hr>
                <!-- 프로젝트 내용 -->
                <div class="project-detail">
                  <v-img class="projectDetail" src="~@/assets/학원관리시스템.png" />
                  <hr>
                  <div class="projectDetailContent">
                    👉 학원관리시스템은 어쩌구 저ㄱ쩌구
                  </div>
                  <div class="projectDetailRole">
                    <h3>나의 역할</h3>
                    <li>내가 무엇을 했는지 자세히 써보도록 하여라.</li>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-dialog>


          <!-- My Drawer -->
          <v-dialog v-model="project2" class="dialog">
            <v-card class="item-dialog" :variant="outlined">
              <v-card-title>
                <h2 class="project-title">My Drawer</h2>
              </v-card-title>
              <v-card-text>
                <!-- 프로젝트 URL -->
                <!-- <v-row>
                  <v-col cols="3">
                    <div>
                      <a class="url"><i class="fa-solid fa-link"> URL</i></a>
                    </div>
                  </v-col>
                  <v-col cols="8">
                    <div class="project">
                      <a href="" class="href">https://github.com/AcaTechProject</a>
                    </div>
                  </v-col>
                </v-row> -->
                <!-- 프로젝트 형식 -->
                <v-row>
                  <v-col cols="3">
                    <div>
                      <a><i class="fa-solid fa-file"> 프로젝트형식</i></a>
                    </div>
                  </v-col>
                  <v-col cols="8">
                    <div class="project">
                        <a class="projectTag">웹 프로젝트</a>
                    </div>
                  </v-col>
                </v-row>
                <hr>
                <!-- 프로젝트 내용 -->
                <div class="project-detail">
                  <v-img class="projectDetail" src="~@/assets/MyDrawer.jpeg" />
                  <hr>
                  <div class="projectDetailContent">
                    👉 학원관리시스템은 어쩌구 저ㄱ쩌구
                  </div>
                  <div class="projectDetailRole">
                    <h3>나의 역할</h3>
                    <li>내가 무엇을 했는지 자세히 써보도록 하여라.</li>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-dialog>



        </div>
      </div>

  </div>
</template>

<script>
import aos from "aos";

export default {

data() {
    return {
      activeMenuItem: 'portfolio',
      project1: false,
      project2: false,
      project3: false,
      project4: false,
      project5: false,
      project6: false,
      project7: false,
      project8: false,
    };
},
mounted() {
  aos.init();
},

methods: {
  movePage(path) {
    this.$router.push(path);
  },
  menu_click(item) {
           this.activeMenuItem = item;
   },
  showDialog1() {
    this.project1 = true
  },
  showDialog2() {
    this.project2 = true
  },
  showDialog3() {
    this.project3 = true
  },
  showDialog4() {
    this.project4 = true
  },
  showDialog5() {
    this.project5 = true
  },
  showDialog6() {
    this.project6 = true
  },
  showDialog7() {
    this.project7 = true
  },
  showDialog8() {
    this.project8 = true
  },
},
}
</script>

<style>

hr {
margin-top: 10px;
margin-bottom: 10px;
}

.top {
width: 100%;
height: 300px;
background-color: #FFF0D6;
}

.menu {
margin-bottom: 5%;
font-size: 1.5rem;
}

.menu-title {
  color: #D9A384;
  text-decoration: none;
}

.menu-title.active {
  color: #593122;
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

.title {
margin-bottom: 5%;
}

.portfolio-content {
  display: grid;
  grid-template-columns: 30% 30% 30%;
  grid-gap: 30px;
  text-align: center;
  justify-content: center;
  margin-bottom: 5%;
}

.item {
  border-radius: 10px;
  background-position: center center;
  background-size: cover;
  margin-top: 5%;
  margin-bottom: 5%;
  border-bottom: 5px solid #D9A384;
  border-top: 5px solid #D9A384;
}

.portfolioImg {
width: 100%;
height: 100%;
}

.portfolio-detail {
line-height: 2;
}

.tag {
color: 	#593122;
background-color: #FFF0D6;
border-radius: 10px;
padding: 0.3%;
margin-right: 2%;
margin-top: 1%;
margin-bottom: 1%;
}

.dialog {
width: 70%;
height: 90%;
}

.item-dialog {
padding: 10%;
}

.projectDetail {
justify-items: center;
}

.project-title {
color: #D9A384;
}

i {
color: #D9A384;
}

.href {
text-decoration: none;
color: #000;
}

.projectDetailContent {
background-color: #F2F2F2;
padding: 2%;
margin-bottom: 2%;
}
</style>