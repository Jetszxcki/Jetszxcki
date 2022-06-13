<template>
  <q-page v-scroll="updateCurrentScrollHeight">
    <q-page-sticky expand position="top" class="z-max">
      <q-linear-progress
        :value="scrollPercent"
        v-if="scrollPercent > 0"
        size="md"
        instant-feedback
      />
    </q-page-sticky>

    <div class="q-pa-xl bg-navy-blue-1 text-center relative-position">
      <q-img
        class="blog-header-bg-img absolute-bottom"
        :src="`blogs/${bgImg}`"
      />

      <div class="relative-position">
        <q-intersection transition="slide-down" :transition-duration="1000" once>
          <h2 class="font-akshar text-grad-mint q-py-xs q-mb-none hyphen-word-wrap">
            {{ header }}
          </h2>
        </q-intersection>

        <div class="font-pangolin text-faded-grey-2">
          <h4 class="q-mb-sm">
            {{ formatDate(date) }}

            <q-icon
              name="mdi-circle"
              size="10px"
              class="q-mx-md"
            />

            {{ formatDuration(duration) }}
          </h4>
        </div>
      </div>
    </div>

    <Container id="content" container-class="q-px-xl q-pt-md">
      <slot></slot>
    </Container>
  </q-page>
</template>

<script>
import { formatDate, formatDuration } from '../../utils/funcs'
import Container from 'components/Container'

export default {
  components: {
    Container,
  },
  props: {
    bgImg: {
      type: String,
      required: false
    },
    header: {
      type: String,
      default: 'Header'
    },
    date: {
      type: Date,
      default: new Date()
    },
    duration: { // in minutes
      type: Number, 
      default: 1
    }
  },
  data () {
    return {
      scrollPercent: 0
    }
  },
  methods: {
    formatDate,
    formatDuration,
    updateCurrentScrollHeight (scrollInfo) {
      const content = document.getElementById('content')
      const footer = document.getElementById('footer-img')

      const scrollTop = window.scrollY
      const docHeight = document.body.offsetHeight
      const winHeight = window.innerHeight
      const scrollPercent = scrollTop / (
        docHeight - winHeight - content.offsetTop - footer.offsetHeight
      )

      this.scrollPercent = scrollPercent
    }
  }
}
</script>

<style scoped>
.blog-header-bg-img {
  top: 0;
  opacity: 0.2;
}
</style>
