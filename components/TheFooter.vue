<template>
  <footer>
    <span>&copy;2019 <span class="hide-on-small">With love XOXO</span> Carlijn <span class="hide-on-small"> Treep</span></span>
    <FavIcon :width="30" :height="30" />
    <div class="social-icons">
      <span class="hide-on-small">Connect with  me on:  </span>
      <SocialIcons :name="instagram" :link="instagramLink" />
      <SocialIcons :name="pintrest" :link="pintrestLink" />
    </div>
  </footer>
</template>

<script>
import FavIcon from '@/components/Icons/FavIcon'
import SocialIcons from '@/components/Icons/SocialIcons'
export default {
  name: 'TheFooter',
  components: {
    FavIcon,
    SocialIcons
  },
  data () {
    return {
      instagram: 'instagram',
      pintrest: 'pintrest',
      instagramLink: 'http://www.instagram.com/yourusername',
      pintrestLink: 'http://pinterest.com/yourusername/'
    }
  }
}
</script>

<style lang="scss" scoped>
footer {
  position: relative;
  padding: 1rem;
  background-color: var(--main-clr);
  color: var(--white);
  font-family: 'Abril Fatface', cursive;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .social-icons {
    display: flex;
    align-items: flex-start;

    > * {
      margin-right: 0.5rem;

      &.social-icon {
        margin-right: 2rem;
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }
  .icon-logo {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .hide-on-small {
    display: none;
    @media screen and (min-width: 768px) {
      display: inline;
    }
  }
}
</style>
