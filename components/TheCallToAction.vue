<template>
  <div>
    <h3>Meer weten, of zamen werken....</h3>
    <nuxt-link to="/contact" class="btn">
      Contact Me
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'TheCallToAction'
}
</script>

<style lang="scss" scoped>
div {
  padding: 2rem 0 5rem;
  text-align: center;
  h3 {
    padding: 1rem 0 2rem;
    width: 61%;
    text-align: right;
    font-size: 1.5rem;
    color: var(--dark-blue);
  }
  .btn {
    font-size: 1.25rem;
    color: var(--white);
    font-weight: normal;
    margin: 1rem 0;
  }
}
</style>
