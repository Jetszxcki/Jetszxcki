<template>
  <div class="q-pa-xl bg-navy-blue-1 relative-position">
    <h2 class="q-mb-sm text-grad-mint q-py-xs">{{ header }}</h2>
    <h5 class="q-mt-sm q-mb-xl text-white">{{ subHeader }}</h5>
    <q-img :src="img" class="absolute-bottom" />
  </div>
</template>

<script>
export default {
  props: {
    header: {
      type: String,
      default: 'Header'
    },
    subHeader: {
      type: String,
      required: false
    },
    img: {
      type: String,
      required: false
    }
  }
}
</script>
