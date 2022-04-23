<template>
  <div
    id="france"
    class="flag row relative-position"
    @mouseover="showLabel = true"
    @mouseout="showLabel = false"
  >
    <div class="absolute-center fit flex flex-center flag-label-div" v-show="showLabel">
      <h3 class="flag-label">French</h3>
    </div>

    <div class="col-4 bg-blue br-l-30"></div>
    <div class="col-4 bg-white"></div>
    <div class="col-4 bg-red br-r-30"></div>
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