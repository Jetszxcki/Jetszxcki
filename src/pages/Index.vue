<template>
  <q-page>
    <div id="intro" class="row bg-navy-blue">
      <!-- TODO: kiwi with pilot attire for background -->
      <div class="col">
        <q-intersection
          transition="slide-down"
          :transition-duration="1000"
        >
          <div class="row flex-center">
            <h6 class="text-white q-mb-none">
              Hi, I'm
            </h6>
          </div>
        </q-intersection>

        <q-intersection
          transition="scale"
          :transition-duration="2000"
        >
          <div class="row flex-center">
            <h2 class="text-center q-mt-none q-mb-md font-sfuid-black text-uppercase text-grad-mint-blue-dark">
              Jethro Albano
            </h2>
          </div>
        </q-intersection>

        <q-separator
          color="white"
          class="intro-separator q-mb-lg"
        />

        <div class="row flex-center text-center">
          <h4 id="intro-subtext" class="q-mt-none text-white q-px-lg"></h4>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
  data () {
    return {
      typeSpeed: 50, // in milliseconds
    }
  },
  mounted () {
    this.initTypingAnimation()
  },
  methods: {
    initTypingAnimation () {
      let i = 0;

      const type = () => {
        const subtext = 'Like birds, not all jets fly. Some are software devs.';
        if (i < subtext.length) {
          const introSubtext = document.getElementById('intro-subtext')

          // appended span tag per character instead of per phrase ...
          // ... because typing animation shows char 1 by 1, thus, span class does not take effect on previous chars before the end tag
          // ... since they are already shown on screen before the ending span tag is appended
          if ((i >= 12 && i <= 28) || i >= 39) {
            introSubtext.innerHTML += '<span class="text-faded-grey">' + subtext.charAt(i) + '</span>';
          } else {
            introSubtext.innerHTML += subtext.charAt(i);
          }

          if (i === 28) {
            // added pause after first sentence (better user experience)
            setTimeout(type, 1000);
          } else {
            setTimeout(type, this.typeSpeed);
          }
          i++;
        }
      }
      setTimeout(() => {
        type()
      }, 1500)
    }
  }
};
</script>

<style scoped lang="scss">
.intro-separator {
  margin-left: 40vw;
  margin-right: 40vw;
}
</style>
