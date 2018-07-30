<template>
  <div class="cselect">
    <div @click="toggleMenu()" class="cselect__placeholder" :class="showMenu ? 'is-open' : ''">
      {{placeholderText}}
      <span class="cselect__arrow">
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="12" viewBox="0 0 17 12" fill="none">
          <rect width="4" height="9.61778" transform="translate(10.1992 10.3161) rotate(-135)" fill="white"/>
          <rect width="11.9993" height="4" transform="translate(8.51416 12) rotate(-135)" fill="white"/>
        </svg>
      </span>
    </div>

    <div @click="toggleMenu()" class="cselect__selected" v-if="selectedOption[textField]">
      {{ selectedOption[textField] }}
    </div>

    <ul class="cselect__menu" v-if="showMenu" v-on-clickaway="away">
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
  components: {
    VuePerfectScrollbar
  },
  directives: {
    onClickaway: onClickaway
  },
  name: 'VSelect',
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
    placeholder: [String]
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
    updateOption (option, options) {
      this.selectedOption = option
      this.showMenu = false
      this.$emit('updateOption', this.selectedOption, options)
    },
    toggleMenu () {
      this.showMenu = !this.showMenu
    }
  }
}
</script>
