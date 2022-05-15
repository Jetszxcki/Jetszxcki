<template>
  <q-intersection transition="scale" :transition-duration="2000" once>
    <q-card
      id="recent-blog-card"
      class="shadow-0 bg-grey-2 br-30 q-my-md transition-zoom-1-05"
    >
      <q-card-section horizontal>
        <q-img
          class="col-4"
          :src="image"
        />
        <q-card-section class="col-8 flex flex-center q-my-md">
          <div class="text-left full-width font-akshar q-px-md">
            <p class="text-h5 text-faded-grey-1">{{ category }}</p>
            <p class="text-h4 text-weight-bolder hyphen-word-wrap">{{ header }}</p>
            <p class="text-h6 font-quicksand">{{ formattedDate }}</p>
          </div>
        </q-card-section>
      </q-card-section>
    </q-card>
  </q-intersection>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: 'arts/Me.png'
    },
    category: {
      type: String,
      default: 'Category'
    },
    header: {
      type: String,
      default: 'Header'
    },
    date: {
      type: Date,
      default: new Date()
    },
    to: {
      type: String,
      default: '/blogs'
    }
  },
  computed: {
    formattedDate () {
      const month = this.date.toLocaleString('default', { month: 'short' })
      const day = this.date.getDate()
      const year = this.date.getFullYear()
      return `${month} ${day} ${year}`
    }
  }
}
</script>

<style scoped>
#recent-blog-card:hover {
  cursor: not-allowed;
}
</style>
