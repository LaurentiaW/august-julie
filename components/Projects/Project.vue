<template>
  <article v-if="project">
    <ImageOverlay :img="selectedImg" :show="displayImg" @close="displayImg = false" />
    <h1><Star /> {{ project.brand }}</h1>
    <p>{{ project.skillset }}<span v-show="project.skillset">,</span> {{ project.type }}</p>
    <div class="content-wrapper">
      <div class="picture-grid">
        <figure v-for="(image, i) in project.images" :key="i" :class="`gallery__item gallery__item--${i + 1}`" @click="onImgSelected">
          <img :src="image.img" :alt="image.text" :title="image.text" class="gallery__img">
        </figure>
      </div>
      <p>{{ project.description }}</p>
    </div>
  </article>
</template>

<script>
import ImageOverlay from '@/components/Projects/ImageOverlay.vue'
import Star from '@/components/Icons/Star'

export default {
  name: 'Project',
  components: {
    Star,
    ImageOverlay
  },
  props: {
    project: Object
  },
  data () {
    return {
      displayImg: false,
      selectedImg: null
    }
  },
  methods: {
    onImgSelected () {
      this.selectedImg = this.image.img
      this.displayImg = true
      // this.$emit('imageSelect', this.image)
      /* eslint-disable */
      console.log(selectedImg)
      // this.selectedImg = img
      // this.displayAward = true
      //   onImageSelected () {

      //   this.$emit('imageSelected', this.images)
      // }
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  color: var(--grey);
  font-size: 2rem;
  margin-bottom: 0;
}
p {
  margin: 0;
}
.content-wrapper {
  display: flex;
  padding: 1rem 0 0 0;
  .picture-grid,
  p {
    max-width: 409px;
  }
  p {
    margin-top: 0;
  }
}

.picture-grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(8, 25vw);
  margin-right: 3rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(8, 5vw);
  }
  grid-gap: 1rem;
  .gallery__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    -webkit-box-shadow: 0 8px 17px 2px rgba(0, 0, 0, 0.14),
      0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
    box-shadow: 0 8px 17px 2px rgba(0, 0, 0, 0.14),
      0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
  }
  .gallery__item--1 {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 2;
    @media screen and (min-width: 768px) {
      grid-column-start: 1;
      grid-column-end: 5;
      grid-row-start: 1;
      grid-row-end: 5;
    }
  }
  .gallery__item--2 {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 2;
    grid-row-end: 3;
    @media screen and (min-width: 768px) {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 5;
      grid-row-end: 9;
    }
  }

  .gallery__item--3 {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 3;
    grid-row-end: 4;
    @media screen and (min-width: 768px) {
      grid-column-start: 3;
      grid-column-end: 5;
      grid-row-start: 5;
      grid-row-end: 7;
    }
  }

  .gallery__item--4 {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 4;
    grid-row-end: 5;
    @media screen and (min-width: 768px) {
      grid-column-start: 3;
      grid-column-end: 4;
      grid-row-start: 7;
      grid-row-end: 8;
    }
  }
  .gallery__item--5 {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 5;
    grid-row-end: 6;
    @media screen and (min-width: 768px) {
      grid-column-start: 3;
      grid-column-end: 4;
      grid-row-start: 8;
      grid-row-end: 9;
    }
  }

  .gallery__item--6 {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 6;
    grid-row-end: 7;
    @media screen and (min-width: 768px) {
      grid-column-start: 4;
      grid-column-end: 5;
      grid-row-start: 7;
      grid-row-end: 9;
    }
  }
}
</style>
