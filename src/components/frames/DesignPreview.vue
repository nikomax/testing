<template>
    <div class="design-preview">
      <div class="back-btn">
        <a href="javascript:void(0)" @click="backToList()">{{ rentTranslations.btn_back2 }}</a>
      </div>
      <div class="design-preview__container">
        <div class="design-preview__title" v-html="design.name"></div>
        <div class="design-preview__subtitle" v-html="design.title1"></div>
      </div>
      <div class="design-preview__tabs">
        <div class="design-preview__tab" :class="{ 'is-active' : tabItem === 1 }" @click="tabItem = 1">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
            <path d="M4.09091 0C3.28181 0 2.49087 0.239928 1.81812 0.689443C1.14538 1.13896 0.621035 1.77787 0.311404 2.52539C0.0017727 3.2729 -0.0792412 4.09545 0.0786074 4.88901C0.236456 5.68256 0.626077 6.41149 1.1982 6.98362C1.77033 7.55574 2.49926 7.94536 3.29281 8.10321C4.08637 8.26106 4.90892 8.18005 5.65643 7.87042C6.40395 7.56078 7.04286 7.03644 7.49238 6.3637C7.94189 5.69095 8.18182 4.90001 8.18182 4.09091C8.18182 3.00593 7.75081 1.96539 6.98362 1.1982C6.21643 0.431005 5.17589 0 4.09091 0ZM4.09091 6.81818C3.55151 6.81818 3.02422 6.65823 2.57572 6.35855C2.12722 6.05888 1.77766 5.63293 1.57124 5.13459C1.36482 4.63625 1.31081 4.08788 1.41604 3.55884C1.52127 3.02981 1.78102 2.54385 2.16244 2.16244C2.54385 1.78102 3.02981 1.52127 3.55885 1.41604C4.08789 1.31081 4.63625 1.36482 5.13459 1.57124C5.63294 1.77766 6.05888 2.12722 6.35856 2.57572C6.65823 3.02422 6.81818 3.55151 6.81818 4.09091C6.81818 4.81423 6.53085 5.50792 6.01938 6.01938C5.50792 6.53084 4.81423 6.81818 4.09091 6.81818Z" transform="translate(4.09082 2.72727)"/>
            <path d="M30 18.5264V2.72727C30 2.00395 29.7127 1.31026 29.2012 0.7988C28.6897 0.287337 27.996 0 27.2727 0L2.72727 0C2.00396 0 1.31026 0.287337 0.7988 0.7988C0.287337 1.31026 0 2.00395 0 2.72727L0 18.5264L1.36364 17.1627V2.72727C1.36364 2.36561 1.5073 2.01877 1.76304 1.76304C2.01877 1.5073 2.36561 1.36364 2.72727 1.36364H27.2727C27.6344 1.36364 27.9812 1.5073 28.237 1.76304C28.4927 2.01877 28.6364 2.36561 28.6364 2.72727V17.1627L30 18.5264Z"/>
            <path d="M19.0909 0L10.9091 8.18182L6.81818 4.09091L1.36364 9.54545L0 10.9091V17.7273C0 18.4506 0.287337 19.1443 0.7988 19.6557C1.31026 20.1672 2.00396 20.4545 2.72727 20.4545H27.2727C27.996 20.4545 28.6897 20.1672 29.2012 19.6557C29.7127 19.1443 30 18.4506 30 17.7273V10.9091L19.0909 0ZM28.6364 17.7273C28.6364 18.0889 28.4927 18.4358 28.237 18.6915C27.9812 18.9472 27.6344 19.0909 27.2727 19.0909H2.72727C2.36561 19.0909 2.01877 18.9472 1.76304 18.6915C1.5073 18.4358 1.36364 18.0889 1.36364 17.7273V11.4736L6.81818 6.01909L18.5264 17.7273H20.4545L11.8745 9.14727L19.0909 1.92818L28.6364 11.4736V17.7273Z" transform="translate(0 9.54546)"/>
          </svg>
        </div>
        <div class="design-preview__tab" :class="{ 'is-active' : tabItem === 2 }" @click="tabItem = 2">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
            <path d="M2.72727 0H0V1.36364H2.72727C3.08893 1.36364 3.43578 1.5073 3.69151 1.76304C3.94724 2.01877 4.09091 2.36561 4.09091 2.72727V9.54545H0V10.9091H4.09091V21.8182C4.09091 22.1798 3.94724 22.5267 3.69151 22.7824C3.43578 23.0382 3.08893 23.1818 2.72727 23.1818H0V24.5455H2.72727C3.45059 24.5455 4.14428 24.2581 4.65575 23.7467C5.16721 23.2352 5.45455 22.5415 5.45455 21.8182V2.72727C5.45455 2.00395 5.16721 1.31026 4.65575 0.7988C4.14428 0.287337 3.45059 0 2.72727 0V0Z" transform="translate(24.5454)" />
            <path d="M10.9091 0V1.36364H14.3182V9.54545C14.3182 9.90711 14.1745 10.254 13.9188 10.5097C13.6631 10.7654 13.3162 10.9091 12.9545 10.9091H2.72727C2.36561 10.9091 2.01877 10.7654 1.76304 10.5097C1.5073 10.254 1.36364 9.90711 1.36364 9.54545V3.46091H0V9.54545C0 10.2688 0.287337 10.9625 0.7988 11.4739C1.31026 11.9854 2.00396 12.2727 2.72727 12.2727H12.9545C13.6779 12.2727 14.3716 11.9854 14.883 11.4739C15.3945 10.9625 15.6818 10.2688 15.6818 9.54545V6.81818H19.0909V5.45455H15.6818V1.36364H19.0909V0H10.9091Z" transform="translate(0 17.7273)"/>
            <path d="M1.36364 10.9091H5.45455V9.54545H1.36364V2.72727C1.36364 2.36561 1.5073 2.01877 1.76304 1.76304C2.01877 1.5073 2.36561 1.36364 2.72727 1.36364H5.45455V0H2.72727C2.00396 0 1.31026 0.287337 0.7988 0.7988C0.287337 1.31026 0 2.00395 0 2.72727L0 15.7336H1.36364V10.9091Z"/>
            <path d="M0 0V1.36364H3.40909V9.54545H0V10.9091H8.18182V9.54545H4.77273V1.36364H8.18182V0H0Z" transform="translate(10.9092)"/>
          </svg>
        </div>
        <div class="design-preview__tab" :class="{ 'is-active' : tabItem === 3 }" @click="tabItem = 3">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
            <path d="M30 0H0V1.36364H30V0Z" transform="translate(0 28.6364)"/>
            <path d="M23.1818 27.2727H24.5455V0H0V27.2727H23.1818ZM1.36364 1.36364H23.1818V25.9091H1.36364V1.36364Z" transform="translate(2.72729)"/>
            <path d="M17.7273 0H0V21.8182H19.0909V0H17.7273ZM1.36364 20.4545V1.36364H8.86364V20.4545H1.36364ZM17.7273 20.4545H10.2273V1.36364H17.7273V20.4545Z" transform="translate(5.45459 2.72727)"/>
          </svg>
        </div>
      </div>
      <div class="design-preview__renders" v-if="tabItem === 1">
        <slider key="bla" :designSlides="design.renders" :photos="true" :swiper-option="option1" :id="'swiper-' + tabItem"/>
      </div>
      <div class="design-preview__plans" v-if="tabItem === 2">
        <div class="design-preview__container">
          <slider key="bla1" :designSlides="design.plans" :photos="false" :swiper-option="option2" :id="'swiper-' + tabItem"/>
        </div>
      </div>
      <div class="design-preview__panorama" v-if="tabItem === 3">
        <div class="design-preview__container">
          <panorama :panorama="design.panorama"/>
        </div>
      </div>
      <div class="design-preview__container">
        <div class="design-preview__name">
          {{ design.name }}
        </div>
        <div class="design-preview__desc" v-html="design.block1_description">
        </div>
        <div class="design-preview__bottom">
          <div class="design-preview__price" v-html="obj.price"></div>
          <div class="design-preview__btn">
            <a href="javascript:void(0)" class="animated-button go-to" @click="sendId">{{ rentTranslations.designs_buttons }}</a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Slider from '../Slider'
import Panorama from '../Panorama'

export default {
  components: {
    Panorama,
    Slider
  },
  name: 'DesignPreview',
  data () {
    return {
      tabItem: 1,
      flatId: '',
      option1: {
        centeredSlides: true,
        loop: true,
        slidesPerView: 3,
        allowTouchMove: false,
        navigation: {
          nextEl: '.design-slider-next',
          prevEl: '.design-slider-prev'
        },
        breakpoints: {
          1024: {
            allowTouchMove: true
          },
          768: {
            slidesPerView: 1,
            centeredSlides: false,
            allowTouchMove: true
          }
        }
      },
      option2: {
        loop: true,
        slidesPerView: 1,
        allowTouchMove: false,
        navigation: {
          nextEl: '.design-slider-next',
          prevEl: '.design-slider-prev'
        },
        breakpoints: {
          1024: {
            allowTouchMove: true
          },
          768: {
            slidesPerView: 1,
            allowTouchMove: true
          }
        }
      }
    }
  },
  props: {
    obj: Object,
    design: Object
  },
  methods: {
    backToList () {
      this.$emit('goToList')
    },
    sendId () {
      this.$emit('getId', this.design.id_flat_design)
    }
  }
}
</script>
