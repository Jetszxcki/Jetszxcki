<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-navy-blue">
      <q-toolbar class="flex flex-center">
        <q-btn
          @click="smoothScrollTo('intro')"
          icon="mdi-home"
          size="lg"
          text-color="mint-1"
          flat
          dense
        >
          <q-tooltip class="text-body1 bg-grad-mint text-navy-blue shadow-5 font-pangolin">
            Home
          </q-tooltip>
        </q-btn>
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

      <q-page-scroller
        position="bottom-right"
        :scroll-offset="150"
        :offset="[18, 18]"
        :duration="500"
      >
        <q-btn
          fab
          icon="mdi-chevron-up"
          color="grad-mint"
          text-color="navy-blue"
          class="shadow-10"
        />
      </q-page-scroller>
    </q-page-container>
  </q-layout>
</template>

<script>
import { copy } from '../utils/funcs.js'
import { scroll } from 'quasar'

export default {
  name: "MainLayout",

  data () {
    return {
      contacts: [
        {
          name: 'Twitter',
          icon: 'mdi-twitter',
          url: 'https://twitter.com/jetszxcki',
        },
        {
          name: 'Facebook',
          icon: 'mdi-facebook',
          url: 'https://www.facebook.com/jetszxcki',
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
      if (contact.icon === 'mdi-gmail') {
        copy(contact.url)
      } else {
        window.open(contact.url, '_blank')
      }
    },
    smoothScrollTo (id) {
      const { getScrollTarget, setVerticalScrollPosition } = scroll
      const el = document.getElementById(id)
      const target = getScrollTarget(el)
      const offset = el.offsetTop
      setVerticalScrollPosition(target, offset, 500)
    }
  }
};
</script>
