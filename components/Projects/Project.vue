<template>
  <article v-if="project">
    <div v-if="displayImg">
      <div class="modal-backdrop" @click="displayImg = !displayImg" />
      <div class="modal">
        <i
          class="modal-action"
          @click="displayImg = !displayImg"
        ><CloseIcon
          name="brand-close"
        /></i>
        <img :src="selectedImg" class="modal-img">
      </div>
    </div>
    <h1><Star /> {{ project.brand }}</h1>
    <p>
      {{ project.skillset }}<span v-show="project.skillset">,</span>
      {{ project.type }}
    </p>
    <div class="content-wrapper">
      <div class="picture-grid">
        <figure
          v-for="(image, i) in project.images"
          :key="i"
          :class="`gallery__item gallery__item--${i + 1}`"
          @click="imgShow(image.img)"
        >
          <img
            :src="image.img"
            :alt="image.text"
            :title="image.text"
            class="gallery__img"
          >
        </figure>
      </div>
      <p>{{ project.description }}</p>
    </div>
  </article>
</template>

<script>
import Star from '@/components/Icons/Star'
import CloseIcon from '@/components/Icons/CloseIcon.vue'

export default {
  name: 'Project',
  components: {
    Star,
    CloseIcon
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
    imgShow (img) {
      // console.log(img)
      this.selectedImg = img
      this.displayImg = true
      // console.log(img)
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

.modal {
  background-color: var(--white);
  position: fixed;
  z-index: 1001;
  padding: 1rem;
  width: 99%;
  height: auto;
  @media screen and (min-width: 768px) {
    height: 90vh;
    width: auto;
  }
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .modal-action {
    text-align: right;
  }
  .modal-img {
    margin: 0 auto;
    width: 100%;
    @media screen and (min-width: 768px) {
      width: 90%;
      height: auto;
    }
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
