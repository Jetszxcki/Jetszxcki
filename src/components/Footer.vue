<template>
  <div>
    <q-img src="ocean.svg" style="min-height: 200px" />

    <div class="bg-navy-blue-1 row q-px-xl q-pb-xl text-faded-grey-2">
      <div class="col">
        <Container container-class="no-shadow">
          <div class="row">
            <div class="col-12 col-md-3 flex flex-center">
              <q-intersection transition="scale" :transition-duration="2000" once>
                <q-btn
                  round
                  flat
                  class="home-btn-footer"
                  @click="scrollTo('the-jet')"
                >
                  <q-img src="logos/jet-logo-1.svg" />
                </q-btn>
              </q-intersection>
            </div>

            <div class="col-12 col-md-3 q-mt-xl">
              <div class="text-h4 text-center font-pangolin q-mb-md text-weight-bolder">
                Explore
              </div>
              <div
                class="row flex-center"
                v-for="section, index in sections"
                :key="index"
              >
                <q-btn
                  @click="scrollTo(section.to)"
                  :label="section.name"
                  class="col-8 q-my-xs"
                  padding="none"
                  size="lg"
                  rounded
                  no-caps
                  flat
                />
              </div>
            </div>

            <div class="col-12 col-md-3 q-mt-xl">
              <div class="text-h4 text-center font-pangolin q-mb-md text-weight-bolder">
                Follow
              </div>
              <div
                class="row flex-center"
                v-for="social, index in socials"
                :key="index"
              >
                <q-btn
                  :label="social.name"
                  class="col-8 q-my-xs"
                  :href="social.url"
                  target="_blank"
                  padding="none"
                  size="lg"
                  rounded
                  no-caps
                  flat
                />
              </div>
            </div>

            <div class="col-12 col-md-3 q-mt-xl">
              <div class="text-h4 text-center font-pangolin q-mb-md text-weight-bolder">
                Contacts
              </div>
              <div class="row flex-center text-h6">skyjeth137120@gmail.com</div>
              <div class="row flex-center text-h6">+639-75-463-6841</div>
              <br>
              <div class="row flex-center text-h6">&copy; 2022</div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  </div>
</template>

<script>
import Container from 'components/Container'

import { smoothScrollTo } from '../utils/funcs.js'

export default {
  components: {
    Container
  },
  data () {
    return {
      socials: [
        {
          name: 'Twitter',
          url: 'https://twitter.com/jetszxcki',
        },
        {
          name: 'Facebook',
          url: 'https://www.facebook.com/jetszxcki',
        },
        {
          name: 'Github',
          url: 'https://github.com/Jetszxcki',
        },
        {
          name: 'Linkedin',
          url: 'https://www.linkedin.com/in/jethro-albano-471219191/',
        },
      ],
      sections: [
        {
          name: 'The Aircraft',
          to: 'the-aircraft'
        },
        {
          name: 'The Polyglot',
          to: 'the-polyglot'
        },
        {
          name: 'The Eco-Friendly',
          to: 'the-eco-friendly'
        },
        {
          name: 'The Artist',
          to: 'the-artist'
        }
      ]
    }
  },
  methods: {
    scrollTo (id) {
      smoothScrollTo(id, document)
    }
  }
}
</script>

<style scoped>
.home-btn-footer {
  width: 200px;
  height: 200px;
}
</style>
