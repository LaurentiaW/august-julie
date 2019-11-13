<template>
  <div v-if="project" class="project-preview">
    <nuxt-link :to="project.id">
      <h3>{{ project.brand }}</h3>
      <p>{{ project.type }}</p>
      <p>{{ project.skillset }}</p>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'ProjectPreview',
  props: {
    project: Object
  }
}
</script>

<style lang="scss" scoped></style>
