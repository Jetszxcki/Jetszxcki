<template>
  <div
    class="flag row relative-position"
    @mouseover="showLabel = true"
    @mouseout="showLabel = false"
  >
    <div
      class="absolute-center fit flex flex-center hover-label-div"
      style="z-index: 2"
      v-show="showLabel"
    >
      <h3 class="hover-label">Tagalog</h3>
    </div>

    <div id="sun" class="absolute bg-yellow br-50-p"></div>
    <q-icon
      v-for="i in 3"
      :key="i"
      :id="`star-${i}`"
      name="mdi-star"
      color="yellow"
      size="md"
    />

    <div id="triangle-left" class="absolute bg-white br-l-30">
      <div id="triangle-top-right" class="br-l-30"></div>
      <div id="triangle-bottom-right" class="br-l-30"></div>
    </div>

    <div class="col">
      <div class="row bg-blue h-50 br-t-30"></div>
      <div class="row bg-red h-50 br-b-30"></div>
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


<style scoped lang="scss">
#triangle-left {
  width: 45%;
  height: 100%;
}
#triangle-top-right {
  width: 0;
  height: 0;
  border-top: 105px solid $blue;
  border-left: 144px solid transparent;
}
#triangle-bottom-right {
  width: 0;
  height: 0;
  border-bottom: 105px solid $red;
  border-left: 144px solid transparent;
}
#sun {
  width: 35px;
  height: 35px;
  z-index: 1;
  top: 41%;
  left: 10%;
}
[id^="star-"] {
  width: 15px;
  height: 15px;
  z-index: 1;
  position: absolute;
}
#star-1 {
  top: 13%;
  left: 3%;
}
#star-2 {
  top: 46%;
  left: 35%;
}
#star-3 {
  top: 80%;
  left: 3%;
}
</style>
