<template>
  <q-card
    @click="$router.push(to)"
    class="full-width full-height bg-navy-blue shadow-10 br-20 q-pa-none flex flex-center transition-zoom-1-05"
    :style="isBgImg ? bgImgClass : ''"
  >
    <q-card-section :horizontal="horizontal && !$q.screen.xs" class="full-width q-pa-none" :class="alignCenter ? 'text-center': 'text-left'">
      <q-img
        v-if="!isBgImg && img && (isNorthImg || isWestImg)"
        :class="isNorthImg || $q.screen.xs ? 'br-t-20' : imgCol"
        :src="`blogs/${img}`"
      />
      <div class="col q-px-xl">
        <q-intersection once transition="scale" :transition-duration="1500">
          <div class="font-akshar text-grad-mint hyphen-word-wrap">
            <h3 v-if="header_3" class="text-weight-bolder" :class="headerClass">{{ header }}</h3>
            <h4 v-if="header_4" class="text-weight-bolder" :class="headerClass">{{ header }}</h4>
            <h5 v-if="header_5" class="text-weight-bolder" :class="headerClass">{{ header }}</h5>
          </div>
        </q-intersection>
        <div v-if="date" class="font-quicksand q-mb-xl text-subtitle1 text-faded-grey-2">
          {{ formatDate(date) }}

          <span v-if="duration > 0">
            <q-icon
              name="mdi-circle"
              color="faded-grey-2"
              class="q-mx-md q-mb-xs"
              size="1px"
            />
            {{ formatDuration(duration) }}
          </span>
        </div>
      </div>
      <q-img
        v-if="!isBgImg && img && (isSouthImg || isEastImg)"
        :class="isSouthImg ? 'br-b-20' : imgCol"
        :src="`blogs/${img}`"
      />
    </q-card-section>
  </q-card>
</template>

<script>
import { formatDate, formatDuration } from '../../utils/funcs'

export default {
  props: {
    header: {
      type: String,
      default: 'Soon'
    },
    horizontal: {
      type: Boolean,
      default: false
    },
    to: {
      type: String,
      default: '/coming-soon'
    },
    duration: { // in minutes
      type: Number,
      required: false
    },
    date: {
      type: Date,
      required: false
    },
    imgDirection: {
      type: String
    },
    img: {
      type: String,
      required: false
    },
    imgCol: {
      type: String,
      default: 'col-4'
    },
    isBgImg: {
      type: Boolean,
      default: false
    },
    headerSize: {
      type: String
    },
    alignCenter: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    formatDate,
    formatDuration,
  },
  computed: {
    finalHeaderSize () {
      const validSizes = [
        'small',
        'medium',
        'large'
      ]

      if (!validSizes.includes(this.headerSize)) {
        return validSizes[1]
      }

      return this.headerSize
    },
    header_3 () {
      return this.finalHeaderSize === 'large'
    },
    header_4 () {
      return this.finalHeaderSize === 'medium'
    },
    header_5 () {
      return this.finalHeaderSize === 'small'
    },
    headerClass () {
      return this.date ? 'q-mb-sm' : ''
    },
    bgImgClass () {
      return `background-image: url(blogs/${this.img}); background-size: cover;`
    },
    finalImgDirection () {
      const validDirs = [
        'north',
        'south',
        'west',
        'east',
      ]
      const defaultVerDir = validDirs[0]
      const defaultHorDir = validDirs[2]

      if (!validDirs.includes(this.imgDirection)) {
        if (this.horizontal) {
          return defaultHorDir
        } else {
          return defaultVerDir
        }
      }

      const verticalDirs = ['north', 'south']
      const horizontalDirs = ['west', 'east']
      if (this.horizontal) {
        if (!horizontalDirs.includes(this.imgDirection)) {
          return defaultHorDir
        }
      } else {
        if (!verticalDirs.includes(this.imgDirection)) {
          return defaultVerDir
        }
      }

      return this.imgDirection
    },
    isNorthImg () {
      return this.finalImgDirection === 'north'
    },
    isSouthImg () {
      return this.finalImgDirection === 'south'
    },
    isWestImg () {
      return this.finalImgDirection === 'west'
    },
    isEastImg () {
      return this.finalImgDirection === 'east'
    }
  }
}
</script>

<style scoped>
.q-card {
  cursor: pointer;
}
</style>
