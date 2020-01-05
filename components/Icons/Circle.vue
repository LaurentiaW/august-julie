<template>
  <span class="icon-paint">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 24 24"
      class="icon"
    >static/svg/ui-icons/circle.svg
      <use :id="name" xlink:href="/svg/ui-icons/circle.svg#icon-paint" />
    </svg>
  </span>
</template>

<script>
export default {
  name: 'Circle',
  props: {
    name: {
      type: String,
      default: 'brand'
    }
  }
}
</script>
