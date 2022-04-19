<template>
  <div class="flag row">
    <div class="col bg-white br-30 relative-position">
      <!--
        NOTE: border for the blue part of the flag is 24 (and not 30),
        because there is a slight bug (I think) such that when we set it to 30,
        the red border below of the first stripe is seen
      -->
      <div class="bg-blue br-tl-24 absolute sub-design flex flex-center">
        <q-icon
          name="mdi-star"
          color="white"
          size="md"
          v-for="i in 8"
          :key="i"
        />
      </div>

      <div class="row h-11 bg-red br-t-30"></div>
      <div class="row h-11"></div>
      <div class="row h-11 bg-red"></div>
      <div class="row h-11"></div>
      <div class="row h-11 bg-red"></div>
      <div class="row h-11"></div>
      <div class="row h-11 bg-red"></div>
      <div class="row h-11"></div>
      <div class="row h-12 bg-red br-b-30"></div>
    </div>
  </div>
</template>

<style scoped>
.sub-design {
  width: 45%;
  height: 44%;
}
</style>
