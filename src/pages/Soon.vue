<template>
  <div class="column flex flex-center q-px-xl text-center" style="height: 100vh">
    <div class="row flex-center z-top">
      <q-intersection transition="slide-down" :transition-duration="2000" once>
      <h2 class="q-my-md">Coming Soon</h2>
      </q-intersection>
    </div>
    <div class="row flex-center z-top">
      <q-btn
        @click="$router.go(-1)"
        icon="mdi-arrow-left"
        label="Go back"
        class="font-pangolin"
        color="grey-4"
        text-color="navy-blue-1"
        size="lg"
        rounded
        unelevated
      />
    </div>

    <q-img
      src="soon.svg"
      class="absolute-bottom"
      style="min-height: 220px"
    />
  </div>
</template>
