<template>
  <q-page>
    <Container id="the-jet" class="q-pt-xl bg-navy-blue-1">
      <q-intersection transition="slide-down" :transition-duration="1000" once>
        <div class="row flex-center">
          <h6 class="text-mint q-mb-none font-pangolin">
            Hi, I'm
          </h6>
        </div>
      </q-intersection>

      <q-intersection transition="fade" :transition-duration="2000" once>
        <div class="row flex-center">
          <p class="text-center q-mt-none q-mb-md font-akshar text-weight-bolder q-pb-sm text-grad-mint full-name">
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
        <h4 id="intro-subtext" class=" q-mt-none q-mb-xl text-white q-px-lg">
          &nbsp; <!-- filler only, before animation kicks in -->
        </h4>
      </div>
    </Container>
      
    <q-img src="clouds.svg" />

    <Container id="the-aircraft" container-class="br-t-30">
      <div class="row q-pb-xl q-px-xl">
        <div class="col-12 col-md-6 flex flex-center">
          <q-intersection transition="slide-down" :transition-duration="2000" once class="full-width">
            <q-img src="paradrop.svg" />
          </q-intersection>
        </div>
        <div class="col-12 col-md-6 flex flex-center">
          <q-intersection transition="scale" :transition-duration="1000" once>
            <h2 class="q-mb-none text-dark">An Aircraft on Foot</h2>
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
          </q-intersection>
        </div>
      </div>
    </Container>

    <Container id="the-polyglot" container-class="bg-navy-blue br-t-30 q-pa-xl">
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
            Currently at my 7th month of study, I can fairly speak and understand French,
            and a little bit of Russian.
          </h5>
        </div>

        <div class="col-12 col-md-7">
          <div class="row h-50 justify-evenly">
            <q-intersection transition="scale" :transition-duration="1000" once>
              <Philippines class="q-my-md q-mx-sm transition-up-20" />
            </q-intersection>
            <q-intersection transition="scale" :transition-duration="2000" once>
              <USA class="q-my-md q-mx-sm transition-up-20" />
            </q-intersection>
          </div>
          <div class="row h-50 justify-evenly">
            <q-intersection transition="scale" :transition-duration="3000" once>
              <France class="q-my-md q-mx-sm transition-up-20" />
            </q-intersection>
            <q-intersection transition="scale" :transition-duration="4000" once>
              <Russia class="q-my-md q-mx-sm transition-up-20" />
            </q-intersection>
          </div>
        </div>
      </div>

      <div class="row q-pt-xl reverse-wrap justify-evenly">
        <div class="col-12 col-md-7 flex flex-center q-pa-md">
          <div class="row q-gutter-md flex-center">
            <q-intersection
              v-for="pl in progLangs"
              :key="pl.name"
              :transition="pl.transition.style"
              :transition-duration="pl.transition.duration"
              :class="pl.classes"
              class="col-xs-12 col-sm-auto"
              once
            >
              <q-btn
                push
                no-caps
                size="xl"
                color="navy-blue-1"
                class="font-pangolin full-width"
                :text-color="pl.textColor"
                :label="pl.name"
                :icon="`img:logos/${pl.icon}`"
              />
            </q-intersection>
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

    <Container id="the-eco-friendly" container-class="q-py-xl bg-navy-blue-1">
      <div class="row q-px-xl">
        <div class="col-12 col-md-5 flex flex-center">
          <q-intersection transition="slide-down" :transition-duration="1000" once>
            <h2 class="text-grad-mint q-mb-none">
              Eco-Friendly Plane
            </h2>                      
            <h5 class="q-pr-lg text-faded-grey-2">
              Unlike other planes, I am fueled by fries and mango shake.

              <span class="text-white">
                As a clean and organized jet, I like to keep things clean, tidy and organized.
              </span>
            </h5>
          </q-intersection>
        </div>

        <div class="col-12 col-md-7">
          <q-intersection transition="scale" :transition-duration="1000" once>
           <q-img src="food-and-study.svg" />
          </q-intersection>
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
              class="max-w-280 transition-up-20"
              :width="$q.screen.xs ? '200px' : ''"
              @mouseover="mgmtTool.showLabel = true"
              @mouseout="mgmtTool.showLabel = false"
             >
              <div
                v-show="mgmtTool.showLabel"
                class="br-30 bg-dark absolute-center fit flex flex-center hover-label-div"
              >
                <h3 class="hover-label">{{ mgmtTool.name }}</h3>
              </div>
             </q-img>
          </div>
        </div>

        <div class="col-12 col-md-6 q-pt-xl q-px-xl">
          <q-intersection transition="slide-down" :transition-duration="1000" once>
            <h3 class="q-py-xs hyphen-word-wrap text-faded-grey-2">
              ''With great codebase, <br>comes great responsibility.''
            </h3>
          </q-intersection>

          <q-intersection transition="slide-up" :transition-duration="1000" once>
            <h5 class="text-faded-grey-2">
              Code and task management is key to smooth progress.
              <span class="text-white">
                Among these are tools that I've used for task organization,
                team communication and code safety.
              </span>
            </h5>
            </q-intersection>
        </div>
      </div>
    </Container>

    <Container id="the-artist" container-class="q-pt-xl bg-grey-2">
      <div class="text-center">
        <h1 class="q-px-xl text-dark">The Artist</h1>
        <q-intersection transition="jump-down" :transition-duration="1000" once>
          <h4 class="q-px-xl q-mb-none">
            Unable to fly, I can't use my creativity on combat.
          </h4>
        </q-intersection>
        <q-intersection transition="jump-up" :transition-duration="1000" once>
          <h4 class="text-faded-grey-1 q-mt-none q-px-xl">
            Instead, I diverted my imagination unto arts.
          </h4>
        </q-intersection>
      </div>

      <div class="row flex-center q-mb-lg">
        <q-separator
          color="grey"
          class="q-mb-lg intro-separator"
        />
      </div>

      <q-intersection transition="slide-up" :transition-duration="2000" once>
        <q-img src="art-materials.svg" />
      </q-intersection>

      <ArtCarousel />
    </Container>

    <Container container-class="bg-navy-blue q-pb-xl br-b-30 q-mb-xl">
      <div class="row text-center q-mt-xl">
        <div class="col">
          <h2 class="text-faded-grey-2 q-px-xl">
            Softwares are art too.
          </h2>

          <q-intersection transition="jump-down" :transition-duration="1000" once>
            <h4 class="q-mb-none q-px-xl text-white">
              There is beauty in data handling and user interface designing.
            </h4>
          </q-intersection>
          <q-intersection transition="jump-up" :transition-duration="1000" once>
            <h4 class="text-faded-grey-2 q-px-xl q-mt-none">
              Here are some projects I mainly contributed to:
            </h4>
          </q-intersection>

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

