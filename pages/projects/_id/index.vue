<template>
  <div class="container">
    <Project :project="project" />
    <TheCallToAction />
  </div>
</template>

<script>
import Project from '@/components/Projects/Project.vue'
import TheCallToAction from '@/components/TheCallToAction.vue'

export default {
  components: {
    Project,
    TheCallToAction
  },
  data () {
    return {
      project: {
        brand: 'Nijhof',
        images: [
          {
            img:
              'https:static.pexels.com/photos/1545590/pexels-photo-1545590.jpeg',
            text: 'image one'
          },
          {
            img:
              'https://images.pexels.com/photos/2132610/pexels-photo-2132610.jpeg',
            text: 'image two'
          },
          {
            img:
              'https://images.pexels.com/photos/2132610/pexels-photo-2132610.jpeg',
            text: 'image three'
          },
          {
            img:
              'https://images.pexels.com/photos/2132610/pexels-photo-2132610.jpeg',
            text: 'image four'
          },
          {
            img:
              'https://images.pexels.com/photos/2132610/pexels-photo-2132610.jpeg',
            text: 'image five'
          },
          {
            img:
              'https://images.pexels.com/photos/2132610/pexels-photo-2132610.jpeg',
            text: 'image six'
          }
        ],
        // imgDes: [
        //   'image one',
        //   'image two',
        //   'image three',
        //   'image four',
        //   'image five',
        //   'image six'
        // ],
        type: 'Etalages',
        skillset: 'Styling',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ullam sequi nihil omnis id quis nemo corporis, ab tempora cum animi veritatis hic nostrum quas nesciunt nisi quam possimus neque ad magni cupiditate natus molestiae! Blanditiis laudantium nulla mollitia excepturi quos rerum, repudiandae porro quis harum pariatur sunt a facilis quo cumque quisquam dolorem nihil corrupti corporis reprehenderit unde non ex! Similique enim repellendus officiis nobis aliquam voluptatibus corrupti, hic sunt asperiores consectetur eaque nostrum, repellat nihil corporis ducimus voluptas modi ab molestias aut! Saepe architecto tempore sapiente animi culpa. Repellat possimus soluta cum vero excepturi quibusdam error ex a laudantium eaque, aspernatur ratione illo at saepe temporibus, labore deserunt ullam enim non eligendi laborum expedita iusto? Praesentium eaque ea cum ut placeat minima optio, harum est nobis. Quo fugiat amet animi eveniet assumenda est minima nostrum consequatur rerum quia maiores eum id debitis hic ad reprehenderit dicta similique sint veniam magnam tenetur earum, iste ab. Impedit dolorem dolore sapiente, ducimus quaerat officiis voluptas aliquam non adipisci animi nostrum iure temporibus doloremque aut facere beatae, necessitatibus laborum. Iste dicta libero molestias quasi quis minus? Pariatur repellendus, illum, dolores est, inventore magni facilis voluptatum quo iure rerum error aperiam maxime repellat?',
        id: '/projects/1'
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
