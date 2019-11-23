<template>
  <div class="icon-logo">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      :width="width"
      :height="height"
      viewBox="0 0 24 24"
      class="icon"
    >
      <use xlink:href="/svg/ui-icons/logo-icon.svg#icon-logo" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'FavIcon',
  props: {
    width: {
      type: [Number, String],
      default: 24
    },
    height: {
      type: [Number, String],
      default: 24
    }
  }
}
</script>