const projCardActionTypes = {
  redirect: 'redirect',
  copy: 'copy',
  screenshots: 'screenshots'
}

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
          image: 'github-logo.svg',
          name: 'Github',
          showLabel: false
        },
        {
          class: 'br-10-p rotate-10',
          image: 'trello-logo.svg',
          name: 'Trello',
          showLabel: false
        },
        {
          class: 'br-50-p mt-n-60',
          image: 'slack-logo.svg',
          name: 'Slack',
          showLabel: false
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
          classes: 'col-md-5',
          transition: {
            style: 'flip-left',
            duration: 2000
          }
        },
        {
          name: 'Django',
          icon: 'django-logo.jpg',
          textColor: 'green-7',
          classes: 'col-md-5',
          transition: {
            style: 'flip-right',
            duration: 2000
          }
        },
        {
          name: 'Quasar',
          icon: 'quasar-logo.png',
          textColor: 'light-blue',
          classes: 'col-md-4',
          transition: {
            style: 'flip-right',
            duration: 2500
          }
        },
        {
          name: 'Nuxt',
          icon: 'nuxt-logo.svg',
          textColor: 'teal',
          classes: 'col-md-3',
          transition: {
            style: 'flip-down',
            duration: 2000
          }
        },
        {
          name: 'Vue',
          icon: 'vue-logo.png',
          textColor: 'green-12',
          classes: 'col-md-4',
          transition: {
            style: 'flip-left',
            duration: 5000
          }
        },
        {
          name: 'Javascript',
          icon: 'js-logo.png',
          textColor: 'yellow',
          classes: 'col-md-4',
          transition: {
            style: 'flip-right',
            duration: 5000
          }
        },
        {
          name: 'HTML',
          icon: 'html-logo.png',
          textColor: 'orange',
          classes: 'col-md-3',
          transition: {
            style: 'flip-up',
            duration: 4000
          }
        },
        {
          name: 'CSS',
          icon: 'css-logo.png',
          textColor: 'blue-9',
          classes: 'col-md-4',
          transition: {
            style: 'flip-left',
            duration: 2000
          }
        },
        {
          name: 'Java SE',
          icon: 'java-logo.png',
          textColor: 'red',
          classes: 'col-md-4',
          transition: {
            style: 'flip-left',
            duration: 3000
          }
        },
        {
          name: 'C',
          icon: 'c-logo.webp',
          textColor: 'indigo-7',
          classes: 'col-md-4',
          transition: {
            style: 'flip-right',
            duration: 1000
          }
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
              color: 'green-4'
            },
            {
              name: 'Telegram',
              color: 'blue-4'
            },
            {
              name: 'Twitter',
              icon: 'mdi-cancel',
              color: 'blue-3'
            },
            {
              name: 'Reddit',
              icon: 'mdi-cancel',
              color: 'orange-4'
            },
          ],
          sources: [
            {
              icon: 'mdi-robot-happy',
              action: {
                data: '@SpiceTippingBot',
                type: projCardActionTypes.copy
              }
            },
            {
              icon: 'mdi-telegram',
              action: {
                data: 'https://t.me/spicetoken',
                type: projCardActionTypes.redirect
              }
            },
            {
              icon: 'mdi-link-variant',
              action: {
                data: 'https://spicetoken.org/',
                type: projCardActionTypes.redirect
              }
            },
            {
              icon: 'mdi-image',
              action: {
                data: [
                  'spice-bot/1.jpg',
                  'spice-bot/2.jpg',
                  'spice-bot/3.jpg',
                  'spice-bot/4.jpg',
                  'spice-bot/5.jpg',
                  'spice-bot/6.jpg'
                ],
                type: projCardActionTypes.screenshots
              }
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
              color: 'green-4'
            },
            {
              name: 'Telegram',
              color: 'blue-4'
            }
          ],
          sources: [
            {
              icon: 'mdi-robot-happy',
              action: {
                data: '@SpiceWagerBot',
                type: projCardActionTypes.copy
              }
            },
            {
              icon: 'mdi-dice-1',
              action: {
                data: 'https://t.me/CasaDeDice',
                type: projCardActionTypes.redirect
              }
            },
            {
              icon: 'mdi-dice-2',
              action: {
                data: 'https://t.me/CasaDeDice2',
                type: projCardActionTypes.redirect
              }
            },
            {
              icon: 'mdi-image',
              action: {
                data: [
                  'spice-casa/1.jpg'
                ],
                type: projCardActionTypes.screenshots
              }
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
              color: 'green-4'
            },
            {
              name: 'Telegram',
              color: 'blue-4'
            }
          ],
          sources: [
            {
              icon: 'mdi-robot-happy',
              action: {
                data: '@SpiceJankenBot',
                type: projCardActionTypes.copy
              }
            },
            {
              icon: 'mdi-sword',
              action: {
                data: 'https://t.me/CasaDeJanken',
                type: projCardActionTypes.redirect
              }
            },
            {
              icon: 'mdi-sword-cross',
              action: {
                data: 'https://t.me/CasaDeJanken2',
                type: projCardActionTypes.redirect
              }
            },
            {
              icon: 'mdi-clipboard-list',
              action: {
                data: 'https://t.me/CasaDeJanken3',
                type: projCardActionTypes.redirect
              }
            },
            {
              icon: 'mdi-image',
              action: {
                data: [
                  'janken/1.jpg',
                  'janken/2.jpg',
                  'janken/3.jpg'
                ],
                type: projCardActionTypes.screenshots
              }
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
              color: 'green-4'
            },
            {
              name: 'Telegram',
              color: 'blue-4'
            }
          ],
          sources: [
            {
              icon: 'mdi-robot-happy',
              action: {
                data: '@SpiceTraderBot',
                type: projCardActionTypes.copy
              }
            },
            {
              icon: 'mdi-telegram',
              action: {
                data: 'https://t.me/Spicerunner',
                type: projCardActionTypes.redirect
              }
            },
            {
              icon: 'mdi-image',
              action: {
                data: [
                  'spice-trade/1.jpg',
                  'spice-trade/2.jpg',
                  'spice-trade/3.jpg',
                  'spice-trade/4.jpg'
                ],
                type: projCardActionTypes.screenshots
              }
            }
          ]
        },
        {
          name: 'Honk-A-Bet',
          image: 'honkabet-logo.png',
          imageClass: 'br-30',
          description: `
            A betting site where you can use crypto-tokens to stake
            across a wide variety of sports.
            Server is currently down due to lack of funding from the client/owner.
          `,
          tech: [
            {
              name: 'Django',
              color: 'green-4'
            },
            {
              name: 'Nuxt',
              color: 'teal'
            },
            {
              name: 'Unsupported',
              color: 'grey',
              icon: 'mdi-cancel'
            }
          ],
          sources: [
            {
              icon: 'mdi-link-variant',
              action: {
                data: 'https://honkabet.scibizinformatics.com',
                type: projCardActionTypes.redirect
              }
            },
            {
              icon: 'mdi-image',
              action: {
                data: [
                  'honkabet/1.JPG',
                  'honkabet/2.JPG',
                ],
                type: projCardActionTypes.screenshots
              }
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
              color: 'green-3'
            },
            {
              name: 'Javascript',
              color: 'yellow-4'
            },
            {
              name: 'NPM',
              color: 'red-14'
            },
            
          ],
          sources: [
            {
              icon: 'mdi-github',
              action: {
                data: 'https://github.com/paytaca/watchtower-cash-js',
                type: projCardActionTypes.redirect
              }
            },
            {
              icon: 'mdi-link-variant',
              action: {
                data: 'https://watchtower.cash',
                type: projCardActionTypes.redirect
              }
            },
            {
              icon: 'mdi-telegram',
              action: {
                data: 'https://t.me/WatchTowerCash',
                type: projCardActionTypes.redirect
              }
            },
            {
              icon: 'mdi-npm',
              action: {
                data: 'https://www.npmjs.com/package/watchtower-cash-js',
                type: projCardActionTypes.redirect
              }
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
              color: 'green-4'
            },
            {
              name: 'Quasar',
              color: 'light-blue'
            },
            {
              name: 'Javascript',
              color: 'yellow-4'
            },
            {
              name: 'App',
              color: 'mint'
            },
            {
              name: 'Beta',
              color: 'mint-1',
              icon: 'mdi-hammer-wrench'
            }
          ],
          sources: [
            {
              icon: 'mdi-google-play',
              action: {
                data: 'https://play.google.com/store/apps/details?id=cash.purelypeer.app',
                type: projCardActionTypes.redirect
              }
            },
            {
              icon: 'mdi-image',
              action: {
                data: [
                  'purelypeer/1.jpg',
                  'purelypeer/2.jpg',
                  'purelypeer/3.jpg',
                  'purelypeer/4.jpg',
                  'purelypeer/5.jpg',
                  'purelypeer/6.jpg'
                ],
                type: projCardActionTypes.screenshots
              }
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
              color: 'yellow-4'
            },
            {
              name: 'Desktop',
              color: 'mint'
            },
            {
              name: 'OJT',
              color: 'mint-1',
              icon: 'mdi-account-tie'
            }
          ],
          sources: [
            {
              icon: 'mdi-github',
              action: {
                data: 'https://github.com/Jetszxcki/LECCO-System',
                type: projCardActionTypes.redirect
              }
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
              action: {
                data: 'https://drive.google.com/file/d/10YT7KXHW4xZw_vG_YoAws9Wtsx7mNrsL/view?usp=sharing',
                type: projCardActionTypes.redirect
              }
            },
            {
              icon: 'mdi-package-down',
              action: {
                data: 'https://drive.google.com/file/d/1ocEammzVwpgtVHrMprcMwOXMFH1QavfU/view?usp=sharing',
                type: projCardActionTypes.redirect
              }
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
  font-size: 90px;
  line-height: 90%;
}
.max-w-280 {
  max-width: 280px;
}
</style>
