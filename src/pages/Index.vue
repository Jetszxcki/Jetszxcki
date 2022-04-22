<!-- TODO:
  = image of airport tower on top of svg 
  = add transitions
  = USA flag has a weird white below at same dimensions
  = github image showing white border
  = add overlay text on mgmt tools and languages
-->
<template>
  <q-page class="q-pb-xl">
    <Container id="the-jet" class="q-pt-xl bg-grad-navy-blue">
      <q-intersection transition="slide-down" :transition-duration="1000" once>
        <div class="row flex-center">
          <h6 class="text-mint q-mb-none font-pangolin">
            Hi, I'm
          </h6>
        </div>
      </q-intersection>

      <q-intersection transition="fade" :transition-duration="2000" once>
        <div class="row flex-center">
          <p class="text-center q-mt-none q-mb-md font-pangolin text-weight-bolder q-pb-sm text-grad-mint full-name">
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
        <h4 id="intro-subtext" class=" q-mt-none text-white q-px-lg">
          &nbsp; <!-- filler only, before animation kicks in -->
        </h4>
      </div>
    </Container>
        
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#030518"
        fill-opacity="1"
        d="M0,192L80,181.3C160,171,320,149,480,138.7C640,128,800,128,960,138.7C1120,149,1280,171,1360,181.3L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
      ></path>
    </svg>

    <Container id="the-aircraft">
      <div class="row q-pb-xl">
        <div class="col-12 col-md-6 q-pb-xl flex flex-center">
        </div>
        <div class="col-12 col-md-6 q-pb-xl">
          <h2 class="q-mb-none text-grad-dark-mint">An Aircraft on Foot</h2>
          <h5 class="text-faded-grey-1">
            <span class="text-navy-blue">Is it a bird, is it a plane? --- No, it's a Jet!</span>
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

    <Container id="the-polyglot" container-class="bg-navy-blue br-t-30 shadow-up-10 q-pa-xl">
      <div class="row">
        <div class="col-12 col-md-5 q-pr-lg q-pb-lg flex flex-center">
          <h2 class="q-mb-none q-mt-lg q-py-xs text-grad-mint full-width">
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
            <Philippines class="q-my-md q-mx-sm light-blue-shadow transition-up-20" />
            <USA class="q-my-md q-mx-sm light-blue-shadow transition-up-20" />
          </div>
          <div class="row h-50 justify-evenly">
            <France class="q-my-md q-mx-sm light-blue-shadow transition-up-20" />
            <Russia class="q-my-md q-mx-sm light-blue-shadow transition-up-20" />
          </div>
        </div>
      </div>

      <div class="row q-pt-xl reverse-wrap justify-evenly">
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
              :icon="`img:logos/${pl.icon}`"
            />
          </div>
        </div>
        <div class="col-12 col-md-4 q-pb-lg flex flex-center">
          <h5 class="text-white q-mb-none">
            <span class="text-faded-grey-2">
              Born with the blood of an aircraft,
              I can also read & write computer languages!
            </span>

            Mainly a backend developer at work,
            I have significant knowledge on Django and Python,
            but my passion for arts & design lead me writing
            
            <span class="text-italic text-faded-grey-2">
              (and speaking)
            </span>

            on frontend languages as well.
          </h5>
        </div>
      </div>
    </Container>

    <Container id="the-eco-friendly" container-class="br-b-30 q-py-xl shadow-10 bg-navy-blue-1">
      <h2 class="text-center text-grad-mint q-px-xl q-pb-sm q-mb-md">
        Eco-Friendly Plane
      </h2>
      
      <div class="row q-px-xl">
        <div class="col-12 col-md-5">
          <h5 class="q-pr-lg text-faded-grey-2">
            Unlike other planes, I am fueled by fries and mango shake.

            <span class="text-white">
              As a clean and organized jet, I like to keep things clean, tidy and organized.
            </span>
          </h5>
        </div>

        <div class="col-12 col-md-7">
        </div>
      </div>

      <div class="row reverse-wrap flex-center">
        <div class="col-12 col-md-6 q-pt-xl q-px-xl">
          <div class="row justify-evenly">
            <q-img
              :src="`logos/${mgmtTool.image}`"
              v-for="mgmtTool, index in mgmtTools"
              :key="`tool-card-${index}`"
              :class="mgmtTool.class"
              class="max-w-280 light-blue-shadow-up transition-up-20"
              :width="$q.screen.xs ? '200px' : ''"
            />
          </div>
        </div>

        <div class="col-12 col-md-6 q-pt-xl q-px-xl">
          <h3 class="q-py-xs hyphen-word-wrap text-faded-grey-2">
            ''With great codebase, <br>comes great responsibility.''
          </h3>
          <h5 class="text-faded-grey-2">
            Code and task management is key to smooth progress.
            <span class="text-white">
              Among these are tools that I've used for task organization,
              team communication and code safety.
            </span>
          </h5>
        </div>
      </div>
    </Container>

    <Container id="the-artist" container-class="q-py-xl">
      <div class="text-center">
        <h2 class="q-px-xl text-grad-dark-mint">The Artist</h2>
        <h5 class="q-px-xl">
          Unable to fly, I can't use my creativity on combat.
          <br>
          <span class="text-faded-grey-1">
            Instead, I diverted my imagination on arts.
          </span>
        </h5>
      </div>

      <div class="row flex-center q-mb-lg">
        <q-separator
          color="grey"
          class="q-mb-lg intro-separator"
        />
      </div>

      <ArtCarousel />

      <div class="row text-center q-mt-xl">
        <div class="col">
          <h3 class="text-faded-grey-1">
            ''Softwares are art too.''
          </h3>

          <h5>
            <span class="text-faded-grey-1">
              Just like in art, there is also design in data and interfaces.
            </span>
            <br>
            Here are some projects I mainly contributed to:
          </h5>
        </div>
      </div>

      <div class="row flex-center q-mb-lg">
        <q-separator
          color="grey"
          class="q-mb-lg intro-separator"
        />
      </div>

      <div class="row q-gutter-md flex-center items-stretch q-px-lg">
        <ProjectCard
          v-for="project, index in projects"
          :key="index"
          :name="project.name"
          :image="project.image"
          :image-class="project.imageClass"
          :description="project.description"
          :sources="project.sources"
          :tech="project.tech"
          style="width:410px"
        />
      </div>
    </Container>
  </q-page>
