<template>
  <div class="about-block" :class="{ 'is-modal' : modal }">
    <div class="main-content-wrap">
      <div class="about-block__items" :style="{ backgroundImage: `url(${rentTranslations.image2})`}">
        <about-item :btnText="rentTranslations.rules_btn"
                    icon="/static/doc.svg"
                    :title="rentTranslations.rules_title" @openModal="openModal" @closeModal="closeModal"
                    :modalText="rentTranslations.rules_text">
        </about-item>
        <about-item :btnText="rentTranslations.service_btn"
                    icon="/static/service.svg"
                    :title="rentTranslations.service_title" @openModal="openModal" @closeModal="closeModal"
                    :modalText="rentTranslations.service_text">
        </about-item>
        <about-item :btnText="rentTranslations.business_btn"
                    icon="/static/business.svg"
                    titleHead="бізнес"
                    :title="rentTranslations.business_title" @openModal="openModal" @closeModal="closeModal"
                    :modalText="rentTranslations.business_text">
        </about-item>
      </div>
    </div>
  </div>
</template>

<script>
import AboutItem from './AboutItem'

export default {
  components: {AboutItem},
  name: 'AboutBlock',
  data () {
    return {
      modal: false
    }
  },
  methods: {
    openModal () {
      this.modal = true
    },
    closeModal () {
      this.modal = false
    }
  }
}
</script>
