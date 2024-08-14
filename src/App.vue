<template>
    <div id="wrap">
        <IncHeader 
        :nav1="navItems" :activeIndex="activeIndex" @scrollToSection="scrollToSection"  @headerHeightChanged="setHeaderHeight" />
        <!-- main -->
        <main id="main">
            <!-- visual -->
            <section ref="sections" class="visual section">
                <div class="inner flex flex_center flex_column flex_a_center">
                    <h2 class="section_title text_center" data-aos="fade-up" data-aos-duration="500">
                        <strong data-aos="fade-up" data-aos-duration="1000" class="text_bold">Web Publisher</strong>
                        <strong data-aos="fade-up" data-aos-duration="2000" class="text_bold">Gayeong Kim.</strong>
                    </h2>
                    <span class="scroll">
                        <i aria-label="밑으로 스크롤하기"></i>
                    </span>
                </div>
            </section>
            <!-- profile -->
            <section ref="sections" class="profile section_list_type section">
                <div class="inner flex">
                    <div class="section_title_wrap">
                        <h2 class="section_title" data-aos="fade-up" data-aos-duration="1000">
                            <strong class="text_bold">PROFILE.</strong>
                            <span class="text_bold">안녕하세요. <br />3년차 웹 퍼블리셔 <br />김가영입니다.</span>
                        </h2>
                    </div>
                    <article class="section_content">
                        <div class="list_content" data-aos="fade-up" data-aos-duration="1000">
                            <h3 class="list_title">EDUCATION / CAREER</h3>
                            <ul class="list_type02">
                                <li v-for="result in historyList" :key="result" class="list_small">
                                    <span class="date">{{ result.date }}</span>
                                    <span class="desc">{{ result.desc }}</span>
                                </li>
                            </ul>
                        </div>
                        <div class="list_content" data-aos="fade-up" data-aos-duration="1000">
                            <h3 class="list_title">SKILLS</h3>
                            <!-- programming languages -->
                            <div class="list_icon_wrap">
                                <h4 class="list_sub_title">Languages</h4>
                                <ul class="flex flex_wrap">
                                    <li v-for="result in languageList" :key="result" class="list_icon">
                                        <i :class="`icon_${result}`" class="icon" :aria-lebel="result"></i>
                                        <small class="name">{{ fnCapitalFirst(result) }}</small>
                                    </li>
                                </ul>
                            </div>
                            <!-- with developers -->
                            <div class="list_icon_wrap">
                                <h4 class="list_sub_title">With Developers</h4>
                                <ul class="flex flex_wrap">
                                    <li v-for="result in devList" :key="result" class="list_icon">
                                        <i :class="`icon_${result}`" class="icon" :aria-lebel="result"></i>
                                        <small class="name">{{ fnCapitalFirst(result) }}</small>
                                    </li>
                                </ul>
                            </div>
                            <!-- with designers -->
                            <div class="list_icon_wrap">
                                <h4 class="list_sub_title">With Designers</h4>
                                <ul class="flex flex_wrap">
                                    <li v-for="result in desList" :key="result" class="list_icon">
                                        <i :class="`icon_${result}`" class="icon" :aria-lebel="result"></i>
                                        <small class="name">{{ fnCapitalFirst(result) }}</small>
                                    </li>
                                </ul>
                            </div>
                            <!-- cms -->
                            <div class="list_icon_wrap">
                                <h4 class="list_sub_title">CMS</h4>
                                <ul class="flex flex_wrap">
                                    <li v-for="result in cmsList" :key="result" class="list_icon icon_long">
                                        <i :class="`icon_${result}`" class="icon" :aria-lebel="result"></i>
                                        <small class="name">{{ fnCapitalFirst(result) }}</small>
                                    </li>
                                </ul>
                            </div>
                            <!-- cooperation -->
                            <!-- <div class="list_icon_wrap">
                                <h4 class="list_sub_title">Cooperation</h4>
                                <ul class="flex flex_wrap">
                                    <li class="list_icon icon_btn"><a href="https://upbeat-libra-abc.notion.site/11c80343060b4978a784f618fa48b050" class="btn btn_md" target="_blank">웹 퍼블리싱 가이드</a></li>
                                </ul>
                            </div> -->
                        </div>
                        <div class="list_content" data-aos="fade-up" data-aos-duration="1000">
                            <h3 class="list_title">PORTFOLIO</h3>
                            <ul class="list_type03 flex flex_wrap">
                                <li v-for="(result, index) in filteredWorksList" :key="index" class="list_small">{{ result.title }}</li>
                                <li class="list_small">기타 B2B 및 법인몰</li>
                            </ul>
                        </div>
                    </article>
                </div>
            </section>
            <!-- works -->
            <section ref="sections" class="works section">
                <div class="inner">
                    <h2 class="section_title" data-aos="fade-up" data-aos-duration="1000">
                        <strong class="text_bold">WORKS.</strong>
                    </h2>
                    <article class="section_content">
                        <ul class="flex flex_wrap">
                            <li v-for="(result, index) in worksList" :key="result"
                                :class="[{list_logo: result.icon === true}]"
                                class="list_item" data-aos="fade-up" data-aos-duration="1000">
                                <a :href="result.link" :title="result.title" target="_blank">
                                    <div class="img">
                                        <img :src="getImagePath(index)" :alt="result.title">
                                    </div>
                                    <div class="cont flex flex_between flex_column">
                                        <div>
                                            <em class="list_small_title block">{{ result.form }}</em>
                                            <strong class="list_title">{{ result.title }}</strong>
                                            <span class="list_type01">
                                                <small v-for="resultDesc in result.desc" :key="resultDesc" class="list_small flex">{{ resultDesc }}</small>
                                            </span>
                                        </div>
                                        <div class="flex flex_between flex_a_center">
                                            <b class="percent btn btn_sm btn_round non_hover text_bold">기여도: {{ result.percent }}%</b>
                                            <span class="btn btn_md btn_arrow" aria-label="바로가기"></span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </article>
                </div>
            </section>
            <!-- contact -->
            <section ref="sections" class="contact section">
                <div class="inner">
                    <h2 class="section_title" data-aos="fade-up" data-aos-duration="1000">
                        <strong class="text_bold">CONTACT.</strong>
                        <span class="text_bold">감사합니다. <br />이쪽으로 연락주세요.</span>
                    </h2>
                    <article class="section_content">
                        <ul data-aos="fade-up" data-aos-duration="1000">
                            <li class="list_item">
                                <a href="mailto:gayeongkimss@gmail.com" class="text_underline_hover">gayeongkimss@gmail.com</a>
                            </li>
                            <li class="list_item">
                                <a href="tel:010-3931-3283" class="text_underline_hover">010.3931.3283</a>
                            </li>
                            <li class="list_item icon_notion">
                                <a href="https://upbeat-libra-abc.notion.site/9e7e7f1013fe4db6a36770908b505131" title="Notion 이력서" class="text_underline_hover" target="_blank"></a>
                            </li>
                        </ul>
                    </article>
                </div>
            </section>
        </main>
        <IncFooter />
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
// components
import IncHeader from './components/layout/IncHeader.vue'
import IncFooter from './components/layout/IncFooter.vue'
// css
import './assets/css/main/main.css';

