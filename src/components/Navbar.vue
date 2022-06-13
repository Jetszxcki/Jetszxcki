<template>
  <q-header reveal class="bg-navy-blue-1">
    <q-toolbar class="flex flex-center">
      <q-btn
        v-for="tab, index of tabs"
        :key="index"
        :icon="tab.icon"
        :to="tab.path"
        @click="openTab(tab)"
        :text-color="getNavBtnColor(tab)"
        size="lg"
        flat
        dense
      >
        <q-menu
          v-if="tab.name.toLowerCase() === 'contacts'"
          transition-show="jump-down"
          transition-hide="jump-up"
          class="bg-grad-mint"
          auto-close
          :offset="[0, 3]"
        >
          <q-list>
            <q-item
              v-for="contact, idx in contacts"
              @click="openContact(contact)"
              :key="idx"
              class="font-pangolin"
              clickable
              v-ripple
            >
              <q-item-section>
                <q-icon
                  :name="contact.icon"
                  color="navy-blue"
                  size="md"
                >
                  <q-tooltip
                    class="text-body1 bg-grad-mint text-navy-blue shadow-5 font-pangolin"
                    anchor="center start"
                    self="center right"
                  >
                    {{ contact.name }}
                  </q-tooltip>
                </q-icon>
              </q-item-section>
            </q-item>
          </q-list>
        </q-menu>

        <q-tooltip class="text-body1 bg-grad-mint text-navy-blue shadow-5 font-pangolin">
          {{ tab.name }}
        </q-tooltip>
      </q-btn>
    </q-toolbar>
  </q-header>
</template>

<script>
import { copy, smoothScrollTo } from '../utils/funcs.js'

export default {
  data () {
    return {
      tabs: [
        {
          name: 'Home',
          icon: 'mdi-home',
          path: '/'
        },
        {
          name: 'The Aircraft',
          icon: 'mdi-airplane mdi-rotate-45',
          path: '/coming-soon'
        },
        {
          name: 'The Polyglot',
          icon: 'mdi-head-dots-horizontal',
          path: '/coming-soon'
        },
        {
          name: 'The Eco-Friendly',
          icon: 'mdi-leaf',
          path: '/coming-soon'
        },
        {
          name: 'The Artist',
          icon: 'mdi-palette',
          path: '/coming-soon'
        },
        {
          name: 'Blogs',
          icon: 'mdi-pen',
          path: '/blogs'
        },
        {
          name: 'Contacts',
          icon: 'mdi-phone'
        }
      ],
      contacts: [
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
    getNavBtnColor (tab) {
      const currentPath = this.$route.path
      if (currentPath.startsWith(tab.path)) { // include children paths
        if (tab.path === '/') {
          if (currentPath === '/') {
            return 'mint-1'
          }
        } else {
          return 'mint-1'
        }
      }
    },
    openTab (tab) {
      if (!tab.name === 'Contacts') {
        const path = tab.path
        if (this.$route.path === path) {
          smoothScrollTo(path.substring(1), document)
        } else {
          this.$router.push(path)
        }
      }
    },
    openContact (contact) {
      if (contact.name === 'Gmail') {
        copy(contact.url)
      } else if (contact.name === 'Home') {
        if (this.$route.path === '/') {
          smoothScrollTo('home', document)
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
