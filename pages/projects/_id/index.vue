<template>
  <div>
    <Project :project="project" />
  </div>
</template>

<script>
import Project from '@/components/Projects/Project.vue'
export default {
  components: {
    Project
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
