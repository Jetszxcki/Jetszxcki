<template>
  <Container style="height: 100vh">
    <div class="row flex-center">
      <q-intersection transition="slide-down" class="z-top" :transition-duration="1000" once>
        <h1 class="q-mr-xs">4</h1>
      </q-intersection>

      <q-intersection transition="fade" class="z-top" :transition-duration="3000" once>
        <q-btn
          color="navy-blue"
          text-color="mint"
          size="xl"
          push
          round
          loading
        >
          <template v-slot:loading>
            <q-spinner-puff />
          </template>
        </q-btn>
      </q-intersection>

      <q-intersection transition="slide-up" class="z-top" :transition-duration="1000" once>
        <h1>4</h1>
      </q-intersection>
    </div>

    <div class="row flex-center mt-n-60">
      <q-intersection transition="slide-down" class="z-top" :transition-duration="2000" once>
        <h6 class="q-ml-sm q-my-none font-pangolin">Nothing here</h6>
      </q-intersection>
    </div>

    <div class="row flex-center">
      <q-intersection transition="slide-down" class="z-top" :transition-duration="2000" once>
        <q-btn
          @click="$router.go(-1)"
          icon="mdi-arrow-left"
          class="q-ml-sm q-mt-md font-pangolin"
          color="grey-4"
          text-color="navy-blue-1"
          size="md"
          rounded
          unelevated
        />
      </q-intersection>
    </div>

    <q-img
      src="trees.svg"
      class="absolute-bottom"
      style="min-height: 200px;"
    />
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
