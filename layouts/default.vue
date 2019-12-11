<template>
  <div>
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav " />
    <TheSidenav
      :show="displaySidenav"
      @close="displaySidenav = false"
    />
    <nuxt />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/Nav/TheHeader.vue'
import TheSidenav from '@/components/Nav/TheSidenav.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheSidenav,
    TheFooter
  },
  data() {
    return {
      displaySidenav: false
    }
  }
}
</script>
