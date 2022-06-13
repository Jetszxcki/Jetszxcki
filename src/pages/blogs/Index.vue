<template>
  <q-page>
    <BlogCategoryHeader
      id="blogs"
      header="My Blogs"
      sub-header="Categorized for your convenience"
      img="blogs/room-desk.svg"
    />

    <div class="q-pa-lg">
      <div class="row q-mb-md q-col-gutter-md">
        <div class="col-12 col-md-4 flex">
          <BlogCard
            header-size="large"
            align-center
          />
        </div>
        <div class="col-12 col-md-8">
          <div class="row q-col-gutter-md q-mb-md">
            <div class="col-sm-5 col-xs-12 col-md-4">
              <BlogCard
                to="/blogs/arts"
                header-size="large"
                header="Arts"
                img="arts/arts-card.svg"
                isBgImg
              />
            </div>
            <div class="col-sm-7 col-xs-12 col-md-8">
              <BlogCard
                header-size="large"
                align-center
              />
            </div>
          </div>
          <div class="row q-col-gutter-md">
            <div class="col-6 col-sm-6 col-xs-12 flex">
              <BlogCard
                header-size="large"
                align-center
              />
            </div>
            <div class="col-6 col-sm-6 col-xs-12 q-mb-md">
              <div class="row h-50 q-mb-md">
                <BlogCard
                  header-size="large"
                  align-center
                />
              </div>
              <div class="row h-50">
                <BlogCard
                  header-size="large"
                  align-center
                />
              </div>
            </div>
          </div>
        </div>
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

<style scoped lang="scss">
.q-card div {
  background: -webkit-linear-gradient(-70deg, $mint 10%, $mint-2 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-box-decoration-break: clone;
}
</style>
