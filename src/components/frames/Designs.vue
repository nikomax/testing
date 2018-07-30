<template>
    <div class="designs">
      <div class="back-btn">
        <a href="javascript:void(0)" @click="pageBack()">{{ rentTranslations.btn_back }}</a>
      </div>
      <div class="designs__title">
        {{ rentTranslations.designs_main_title }}
      </div>
      <div class="designs__subtitle">
        {{ rentTranslations.designs_main_subtitle }}
      </div>
      <div class="designs__items">
        <div class="designs__item" v-for="design in designs" :key="design.id">
          <design-item
            :title="design.name"
            :desc="design.description"
            :image="design.renders[0]"
            :flatId="design.id_flat_design"
            v-on:getId="sendId"
            v-on:getDesign="sendDesign"
            :price="price"
          />
        </div>
      </div>
    </div>
</template>

<script>
import DesignItem from '../DesignItem'

export default {
  components: {DesignItem},
  name: 'Designs',
  props: {
    price: String,
    designs: Array
  },
  methods: {
    pageBack () {
      this.$emit('goBack')
    },
    sendDesign (id) {
      this.$emit('getDesign', id)
    },
    sendId (id) {
      console.log(id)
      this.$emit('getId', id)
    }
  }
}
</script>
