<template>
  <div class="sidenav-container">
    <div v-if="show" class="modal-backdrop" @click="$emit('close')" />
    <transition name="slide-side">
      <div v-if="show" class="sidenav">
        <div class="sidenav-top">
          <h1 @click="$emit('close')">
            <nuxt-link to="/">
              <TheLogo />
            </nuxt-link>
          </h1>
          <i class="icon icon-close" @click="$emit('close')">
            <CloseIcon name="brand-close" />
          </i>
        </div>
        <ul class="sidenav-wrapper">
          <ul class="nav-list">
            <li v-for="(item, i) in items" :key="i" class="nav-item">
              <nuxt-link :to="item.to" @click.native="$emit('close')">
                <Star />
                {{ item.title }}
              </nuxt-link>
            </li>
          </ul>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import CloseIcon from '@/components/Icons/CloseIcon'
import TheLogo from '@/components/Icons/TheLogo'
import Star from '@/components/Icons/Star'

export default {
  name: 'TheSidenav',
  components: {
    CloseIcon,
    TheLogo,
    Star
  },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      items: [
        {
          title: 'Projects',
          to: '/projects'
        },
        {
          title: 'About',
          to: '/about'
        },
        {
          title: 'Contact',
          to: '/contact'
        }
      ]
    }
  }
}
</script>

<style scoped>
.sidenav-container {
  height: 100%;
  width: 100%;
}

.sidenav {
  height: 100%;
  width: 300px;
  background-color: var(--white);
  z-index: 10000;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 30px;
}

.sidenav-top {
  position: relative;
  top: 6%;
}

h1 {
  font-size: 1.5rem;
}

h1 a {
  color: var(--main-clr);
  text-decoration: none;
  font-style: normal;
}

.sidenav-wrapper {
  position: absolute;
  top: 35%;
  left: 20px;
  transform: translateY(-50%);
}
.slide-side-enter-active,
.slide-side-leave-active {
  transition: all 0.3s ease-out;
}
.slide-side-enter,
.slide-side-leave-to {
  transform: translateX(-100%);
}

.nav-list {
  list-style: none;
}

.nav-item {
  margin: 20px 10px;
}

.nav-item a {
  text-decoration: none;
  color: var(--grey);
  font-size: 1.25rem;
}

i.icon {
  font-style: normal;
  font-size: 1.5rem;
  position: absolute;
  top: -2.5rem;
  right: 0;
}
</style>
