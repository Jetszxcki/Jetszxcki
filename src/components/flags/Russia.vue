<template>
  <div
    class="flag row relative-position"
    @mouseover="showLabel = true"
    @mouseout="showLabel = false"
  >
    <div class="absolute-center fit flex flex-center hover-label-div" v-show="showLabel">
      <h3 class="hover-label">Russian</h3>
    </div>

    <div class="col">
      <div class="row h-33 bg-white br-t-30"></div>
      <div class="row h-33 bg-blue-5"></div>
      <div class="row h-34 bg-red-5 br-b-30"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showLabel: false
    }
  }
}
</script>