<template>
  <div class="form">
    <div class="back-btn">
      <a href="javascript:void(0)" @click="pageBack()">{{ rentTranslations.btn_back }}</a>
    </div>
    <div class="form__container">
      <div class="form__title" v-html="rentTranslations.form_title2"></div>
      <form action="" v-on:submit.prevent>
        <div class="form__line form__line--center">
          <form-item id="phone" name="phone" :label="rentTranslations.label_phone" for="phone" :phoneMask="true" v-on:handleInput="getTelNumber" :error="errors ? errors.phone : ''"/>
        </div>
        <div class="form__btn">
          <a href="javascript:void(0)" class="rent-button" @click="sendData" :class="{ 'is-disabled' : checkPhone, 'in-process' : inProcess}">{{ rentTranslations.form_btn2 }}
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
import FormItem from '../FormItem'
export default {
  name: 'PhoneForm',
  components: { FormItem },
  data () {
    return {
      phone: ''
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
    getTelNumber (phone) {
      this.phone = phone
    },
    sendData () {
      this.$emit('getUserPhone', this.phone)
    }
  },
  computed: {
    checkPhone () {
      if (this.phone) {
        return false
      } else {
        return true
      }
    }
  },
  mounted () {
    phoneMask('.phone-mask')
  }
}
</script>
