<template>
    <div class="design-item" @click="sendDesign">
      <div class="design-item__container">
        <div class="design-item__image-container">
          <div class="design-item__image">
            <picture>
              <source media="(min-width: 700px)" :srcset="image.src700">
              <source media="(min-width: 1400px)" :srcset="image.src1400">
              <source media="(min-width: 1920px)" :srcset="image.src1920">
              <source media="(min-width: 2200px)" :srcset="image.src2200">
              <img :src="image.src2200" alt="Flowers">
            </picture>
          </div>
        </div>
        <div class="design-item__content">
          <div class="design-item__title">
            {{ title }}
          </div>
          <div class="design-item__desc" v-html="desc">
          </div>
          <div class="design-item__bottom">
            <div class="design-item__price" v-html="price">
            </div>
            <div class="design-item__btn">
              <a href="javascript:void(0)" class="animated-button go-to" @click.stop="sendId">{{ rentTranslations.designs_buttons }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'DesignItem',
  props: {
    image: Object,
    title: String,
    desc: String,
    price: String,
    flatId: String
  },
  methods: {
    sendDesign () {
      this.$emit('getDesign', this.flatId)
    },
    sendId () {
      this.$emit('getId', this.flatId)
    }
  }
}
</script>
