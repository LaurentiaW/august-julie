<template>
  <div class="appHero">
    <h3 class="slogan">
      stardust for the eye
    </h3>
    <div class="image-wrapper">
      <!-- make this a v-for  bind img alt title and class-->
      <img src="/temp/claudio-schwarz-purzlbaum-CDAVhsZgLUs-unsplash.png" alt="" class="one">
      <img src="/temp/cleo-vermij-wSct4rrBPWc-unsplash.png" alt="" class="two">
      <img src="/temp/alexandra-k-JGYL-1.png" alt="" class="three">
      <img src="/temp/alexandra-k-JGYL6LmIq3Q-unsplash.png" alt="" class="four">
      <img src="/temp/chantal-degaust-Oj-3MwyMICs-unsplash.png" alt="" class="five">
      <span class="fancy-text">Made with love <br> X Carlijn Treep</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHero'
}
</script>

<style lang="scss" scoped>
div.appHero {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  .slogan {
    writing-mode: vertical-rl;
    transform: rotate(-180deg);
    z-index: 1;
  }
  .image-wrapper {
    background-color: rgba(227, 173, 155, 0.44);
    border-radius: 44px;
    position: relative;
    width: 100%;
    height: 88vh;
    margin-left: -7px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(8, 1fr);
    @media screen and (min-width: 768px) {
      grid-template-rows: repeat(8, 1fr);
      grid-template-columns: repeat(16, 1fr);
      padding: 1rem;
    }
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;

      &.one {
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 3;
        @media screen and (min-width: 768px) {
          grid-column-start: 1;
          grid-column-end: 4;
          grid-row-start: 2;
          grid-row-end: 6;
          z-index: 7;
        }
      }

      &.two {
        grid-column-start: 3;
        grid-column-end: 5;
        grid-row-start: 1;
        grid-row-end: 5;
        @media screen and (min-width: 768px) {
          grid-column-start: 4;
          grid-column-end: 11;
          grid-row-start: 1;
          grid-row-end: 7;
          z-index: 6;
        }
      }
      &.three {
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 3;
        grid-row-end: 5;
        @media screen and (min-width: 768px) {
          grid-column-start: 10;
          grid-column-end: 14;
          grid-row-start: 2;
          grid-row-end: 8;
        }
      }
      &.four {
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 5;
        grid-row-end: 9;
        @media screen and (min-width: 768px) {
          grid-column-start: 3;
          grid-column-end: 5;
          grid-row-start: 5;
          grid-row-end: 8;
          z-index: 8;
        }
      }
      &.five {
        grid-column-start: 3;
        grid-column-end: 5;
        grid-row-start: 5;
        grid-row-end: 9;
        @media screen and (min-width: 768px) {
          grid-column-start: 5;
          grid-column-end: 11;
          grid-row-start: 6;
          grid-row-end: 9;
          z-index: 7;
        }
      }
    }
  }

  .fancy-text {
    font-family: var(--fancy-font);
    color: var(--comp-clr);
    font-size: 3rem;
    position: absolute;
    top: 30%;
    left: 10%;
    transform: rotate(-33deg);
    background-color: rgba(255, 255, 255, 0.54);
    border-radius: 4px;
    padding: 0.5rem;
    white-space: nowrap;
    @media screen and (min-width: 768px) {
      bottom: 2.75rem;
      right: 1rem;
      top: unset;
      left: unset;
      white-space: pre-wrap;
    }
  }
  @supports not (display: grid) {
    .image-wrapper {
      overflow: hidden;
      > * {
        position: absolute;
      }
      .one {
        width: 12.44vw;
        top: 14%;
        z-index: 6;
        left: 11%;
      }
      .two {
        width: 35.69vw;
        top: 6%;
        left: 25%;
      }
      .three {
        width: 17.32vw;
        right: 14%;
        top: 40%;
        transform: translateY(-50%);
      }
      .four {
        width: 11.54vw;
        bottom: 11%;
        left: 18%;
        z-index: 5;
      }
      .five {
        width: 26.82vw;
        bottom: 3%;
        left: 49%;
        transform: translateX(-50%);
        z-index: 3;
      }
      img {
        width: 100%;
        min-width: 130px;
      }
    }
    @media screen and (min-width: 768px) {
      div.appHero {
        .image-wrapper {
          .one {
            width: 153px;
            top: 14%;
            z-index: 6;
            left: 11%;
          }
          .two {
            width: 439px;
            top: 6%;
            left: 25%;
          }
          .three {
            width: 213px;
            right: 14%;
            top: 40%;
            transform: translateY(-50%);
          }
          .four {
            width: 142px;
            bottom: 11%;
            left: 18%;
            z-index: 5;
          }
          .five {
            width: 330px;
            bottom: 3%;
            left: 49%;
            transform: translateX(-50%);
            z-index: 3;
          }
          img {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
