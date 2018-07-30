<template>
  <div class="form">
    <div class="form__container form__container--l">
      <div class="form__title" v-html="rentTranslations.form_title4"></div>
      <div class="form__desc">
        {{ rentTranslations.agree_description }}
      </div>
      <form action="">
        <div class="form__checkbox">
          <v-checkbox :label="rentTranslations.label_agree" :checked="agree" @handleChecbox="agree = !agree"/>
        </div>
        <div class="form__btn">
          <a href="javascript:void(0)" class="rent-button" @click="sendData" :class="{ 'is-disabled' : !agree, 'in-process' : inProcess}">{{ rentTranslations.form_btn4 }}
            <svg class="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
              <circle class="path" fill="none" stroke-width="10" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
            </svg>
          </a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import VCheckbox from '../VCheckbox'

export default {
  components: {VCheckbox},
  name: 'Agree',
  data () {
    return {
      agree: false
    }
  },
  props: {
    inProcess: Boolean
  },
  methods: {
    pageBack () {
      this.$emit('goBack')
    },
    sendData () {
      console.log(this.agree)
      this.$emit('getUserAgree', this.agree)
    }
  }
}
</script>
