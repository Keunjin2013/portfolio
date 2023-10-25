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
                <div>참여인원 : 김은진 외 2명</div>
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
                <div>참여인원 : 김은진 외 2명</div>
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
                  <div class="projectDetailRole">
                    <h3>👉 나의 역할</h3>
                    <h4>[기획 담당]</h4>
                    <li>프로젝트 요구사항 분석</li>
                    <li>와이어프레임 설계</li>
                    <li>화면설계서 작성</li>
                  </div>
                  <hr>
                  <div class="projectDetailContent">
                    <h3>👉 프로젝트 설명</h3>
                    <li>프로젝트 제안 당시 학원 강사 아르바이트를 하던 해당 프로젝트 팀원이 당시 학원에서의 업무 프로세스에서 느꼈던 불편함에 대해 이를 개선하고, 소형학원 중심의 편리한 체계 구축을 제공하는 학원 관리시스템을 개발, 실제 해당 학원에 제공해 보고자 하였음</li>
                    <hr>
                    <h3>👉 핵심 내용</h3>
                    <h4>1. 원생관리</h4>
                    <div>- 모든 학원이 공통으로 필요로 하는 필수적인 원생 출결 관리, 학생 정보 관리, 학생 성적 관리, 상담관리 등의 기능을 원생관리 메뉴에서 관리</div>
                    <div>- 원생 출결 관리의 경우 각 담당 선생님의 과목이 뜨고 각 반의 학생들 리스트가 출력됨. 각 학생별로 출결 정보를 체크형식으로 저장</div>
                    <div>- 출결관리에서 출석 관련 메시지를 보낼 수 있도록 기능 구현</div>
                    <div>- 원생 전화번호와 학부모 전화번호, 가족관계, 출석 정보, 수강과목 및 분반, 기타 특이사항의 정보를 저장할 수 있음</div>
                    <div>- 성적 관리를 통한 그래프 기능</div>
                    <h4>2. 일정관리</h4>
                    <div>- 일정관리 메인 페이지에 달력과 이번달 학원 일정, 오늘의 학원 일정, 오늘의 상담 일정의 내용을 볼 수 있음</div>
                    <div>- 일정을 클릭 시 세부 내용 출력</div>
                    <div>- 등록 페이지에 달력에서 날짜를 선택 후 일정 제목과 세부 내용을 입력할 수 있음</div>
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
                  <div class="projectDetailRole">
                    <h3>👉 나의 역할</h3>
                    <h4>[기획 담당]</h4>
                    <li>와이어프레임 설계</li>
                    <li>주요 기능 정의 및 분석</li>
                    <li></li>
                    <h4>[개발 담당]</h4>
                    <li>Vue.js</li>
                    <li>Node.js</li>
                  </div>
                  <div class="projectDetailContent">
                    <h3>👉 프로젝트 설명</h3>
                    <li>해해당 프로젝트는 새로 출시되는 웹, 앱에 대한 정보와 IT 뉴스, IT 컨텐츠를 볼 수 있는 서비스를 제공하는 웹 페이지임. 기존에 직접 사용하던 타 사이트 스크랩 기능을 사용하던 중 내가 어떤 상황에서 무엇을 참고하고 싶었는지 함께 메모를 남길 수 있는 기능이 있었으면 좋겠다고 생각하여 해당 사이트에 적용시킴.</li>
                    <hr>
                    <h3>👉 핵심 내용</h3>
                    <h4>1. New 서비스</h4>
                    <div>- 새로운 웹, 앱 서비스에 대해 글을 작성</div>
                    <div>- 게시글의 공유 및 스크랩 가능</div>
                    <div>- 댓글 기능을 통한 소통</div>
                    <h4>2. IT 뉴스</h4>
                    <div>- IT 뉴스를 한 곳에서 모아볼 수 있는 페이지</div>
                    <div>- 게시글 스크랩 가능</div>
                    <h4>3. IT 이야기</h4>
                    <div>- IT 관련 정보 (개발, 기획, 디자인 등)를 블로그 형식으로 작성할 수 있음</div>
                    <div>- 게시글의 공유 및 스크랩 가능</div>
                    <div>- 댓글 기능을 통한 소통</div>
                    <h4>4. My Page</h4>
                    <div>- 스크랩한 글을 폴더별 정리</div>
                    <div>- 총 컨텐츠 확인 가능</div>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-dialog>
          

          <!-- Drawing Machine 교육 -->
          <v-dialog v-model="project3" class="dialog">
            <v-card class="item-dialog" :variant="outlined">
              <v-card-title>
                <h2 class="project-title">Drawing Machine Camp 미래신산업 수요특화형 교육</h2>
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
                      <a href="https://youtu.be/KCsdMYI5dfw?feature=shared" class="href">프로젝트 공식 영상(퓨너스) https://youtu.be/KCsdMYI5dfw?feature=shared</a>
                    </div>
                    <div class="project">
                      <a href="https://youtu.be/XfGwRTF8uQA?feature=shared" class="href">프로젝트 발표 영상 https://youtu.be/XfGwRTF8uQA?feature=shared</a>
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
                        <a class="projectTag">임베디드 프로젝트, 캡스톤 프로젝트, 대외활동</a>
                    </div>
                  </v-col>
                </v-row>
                <hr>
                <!-- 프로젝트 내용 -->
                <div class="project-detail">
                  <v-img class="projectDetail" src="~@/assets/드로잉머신.jpeg" />
                  <hr>
                  <div class="projectDetailRole">
                    <h3>👉 나의 역할</h3>
                    <h4>[기획 담당]</h4>
                    <li>레고를 통한 Drawing Machine 구상</li>
                    <li>작품 컨셉을 위한 아이디어 구상</li>
                    <li>레고 조립</li>
                    <li>발표</li>
                    <h4>[개발 담당]</h4>
                    <li>스크래치 기반의 드래그 앤 드롭 코딩</li>
                  </div>
                  <hr>
                  <div class="projectDetailContent">
                    <h3>👉 프로젝트 설명</h3>
                    <li>동양미래대학교가 추진하고 레고 에듀케이션 공식 파트너사인 퓨너스와 함께한 프로젝트로, 레고를 이용해 드로잉 머신을 만들고 컨셉과 작품 만드는 과정을 발표하는 시간을 가진 5일간의 프로젝트임. 해당 교육에서 최우수상을 수상함</li>
                    <hr>
                    <h3>👉 핵심 내용</h3>
                    <h4>1. 전통의 미</h4>
                    <div>- 한국이 세계에 많이 알려지게 되며, 한국의 고유한 전통무늬 또한 많은 관심이 생겨남을 알게됨</div>
                    <div>- 한국의 색 오방색에는 황,청,백,적,흑 다섯가지의 색이 있는데, 이 색들은 단순한 색 뿐만 아니라 그 속에 포함된 의미가 있음으로 황,청,적색을 사용해 고귀한, 창조, 열정 및 적극성을 표현하고자 했음</div>
                    <div>- 모터를 통해 그림판을 360도로 회전시키며, 컬러센서와 또 다른 모터를 통해 그림판과 펜의 거리를 제어시킴</div>
                    <div>- 레고 블록들을 통해 거리를 제어함. 파란색은 원점으로, 노란색은 모터를 0.15cm이동, 초록색은 모터를 0.3cm 회전시킴</div>
                    <br>
                    해당 프로젝트에 대한 영상은 위의 링크에서 확인할 수 있음
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-dialog>

          <!-- 스마트 팩토리 -->
          <v-dialog v-model="project4" class="dialog">
            <v-card class="item-dialog" :variant="outlined">
              <v-card-title>
                <h2 class="project-title">스마트 팩토리</h2>
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
                      <a href="https://youtu.be/nBbMRLAxkr4" class="href">https://youtu.be/nBbMRLAxkr4</a>
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
                        <a class="projectTag">웹 프로젝트, 임베디드 프로젝트, 대외활동</a>
                    </div>
                  </v-col>
                </v-row>
                <hr>
                <!-- 프로젝트 내용 -->
                <div class="project-detail">
                  <v-img class="projectDetail" src="~@/assets/스마트팩토리.png" />
                  <hr>
                  <div class="projectDetailRole">
                    <h3>👉 나의 역할</h3>
                    <h4>[기획 담당]</h4>
                    <li>주요 기능 분석 및 정의</li>
                    <h4>[개발 담당]</h4>
                    <li>HTML, CSS, JavaScript를 통한 퍼블리싱</li>
                    <li>Django를 통해 화면 버튼 클릭 시 로봇팔이 움직일 수 있도록 코드 작성</li>
                    <li>로봇팔 제어를 위한 코드 작성</li>
                    <li>라인트레이서를 위한 Arduino 코드 작성</li>
                  </div>
                  <hr>
                  <div class="projectDetailContent">
                    <h3>👉 프로젝트 설명</h3>
                    <li>라인트레이서를 통한 자율 주행이 가능한 로봇팔을 통해 사용자의 안전한 근로 환경을 제공해주며, 산업 제조용 로봇보다는 비교적 적은 비용으로 기존 공장의 스마트화 추진이 가능해 업무의 효율성 증대를 기대해보고자 아이디어를 제안함. 또한 손동작 입력 장감을 통해 로봇팔 제어 가능</li>
                    <hr>
                    <h3>👉 핵심 내용</h3>
                    <h4>1. 제어기능</h4>
                    <li>- 손동작 입력 장갑을 통한 로봇팔 제어 및 물건 운반</li>
                    <h4>2. 자율주행 기능</h4>
                    <div>- 라인트레이서를 통한 자율주행</div>
                    <div>- 자율주행 중 감지센서를 통해 장애물 감지 및 정지</div>
                    <h4>3. 물건 운반 기능</h4>
                    <div>- 로봇팔을 이용한 물건 운반 기능</div>
                    <br>
                    해당 전체 기능은 링크를 통한 영상에서 볼 수 있음
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-dialog>

          <!-- 사당동 머물고 싶은 거리 디지털 트랜스포메이션 -->
          <v-dialog v-model="project5" class="dialog">
            <v-card class="item-dialog" :variant="outlined">
              <v-card-title>
                <h2 class="project-title">사당동 머물고 싶은 거리 디지털 트랜스포메이션</h2>
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
                      <a href="https://blog.naver.com/djlink/222569628612" class="href">https://blog.naver.com/djlink/222569628612</a>
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
                        <a class="projectTag">캡스톤 프로젝트</a>
                    </div>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="3">
                    <div>
                      <a><i class="fa-solid fa-file"> 특이사항</i></a>
                    </div>
                  </v-col>
                  <v-col cols="8">
                    <div class="project">
                        <a class="projectTag">동작LINK상권 아이디어경진대회 장려상 수상</a>
                    </div>
                  </v-col>
                </v-row>
                <hr>
                <!-- 프로젝트 내용 -->
                <div class="project-detail">
                  <v-img class="projectDetail" src="~@/assets/사당동.png" />
                  <hr>
                  <div class="projectDetailRole">
                    <h3>👉 나의 역할</h3>
                    <h4>[기획 담당]</h4>
                    <li>문제점 발굴</li>
                    <li>핵심 고객 분석 및 가치 제안</li>
                    <li>수익원 분석</li>
                    <li>차별화 전략 구성</li>
                    <li>주요 기능 분석 및 정의</li>
                    <li>발표</li>
                  </div>
                  <hr>
                  <div class="projectDetailContent">
                    <h3>👉 프로젝트 설명</h3>
                    <li>동작Link상권 아이디어경진대회에 참가하게 되어 시작된 아이디어로 남성사계시장, 이수미로, 머물고 싶은 거리, 사당1동 먹자골목 등 총 4개의 상권 활성화를 위한 아이디어를 내는 것이 주제였음. 직접 현장 답사를 통해 머물고 싶은 거리에 대한 문제점 발굴 후 상권 활성화 이이디어를 제안함</li>
                    <hr>
                    <h3>👉 핵심 내용</h3>
                    <h4>문제점</h4>
                    <li>시장 조사를 통해 머물고 싶은 거리는 큰 길의 안쪽에 위치해 있어 좋은 공방들이 형성되어 있다는 사실을 인지하기가 어려웠으며, 공방들의 위치를 찾는 것이 어려웠고, 머물고 싶은 거리에 대한 정보와 홍보가 부족함을 인지하였음</li>
                    <li>또한 사당1동 공방 연합회 김진민 회장님과의 인터뷰를 통해 코로나로 인한 오프라인 고객 수요가 감소하였다는 사실과 공방 운영자와 고객들이 온라인 클래스를 희망할 때 사용할 수 있는 공공 대여시설이 필요하다는 사실을 알게 됨</li>
                    <br>
                    해당 문제에 대한 해결방법으로 다음과 같이 제안하였음
                    <h4>[ 알릴거리 ]</h4>
                    <div>- 머물고 싶은 거리 초입에 이정표 설치</div>
                    <div>- 머물고 싶은 거리만의 앱을 통해 온라인 이정표 제공</div>
                    <div>- 거리 초입의 이정표에 머물고 싶은 거리 정보가 담긴 QR코드를 함께 제공</div>
                    <div>- 온, 오프라인으로 길 안내 서비스 제공</div>
                    <h4>[ 볼거리 ]</h4>
                    <div>- 머물고 싶은 거리 내부 혹은 인근에 스튜디오 개설 </div>
                    <div>- 스튜디오를 통해 온라인 강좌 준비를 위한 촬영장비 및 장소 제공</div>
                    <div>- 머물고 싶은 거리만의 앱을 통해 장소 및 촬영장비 대여 예약 서비스 운영</div>
                    <h4>[ 놀거리 ]</h4>
                    <div>- 머물고 싶은 거리의 공방 고객들을 대상으로 이벤트 진행</div>
                    <div>- 고객이 머물고 싶은 거리만의 앱을 통해 공방 2곳 이상 이용을 인증시 혜택 제공</div>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-dialog>

          <!-- 지역 특색 김치를 체험하는 김장 프로그램 -->
          <v-dialog v-model="project6" class="dialog">
            <v-card class="item-dialog" :variant="outlined">
              <v-card-title>
                <h2 class="project-title">지역 특색 김치를 체험하는 김장 프로그램</h2>
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
                      <a href="https://github.com/AcaTechProject" class="href">https://github.com/AcaTechProject</a>
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
                        <a class="projectTag">캡스톤 프로젝트</a>
                    </div>
                  </v-col>
                </v-row>
                <hr>
                <!-- 프로젝트 내용 -->
                <div class="project-detail">
                  <v-img class="projectDetail" src="~@/assets/김장프로그램.png" />
                  <hr>
                  <div class="projectDetailRole">
                    <h3>👉 나의 역할</h3>
                    <h4>[기획 담당]</h4>
                    <li>문제점 발굴</li>
                    <li>핵심 고객 분석 및 가치 제안</li>
                    <li>수익원 분석</li>
                    <li>차별화 전략 구성</li>
                    <li>사업계획서 작성</li>
                    <li>주요 기능 분석 및 정의</li>
                  </div>
                  <hr>
                  <div class="projectDetailContent">
                    <h3>👉 프로젝트 설명</h3>
                    <li>중국산 김치 유입 증가로 인해 시중 김치에 대한 불안감 확대, 지역 특색 김치를 체험할 수 있는 기회 부족, 장독을 이용한 김장 체험 프로그램 부재, 아이들에게 잊혀져 가는 김장 문화와 같은 문제점을 해결하기 위한 아동이 있는 가정과 지역 특색 김치를 체험해보고 싶어하는 사람들을 위한 믿고 먹을 수 있는 전통 김장 프로그램</li>
                    <hr>
                    <h3>👉 핵심 내용</h3>
                    <h4>김치 체험 프로그램</h4>
                    <li>현지에서 직접 재배한 손질된 김장 채소로 고객들이 직접 김치를 담그는 체험으로, 체험이 끝난 후 직접 담근 김치와 함께 제공된 수육을 먹는 시간을 가지는 프로그램</li>
                    <h4>김장 프로그램</h4>
                    <li>현지에서 직접 재배한 손질된 김장 채소로 고객들이 직접 김장하는 프로그램으로, 고객이 직접 담은 김장 김치를 독에 보관하고 원할 때 배송 받아 먹을 수 있는 프로그램</li>
                    <br>
                    이 프로그램의 핵심고객으로는 이용자 측면과 제공자 측면으로 나누었다.
                    <h4>[ 이용자 측면 ]</h4>
                    <a>1. 아동이 있는 가정</a>
                    <div>- 7~10세 아동이 있는 가정</div>
                    <div>- 1주일에 3~4번 이상 저녁 식사를 하는 가정</div>
                    <div>- 가격이 비싸도 건강에 좋은 원료, 안전성이 확보된 제품을 선호하는 가정</div>
                    <div>- 김장을 체험해보고 싶은 고객</div>
                    <a>2. 중장년층 (주부)</a>
                    <div> - 각종 모임(EX : 계모임, 부부 동반 모임, 동창회 등)의 여행 코스 중 하나 </div>
                    <div>- 김장독에 숙성된 김치를 원하는 고객</div>
                    <div>- 김장에 대한 부담을 느끼는 고객</div>
                    <div>- 김장 김치 장기간 보관에 부담을 느끼는 고객</div>
                    <div>- 지역 특색 김치를 원하는 고객</div>
                    <br>
                    <h4>[ 제공자 측면 ]</h4>
                    <a>1.농업 종사자</a>
                    <div>- 관광객 유입으로 인한 지역 활성화(EX : 임실 치즈 마을, 순창 고추장 마을)</div>

                    <a>2. 정부 (공공기관)</a>
                    <div>- 관광객 유입으로 인한 지역 활성화</div>
                    <br>
                    다음과 같은 고객들에게 믿고 먹을 수 있는 신선한 프리미엄 김치를 제공하고, 김장 체험을 통한 교육적 효과를 기대, 장독에서 숙성되는 맞츰형 김치, 관광객 유잉ㅂ으로 인한 지역 발전 기대, 농촌 경제 활성화, 관광 목적 등의 가치를 제안할 수 있음.
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-dialog>

          <!-- 떠나요 한국으로 -->
          <v-dialog v-model="project7" class="dialog">
            <v-card class="item-dialog" :variant="outlined">
              <v-card-title>
                <h2 class="project-title">떠나요 한국으로</h2>
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
                  <v-img class="projectDetail" src="~@/assets/떠나요한국으로.jpeg" />
                  <hr>
                  <div class="projectDetailRole">
                    <h3>👉 나의 역할</h3>
                    <h4>[기획 담당]</h4>
                    <li>와이어프레임 설계</li>
                    <li>디자인</li>
                    <li>주요 기능 분석 및 정의</li>
                  </div>
                  <hr>
                  <div class="projectDetailContent">
                    <h3>👉 프로젝트 설명</h3>
                    <li>해당 프로젝트는 우리나라를 찾는 외국인 등 우리나라 여행을 떠나고자 하는 모든 사람들에게 각 지역별 여행지를 코별로 추천해주고, 우리나라의 문화에 대해 알 수 있는 워드프레스를 활용한 웹 페이지임</li>
                    <hr>
                    <h3>👉 핵심 내용</h3>
                    <li>우리나라 소개 : 우리나라 상징과 전통, 특산물 등에 대한 정보를 담은 페이지</li>
                    <li>관광정보 : 지역투어, 전통투어, 맛집투어, 이색투어 등의 카테고리를 선택하여 각 지역별 카테고리에 맞는 여행 코스를 볼 수 있는 페이지</li>
                    <li>이벤트 : 떠나요 한국에서 진행하는 이벤트들에 대해 볼 수 있는 페이지</li>
                    <li>여행Talk : 떠나요 한국으로의 여행코스대로 여행을 다녀온 후기를 볼 수 있는 페이지</li>
                    <li>고객의 소리 : 떠나요 한국으로와 고객들이 소통할 수 있는 페이지</li>
                    <li>로그인 및 회원가입</li>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-dialog>

          <!-- 명전대학보 학보볼래? -->
          <v-dialog v-model="project8" class="dialog">
            <v-card class="item-dialog" :variant="outlined">
              <v-card-title>
                <h2 class="project-title">명전대학보 학보볼래?</h2>
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
                      <a href="https://github.com/AcaTechProject" class="href">https://github.com/AcaTechProject</a>
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
                  <v-img class="projectDetail" src="~@/assets/학보볼래.jpeg" />
                  <hr>
                  <div class="projectDetailRole">
                    <h3>👉 나의 역할</h3>
                    <h4>[기획 담당]</h4>
                    <li>문제점 발굴</li>
                    <li>와이어프레임 설계</li>
                    <li>디자인</li>
                    <li>주요 기능 분석 및 정의</li>
                  </div>
                  <hr>
                  <div class="projectDetailContent">
                    <h3>👉 프로젝트 설명</h3>
                    <li>해당 프로젝트는 명지전문대학 학보사 편집장으로 활동하던 시기, 학교에 학보를 볼 수 있는 사이트가 제대로 운영되지 않고 활용되지 않았던 문제를 해결해보고자 하는 마음으로 구성된 워드프레스를 활용한 웹 페이지임.</li>
                    <hr>
                    <h3>👉 핵심 내용</h3>
                    <li>총 7개의 페이지로 이동되어 있음.</li>
                    <li>메인 페이지 :  명전대학보 1면에 실리는 문화예술 부분과 최신 공지사항을 볼 수 있는  페이지임.</li>
                    <li>명전대학보는? : 명전대학보에 대한 설명과 학보사 조직도, 학보 구성을 볼 수 있음</li>
                    <li>취재 현황 : 학교에 대한 소식과 기자들의 취재 현황을 볼 수 있는 페이지임</li>
                    <li>명전대학보 모두 보기 : 그동안 발행되었던 학보들을 모아볼 수 있는 페이지로, 학보를 PDF 파일로 다운 받는것도 가능</li>
                    <li>기자칼럼&문화탐방 : 1년에 두 번 기자들이 직접 문화탐방을 떠나 유적지들을 방문하며 보고 느낀점을 쓰는 기사와 국내 이슈를 다룬 기자칼럼 기사들을 모아볼 수 있는 페이지임</li>
                    <li>Q&A : 학보사 기자들과 소통할 수 있는 페이지임</li>
                    <li>로그인 : 학교의 로그인 시스템과 연결될 수 있도록 기획</li>
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

.projectDetailRole {
background-color: #F2F2F2;
padding: 2%;
margin-bottom: 2%;
}
</style>