</template>

<script>
import Philippines from 'components/flags/Philippines'
import Russia from 'components/flags/Russia'
import France from 'components/flags/France'
import USA from 'components/flags/USA'

import ArtCarousel from 'components/carousels/ArtCarousel'
import ProjectCard from 'components/cards/ProjectCard'
import Container from 'components/Container'

export default {
  name: "PageIndex",
  components: {
    Container,
    ArtCarousel,
    ProjectCard,
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
          class: 'br-50-p rotate-350 bg-white',
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
          icon: 'python-logo.png',
          textColor: 'yellow',
          classes: 'col-md-5'
        },
        {
          name: 'Django',
          icon: 'django-logo.jpg',
          textColor: 'green-7',
          classes: 'col-md-5'
        },
        {
          name: 'Quasar',
          icon: 'quasar-logo.png',
          textColor: 'light-blue',
          classes: 'col-md-4'
        },
        {
          name: 'Nuxt',
          icon: 'nuxt-logo.svg',
          textColor: 'teal',
          classes: 'col-md-3'
        },
        {
          name: 'Vue',
          icon: 'vue-logo.png',
          textColor: 'green-12',
          classes: 'col-md-4'
        },
        {
          name: 'Javascript',
          icon: 'js-logo.png',
          textColor: 'yellow',
          classes: 'col-md-4'
        },
        {
          name: 'HTML',
          icon: 'html-logo.png',
          textColor: 'orange',
          classes: 'col-md-3'
        },
        {
          name: 'CSS',
          icon: 'css-logo.png',
          textColor: 'blue-9',
          classes: 'col-md-4'
        },
        {
          name: 'Java SE',
          icon: 'java-logo.png',
          textColor: 'red',
          classes: 'col-md-4'
        },
        {
          name: 'C',
          icon: 'c-logo.webp',
          textColor: 'indigo-7',
          classes: 'col-md-4'
        },
      ],
      projects: [
        {
          name: 'SPICE Bot',
          image: 'spice-logo.svg',
          description: `
            A telegram/reddit/twitter crypto-bot used either as a wallet or as a handy tool
            in group chats & feeds. Currently, there are no more support for Twitter and Reddit.
          `,
          tech: [
            {
              name: 'Django',
              color: 'green-7'
            },
            {
              name: 'Nuxt',
              color: 'teal'
            },
            {
              name: 'Telegram',
              color: 'blue-4'
            },
            {
              name: 'Twitter',
              icon: 'mdi-cancel',
              color: 'blue'
            },
            {
              name: 'Reddit',
              icon: 'mdi-cancel',
              color: 'orange'
            },
          ],
          sources: [
            {
              icon: 'mdi-robot-happy',
              link: '@SpiceTippingBot'
            },
            {
              icon: 'mdi-telegram',
              link: 'https://t.me/spicetoken'
            },
            {
              icon: 'mdi-link-variant',
              link: 'https://spicetoken.org/'
            }
          ]
        },
        {
          name: 'Spice Casa',
          image: 'wager-bot-logo.jpg',
          imageClass: 'br-50-p',
          description: `
            Betting game available on 2 telegram groups where users stake crypto-tokens,
            set a gain multiplier, and win/lose based on a resulting threshold.
          `,
          tech: [
            {
              name: 'Django',
              color: 'green-7'
            },
            {
              name: 'Telegram',
              color: 'blue-4'
            }
          ],
          sources: [
            {
              icon: 'mdi-robot-happy',
              link: '@SpiceWagerBot'
            },
            {
              icon: 'mdi-dice-1',
              link: 'https://t.me/CasaDeDice'
            },
            {
              icon: 'mdi-dice-2',
              link: 'https://t.me/CasaDeDice2'
            }
          ]
        },
        {
          name: 'Janken',
          image: 'janken-bot-logo.png',
          description: `
            Janken is Japanese for Rock-Paper-Scissors!
            It is an interactive version of Spice Casa that
            can be played against a bot, player vs player (PvP) or list mode. Support for
            PvP and list modes are currently halted.
          `,
          tech: [
            {
              name: 'Django',
              color: 'green-7'
            },
            {
              name: 'Telegram',
              color: 'blue-4'
            }
          ],
          sources: [
            {
              icon: 'mdi-robot-happy',
              link: '@SpiceJankenBot'
            },
            {
              icon: 'mdi-sword',
              link: 'https://t.me/CasaDeJanken'
            },
            {
              icon: 'mdi-sword-cross',
              link: 'https://t.me/CasaDeJanken2'
            },
            {
              icon: 'mdi-clipboard-list',
              link: 'https://t.me/CasaDeJanken3'
            }
          ]
        },
        {
          name: 'SpiceTrader Bot',
          image: 'spicetrade-bot-logo.jpg',
          imageClass: 'br-30',
          description: `
            Another TG bot for trading crypto-tokens with another user.
            Users can set trade offers or accept listed offers. Trade wisely!
          `,
          tech: [
            {
              name: 'Django',
              color: 'green-7'
            },
            {
              name: 'Telegram',
              color: 'blue-4'
            }
          ],
          sources: [
            {
              icon: 'mdi-robot-happy',
              link: '@SpiceTraderBot'
            }
          ]
        },
        {
          name: 'Watchtower Cash JS',
          image: 'watchtower-cash-logo.jpg',
          imageClass: 'br-30',
          description: `
            Keeps track of a subscribed crypto-wallet's transactions.
            It is also a good tool for sending tokens and receiving webhook notifications
            everytime a deposit is found on the subscribed wallet.
          `,
          tech: [
            {
              name: 'Node',
              color: 'green-4'
            },
            {
              name: 'Javascript',
              color: 'yellow'
            },
            {
              name: 'NPM',
              color: 'red-14'
            },
            
          ],
          sources: [
            {
              icon: 'mdi-github',
              link: 'https://github.com/paytaca/watchtower-cash-js'
            },
            {
              icon: 'mdi-link-variant',
              link: 'https://watchtower.cash'
            },
            {
              icon: 'mdi-telegram',
              link: 'https://t.me/WatchTowerCash'
            },
            {
              icon: 'mdi-npm',
              link: 'https://www.npmjs.com/package/watchtower-cash-js'
            }
          ]
        },
        {
          name: 'PurelyPeer',
          image: 'purelypeer-logo.jpg',
          imageClass: 'br-50-p',
          description: `
            Similar to Pokemon GO, users hunt for hidden
            crypto-tokens around the globe, which are generated by other users
            under the name of a product/company they want to showcase.
          `,
          tech: [
            {
              name: 'Django',
              color: 'green-7'
            },
            {
              name: 'Quasar',
              color: 'light-blue'
            },
            {
              name: 'Javascript',
              color: 'yellow'
            },
            {
              name: 'App',
              color: 'mint'
            },
            {
              name: 'Beta',
              color: 'grad-mint',
              icon: 'mdi-hammer-wrench'
            }
          ],
          sources: [
            {
              icon: 'mdi-google-play',
              link: 'https://play.google.com/store/apps/details?id=cash.purelypeer.app'
            }
          ]
        },
        {
          name: 'LECCO Loan System',
          image: 'leyeco-logo.webp',
          description: `
            Alongside two of my coursemates, we developed a loaning management software,
            as an intern, for a loaning department of a electric company in our region.
          `,
          tech: [
            {
              name: 'Laravel',
              color: 'red-4'
            },
            {
              name: 'PHP',
              color: 'grey'
            },
            {
              name: 'Javascript',
              color: 'yellow'
            },
            {
              name: 'Desktop',
              color: 'mint'
            },
            {
              name: 'OJT',
              color: 'grad-mint',
              icon: 'mdi-account-tie'
            }
          ],
          sources: [
            {
              icon: 'mdi-github',
              link: 'https://github.com/Jetszxcki/LECCO-System'
            }
          ]
        },
        {
          name: 'Undergraduate Thesis',
          image: 'upvtc-logo.png',
          description: `
            ''An Improved Approach in Text Steganography using Huffman Encoding and Color Embedding Scheme''
          `,
          tech: [
            {
              name: 'Java',
              color: 'red'
            },
            {
              name: 'Desktop',
              color: 'mint'
            }
          ],
          sources: [
            {
              icon: 'mdi-file-document',
              link: 'https://drive.google.com/file/d/10YT7KXHW4xZw_vG_YoAws9Wtsx7mNrsL/view?usp=sharing'
            },
            {
              icon: 'mdi-package-down',
              link: 'https://drive.google.com/file/d/1ocEammzVwpgtVHrMprcMwOXMFH1QavfU/view?usp=sharing'
            }
          ]
        }
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

<style scoped lang="scss">
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
