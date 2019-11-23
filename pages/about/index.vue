<template>
  <div class="container">
    <h2><Star /> About</h2>
    <div class="content-wrapper">
      <img src="/temp/about.png" alt="a photo of me, Carlijn Treep during a project">
      <div class="text-wrapper">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi saepe fugiat alias similique eos, vel iure? Quam aliquam, quod fugiat, a doloribus non nam laboriosam amet exercitationem magnam soluta in.
          <br><br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi saepe fugiat alias similique eos, vel iure? Quam aliquam, quod fugiat, a doloribus non nam laboriosam amet exercitationem magnam soluta in.
        </p>
        <hr>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi saepe fugiat alias similique eos, vel iure? Quam aliquam, quod fugiat, a doloribus non nam laboriosam amet exercitationem magnam soluta in.
          <br><br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi saepe fugiat alias similique eos, vel iure? Quam aliquam, quod fugiat, a doloribus non nam laboriosam amet exercitationem magnam soluta in.
        </p>
      </div>
    </div>
    <TheCallToAction />
  </div>
</template>

<script>
import Star from '@/components/Icons/Star'
import TheCallToAction from '@/components/TheCallToAction.vue'
export default {
  components: {
    Star,
    TheCallToAction
  }
}
</script>

<style lang="scss" scoped>
.content-wrapper {
  display: flex;
  img {
    max-width: 400px;
    padding: 1rem 1rem 1rem 0;
  }
  .text-wrapper {
    max-width: 500px;
  }
}
</style>
