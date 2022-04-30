<template>
  <q-layout view="lHh Lpr lFf">
    <q-header reveal class="bg-navy-blue-1">
      <q-toolbar class="flex flex-center">
        <q-btn
          v-for="contact, index of contacts"
          :key="index"
          :icon="contact.icon"
          @click="openContact(contact)"
          size="lg"
          text-color="white"
          flat
          dense
        >
          <q-tooltip class="text-body1 bg-grad-mint text-navy-blue shadow-5 font-pangolin">
            {{ contact.name }}
          </q-tooltip>
        </q-btn>
      </q-toolbar>
    </q-header>

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
import Footer from 'components/Footer'

import { copy, smoothScrollTo } from '../utils/funcs.js'

export default {
  name: "MainLayout",
  components: {
    Footer,
  },
  data () {
    return {
      contacts: [
        {
          name: 'Home',
          icon: 'mdi-home',
          url: 'https://jetszxcki.github.io/Jetszxcki/',
        },
        {
          name: 'Facebook',
          icon: 'mdi-facebook',
          url: 'https://www.facebook.com/jetszxcki',
        },
        {
          name: 'Twitter',
          icon: 'mdi-twitter',
          url: 'https://twitter.com/jetszxcki',
        },
        {
          name: 'Gmail',
          icon: 'mdi-gmail',
          url: 'skyjeth1371120@gmail.com',
        },
        {
          name: 'Github',
          icon: 'mdi-github',
          url: 'https://github.com/Jetszxcki',
        },
        {
          name: 'Linkedin',
          icon: 'mdi-linkedin',
          url: 'https://www.linkedin.com/in/jethro-albano-471219191/',
        },
        {
          name: 'Resume',
          icon: 'mdi-newspaper-variant',
          url: 'https://drive.google.com/file/d/1I8UjDpSDRSRPotAMnJ4eHADd0edQFsLJ/view?usp=sharing',
        },
      ]
    }
  },
  methods: {
    openContact (contact) {
      if (contact.name === 'Gmail') {
        copy(contact.url)
      } else if (contact.name === 'Home') {
        if (this.$route.path === '/') {
          smoothScrollTo('the-jet', document)
        } else {
          this.$router.push('/')
        }
      } else {
        window.open(contact.url, '_blank')
      }
    }
  }
}
</script>
