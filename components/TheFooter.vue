<template>
  <footer>
    <span>&copy;2019 With love XOXO Carlijn Treep</span>
    <FavIcon />
    <span>Connect with  me on:  </span>
  </footer>
</template>

<script>
import FavIcon from '@/components/Icons/FavIcon'
export default {
  name: 'TheFooter',
  components: {
    FavIcon
  }
}
</script>

<style lang="scss" scoped>
footer {
  padding: 1rem;
  background-color: rgba(112, 112, 112, 0.44);
  color: var(--white);
  font-family: 'Abril Fatface', cursive;
}
</style>
