<template>
  <div class="form">
    <div class="back-btn">
      <a href="javascript:void(0)" @click="pageBack()">{{ rentTranslations.btn_back }}</a>
    </div>
    <div class="form__container">
      <div class="form__title" v-html="rentTranslations.form_title1">
      </div>
      <form>
        <div class="form__line">
          <form-item id="fistname" name="fistname" :label="rentTranslations.label_firstname" for="fistname" v-on:handleInput="getFirstName" :error="errors ? errors.firstname : ''"/>
          <form-item id="lastname" name="lastname" :label="rentTranslations.label_lastname" for="lastname" v-on:handleInput="getLastName" :error="errors ? errors.lastname : ''"/>
        </div>
        <div class="form__line">
          <form-item id="email" name="email" :label="rentTranslations.label_email" for="email" v-on:handleInput="getEmail" :error="emailError || errors ? errors.email : ''"/>
          <form-item id="emailCheck" name="emailCheck" :label="rentTranslations.label_email_check" for="emailCheck" v-on:handleInput="getEmailCheck" :error="emailCheckError"/>
        </div>
        <div class="form__line">
          <form-select :options="countries"
                       textField="name"
                       v-on:updateOption="methodToRunOnSelect"
                       :placeholder="rentTranslations.label_country"
                       :error="errors ? errors.id_country : ''"/>
          <form-item id="city" name="city" :label="rentTranslations.label_city" for="city" v-on:handleInput="getCity" :error="errors ? errors.city : ''"/>
        </div>
        <div class="form__btn">
          <a href="javascript:void(0)" class="rent-button" @click="sendData" :class="{ 'is-disabled' : checkFields, 'in-process' : inProcess }">{{ rentTranslations.form_btn1 }}
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
import VSelect from '../VSelect'
import FormSelect from '../FormSelect'

export default {
  components: {
    FormSelect,
    VSelect,
    FormItem},
  name: 'MainForm',
  data () {
    return {
      countries: countries,
      firstName: '',
      lastName: '',
      email: '',
      emailCheck: '',
      city: '',
      country: '',
      emailError: '',
      emailCheckError: ''
    }
  },
  props: {
    errors: Object,
    inProcess: Boolean
  },
  methods: {
    getFirstName (firstName) {
      this.firstName = firstName
    },
    getLastName (lastName) {
      this.lastName = lastName
    },
    emailErrorChecking (msg) {
      if (this.email.length > 0 && this.emailCheck.length > 0) {
        if (this.email !== this.emailCheck) {
          this.emailError = msg
          this.emailCheckError = msg
        } else {
          this.emailError = ''
          this.emailCheckError = ''
        }
      } else {
        this.emailError = ''
        this.emailCheckError = ''
      }
    },
    getEmail (email) {
      this.email = email
      this.emailErrorChecking(this.rentTranslations.email_front_check)
    },
    getEmailCheck (emailCheck) {
      this.emailCheck = emailCheck
      this.emailErrorChecking(this.rentTranslations.email_front_check)
    },
    getCity (city) {
      this.city = city
    },
    methodToRunOnSelect (country) {
      this.country = country.id
    },
    pageBack () {
      this.$emit('goBack')
    },
    sendData () {
      this.$emit('getUserData', {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        city: this.city,
        country: this.country})
    }
  },
  computed: {
    checkFields () {
      if (this.email.length > 0 &&
        this.email === this.emailCheck &&
        this.firstName.length &&
        this.lastName.length &&
        this.city.length &&
        this.country.length) {
        return false
      } else {
        return true
      }
    }
  }
}
</script>
