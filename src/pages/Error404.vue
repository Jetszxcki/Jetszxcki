<template>
  <Container style="height: 100vh">
    <div class="row flex-center">
      <q-intersection transition="slide-down" :transition-duration="1000" once>
        <h1 class="q-mr-xs">4</h1>
      </q-intersection>

      <q-intersection transition="fade" :transition-duration="3000" once>
        <q-btn
          @click="$router.go(-1)"
          color="dark"
          text-color="white"
          icon="mdi-crosshairs-gps"
          size="xl"
          push
          round
        />
      </q-intersection>

      <q-intersection transition="slide-up" :transition-duration="1000" once>
        <h1>4</h1>
      </q-intersection>

    </div>

    <div class="row flex-center mt-n-60">
      <q-intersection transition="slide-down" :transition-duration="2000" once>
        <h6 class="q-my-none q-ml-md">
          Nothing here
        </h6>
      </q-intersection>
    </div>
  </Container>
</template>

<script>
import Container from 'components/Container'

export default {
  name: "Error404",
  components: {
    Container,
  }
}
</script>
