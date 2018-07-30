<template>
  <div class="form-item" :class="{ 'is-error' : error.length }">
    <input class="form-item__input" :class="{'phone-mask' : phoneMask}" type="text" :id="name" :name="name" @focus="inFocus = true" @blur="inputValue.length ? inFocus = true : inFocus = false" v-on:input="updateValue">
    <label :for="name" class="form-item__label" :class="{ 'is-focused': inFocus }">
      {{ label }}
    </label>
    <div class="form-item__error" v-if="error.length">
      {{ error }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormItem',
  data () {
    return {
      inputValue: '',
      inFocus: false
    }
  },
  props: {
    label: String,
    name: String,
    error: {
      type: String,
      default: ''
    },
    phoneMask: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    updateValue (e) {
      this.inputValue = e.target.value
      this.$emit('handleInput', this.inputValue)
    }
  }
}
</script>
