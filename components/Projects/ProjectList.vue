<template>
  <nuxt-link v-if="project" :to="`projects/${project.slug}`" class="project-list-item">
    <img :src="project.content.images[0].img" :alt="project.content.images[0].alt">
    <div class="text-wrapper">
      <h3>{{ project.content.name }}</h3>
      <p class="line-clamp">
        {{ project.content.description }}
      </p>
      <span class="action-text">Read More</span>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'ProjectList',
  props: {
    project: Object
  }
}
</script>

<style lang="scss" scoped>
a.project-list-item {
  display: flex;
  margin: 0 0 1.25rem 0;
  padding: 0 0 1rem 0;
  border-bottom: 0.25px solid var(--grey);
  img {
    width: 50%;
    max-width: 200px;
    object-fit: cover;
    padding: 0 1rem 0 0;
  }
  .text-wrapper {
    h3 {
      color: var(--grey);
    }
    p {
      color: var(--dark-blue);
      &.line-clamp {
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        text-align: justify;
      }
    }
    max-width: 500px;
  }
  .action-text {
    text-transform: uppercase;
    white-space: nowrap;
    font-size: 0.875rem;
    font-weight: bold;
    text-align: right;
    cursor: pointer;
    display: block;
    color: var(--grey);
    transition: all 0.3s ease;
    &:hover {
      color: var(--comp-clr);
    }
  }
}
</style>
