<template>
  <div class="container">
    <h2><Star /> Projects</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sit dolore, fuga eligendi aperiam mollitia?</p>
    <ProjectList v-for="(project, i) in projects" :key="i" :project="project" :class="`ppg-${i+1}`" />
    <TheCallToAction />
  </div>
</template>

<script>
import ProjectList from '@/components/Projects/ProjectList.vue'
// import ProjectPreview from '@/components/Projects/ProjectPreview.vue'
import Star from '@/components/Icons/Star'
import TheCallToAction from '@/components/TheCallToAction.vue'
export default {
  components: {
    ProjectList,
    Star,
    TheCallToAction
  },
  asyncData (context) {
    const version =
      context.query._storyblok || context.isDev ? 'draft' : 'published'
    return context.app.$storyapi
      .get('cdn/stories/', {
        version,
        starts_with: 'projects/'
      })
      .then((res) => {
        // eslint-disable-next-line no-console
        // console.log(res)
        return {
          blok: res.data.stories,
          allProjects: res.data.stories
        }
      })
  },
  computed: {
    projects () {
      return this.allProjects.filter(
        project => project.content.component === 'project'
      )
    }
  }
}
</script>

<style lang="scss" scoped></style>
