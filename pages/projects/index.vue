<template>
  <div class="container">
    <h2><Star /> Projects</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sit dolore, fuga eligendi aperiam mollitia?</p>
    <!-- <ProjectListItem :project="project" /> -->
    <ProjectListItem v-for="(project, i) in projects" :key="i" :project="project" />
    <TheCallToAction />
  </div>
</template>

<script>
import ProjectListItem from '@/components/Projects/ProjectListItem.vue'
import Star from '@/components/Icons/Star'
import TheCallToAction from '@/components/TheCallToAction.vue'

export default {
  components: {
    ProjectListItem,
    Star,
    TheCallToAction
  },
  data () {
    return {
      displayImg: false,
      selectedImg: null,
      projects: [
        {
          brand: 'Nijhof',
          img:
            'https://images.pexels.com/photos/2132610/pexels-photo-2132610.jpeg',
          type: 'Etalages',
          skillset: 'Styling',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit voluptatem facilis totam quae reiciendis! Rerum obcaecati quia nam laboriosam nemo.',
          id: '/projects/1',
          title: 'The name that shows when hovering on image'
        },
        {
          brand: 'Nijhof',
          img:
            'https://images.pexels.com/photos/2132610/pexels-photo-2132610.jpeg',
          type: 'Etalages',
          skillset: 'Styling',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit voluptatem facilis totam quae reiciendis! Rerum obcaecati quia nam laboriosam nemo.',
          id: '/projects/1',
          title: 'The name that shows when hovering on image'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
