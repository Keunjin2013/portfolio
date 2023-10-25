<template>
  <div>
    <div class="top">
    </div>
    <div class=" myImgDiv">
      <v-img src="~@/assets/증명사진.jpeg" class="myImg" />
    </div>
  </div>
  <div class="aboutMe">
    <div class="title">
      <h1>한 걸음 더 나아가는 서비스 기획자</h1>
      <h3>조금 더 나은 서비스를 위해, 언제나 할 수 있다는 긍정적인 마인드로 공부하는 김은진 입니다.</h3>
    </div>

    <div class="menu">
      <router-link to="/" class="menu-title" @click="menu_click('about')" :class="{ active: activeMenuItem === 'about' }">About Me</router-link> |
      <router-link to="/portfolio1" class="menu-title" @click="menu_click('portfolio')" :class="{ active: activeMenuItem === 'portfolio' }">Portfolio</router-link>
    </div>

    <div class="Me">
      <h4 class="Me-title">About Me</h4>
      <hr>
      <div class="Me-content">
        <a>안녕하세요. 서비스 기획자를 꿈꾸는 김은진입니다.</a>
        <li>생년월일 : 2001.02.13 (만 22세)</li>
        <li>취미 : 노래듣기</li>
      </div>
    </div>

    <div class="contact">
      <h4 class="contact-title">Contact</h4>
      <hr>
      <div class="contact-content">
        <li>📞 010-3500-8988</li>
        <li>📧 dmswls8988@naver.com</li>
      </div>
    </div>

    <div class="school">
      <h4 class="school-title">학력</h4>
      <hr>
      <div class="school-content">
        <li>🏫 명지전문대학 정보통신공학과 </li>
        전공심화 재학중 (2023.03 - 현재)
        <li>🎓 명지전문대학 정보통신공학과</li>
        본과정 졸업 (2020.03 - 2023.02)
        <li>🎓 안양여자고등학교</li>
        졸업 (2017.03 - 2020.01)
      </div>
    </div>

    <div class="skill">
      <h2 class="skill-title">💪 SKILL</h2>
      <div class="skill-subTitle">
        ✏️ 능숙한 정도에 따라 <a class="high">상</a>/<a class="middle">중</a>/<a class="low">하</a> 로 구분하였습니다
      </div>
      <hr>
      <div class="skill-content">
        <div class="item1">
          <div class="item1-title">서비스 기획</div>
          <li class="high">와이어프레임 설계</li>
          <li class="low">화면설계서 제작</li>
          <li class="low">Business Model(9 blocks)</li>
          </div>
        <div class="item2">
          <div class="item2-title">툴</div>
          <li class="high">PowerPoint</li>
          <li class="high">Adobe XD</li>
          <li class="high">Kakao Oven</li>
          <li class="low">Photoshop</li>
        </div>
        <div class="item3">
          <div class="item1-title">협업 툴</div>
          <li class="middle">Notion</li>
        </div>
      </div>
    </div>

    <div class="certification">
      <h2 class="certification-title">🪪 자격증</h2>
      <hr>
      <div class="certification-content">
        <li><a>[2022.07]</a> 리눅스마스터 2급 - (사)한국정보통신진흥협회</li>
        <li><a>[2020.02]</a> 2종보통운전면허 - 경찰청(운전면허시험관리단)</li>
        <li><a>[2014.03]</a> 정보기술자격(ITQ) 한글엑셀(한셀) A등급 - 한국생산성본부</li>
        <li><a>[2014.01]</a> ICDL(International Computer Driving Licence) - 한국생산성본부</li>
        <li><a>[2013.12]</a> GTQ 1급 - 한국생산성본부</li>
        <li><a>[2013.12]</a> GTQ 2급 - 한국생산성본부</li>
        <li><a>[2013.09]</a> GTQ 3급 - 한국생산성본부</li>
        <li><a>[2013.01]</a> 정보기술자격(ITQ) 아래한글 A등급 - 한국생산성본부</li>
      </div>
    </div>

    <div class="activity">
      <h2 class="activity-title">🏃‍♀️ 활동</h2>
      <hr>
      <div class="activity-content">
        <li><a>[2021.10 - 2022.12]</a> 정보통신공학과 4차산업연구회 동아리 활동 - 기획담당, 교내외 공모전 및 대회 참가</li>
        <li><a>[2020.05 - 2021.12]</a> 명지전문대학 학보사 - 학보사 기자 및 편집장</li>
      </div>
    </div>

  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
      return {
        activeMenuItem: 'about',
      };
  },
  methods: {
    // movePage(path) {
    //   this.$router.push(path);
    // },
    menu_click(item) {
             this.activeMenuItem = item;
     }
  },

  name: 'HomeView',
});
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

.menu-title {
    color: #D9A384;
    text-decoration: none;
}

.menu-title.active {
    color: #593122;
}

.aboutMe {
  margin-left: 10%;
  margin-right: 10%;
}

.Me-title {
  border-left: 3px solid #000;
  padding: 1%;
  color: #CE9B25;
}

.Me-content {
  font-weight: bold;
  margin-bottom: 5%;
}

.contact-title {
  border-left: 3px solid #000;
  padding: 1%;
  color: #CE9B25;
}

.contact-content {
  font-weight: bold;
  margin-bottom: 5%;
}

.school-title {
  border-left: 3px solid #000;
  padding: 1%;
  color: #CE9B25;
}

.school-content {
  font-weight: bold;
  line-height: 2;
  margin-bottom: 5%;
}

.skill-subTitle {
  background-color: #F2F2F2;
  padding: 2%;
}

.high {
  color: #FF6347;
}

.middle {
  color: #3CB371;
}

.low {
  color: #4169E1;
}

a {
  font-weight: bold;
}

.skill-content {
  display: grid;
  grid-template-columns: 30% 30% 30%;
  grid-gap: 20px;
  margin-bottom: 5%;
  font-weight: bold;

}

.item1, .item2, .item3 {
  margin-top: 3%;
  line-height: 2;
}

.item1-title, .item2-title, .item3-title {
  font-weight: bold;
}

.certification {
  margin-bottom: 5%;
}

.activity {
  margin-bottom: 10%;
}
</style>