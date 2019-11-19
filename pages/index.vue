<template>
  <div class="container">
    <AppHero />
    <hr>
    <div>
      <h2><Star /> Projects</h2>
      <p>
        As a interior and fashion stylist there is nothing I love more than making spaces and people beautiful. Below is a list of my latest projects.
        <nuxt-link to="/projects">
          Click here for a full list of my past projects
        </nuxt-link>
      </p>
      <ProjectPreview :project="project" />
    </div>
  </div>
</template>

<script>
import ProjectPreview from '@/components/Projects/ProjectPreview.vue'
import Star from '@/components/Icons/Star'
import AppHero from '@/components/AppHero.vue'

export default {
  components: {
    ProjectPreview,
    Star,
    AppHero
  },
  data () {
    return {
      project: {
        brand: 'Nijhof',
        img:
          'https://images.pexels.com/photos/2132610/pexels-photo-2132610.jpeg',
        type: 'Etalages',
        skillset: 'Styling',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit voluptatem facilis totam quae reiciendis! Rerum obcaecati quia nam laboriosam nemo.',
        id: '/projects/1'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
h2 {
  span.icon-star {
    padding-right: 0.5rem;
  }
}
</style>
