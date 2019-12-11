<template>
  <nuxt-link v-if="project" :to="project.id" class="project-preview" :style="{backgroundImage: `url(${project.img})`, backgroundSize: 'Cover'}">
    <h3>{{ project.brand }}</h3>
    <p>{{ project.type }}</p>
    <p>{{ project.skillset }}</p>
  </nuxt-link>
</template>

<script>
export default {
  name: 'ProjectPreview',
  props: {
    project: Object
  }
}
</script>

<style lang="scss" scoped>
.project-preview {
  padding: 0.5rem;
  filter: grayscale(100%);
  transition: all 0.5s;
  &:hover {
    filter: none;
  }
  h3,
  p {
    color: var(--white);
  }
}
</style>
