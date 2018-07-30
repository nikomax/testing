<template>
  <div class="panorama">
    <img :src="panorama">
  </div>
</template>

<script>
export default {
  name: 'Panorama',
  props: {
    panorama: String
  },
  mounted () {
    console.log('panorama must be')
    $('.panorama').panorama_viewer({
      repeat: false,
      direction: 'horizontal',
      animationTime: 700,
      easing: 'ease-out',
      overlay: true
    })
    console.log('panorama code end')
  }
}
</script>