// header
let activeIndex = ref(0)
let sections = ref([])
let navItems = ref(['profile', 'works', 'contact'])
let headerHeight = ref(0)
const setHeaderHeight = (height) => {
  headerHeight.value = height
}
const scrollToSection = (index) => {
    const section = sections.value[index]
    if (section) {
        window.scrollTo({
            top: section.offsetTop - headerHeight.value,
            behavior: 'smooth',
        })
    }
}
const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2
    sections.value.forEach((section, index) => {
        if (
            section.offsetTop <= scrollPosition &&
            section.offsetTop + section.offsetHeight > scrollPosition
        ) {
            activeIndex = index - 1 >= 0 ? index - 1 : 0
        }
    })
}
onMounted(() => {
    sections.value = document.querySelectorAll('main section')
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})

//history data
const historyList = ref([
    {
        date: '2020.12. - 2024.04.',
        desc: '(주)오상테크놀로지 근무',
    },
    {
        date: '2020.06. - 2020.11.',
        desc: '[NCS] UI/UX디자인(반응형 웹디자인,웹퍼블리셔) 양성과정',
    },
])

// skill data
const languageList = ref(['vue', 'nuxt', 'javascript', 'jquery', 'typescript', 'sass', 'css', 'html'])
const devList = ref(['gitlab', 'github', 'jenkins'])
const desList = ref(['figma', 'photoshop'])
const cmsList = ref(['cafe24', 'godomall'])

