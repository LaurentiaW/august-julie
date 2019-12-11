<template>
  <div>
    <div class="header-container">
      <header class="the-header container">
        <TheSideNavToggle @toggle="$emit('sidenavToggle')" />
        <div class="logo">
          <nuxt-link to="/">
            <TheLogo />
          </nuxt-link>
        </div>
        <div class="navigation-items">
          <ul class="nav-list">
            <li v-for="(item, i) in items" :key="i" class="nav-item">
              <nuxt-link :to="item.to">
                <Star />
                {{ item.title }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  </div>
</template>

<script>
import TheSideNavToggle from '@/components/Nav/TheSideNavToggle'
import TheLogo from '@/components/Icons/TheLogo'
import Star from '@/components/Icons/Star'

export default {
  name: 'TheHeader',
  components: {
    TheSideNavToggle,
    TheLogo,
    Star
  },
  data () {
    return {
      items: [
        {
          title: 'projects',
          to: '/projects'
        },
        {
          title: 'about',
          to: '/about'
        },
        {
          title: 'contact',
          to: '/contact'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.header-container {
  width: 100%;
  background-color: var(--white);
}

.the-header {
  z-index: 100;
  box-sizing: border-box;
  padding: 0.5rem 0 1rem;
  color: var(--main-clr);
  display: flex;
  align-items: center;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: auto 1fr;
  }
}

.logo h1 {
  font-size: 1.3rem;
}

.logo a {
  text-decoration: none;
}

.navigation-items {
  display: none;
}

@media (min-width: 768px) {
  .top-bar ul li:last-child {
    padding: 0;
  }

  .navigation-items {
    font-family: 'Raleway', sans-serif;
    display: block;
    color: var(--dark-blue);
  }
  .nav-list {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .nav-item {
      a {
        color: var(--dark-blue);
        padding: 1rem;
        -moz-transition: all 3s ease-out;
        -o-transition: all 3s ease-out;
        transition: all 3s ease-out;
        &:hover {
          color: var(--comp-clr);
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
