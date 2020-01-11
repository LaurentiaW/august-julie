// import StoryBlok from '@/services/StoryBlokServices.js'
// export const state = () => ({
//   about: {},
//   projects: [],
//   project: {}
// })
// export const mutations = {
//   SET_PROJECTS (state, projects) {
//     state.projects = projects
//   },
//   SET_PROJECT (state, project) {
//     state.project = project
//   },
//   SET_ABOUT (state, about) {
//     state.about = about
//   }
// }

// export const actions = {
//   fetchProjects ({ commit }) {
//     return StoryBlok.getProjects().then((response) => {
//       commit('SET_PROJECTS', response.data)
//     })
//   },
//   fetchProject ({ commit }, id) {
//     return StoryBlok.getProject(id).then((response) => {
//       commit('SET_PROJECT', response.data)
//     })
//   },
//   fetchAbout ({ commit }) {
//     return StoryBlok.getAbout().then((response) => {
//       commit('SET_ABOUT', response.data)
//     })
//   }
// }