// works data
const worksList = ref([
    {
        form: 'Responsive Web',
        title: 'Vue.js & Nuxt.js 작업 페이지 링크',
        desc: [
            '메인, 서브메인, 서브, 결제 페이지 전체 구축(퍼블리싱 및 전체 UI 작업)',
            '전 페이지 반응형 작업',
            '배포 전 프로젝트 페이지입니다. 클릭 시 github 퍼블리싱 작업 코드 일부를 확인하실 수 있습니다.',
        ],
        link: 'https://github.com/gayeongbusiness24/nuxt-project',
        percent: 100,
        disabled: true,
        icon: true,
        hidden: true,
    },
    {
        form: 'Responsive Web | App',
        title: '현대Shop | 현대자동차 공식 온라인몰',
        desc: [
            '내 차 상품, 현대브랜드관, 자동차용품 서브메인 리뉴얼',
            '전 서브 페이지 리뉴얼 및 유지보수',
            '전 페이지 반응형 작업'
        ],
        link: 'https://shop2.hyundai.com/submain/mycar',
        percent: 100,
    },
    {
        form: 'Responsive Web | App',
        title: '기아멤버스 카앤라이프몰',
        desc: [
            '메인, 서브 전체, 결제 페이지 리뉴얼 및 유지보수',
            '기존 적응형 페이지 일체 반응형 페이지로 전환 작업'
        ],
        link: 'https://kia.auton.kr/index/main',
        percent: 100,
    },
    {
        form: 'Responsive Web',
        title: '고려대학교 의료원',
        desc: [
            '리뉴얼 및 유지보수'
        ],
        link: 'https://www.kumc.or.kr/kr/index.do',
        percent: 20,
    },
    {
        form: 'Web | Mobile',
        title: '우리금융저축은행',
        desc: [
            '메인페이지 리뉴얼',
            '웹 접근성 작업(매년 웹 접근성 품질 심사 및 인증)',
            '전 페이지 유지보수'
        ],
        link: 'https://woori.ibs.fsb.or.kr/main_new.act',
        percent: 25,
    },
    {
        form: 'Web | Mobile',
        title: '가톨릭중앙의료원 및 산하 병원 페이지',
        desc: [
            '가톨릭 중앙의료원, 서울성모병원, 여의도성모병원, 의정부성모병원, 부천성모병원 등',
            '영어, 중국어, 일본어, 러시아어, 몽골어 등의 다국어 페이지 작업',
            '구축, 리뉴얼 및 유지보수'
        ],
        link: 'https://www.cmc.or.kr/main.main.sp',
        percent: 25,
    },
    {
        form: 'Responsive Web',
        title: '가톨릭대학교 정보융합진흥원',
        desc: [
            '유지보수'
        ],
        link: 'https://cici.cmc.or.kr/',
        percent: 25,
    },
    {
        form: 'Responsive Web',
        title: '한국임업진흥원',
        desc: [
            '리뉴얼 및 유지보수'
        ],
        link: 'https://www.kofpi.or.kr/index.do',
        percent: 25,
    },
    {
        form: 'Web | Mobile',
        title: '마켓포레',
        desc: [
            '유지보수'
        ],
        link: 'https://marketfore.co.kr/',
        percent: 25,
    }
]);

const filteredWorksList = computed(() => {
    return worksList.value.filter(result => !result.hidden)
})

// works imagePath
function getImagePath(index){
    return require(`@/assets/img/main/works/works_${index+1}.png`);
}

// 첫 글자 대문자 변환
function fnCapitalFirst(text) {
    if (!text) return text; // 빈 문자열 처리
    return text.charAt(0).toUpperCase() + text.slice(1);
}

</script>