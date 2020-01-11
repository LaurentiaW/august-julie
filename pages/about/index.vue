<template>
  <div class="container">
    <h2><Star /> {{ title }}</h2>
    <div class="content-wrapper">
      <img :src="about_img" :alt="alt_text">
      <div class="text-wrapper">
        <p>
          {{ text_nl }}
        </p>
        <hr>
        <p>
          {{ text_en }}
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
  },
  asyncData (context) {
    return context.app.$storyapi
      .get('cdn/stories/about', {
        version: 'draft'
      })
      .then((res) => {
        // eslint-disable-next-line no-console
        // console.log(res)
        return {
          title: res.data.story.name,
          about_img: res.data.story.content.body[0].about,
          alt_text: res.data.story.content.body[0].alt,
          text_nl: res.data.story.content.body[1].text_nl,
          text_en: res.data.story.content.body[1].text_en
        }
      })
  }
}
</script>

<style lang="scss" scoped>
.content-wrapper {
  display: flex;

  img {
    max-width: 400px;
    height: 100%;
    padding: 1rem 1rem 1rem 0;
  }
  .text-wrapper {
    max-width: 500px;
    p {
      white-space: pre-line;

      &:first-child {
        margin-top: 0;
      }
    }
  }
}
</style>
