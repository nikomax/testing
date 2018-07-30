<template>
  <div class="fselect form-item">
    <div @click="toggleMenu()" class="fselect__placeholder" :class="{ 'is-error' : error.length , 'is-open' : showMenu }" v-if="!selectedOption[textField]">
      {{placeholderText}}
      <span class="fselect__arrow">
        <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0L3.5 3.5L7 0" transform="translate(1 1)"/>
        </svg>
      </span>
    </div>

    <div class="form-item__error" v-if="error.length">
      {{ error }}
    </div>

    <div @click="toggleMenu()" class="fselect__selected" :class="{ 'is-open' : showMenu }" v-if="selectedOption[textField]">
      {{ selectedOption[textField] }}
      <span class="fselect__arrow">
        <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0L3.5 3.5L7 0" transform="translate(1 1)"/>
        </svg>
      </span>
    </div>

    <ul class="fselect__menu" v-if="showMenu" v-on-clickaway="away">
      <VuePerfectScrollbar class="scroll-area" v-once :settings="settings">
        <li v-for="(option, index) in options" :key="index">
          <a href="javascript:void(0)" @click="updateOption(option, options)" :class="(selectedOption[textField]===option[textField]) ? 'is-active' : ''">
            {{ option[textField] }}
          </a>
        </li>
      </VuePerfectScrollbar>
    </ul>
  </div>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import { directive as onClickaway } from 'vue-clickaway'
export default {
  directives: {
    onClickaway: onClickaway
  },
  name: 'FormSelect',
  components: {
    VuePerfectScrollbar
  },
  data () {
    return {
      selectedOption: {},
      showMenu: false,
      placeholderText: 'Please select an item',
      settings: {
        maxScrollbarLength: 60
      }
    }
  },
  props: {
    options: {
      type: Array
    },
    selected: {
      type: Object
    },
    textField: String,
    placeholder: [String],
    error: {
      type: String,
      default: ''
    }
  },
  mounted () {
    if (this.placeholder) {
      this.placeholderText = this.placeholder
    }
  },
  methods: {
    away: function () {
      this.showMenu = false
    },
    updateOption (option) {
      this.selectedOption = option
      this.showMenu = false
      this.$emit('updateOption', this.selectedOption)
    },
    toggleMenu () {
      this.showMenu = !this.showMenu
    }
  }
}
</script>
