<template>
  <q-intersection transition="scale" :transition-duration="1500" once>
    <q-card class="shadow-10 transition-zoom-1-1 br-30 bg-navy-blue-1 mh-620">
      <q-card-section class="flex flex-center">
        <q-img
          :src="`logos/${image}`"
          :class="imageClass"
          width="100px"
          class="q-my-md"
        />
      </q-card-section>

      <q-card-section class="text-center">
        <div class="text-h5 font-pangolin text-grad-mint q-mb-sm">
          <b>{{ name }}</b>
        </div>


        <div class="q-mb-md q-px-md flex flex-center">
          <q-chip
            v-for="t, index in tech"
            :key="index"
            :icon="t.icon"
            :text-color="t.color"
            :ripple="false"
            color="navy-blue"
            class="text-weight-bold font-pangolin q-pa-sm"
            size="md"
            square
            dense
          >
            {{ t.name }}
          </q-chip>
        </div>

        <p class="text-white text-body1 q-mb-none">{{ year }}</p>
        <div class="text-body1 text-center text-faded-grey-2 q-px-md q-py-md" style="line-height: 27px">
          {{ description }}
        </div>
      </q-card-section>

      <q-separator color="dark" class="q-mx-xl" />

      <q-card-actions class="flex flex-center">
        <q-btn
          v-for="source, index in sources"
          :key="index"
          @click="clickAction(source.action)"
          :icon="source.icon"
          color="mint"
          size="lg"
          flat
          round
        />
      </q-card-actions>
    </q-card>

    <q-dialog v-model="screenshotsDialog">
      <q-card :class="ssCardClass">
        <ScreenshotsCarousel :images="screenshots" />
      </q-card>
    </q-dialog>
  </q-intersection>
</template>

<script>
import ScreenshotsCarousel from 'components/carousels/ScreenshotsCarousel'
import { copy } from '../../utils/funcs.js'

const projCardActionTypes = {
  redirect: 'redirect',
  copy: 'copy',
  screenshots: 'screenshots'
}

export default {
  components: {
    ScreenshotsCarousel
  },
  props: {
    name: {
      type: String,
      default: 'Project Name'
    },
    year: {
      type: String,
      default: 'Year Here'
    },
    description: {
      type: String,
      default: 'Description about your project here.'
    },
    sources: {
      type: Array,
      default: () => [
        {
          icon: 'mdi-github',
          action: {
            data: 'https://google.com',
            type: projCardActionTypes.redirect
          }
        },
        {
          icon: 'mdi-link-variant',
          action: {
            data: 'https://google.com',
            type: projCardActionTypes.redirect
          }
        }
      ]
    },
    image: {
      type: String,
      required: true
    },
    imageClass: {
      type: String,
      default: ''
    },
    tech: {
      type: Array,
      default: () => [
        {
          name: 'Django',
          color: 'green-4'
        },
        {
          name: 'Telegram',
          color: 'blue-4'
        },
        {
          name: 'Twitter',
          icon: 'mdi-cancel',
          color: 'blue-3'
        },
        {
          name: 'Reddit',
          icon: 'mdi-cancel',
          color: 'orange-4'
        }
      ]
    }
  },
  data () {
    return {
      screenshots: [],
      screenshotsDialog: false,
      ssCardClass: 'q-dialog-plugin full-width no-border-radius'
    }
  },
  methods: {
    clickAction (action) {
      if (action.type === projCardActionTypes.redirect) {
        window.open(action.data, '_blank')
      } else if (action.type === projCardActionTypes.copy) {
        copy(action.data)
      } else if (action.type === projCardActionTypes.screenshots) {
        this.screenshotsDialog = true
        this.screenshots = action.data

        if (this.name.toLowerCase() === 'honk-a-bet') {
          this.ssCardClass += ' mw-80'
        }
      }
    }
  }
}
</script>

<style scoped>
.mw-80 {
  min-width: 80vw;
}
.mh-620 {
  min-height: 620px
}
</style>
