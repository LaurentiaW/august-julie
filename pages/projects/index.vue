<template>
  <div>
    <h3>this a collection of all the projects</h3>
    <ProjectPreview :project="project" />
  </div>
</template>

<script>
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

<style lang="scss" scoped></style>
