<template>
  <q-layout view="lHh Lpr lFf">
    <Navbar />

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
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'

import { useMeta } from 'quasar'

export default {
  name: "MainLayout",
  components: {
    Footer,
    Navbar,
  },
  computed: {
     title () {
      const currPath = this.$route.path

      if (currPath === '/') {
        return 'Jet Albano'
      }

      let title = ''
      let paths = currPath.replace(/\//g, ' ')
      paths = paths.substring(1)
      paths = paths.split(' ')
      
      paths.forEach((path, i) => {
        if (i === 1) {
          title += '- '
        }

        let temp = path
        if (path.indexOf('-') !== -1) {
          temp = ''
          path = path.replace(/-/g, ' ')
          path = path.split(' ')
          path.forEach((p, idx) => {
            temp += p[0].toUpperCase() + p.substring(1)
            if (idx + 1 !== path.length) {
              temp += ' '
            }
          })
        }

        if (i === 2) {
          temp = `(${temp})`
        }

        title += temp[0].toUpperCase() + temp.substring(1)

        if (i + 1 !== paths.length) {
          title += ' '
        }
      })

      return title
    },
    keyword () {
      const kws = {
        '/': 'quasar website',
        '/blogs': 'blog websites',
        '/blogs/arts': 'art blogs',
        '/blogs/arts/the-art-of-mimicry': 'mimicry'
      }
      return kws[this.$route.path]
    }
  },
  mounted () {
    useMeta(() => {
      return {
        title: this.title,
        keywords: {
          name: 'keywords',
          content: this.keyword
        }
      }
    })
  }
}
</script>
