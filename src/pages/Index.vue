<template>
  <q-page class="q-pb-xl">
    <Container id="intro" class="q-py-xl bg-grad-navy-blue">
      <q-intersection transition="slide-down" :transition-duration="1000" once>
        <div class="row flex-center">
          <h6 class="text-white q-mb-none font-pangolin">
            Hi, I'm
          </h6>
        </div>
      </q-intersection>

      <q-intersection transition="fade" :transition-duration="2000" once>
        <div class="row flex-center">
          <p class="text-center q-mt-none q-mb-md font-jua text-grad-mint-blue full-name">
            JETHRO ALBANO
          </p>
        </div>
      </q-intersection>

      <div class="row flex-center">
        <q-separator
          color="white"
          class="q-mb-lg intro-separator"
        />
      </div>

      <div class="row flex-center text-center">
        <h4 id="intro-subtext" class="font-pangolin q-mt-none text-white q-px-lg">
          &nbsp; <!-- filler only, before animation kicks in -->
        </h4>
      </div>
    </Container>
        
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 220 1440 100"
      class="bg-navy-blue"
    >
      <path
        fill="#fff"
        fill-opacity="1"
        d="M0,320L120,304C240,288,480,256,720,256C960,256,1200,288,1320,304L1440,320L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
      ></path>
    </svg>

    <!-- TODO: image of airport tower on top of svg -->
    <!-- TODO: coffee as fuel instead of aviation kerosenes -->
    <!-- TODO: add transitions -->
    <Container>
      <div class="row">
        <div class="col-12 col-md-6 q-px-xl q-pb-xl q-pt-md flex flex-center">
          <h2>Raptor Jet Image</h2>
        </div>
        <div class="col-12 col-md-6 q-px-xl q-pb-xl q-pt-md">
          <h2 class="q-mb-none text-grad-magenta-blue">An Aircraft on Foot</h2>
          <h5 class="text-faded-grey-1">
            <span class="text-dark">
              Is it a bird, is it a plane? --- No, it's a Jet!
            </span>
            <br>

            Hi! I'm an average-sized aircraft currently stationed in the Philippines.
            Incapable of flight, I create apps and programs as a software developer,
            and currently works in a crypto-oriented company,

            <a href="https://scibizinformatics.com/#/about" target="_blank">
              Scibiz Informatics,
            </a>

            for almost 3 years now.
          </h5>
        </div>
      </div>
    </Container>

    <Container container-class="bg-navy-blue br-30 shadow-24 q-py-xl">
      <div class="row q-px-xl">
        <div class="col-12 col-md-5 q-pr-lg q-pb-lg flex flex-center">
          <h2 class="q-mb-none q-mt-lg q-py-xs text-grad-mint-blue full-width">
            A Polyglot In-Progress
          </h2>
          <h4 class="full-width q-mb-none text-faded-grey-2">
            Coincidence?
          </h4>
          <h5 class="text-white q-mb-none q-mt-md">
            Having it heard from a video game, the French accent sparked my interest towards language learning.
            Currently at my 6th month of study, I can fairly speak and understand French,
            and a little bit of Russian.
          </h5>
        </div>

        <div class="col-12 col-md-7">
          <div class="row h-50 justify-evenly">
            <Philippines class="q-my-md q-mx-sm light-blue-shadow" />
            <USA class="q-my-md q-mx-sm light-blue-shadow" />
          </div>
          <div class="row h-50 justify-evenly">
            <France class="q-my-md q-mx-sm light-blue-shadow" />
            <Russia class="q-my-md q-mx-sm light-blue-shadow" />
          </div>
        </div>
      </div>

      <div class="row q-px-xl q-pt-xl reverse-wrap justify-evenly">
        <div class="col-12 col-md-7 flex flex-center q-pa-md">
          <div class="row q-gutter-md flex-center">
            <q-btn
              push
              no-caps
              size="xl"
              color="navy-blue-1"
              class="col-xs-12 col-sm-auto font-pangolin"
              v-for="pl in progLangs"
              :key="pl.name"
              :class="pl.classes"
              :text-color="pl.textColor"
              :label="pl.name"
              :icon="pl.icon"
            />
          </div>
        </div>
        <div class="col-12 col-md-4 q-pb-lg flex flex-center">
          <h5 class="text-white q-mb-none">
            <span class="text-faded-grey-2">
              Born with the blood of an aircraft,
              I can also read and write computer languages!
            </span>

            Mainly a backend developer at work,
            I have significant knowledge on Django and Python,
            but my passion for arts and design lead me writing
            
            <span class="text-italic text-faded-grey-2">
              (and speaking)
            </span>

            on frontend languages as well.
          </h5>
        </div>
      </div>
    </Container>

    <Container>
      <div class="row reverse-wrap q-px-xl q-mt-xl flex-center">
        <div class="col-12 col-md-6 q-pt-xl q-px-xl">
          <div class="row justify-evenly">
            <q-img
              :src="mgmtTool.image"
              v-for="mgmtTool, index in mgmtTools"
              :key="`tool-card-${index}`"
              :class="mgmtTool.class"
              class="max-w-280 shadow-up-24"
              :width="$q.screen.xs ? '200px' : ''"
            />
          </div>
        </div>

        <div class="col-12 col-md-6 q-pt-xl">
          <h2 class="text-grad-magenta-blue q-py-xs hyphen-word-wrap">
            With great codebase, <br>comes great responsibility.
          </h2>
          <h5 class="text-dark">
            Project and code management is key to smooth progress.
            <span class="text-faded-grey-1">
              Among these are tools that I've used to maintain task organization and keep my codes safe.
            </span>
          </h5>
        </div>
      </div>
    </Container>
  </q-page>
