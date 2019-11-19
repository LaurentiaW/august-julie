<template>
  <span class="icon-star">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      :width="width"
      :height="height"
      viewBox="0 0 16.557 16"
      class="icon"
    >
      <use :id="name" xlink:href="/svg/ui-icons/org-star.svg#icon-star" />
    </svg>
  </span>
</template>

<script>
export default {
  name: 'CloseIcon',
  props: {
    name: {
      type: String,
      default: 'brand'
    },
    width: {
      type: [Number, String],
      default: 16.557
    },
    height: {
      type: [Number, String],
      default: 16
    }
  }
}
</script>

<style scoped>
#comp-close {
  --brand: var(--comp-clr);
}
</style>
