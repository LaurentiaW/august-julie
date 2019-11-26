<template>
  <div v-if="project">
    <nuxt-link :to="project.id">
      <div class="project-preview" :style="{backgroundImage: `url(${project.img})`, backgroundSize: 'Cover'}">
        <h3>{{ project.brand }}</h3>
        <p>{{ project.type }}</p>
        <p>{{ project.skillset }}</p>
      </div>
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
