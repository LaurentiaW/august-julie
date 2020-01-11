<template>
  <div class="container">
    <Project :project="project" />
    <TheCallToAction />
  </div>
</template>

<script>
import Project from '@/components/Projects/Project.vue'
import TheCallToAction from '@/components/TheCallToAction.vue'

export default {
  components: {
    Project,
    TheCallToAction
  },
  asyncData (context) {
    const version =
      context.query._storyblok || context.isDev ? 'draft' : 'published'

    return context.app.$storyapi
      .get('cdn/stories/projects/' + context.params.id, {
        version
      })
      .then((res) => {
        // eslint-disable-next-line no-console
        // console.log(res.data)
        return {
          project: res.data.story.content
        }
      })
  }
}
</script>

<style lang="scss" scoped></style>
