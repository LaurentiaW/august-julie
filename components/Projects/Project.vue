<template>
  <div v-if="project">
    <h4>{{ project.brand }}</h4>
    <img :src="project.img" :alt="`${project.type} @ ${project.brand}`">
    <p>{{ project.type }}</p>
    <p>{{ project.skillset }}</p>
    <p>{{ project.description }}</p>
  </div>
</template>

<script>
export default {
  name: 'Project',
  props: {
    project: Object
  }
}
</script>

<style lang="scss" scoped></style>
