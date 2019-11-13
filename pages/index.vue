<template>
  <div class="container">
    <div>
      <!-- <logo /> -->
      <h1 class="title">
        august-and-julie
      </h1>
      <h2 class="subtitle">
        Carlijn Treep: Portfolio Site
      </h2>
      <ProjectPreview :project="project" />
    </div>
  </div>
</template>

<script>
// import Logo from '~/components/Logo.vue'
import ProjectPreview from '@/components/Projects/ProjectPreview.vue'

export default {
  components: {
    ProjectPreview
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

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
