<template>
  <div class="logo">
    AUGUST <span>&</span> JULIE
    <div class="tagline">
      interior & fashion stylist
    </div>
  </div>
</template>

<style lang="scss" scoped>
.logo {
  font-family: 'Prata', serif;
  font-size: 22px;
  color: var(--main-clr);
  position: relative;
  span {
    font-family: 'Cinzel', serif;
    color: var(--comp-clr);
    vertical-align: text-bottom;
  }
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
  .tagline {
    font-family: 'Cardo', serif;
    font-size: 16px;
    color: var(--dark-blue);
    position: absolute;
    right: 0;
    bottom: -0.85rem;
  }
}
</style>
