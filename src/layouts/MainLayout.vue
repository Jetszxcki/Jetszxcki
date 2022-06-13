<template>
  <q-layout view="lHh Lpr lFf">
    <Navbar />

    <q-page-container>
      <router-view />
      <Footer />

      <q-page-scroller
        position="bottom-right"
        :scroll-offset="150"
        :offset="[18, 18]"
        :duration="500"
      >
        <q-intersection transition="rotate" :transition-duration="500">
          <q-btn
            fab
            icon="mdi-chevron-up"
            color="grad-mint"
            text-color="navy-blue"
            class="shadow-10"
          />
        </q-intersection>
      </q-page-scroller>
    </q-page-container>
  </q-layout>
</template>

<script>
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'

export default {
  name: "MainLayout",
  components: {
    Footer,
    Navbar,
  }
}
</script>
