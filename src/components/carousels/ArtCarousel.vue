<template>
  <div>
    <q-carousel
      transition-prev="slide-right"
      transition-next="slide-left"
      control-text-color="mint-1"
      control-color="mint-1"
      control-type="unelevated"
      navigation-position="top"
      class="bg-navy-blue br-30 q-pa-md shadow-10"
      height="550px"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
      :autoplay="autoplay"
      v-model="slide"
      swipeable
      animated
      infinite
      navigation
      padding
    >
      <q-carousel-slide
        v-for="[art1, art2], index in arts"
        :key="`art-${index}`"
        :name="`art-${index}`"
        class="column no-wrap"
      >
        <div class="row fit justify-start items-center q-gutter-xs no-wrap">
          <q-img class="br-30 col-6 full-height" :src="`${imagesDirPrefix}${art1.image}`">
            <div class="absolute-bottom row">
              <div class="col-10 q-pr-sm">
                <div class="text-h4 font-pangolin">
                  {{ art1.title }}
                  <q-chip square dense :color="art1.media.color" text-color="navy-blue" :icon="art1.media.icon" size="lg">
                    {{ art1.media.text }}
                  </q-chip>
                </div>
                <div class="text-subtitle1">{{ art1.description }}</div>
              </div>
              <div class="col-2 flex justify-end items-center q-pt-sm">
                <q-btn
                  round
                  text-color="mint-1"
                  color="navy-blue"
                  icon="mdi-arrow-expand-all"
                  @click="showFullImage(art1.image)"
                />
              </div>
            </div>
          </q-img>
          <q-img class="br-30 col-6 full-height" :src="`${imagesDirPrefix}${art2.image}`">
            <div class="absolute-bottom row">
              <div class="col-12 col-md-10 q-pr-sm">
                <div class="text-h4 font-pangolin">
                  {{ art2.title }}
                  <q-chip square dense :color="art2.media.color" text-color="navy-blue" :icon="art2.media.icon" size="lg">
                    {{ art2.media.text }}
                  </q-chip>
                </div>
                <div class="text-subtitle1">{{ art2.description }}</div>
              </div>
              <div class="col-12 col-md-2 flex justify-end items-center q-pt-sm">
                <q-btn
                  round
                  text-color="mint-1"
                  color="navy-blue"
                  icon="mdi-arrow-expand-all"
                  @click="showFullImage(art2.image)"
                />
              </div>
            </div>
          </q-img>
        </div>
      </q-carousel-slide>
    </q-carousel>

    <q-dialog v-model="dialog" persistent>
      <q-card class="q-dialog-plugin" style="min-width: 80vw;">
        <q-img :src="`${imagesDirPrefix}${expandedImage}`">
          <div class="transparent absolute-right">
            <q-btn
              round
              text-color="navy-blue"
              color="grad-mint"
              icon="mdi-arrow-collapse-all"
              @click="dialog = false"
            />
          </div>
        </q-img>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
const media = {
  pencil: {
    text: 'Pencil',
    icon: 'mdi-pencil',
    color: 'yellow-4'
  },
  msPaint: {
    text: 'MS Paint',
    icon: 'mdi-palette',
    color: 'blue-4'
  }
}

export default {
  data () {
    return {
      imagesDirPrefix: 'arts/',
      slide: 'art-0',
      autoplay: true,
      dialog: false,
      expandedImage: '',
      arts: [
        [
          {
            image: 'Study.png',
            title: 'Study',
            description: 'I can\'t study without music!',
            media: media.msPaint
          },
          {
            image: 'Tsuki.jpg',
            title: 'Tsuki',
            description: 'Similar to me, but he\'s tall',
            media: media.pencil
          }
        ],
        [
          {
            image: 'AnimeGirl.jpg',
            title: 'Anime Girl',
            description: 'I forgot her name ~_~',
            media: media.pencil
          },
          {
            image: 'EatSleepCode.png',
            title: 'Eat Sleep Code',
            description: 'A simple programmer meme',
            media: media.msPaint
          }
        ],
        [
          {
            image: 'Me.png',
            title: 'Me',
            description: 'Those clothes are not just painted, they\'re real',
            media: media.msPaint
          },
          {
            image: 'Programmer.png',
            title: 'A Programmer\'s Desk',
            description: 'Drink then think',
            media: media.msPaint
          }
        ],
        [
          {
            image: 'Rem.jpg',
            title: 'Rem',
            description: 'A cute character I drew for a coursemate',
            media: media.pencil
          },
          {
            image: 'Retaliate.png',
            title: 'Retaliate',
            description: 'Violence in art',
            media: media.msPaint
          }
        ]
      ]
    }
  },
  methods: {
    showFullImage (img) {
      this.expandedImage = img
      this.dialog = true
    }
  }
}
</script>
