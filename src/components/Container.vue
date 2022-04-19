<template>
  <div class="row flex-center">
    <div class="container col" :class="containerClass">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    containerClass: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 1450px;
}
</style>
