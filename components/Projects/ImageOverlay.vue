<template>
  <div v-if="img">
    <div v-if="show" class="modal-backdrop" @click="$emit('close')" />
    <div v-if="show" class="image-overlay">
      <!-- <transition name="slide-side"> -->
      <div v-if="show" class="image">
        <i class="icon icon-close" @click="$emit('close')">
          <CloseIcon name="brand-close" />
        </i>
        <figure>
          <img :src="img">
        </figure>
      </div>
      <!-- </transition> -->
    </div>
  </div>
</template>

<script>
import CloseIcon from '@/components/Icons/CloseIcon'

export default {
  name: 'ImageOverlay',
  components: {
    CloseIcon
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    img: String
  }
}
</script>

<style lang="scss" scoped>
</style>
