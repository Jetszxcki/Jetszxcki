<template>
  <div>
    <q-carousel
      transition-prev="slide-right"
      transition-next="slide-left"
      control-text-color="mint-1"
      control-color="mint-1"
      control-type="push"
      class="bg-navy-blue-1 br-t-30 q-pa-md"
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
        v-for="art, index in arts"
        :key="`art-${index}`"
        :name="`art-${index}`"
        class="column no-wrap"
      >
        <div class="row fit">
          <q-img class="br-30 col full-height" :src="`${imagesDirPrefix}${art.image}`">
            <div class="absolute-bottom row">
              <div class="col-10 q-pr-sm">
                <div class="text-h5 font-pangolin">
                  {{ art.title }}
                  <q-chip square dense :color="art.media.color" text-color="navy-blue" :icon="art.media.icon" size="md">
                    {{ art.media.text }}
                  </q-chip>
                </div>
                <div class="text-subtitle1">{{ art.description }}</div>
              </div>
              <div class="col-2 flex justify-end items-center q-pt-sm">
                <q-btn
                  round
                  text-color="mint-1"
                  color="navy-blue"
                  icon="mdi-arrow-expand-all"
                  @click="showFullImage(art.image)"
                />
              </div>
            </div>
          </q-img>
        </div>
      </q-carousel-slide>
    </q-carousel>

    <q-dialog v-model="dialog">
      <q-card class="q-dialog-plugin" style="min-width: 80vw;">
        <q-img
          :src="`${imagesDirPrefix}${expandedImage}`"
          class="no-border-radius"
        />
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
        },
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
        },
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
        },
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
