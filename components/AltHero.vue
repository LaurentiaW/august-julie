<template>
  <div class="hero-wrapper">
    <div v-if="bgImg" :style="{backgroundImage: `url( ${backgroundImg})` }" class="bgImg">
      <div class="container">
        <h3 class="slogan">
          {{ slogan }}
        </h3>
        <div class="img-wrapper">
          <img :src="imgOne" alt="text of this img">
          <img :src="imgTwo" alt="text of this img">
          <img :src="imgThree" alt="text of this img">
        </div>
        <ul>
          <li v-for="(dot, i) in dots" :key="i">
            <PaintSplash :style="{fill:dot.color}" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import PaintSplash from '@/components/Icons/PaintSplash.vue'

export default {
  name: 'AppHero',
  components: {
    PaintSplash
  },
  props: {
    backgroundImg: {
      type: String,
      default: '/temp/bgimg.png'
    },
    imgOne: {
      type: String,
      default: '/temp/hero-one.png'
    },
    imgTwo: {
      type: String,
      default: '/temp/hero-two.png'
    },
    imgThree: {
      type: String,
      default: '/temp/hero-three.png'
    },
    slogan: {
      type: String,
      default: 'stardust for the eyes'
    }
  },
  data () {
    return {
      dots: [
        { color: '#1E1D1A' },
        { color: '#C48749' },
        { color: '#10202B' },
        { color: '#E3AD9B' },
        { color: '#9A3924' }
      ],
      bgImg: '/temp/bgimg.jpg'
    }
  }
}
</script>

<style lang="scss" scoped>
.hero-wrapper {
  background-color: #f3f3ee;

  .bgImg {
    width: 100%;
    background-position: center;
    background-size: cover;
  }
  .container {
    display: flex;
    padding: 50px 0;
    justify-content: space-between;
    position: relative;

    ul {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin: 0;
      li {
        width: 31px;
        height: 31px;
        margin: 0 0 70px 0;
        @media (min-width: 768px) {
          margin: 0 0 50px 0;
        }
        &:last-child {
          margin: 0;
        }
      }
    }
    .img-wrapper {
      width: 75vw;
      padding: 0 0 0 1rem;
      > img {
        max-width: 200px;
        position: absolute;
        box-shadow: 0 8px 17px 2px rgba(0, 0, 0, 0.14),
          0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
        &:nth-child(1) {
          z-index: 3;
          top: 24vh;
          width: 129px;
          @media (min-width: 768px) {
            left: 15vw;
          }
        }
        &:nth-child(2) {
          z-index: 3;
          width: 145px;
          bottom: 5vh;
          right: 8vw;
        }
        &:nth-child(3) {
          z-index: 1;
          width: 87px;
          right: 8vw;
          @media (min-width: 768px) {
            left: 50%;
            transform: translate(-50%, -50%);
            top: 50%;
            width: 180px;
          }
        }
      }
    }

    .slogan {
      color: var(--comp-clr);
      writing-mode: vertical-rl;
      line-height: initial;
      margin: 0;
      transform: rotate(-180deg);
      z-index: 1;
      display: flex;
      justify-content: center;
      // align-items: flex-end;
      text-shadow: 1px 1px 2px #707070;
    }
  }
}
</style>
