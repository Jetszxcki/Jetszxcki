<template>
  <q-page>
    <router-view />

    <div v-if="$route.path === '/blogs/arts'">
      <BlogCategoryHeader
        header="Art Blogs"
        img="blogs/arts/arts-home.svg"
      />

      <div class="row q-col-gutter-md q-pa-lg">
        <div class="col-md-7 col-12">
          <BlogCard
            header="The Art of Mimicry: A Unique Skill Through Imitation"
            img="arts/the-art-of-mimicry/chameleon.svg"
            to="arts/the-art-of-mimicry"
            :date="new Date('June 13, 2022')"
            :duration="3"
            horizontal
          />
        </div>
        <div class="col-md-5 col-12"></div>
      </div>
    </div>
  </q-page>
</template>

<script>
import BlogCategoryHeader from 'components/sub-layouts/BlogCategoryHeader'
import BlogCard from 'components/cards/BlogCard'

export default {
  components: {
    BlogCard,
    BlogCategoryHeader,
  }
}
</script>
