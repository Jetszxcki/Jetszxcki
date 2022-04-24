<template>
  <q-intersection transition="scale" :transition-duration="1500" once>
    <q-card class="shadow-10 transition-up-20 br-30 bg-navy-blue-1" style="min-height: 720px">
      <q-card-section class="flex flex-center">
        <q-img
          :src="`logos/${image}`"
          :class="imageClass"
          width="200px"
          class="q-my-md"
        />
      </q-card-section>

      <q-card-section class="text-center">
        <div class="text-h4 font-pangolin text-green-3 q-mb-sm" style="letter-spacing: 2px">
          <b>{{ name }}</b>
        </div>

        <div class="q-mb-md q-px-md flex flex-center">
          <q-chip
            v-for="t, index in tech"
            :key="index"
            :icon="t.icon"
            :text-color="t.color"
            color="navy-blue"
            class="text-weight-bold"
            size="lg"
            square
            dense
          >
            {{ t.name }}
          </q-chip>
        </div>

        <div class="text-h6 text-center text-faded-grey-2 q-px-md q-py-md" style="line-height: 27px">
          {{ description }}
        </div>
      </q-card-section>

      <q-separator color="dark" class="q-mx-xl" />

      <q-card-actions class="flex flex-center">
        <q-btn
          v-for="source, index in sources"
          :key="index"
          @click="redirectOrCopy(source.link)"
          :icon="source.icon"
          color="green-3"
          size="lg"
          flat
          round
        />
      </q-card-actions>
    </q-card>
  </q-intersection>
</template>

<script>
import { copy } from '../../utils/funcs.js'

export default {
  props: {
    name: {
      type: String,
      default: 'Project Name'
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
          link: 'https://google.com'
        },
        {
          icon: 'mdi-link-variant',
          link: 'https://google.com'
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
      default: () => []
    }
  },
  methods: {
    redirectOrCopy (link) {
      if (link.startsWith('http') || link.startsWith('https')) {
        window.open(link, '_blank')
      } else {
        copy(link)
      }
    }
  }
}
</script>
