<template>
  <Blog
    :header="header"
    :bg-img="bgImg"
    :duration="3"
    :date="new Date('June 13, 2022')"
  >
    <h6>
      <span class="text-h6 text-italic text-faded-grey-1">
        How can imitations be art?
      </span>
      --- is probably the question you have in mind right now.
      This is best explained through myself, and my own experiences.
      As a person who loves and does art, I create
      better outputs given a basis model, rather than by pure imagination. Don't get me wrong,
      I don't steal others masterpiece, rather, I use their concept as a basis for
      creating my own, referencing their art as an inspiration.
    </h6>

    <h6>
      One good example of what the art of mimicry upholds (creating websites is an art too),
      is this website itself.
      <!-- TODO: link the parenthesized text to a blog "Softwares as an art" -->
      You may have not noticed it, but this website was inspired from two known websites:
    </h6>

    <div class="row br-20">
      <div class="col-12 col-md-4 flex flex-center q-mb-md">
        <div class="h-50 row full-width items-end justify-center">
          <a href="https://github.com" target="_blank" class="text-h4 font-pangolin">
            <b>Github</b>
          </a>
        </div>
        <div class="h-50 row full-width justify-center">
          <ul class="q-pl-md text-h6">
            <li>Home Page</li>
            <li>Color Scheme</li>
          </ul>
        </div>
      </div>
      <div class="col-12 col-md-8">
        <q-img
          :src="`${mainImgPath}/github-ss.png`"
          class="shadow-2"
        />
      </div>
    </div>

    <div class="row q-mt-lg br-20">
      <div class="col-12 col-md-4 flex flex-center q-mb-md">
        <div class="h-50 row full-width items-end justify-center">
          <a href="https://duolingo.com" target="_blank" class="text-h4 font-pangolin">
            <b>Duolingo</b>
          </a>
        </div>
        <div class="h-50 row full-width justify-center">
          <ul class="q-pl-md text-h6">
            <li>Friendly Theme</li>
            <li>Art Style</li>
          </ul>
        </div>
      </div>
      <div class="col-12 col-md-8">
        <q-img
          :src="`${mainImgPath}/duolingo-ss.png`"
          class="shadow-2"
        />
      </div>
    </div>

    <h6>
      Similar traits can be found on this site when compared to the mentioned sites above,
      but the self-made images and difference in font style/layouts contributed to the overall
      authenticity of the art.
      Based from that, it can be justified that not all imitations lack originality -- 

      <span class="text-faded-grey-1">
        the idea of mimicry is to simply find a basis for inspiration,
        and formulate a design/concept based from those reference models.
      </span>
    </h6>

    <h5 class="font-akshar text-faded-grey-1">
      It isn't just visual aesthetic. . .
    </h5>

    <h6>
      Not all art can be seen, some are heard.
      An evidence of this is through my fondness on voice acting ever since I was a child.
      I feel enjoyment in imitating accents and voices of characters
      from video games, animes and shows. Moreover, during karaokes,
      I tend to align my voice as close as possible to the original
      singer's voice, like how I was complimented by one of my coursemates during college,
      commenting that my voice sounded like the vocalist from
      <i>Simple Plan</i> when I sang one of their song, <i>Welcome to My Life</i>.
    </h6>

    <h6>
      Throughout the years I have developed this skill subconsciously, only realizing it
      by the time I started learning languages. A lot of language learning channels
      would mention how most learners find difficulty in sounding like a native
      after reaching fluency, or even at the start. On the contrary, I found it easy, sounding like a native,
      thanks to this skill. Deep in me thinks that maybe this skill
      lead me to language learning, copying something that I find beautiful or interesting --- pretty
      much how I started French after hearing their accent from a video game. Another part of me thinks
      this is linked to my personality, being an empath easily connecting to the perspective of others.
    </h6>

    <h6>
      Again, imitating doesn't always imply lack of originality, otherwise, movie and voice actors
      would have disgraceful jobs. It is simply a skill of creating unique things from a mixture of components
      --- <b>like how a coffee is made using beans, sugar, water and milk.</b>
    </h6>
  </Blog>
</template>

<script>
import Blog from 'components/sub-layouts/Blog'

export default {
  components: {
    Blog,
  },
  data () {
    return {
      header: 'The Art Of Mimicry: A Unique Skill Through Imitation',
      bgImg: 'arts/the-art-of-mimicry/chameleon.svg',
      mainImgPath: 'blogs/arts/the-art-of-mimicry'
    }
  }
}
</script>
