<template>
  <div class="rent-main">
    <div class="rent-hero" :style="{ backgroundImage: `url(${rentTranslations.image1})`}">
      <div class="main-content-wrap">
        <div class="rent-hero__content">
          <div class="rent-hero__title title1">{{ rentTranslations.main_title }}</div>
          <div class="rent-hero__timer">
            <v-timer :end="rentTimer"/>
          </div>
        </div>
      </div>
    </div>
    <div class="rent-block">
      <div class="main-content-wrap">
        <div class="rent-block__content">
          <div class="rent-block__selects">
            <div class="rent-block__select">
              <v-select :options="locations"
                        textField="name"
                        :selected="selectedLocation"
                        v-on:updateOption="methodToRunOnSelect"
                        :placeholder="rentTranslations.location"/>
            </div>
            <div class="rent-block__select">
              <v-select :options="dates"
                        textField="text"
                        :selected="selectedDates"
                        v-on:updateOption="methodToRunOnSelect"
                        :placeholder="rentTranslations.date"/>
            </div>
            <div class="rent-block__select">
              <v-select :options="period"
                        textField="text"
                        :selected="selectedPeriod"
                        v-on:updateOption="methodToRunOnSelect"
                        :placeholder="rentTranslations.period"/>
            </div>
            <div class="rent-block__select">
              <v-select :options="flatTypes"
                        textField="text"
                        :selected="selectedFlatType"
                        v-on:updateOption="methodToRunOnSelect"
                        :placeholder="rentTranslations.flat_type"/>
            </div>
          </div>
          <div class="rent-block__btn">
            <a href="javascript:void(0)" class="rent-button" :class="{ 'is-disabled' : disable }" @click="fillData()">{{ rentTranslations.btn1 }}</a>
          </div>
        </div>
      </div>
    </div>
    <about-block/>
  </div>
</template>

<script>
import VSelect from '../VSelect'
import VTimer from '../VTimer'
import AboutBlock from '../AboutBlock'
export default {
  components: {VSelect, VTimer, AboutBlock},
  name: 'RentBlock',
  data () {
    return {
      dates: [],
      locations: [],
      period: [],
      flatTypes: [],
      selectedLocation: {},
      selectedDates: {},
      selectedPeriod: {},
      selectedFlatType: {},
      disable: true,
      renttranslations: {}
    }
  },
  methods: {
    fillData () {
      this.$emit('getFlatData', this.selectedLocation, this.selectedDates, this.selectedPeriod, this.selectedFlatType)
    },
    methodToRunOnSelect (payload, array) {
      if (this.locations === array) {
        this.selectedLocation = payload
      } else if (this.dates === array) {
        this.selectedDates = payload
      } else if (this.period === array) {
        this.selectedPeriod = payload
      } else if (this.flatTypes === array) {
        this.selectedFlatType = payload
      };
      this.checkFields()
    },
    checkFields () {
      if (Object.keys(this.selectedLocation).length &&
        Object.keys(this.selectedDates).length &&
        Object.keys(this.selectedPeriod).length &&
        Object.keys(this.selectedFlatType).length) {
        this.disable = false
      } else {
        this.disable = true
      }
    },
    initVars () {
      this.dates = date_from
      this.locations = locations
      this.period = period_range
      this.flatTypes = flat_types
    }
  },
  mounted () {
    this.initVars()
  }
}
</script>
