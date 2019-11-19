<template>
  <footer>
    <span>&copy;2019 With love XOXO Carlijn Treep</span>
    <!-- <TheLogo /> -->
    <span>Connect with  me on:  </span>
  </footer>
</template>

<script>
// import TheLogo from '@/components/Icons/TheLogo'
export default {
  name: 'TheFooter',
  components: {
    // TheLogo
  }
}
</script>

<style lang="scss" scoped>
footer {
  padding: 0.5rem;
  background-color: rgba(227, 173, 155, 0.44);
  color: var(--white);
  font-family: 'Abril Fatface', cursive;
}
</style>
