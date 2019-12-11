<template>
  <div>
    <AltHero />

    <div class="container">
      <hr>
      <div>
        <h2><Star /> Projects</h2>
        <p>
          As a interior and fashion stylist there is nothing I love more than making spaces and people beautiful. Below is a list of my latest projects.
          <nuxt-link to="/projects">
            Click here for a full list of my past projects
          </nuxt-link>
        </p>
        <div class="project-preview-grid">
          <ProjectPreview v-for="(project, i) in projects" :key="i" :project="project" :class="`ppg-${i+1}`" />
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
  data () {
    return {
      projects: [
        {
          brand: 'Nijhof',
          img:
            'https://images.pexels.com/photos/2132610/pexels-photo-2132610.jpeg',
          type: 'Etalages',
          skillset: 'Styling',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit voluptatem facilis totam quae reiciendis! Rerum obcaecati quia nam laboriosam nemo.',
          id: '/projects/1'
        },
        {
          brand: 'Nijhof',
          img:
            'https://images.pexels.com/photos/2132610/pexels-photo-2132610.jpeg',
          type: 'Etalages',
          skillset: 'Styling',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit voluptatem facilis totam quae reiciendis! Rerum obcaecati quia nam laboriosam nemo.',
          id: '/projects/1'
        },
        {
          brand: 'Nijhof',
          img:
            'https://images.pexels.com/photos/2132610/pexels-photo-2132610.jpeg',
          type: 'Etalages',
          skillset: 'Styling',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit voluptatem facilis totam quae reiciendis! Rerum obcaecati quia nam laboriosam nemo.',
          id: '/projects/1'
        },
        {
          brand: 'Nijhof',
          img:
            'https://images.pexels.com/photos/2132610/pexels-photo-2132610.jpeg',
          type: 'Etalages',
          skillset: 'Styling',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit voluptatem facilis totam quae reiciendis! Rerum obcaecati quia nam laboriosam nemo.',
          id: '/projects/1'
        },
        {
          brand: 'Nijhof',
          img:
            'https://images.pexels.com/photos/2132610/pexels-photo-2132610.jpeg',
          type: 'Etalages',
          skillset: 'Styling',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit voluptatem facilis totam quae reiciendis! Rerum obcaecati quia nam laboriosam nemo.',
          id: '/projects/1'
        },
        {
          brand: 'Nijhof',
          img:
            'https://images.pexels.com/photos/2132610/pexels-photo-2132610.jpeg',
          type: 'Etalages',
          skillset: 'Styling',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit voluptatem facilis totam quae reiciendis! Rerum obcaecati quia nam laboriosam nemo.',
          id: '/projects/1'
        },
        {
          brand: 'Nijhof',
          img:
            'https://images.pexels.com/photos/2132610/pexels-photo-2132610.jpeg',
          type: 'Etalages',
          skillset: 'Styling',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit voluptatem facilis totam quae reiciendis! Rerum obcaecati quia nam laboriosam nemo.',
          id: '/projects/1'
        },
        {
          brand: 'Nijhof',
          img:
            'https://images.pexels.com/photos/2132610/pexels-photo-2132610.jpeg',
          type: 'Etalages',
          skillset: 'Styling',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit voluptatem facilis totam quae reiciendis! Rerum obcaecati quia nam laboriosam nemo.',
          id: '/projects/1'
        },
        {
          brand: 'Nijhof',
          img:
            'https://images.pexels.com/photos/2132610/pexels-photo-2132610.jpeg',
          type: 'Etalages',
          skillset: 'Styling',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit voluptatem facilis totam quae reiciendis! Rerum obcaecati quia nam laboriosam nemo.',
          id: '/projects/1'
        }
      ]
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

.project-preview-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 1rem;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(4, 1fr);
    > * {
      width: 100%;
      height: 100%;
      object-fit: cover;
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
