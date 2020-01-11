<template>
  <nuxt-link v-if="project" :to="`projects/${project.slug}`" class="project-preview" :style="{backgroundImage: `url(${project.content.images[0].img})`, backgroundSize: 'Cover', backgroundPosition: 'center center'}">
    <h3>{{ project.content.name }}</h3>
    <p>{{ project.content.type }}</p>
    <p>{{ project.content.skillset }}</p>
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
    margin: 0;
  }
}
</style>
