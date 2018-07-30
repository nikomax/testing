<template>
  <div class="rcheckbox" @click="sendAgree">
    <span class="rcheckbox__icon" :class="{ 'is-ckecked' : checked }">
      <svg v-if="checked" xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.6 10.6L1.4 6.4L0 7.8L5.6 13.4L17.6 1.4L16.2 0L5.6 10.6Z" transform="translate(0.399902 0.600006)"/>
      </svg>
    </span>
    {{ label }}
  </div>
</template>

<script>
export default {
  name: 'VCheckbox',
  props: {
    label: String,
    checked: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    sendAgree () {
      this.$emit('handleChecbox')
    }
  }
}
</script>
