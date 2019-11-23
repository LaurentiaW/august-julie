<template>
  <div>
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav " />
    <TheSideNav
      :show="displaySidenav"
      @close="displaySidenav = false"
    />
    <nuxt />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/Nav/TheHeader.vue'
import TheSideNav from '@/components/Nav/TheSideNav.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheSideNav,
    TheFooter
  },
  data () {
    return {
      displaySidenav: false
    }
  }
}
</script>
