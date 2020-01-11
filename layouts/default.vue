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
  asyncData (context) {
    const version =
      context.query._storyblok || context.isDev ? 'draft' : 'published'
    return context.app.$storyapi
      .get('cdn/stories/', {
        version
      })
      .then((res) => {
        // eslint-disable-next-line no-console
        console.log(res)
        // return {
        //   blok: res.data.stories,
        //   allProjects: res.data.stories
        // }
      })
  },
  data () {
    return {
      displaySidenav: false
    }
  }
}
</script>
