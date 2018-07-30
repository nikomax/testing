<template>
  <div class="form">
    <div class="back-btn">
      <a href="javascript:void(0)" @click="pageBack()">{{ rentTranslations.btn_back }}</a>
    </div>
    <div class="form__container">
      <div class="form__title" v-html="rentTranslations.form_title3"></div>
      <form action="" v-on:submit.prevent>
        <div class="form__line form__line--center">
          <form-item id="code" name="code" :label="rentTranslations.label_code" for="code" v-on:handleInput="getCode" :error="errors ? errors.auth_code : ''"/>
        </div>
        <div class="form__repeat">
          <div class="form__repeat-text">
            {{ rentTranslations.repeat_text }} <a href="javascript:void(0)" class="rlink" @click="resendData">{{ rentTranslations.repeat_link }}</a>
          </div>
          <div class="form__repeat-btn">
            <a href="javascript:void(0)" class="rent-button" @click="sendData" :class="{ 'is-disabled' : checkCode, 'in-process' : inProcess}">{{ rentTranslations.form_btn3 }}
              <svg class="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                <circle class="path" fill="none" stroke-width="10" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
              </svg>
            </a>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import FormItem from '../FormItem'
export default {
  name: 'CodeForm',
  components: { FormItem },
  data () {
    return {
      code: ''
    }
  },
  props: {
    errors: Object,
    inProcess: Boolean
  },
  methods: {
    pageBack () {
      this.$emit('goBack')
    },
    getCode (code) {
      this.code = code
    },
    sendData () {
      this.$emit('getUserCode', this.code)
    },
    resendData () {
      this.$emit('sendNewCode')
    }
  },
  computed: {
    checkCode () {
      if (this.code) {
        return false
      } else {
        return true
      }
    }
  }
}
</script>
