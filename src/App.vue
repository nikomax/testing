<template>
  <div class="rent">
    <rent-block v-on:getFlatData="getFlatData" v-if="page === 1"/>
    <designs v-if="page === 2 && !designPreview" v-on:goBack="goBack" v-on:getId="getFlatId" v-on:goNext="goNext" :price="price" v-on:getDesign="getDesign" :designs="flatType.designs"/>
    <design-preview v-if="page === 2 && designPreview" v-on:goToList="goToList" :obj="flatType" :design="flatDesign" v-on:getId="getFlatId"/>
    <main-form v-if="page === 3" v-on:goBack="goBack" v-on:getUserData="getUserData" :errors="responseErrors" :in-process="inProcess"/>
    <phone-form v-if="page === 4" v-on:goBack="goBack"  v-on:getUserPhone="getUserPhone" :errors="responseErrors" :in-process="inProcess"/>
    <code-form v-if="page === 5" v-on:goBack="goBack"  v-on:getUserCode="getUserCode" v-on:sendNewCode="sendNewCode" :errors="responseErrors" :in-process="inProcess"/>
    <agree v-if="page === 6"  v-on:getUserAgree="getUserAgree" :in-process="inProcess"/>
    <final-frame v-if="page === 7"/>
    <div class="g-recaptcha_rent" id="g-recaptcha_rent" ref="recaptchaRent"></div>
  </div>
</template>

<script>
import RentBlock from './components/frames/RentBlock'
import Designs from './components/frames/Designs'
import MainForm from './components/frames/MainForm'
import PhoneForm from './components/frames/PhoneForm'
import CodeForm from './components/frames/CodeForm'
import Agree from './components/frames/Agree'
import axios from 'axios'
import qs from 'qs'
import FinalFrame from './components/frames/FinalFrame'
import DesignPreview from './components/frames/DesignPreview'

let captchaRent = null
export default {
  components: {
    DesignPreview,
    FinalFrame,
    PhoneForm,
    CodeForm,
    Agree,
    MainForm,
    Designs,
    RentBlock
  },
  data () {
    return {
      page: 1,
      designPreview: false,
      price: '',
      inProcess: false,
      flatType: {},
      flatDesign: {},
      responseErrors: {},
      sendDataObject: {
        ajax: 1,
        dataType: 'json'
      }
    }
  },
  methods: {
    sendNewCode () {
      this.prepCapcthaRent('resendSms')
    },
    getFlatData (location, date, period, type) {
      console.log(type)
      this.flatType = type
      this.price = type.price
      this.sendDataObject.id_location = +location.id_location
      this.sendDataObject.room_count = type.value
      this.sendDataObject.date_from = date.value
      this.sendDataObject.period = period.value
      this.goNext()
    },
    getUserData (obj) {
      this.sendDataObject.firstname = obj.firstName
      this.sendDataObject.lastname = obj.lastName
      this.sendDataObject.email = obj.email
      this.sendDataObject.city = obj.city
      this.sendDataObject.id_country = obj.country
      this.prepCapcthaRent('rentRequest')
    },
    getFlatId (flatId) {
      this.sendDataObject.id_flat_design = +flatId
      this.goNext()
    },
    getDesign (flatId) {
      let arr = this.flatType.designs.filter(item => item.id_flat_design === flatId)
      this.flatDesign = arr[0]
      this.designPreview = true
      document.querySelector('html').scrollTop = 0
    },
    getUserPhone (phone) {
      this.sendDataObject.phone = phone
      this.prepCapcthaRent('rentRequest')
    },
    getUserCode (code) {
      this.sendDataObject.auth_code = code
      this.prepCapcthaRent('rentRequest')
    },
    getUserAgree (agree) {
      this.sendDataObject.agreed = agree
      this.prepCapcthaRent('rentRequest')
    },
    goToList () {
      this.designPreview = false
      document.querySelector('html').scrollTop = 0
    },
    goBack () {
      this.page = this.page - 1
      document.querySelector('html').scrollTop = 0
    },
    goNext () {
      this.page = this.page + 1
      document.querySelector('html').scrollTop = 0
    },
    prepCapcthaRent (actionType) {
      this.inProcess = true
      this.sendDataObject.action = actionType
      if (captchaRent === null) {
        captchaRent = grecaptcha.render(
          'g-recaptcha_rent',
          {
            sitekey: '6Le7GjgUAAAAALI3vyYBndo-pG4B76UpsrRTzUHY',
            size: 'invisible',
            callback: this.sendRentRequest
          }
        )
      } else {
        grecaptcha.reset(captchaRent)
      }
      grecaptcha.execute(captchaRent)
    },
    sendRentRequest () {
      let that = this
      this.sendDataObject.grecaptcharesponce = document.querySelectorAll('.g-recaptcha-response')[0].value
      axios({
        method: 'post',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        url: window.rent_controller,
        data: qs.stringify(that.sendDataObject)
      })
        .then(function (response) {
          that.inProcess = false
          if (response.data.errors) {
            if (response.data.errors.captcha) {
              this.prepCapcthaRent()
            } else {
              that.responseErrors = response.data.errors
              console.log(response.data)
              console.log(that.responseErrors)
            }
          } else {
            if (response.data.id_request) {
              that.sendDataObject.id_request = response.data.id_request
              console.log(response.data.id_request)
            }
            console.log(response.data)
            if (that.sendDataObject.action === 'rentRequest') {
              that.goNext()
            }
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="sass">
@import /sass/app
</style>
