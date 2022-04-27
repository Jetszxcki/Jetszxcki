<template>
  <q-carousel
    transition-prev="slide-right"
    transition-next="slide-left"
    control-text-color="navy-blue"
    control-color="navy-blue"
    control-type="push"
    v-model="slide"
    swipeable
    animated
    infinite
    navigation
    class="fit"
  >
    <q-carousel-slide
      v-for="image, index in images"
      :key="`ss-${index}`"
      :name="`ss-${index}`"
      class="column no-wrap q-pa-none"
    >
      <q-img :src="`screenshots/${image}`" />
    </q-carousel-slide>
  </q-carousel>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      slide: 'ss-0'
    }
  }
}
</script>
