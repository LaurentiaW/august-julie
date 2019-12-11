<template>
  <div class="social-icon">
    <a :href="link">
      <span :class="name">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 42 42"
          class="icon"
        >
          <use :xlink:href="`/svg/ui-icons/${name}.svg#icon-${name}`" />
        </svg>
      </span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'SocialIcon',
  props: {
    name: {
      type: String,
      default: 'name'
    },
    link: {
      type: String,
      default: 'link'
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  display: inline;
  svg {
    height: 24px;
    width: 24px;
  }
}
</style>
