/* eslint-disable arrow-parens */
<template>
  <div>
    <AltHero
      :background-img="homePage[0].content.body[0].backgroundImg"
      :img-one="homePage[0].content.body[0].imgOne"
      :img-two="homePage[0].content.body[0].imgTwo"
      :img-three="homePage[0].content.body[0].imgThree"
      :slogan="homePage[0].content.body[0].slogan"
    />
    <div class="container">
      <hr>
      <div>
        <h2><Star /> {{ projectPage[0].name }}  </h2>
        <p>
          {{ projectPage[0].content.body[1].intro_text }}
          <nuxt-link to="/projects" class="em">
            {{ projectPage[0].content.body[1].link_text }}
          </nuxt-link>
        </p>
        <div class="project-preview-grid">
          <ProjectPreview
            v-for="(project, i) in projects"
            :key="i"
            :project="project"
            :class="`ppg-${i + 1}`"
          />
        </div>
      </div>
      <TheCallToAction />
    </div>
  </div>
</template>

<script>
import ProjectPreview from '@/components/Projects/ProjectPreview.vue'
import Star from '@/components/Icons/Star'
import AltHero from '@/components/AltHero.vue'
import TheCallToAction from '@/components/TheCallToAction.vue'

export default {
  components: {
    ProjectPreview,
    Star,
    AltHero,
    TheCallToAction
  },
  asyncData (context) {
    const version =
      context.query._storyblok || context.isDev ? 'draft' : 'published'
    return context.app.$storyapi
      .get('cdn/stories/', {
        version
      })
      .then((res) => {
        // eslint-disable-next-line no-console
        // console.log(res)
        return {
          blok: res.data.stories,
          allProjects: res.data.stories
        }
      })
  },
  computed: {
    projects () {
      return this.allProjects.filter(
        project => project.content.component === 'project'
      )
    },
    pages () {
      return this.blok.filter(page => page.content.component === 'page')
    },
    projectPage () {
      return this.pages.filter(page => page.name === 'projects')
    },
    homePage () {
      return this.pages.filter(page => page.name === 'Home')
    }
  }
}
</script>
<style lang="scss" scoped>
h2 {
  span.icon-star {
    padding-right: 0.5rem;
  }
}

.em {
  text-shadow: 1px 1px 2px #707070;
}
.project-preview-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 1rem;
  .project-preview {
    padding: 1rem;
    p {
      margin: 0;
    }
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(4, 1fr);
    > * {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .project-preview {
      text-shadow: 1px 1px 2px #707070;
    }
    .ppg-1 {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 2;
    }
    .ppg-2 {
      grid-column-start: 3;
      grid-column-end: 5;
      grid-row-start: 1;
      grid-row-end: 2;
    }

    .ppg-3 {
      grid-column-start: 5;
      grid-column-end: 6;
      grid-row-start: 1;
      grid-row-end: 5;
    }
    .ppg-4 {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 2;
      grid-row-end: 5;
    }

    .ppg-5 {
      grid-column-start: 2;
      grid-column-end: 4;
      grid-row-start: 2;
      grid-row-end: 4;
    }
    .ppg-7 {
      grid-column-start: 4;
      grid-column-end: 5;
      grid-row-start: 3;
      grid-row-end: 5;
    }
  }
}
</style>
