<template>
  <div class="about-item">
    <a href="javascript:void(0)" class="about-item__btn" @click="openModal">
      <i class="about-item__btn-icon">
        <img :src="icon" alt="">
      </i>
      <span>{{ btnText }}</span>
    </a>
    <div class="about-item-modal" v-if="modalOpen">
      <div class="about-item-modal__top">
        <header class="custom_clearfix">
          <div class="logo-block"><a href="https://s1.test/ru/">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="3em" height="2em" viewBox="0 0 400.004 400.004" style="enable-background:new 0 0 400.004 400.004;" xml:space="preserve" fill="#FFF" id="header-logo-arrow"> <path d="M382.688,182.686H59.116l77.209-77.214c6.764-6.76,6.764-17.726,0-24.485c-6.764-6.764-17.73-6.764-24.484,0L5.073,187.757 c-6.764,6.76-6.764,17.727,0,24.485l106.768,106.775c3.381,3.383,7.812,5.072,12.242,5.072c4.43,0,8.861-1.689,12.242-5.072 c6.764-6.76,6.764-17.726,0-24.484l-77.209-77.218h323.572c9.562,0,17.316-7.753,17.316-17.315 C400.004,190.438,392.251,182.686,382.688,182.686z"/> </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 32.32" id="header-logo-svg">
              <path class="cls-1"
                    d="M79.24,19.39H75.41V32.32h1.44V20.83h2.39a.48.48,0,0,1,.48.48v11h1.44v-11A1.92,1.92,0,0,0,79.24,19.39Z"/>
              <path class="cls-1"
                    d="M70.63,19.39H68.71a1.91,1.91,0,0,0-1.91,1.91v9.1a1.91,1.91,0,0,0,1.91,1.91h1.92a1.92,1.92,0,0,0,1.92-1.92v-9.1A1.91,1.91,0,0,0,70.63,19.39Zm0,11.49H68.71a.48.48,0,0,1-.48-.48v-9.1a.48.48,0,0,1,.48-.48h1.92a.48.48,0,0,1,.48.48v9.1A.48.48,0,0,1,70.63,30.88Z"/>
              <path class="cls-1"
                    d="M85.47,12.93h1.44v-11A1.92,1.92,0,0,0,85,0H83.07a1.92,1.92,0,0,0-1.92,1.92v11H82.6V8.62h2.87ZM82.6,7.18V1.92a.48.48,0,0,1,.48-.48H85a.48.48,0,0,1,.48.48V7.18Z"/>
              <path class="cls-1"
                    d="M110.85,0h-1.92A1.92,1.92,0,0,0,107,1.92v11h1.44V8.62h2.87v4.31h1.44v-11A1.92,1.92,0,0,0,110.85,0Zm.48,7.18h-2.87V1.92a.48.48,0,0,1,.48-.48h1.92a.48.48,0,0,1,.48.48Z"/>
              <polygon class="cls-1"
                       points="76.13 12.93 77.57 12.93 77.57 1.44 79.72 1.44 79.72 0 73.98 0 73.98 1.44 76.13 1.44 76.13 12.93"/>
              <path class="cls-1"
                    d="M93.61,0H89.78V12.93h1.44V1.44h2.39a.48.48,0,0,1,.48.48v11h1.44v-11A1.92,1.92,0,0,0,93.61,0Z"/>
              <path class="cls-1"
                    d="M102.23,0H98.4V12.93h3.83A1.92,1.92,0,0,0,104.14,11V1.92A1.92,1.92,0,0,0,102.23,0Zm0,11.49H99.83V1.44h2.39a.48.48,0,0,1,.48.48V11A.48.48,0,0,1,102.23,11.49Z"/>
              <path class="cls-1"
                    d="M130,1.92A1.92,1.92,0,0,0,128.08,0h-3.83V12.93h3.83A1.92,1.92,0,0,0,130,11Zm-1.91,9.58h-2.39V1.44h2.39a.48.48,0,0,1,.48.48V11A.48.48,0,0,1,128.08,11.49Z"/>
              <path class="cls-1"
                    d="M119.46,0h-3.83V12.93h1.44V8.62H119a1,1,0,0,1,1,1v3.35h1.44V9.58a2.37,2.37,0,0,0-.56-1.52,1.91,1.91,0,0,0,.56-1.35V1.92A1.92,1.92,0,0,0,119.46,0Zm.48,6.7a.48.48,0,0,1-.48.48h-2.39V1.44h2.39a.48.48,0,0,1,.48.48Z"/>
              <path class="cls-1"
                    d="M68.71,12.93h1.92A1.92,1.92,0,0,0,72.54,11V7.66a1.92,1.92,0,0,0-1.92-1.92H68.71a.48.48,0,0,1-.48-.48V1.92a.48.48,0,0,1,.48-.48h1.92a.48.48,0,0,1,.48.48v1h1.44v-1A1.92,1.92,0,0,0,70.63,0H68.71A1.92,1.92,0,0,0,66.8,1.92V5.27a1.92,1.92,0,0,0,1.92,1.92h1.92a.48.48,0,0,1,.48.48V11a.48.48,0,0,1-.48.48H68.71a.48.48,0,0,1-.48-.48v-1H66.8v1A1.92,1.92,0,0,0,68.71,12.93Z"/>
              <path class="cls-1"
                    d="M84,21.31v9.1a1.92,1.92,0,0,0,1.92,1.92h3.83V30.88H85.95a.48.48,0,0,1-.48-.48V26.57h2.87V25.14H85.47V21.31a.48.48,0,0,1,.48-.48h3.83V19.39H85.95A1.92,1.92,0,0,0,84,21.31Z"/>
              <path class="cls-1"
                    d="M4.31,17.23H28a2.15,2.15,0,0,1,2.15,2.15V28A2.15,2.15,0,0,1,28,30.15H4.31A2.15,2.15,0,0,1,2.15,28V25.84H0V28a4.31,4.31,0,0,0,4.31,4.31H28A4.31,4.31,0,0,0,32.32,28V19.39A4.31,4.31,0,0,0,28,15.08H4.31a2.15,2.15,0,0,1-2.15-2.15V4.31A2.15,2.15,0,0,1,4.31,2.15H28a2.15,2.15,0,0,1,2.15,2.15V6.46h2.15V4.31A4.31,4.31,0,0,0,28,0H4.31A4.31,4.31,0,0,0,0,4.31v8.61A4.31,4.31,0,0,0,4.31,17.23Z"/>
              <polygon class="cls-2"
                       points="47.4 30.15 47.4 0 38.79 0 38.78 2.15 45.23 2.15 45.25 30.15 38.78 30.15 38.78 32.31 53.86 32.31 53.86 30.15 47.4 30.15"/>
            </svg>
          </a></div>
          <button class="about-item-modal__close" @click="closeModal">
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
               viewBox="0 0 30.7 30.7" style="enable-background:new 0 0 30.7 30.7;" xml:space="preserve">
            <path style="fill:none;stroke:#FFFFFF;" d="M0.4,0.4l15,15l15-15"/>
            <path style="fill:none;stroke:#FFFFFF;" d="M30.4,30.4l-15-15l-15,15"/>
            </svg>
          </button>
        </header>
      </div>
      <div class="about-item-modal__content">
        <div class="about-item-modal__title" v-html="title">
        </div>
        <div class="about-item-modal__text" v-html="modalText">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutItem',
  data () {
    return {
      modalOpen: false,
      windowTop: 0
    }
  },
  props: {
    btnText: String,
    titleHead: String,
    title: String,
    icon: String,
    modalText: String
  },
  methods: {
    openModal () {
      this.modalOpen = true
      this.$emit('openModal')
      this.windowTop = document.querySelector('html').scrollTop
      document.querySelector('html').classList.add('no-overflow')
    },
    closeModal () {
      this.modalOpen = false
      this.$emit('closeModal')
      document.querySelector('html').classList.remove('no-overflow')
      document.querySelector('html').scrollTop = this.windowTop
    }
  }
}
</script>
