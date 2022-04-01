<template>
  <q-layout view="lHh Lpr lFf">
    <q-header reveal class="bg-navy-blue">
      <q-toolbar class="flex flex-center">
        <q-btn
          @click="smoothScrollTo('intro')"
          icon="mdi-home"
          text-color="white"
          size="lg"
          flat
          dense
        >
          <q-tooltip class="text-body1 bg-faded-grey text-navy-blue">
            Home
          </q-tooltip>
        </q-btn>
        <q-btn
          v-for="contact, index of contacts"
          :key="index"
          :icon="contact.icon"
          @click="openContact(contact)"
          text-color="white"
          size="lg"
          flat
          dense
        >
          <q-tooltip class="text-body1 bg-faded-grey text-navy-blue">
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
          color="blue"
        />
      </q-page-scroller>
    </q-page-container>
  </q-layout>
</template>

<script>
import { copyToClipboard, scroll } from 'quasar'

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
      ]
    }
  },

  methods: {
    openContact (contact) {
      if (contact.icon === 'mdi-gmail') {
        copyToClipboard(contact.url)
          .then(() => {
            this.$q.notify({
              message: 'Copied!',
              icon: 'mdi-clipboard-check',
              color: 'green-9',
              classes: 'text-weight-bold',
            })
          })
          .catch(() => {
            this.$q.notify({
              message: 'Can\'t copy to clipboard',
              icon: 'mdi-clipboard-off',
              color: 'red-9',
              classes: 'text-weight-bold',
            })
          })
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
