<template>
  <div
    class="flag row"
    @mouseover="showLabel = true"
    @mouseout="showLabel = false"
  >
    <div class="col br-30 relative-position">
      <div class="br-30 absolute-center fit flex flex-center hover-label-div" style="z-index: 1" v-show="showLabel">
        <h3 class="hover-label">{{ language }}</h3>
      </div>
      
      <q-img :src="`flags/${image}`" class="br-30" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    language: {
      type: String,
      default: 'Hover Text'
    },
    image: {
      type: String,
      default: 'Image here'
    }
  },
  data () {
    return {
      showLabel: false
    }
  }
}
</script>

<style scoped>
.flag {
  min-width: 250px;
  min-height: 170px;
  border-radius: 30px;
}
</style>
