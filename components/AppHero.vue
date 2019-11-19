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
      <span>Made with love <br> X Carlijn Treep</span>
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
  .image-wrapper {
    background-color: rgba(227, 173, 155, 0.44);
    border-radius: 44px;
    position: relative;
    width: 100%;
    height: 88vh;
    margin-left: -7px;
    overflow: hidden;
    > * {
      position: absolute;
    }
    .one {
      width: 153px;
      top: 15%;
      z-index: 6;
      left: 12%;
    }
    .two {
      width: 439px;
      top: 6%;
      left: 25%;
    }
    .three {
      width: 253px;
      right: 8%;
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
  .slogan {
    writing-mode: vertical-rl;
    transform: rotate(-180deg);
  }
}
</style>