</template>

<script>
import Philippines from 'components/flags/Philippines'
import Russia from 'components/flags/Russia'
import France from 'components/flags/France'
import USA from 'components/flags/USA'
import Container from 'components/Container'

export default {
  name: "PageIndex",
  components: {
    Container,
    Philippines,
    Russia,
    France,
    USA,
  },
  data () {
    return {
      typeSpeed: 50, // in milliseconds
      mgmtTools: [
        {
          class: 'br-50-p rotate-350',
          image: 'github-logo.png',
        },
        {
          class: 'br-10-p rotate-10',
          image: 'trello-logo.png',
        },
        {
          class: 'br-50-p mt-n-60',
          image: 'slack-logo.png',
        },
      ],
      progLangsOrigClasses: [
        'col-md-5',
        'col-md-5',
        'col-md-4',
        'col-md-3',
        'col-md-4',
        'col-md-4',
        'col-md-3',
        'col-md-4',
        'col-md-4',
        'col-md-4'
      ],
      progLangs: [
        {
          name: 'Python',
          icon: 'img:python-logo.png',
          textColor: 'yellow',
          classes: 'col-md-5'
        },
        {
          name: 'Django',
          icon: 'img:django-logo.jpg',
          textColor: 'green-7',
          classes: 'col-md-5'
        },
        {
          name: 'Quasar',
          icon: 'img:quasar-logo.png',
          textColor: 'light-blue',
          classes: 'col-md-4'
        },
        {
          name: 'Nuxt',
          icon: 'img:nuxt-logo.svg',
          textColor: 'teal',
          classes: 'col-md-3'
        },
        {
          name: 'Vue',
          icon: 'img:vue-logo.png',
          textColor: 'green-12',
          classes: 'col-md-4'
        },
        {
          name: 'Javascript',
          icon: 'img:js-logo.png',
          textColor: 'yellow',
          classes: 'col-md-4'
        },
        {
          name: 'HTML',
          icon: 'img:html-logo.png',
          textColor: 'orange',
          classes: 'col-md-3'
        },
        {
          name: 'CSS',
          icon: 'img:css-logo.png',
          textColor: 'blue-9',
          classes: 'col-md-4'
        },
        {
          name: 'Java SE',
          icon: 'img:java-logo.png',
          textColor: 'red',
          classes: 'col-md-4'
        },
        {
          name: 'C',
          icon: 'img:c-logo.webp',
          textColor: 'indigo-7',
          classes: 'col-md-4'
        },
      ]
    }
  },
  watch: {
    '$q.screen.width': {
      handler (n, o) {
        if (n <= 1146 && this.$q.screen.gt.sm) {
          this.progLangs.map(pl => {
            pl.classes = 'col-md-5'
            return pl
          })
        } else if (n > 1146) {
          this.progLangs.map(pl => {
            pl.classes = this.progLangsOrigClasses[this.progLangs.indexOf(pl)]
            return pl
          })
        }
      }
    }
  },
  mounted () {
    this.startTypingAnimation()
  },
  methods: {
    startTypingAnimation () {
      let i = 0;

      const type = () => {
        const subtext = 'Like birds, not all jets fly. Some code.';

        if (i < subtext.length) {
          const introSubtext = document.getElementById('intro-subtext')

          // appended span tag per character instead of per phrase ...
          // ... because typing animation shows char 1 by 1, thus, span class does not take effect on previous chars before the end tag
          // ... since they are already shown on screen before the ending span tag is appended
          if ((i >= 12 && i <= 28) || i >= 35) {
            introSubtext.innerHTML += '<span class="text-faded-grey-2">' + subtext.charAt(i) + '</span>';
          } else {
            if (i === 0) {
              // remove space
              introSubtext.innerHTML = subtext.charAt(i);
            } else {
              introSubtext.innerHTML += subtext.charAt(i);
            }
          }

          if (i === 28) {
            // added pause after first sentence (better user experience)
            setTimeout(type, 800);
          } else {
            setTimeout(type, this.typeSpeed);
          }
          i++;
        }
      }
      setTimeout(type, 1500)
    }
  }
}
</script>

<style scoped>
.intro-separator {
  width: 250px;
}
.full-name {
  font-size: 85px;
  line-height: 90%;
}
.max-w-280 {
  max-width: 280px;
}
</style>
