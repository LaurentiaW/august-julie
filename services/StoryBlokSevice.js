import axios from 'axios'
import StoryblokClient from 'storyblok-js-client'

const Storyblok = new StoryblokClient({
  accessToken: 'Z4bppbJclrhmkgaF1TCXhwtt',
  cache: {
    clear: 'auto',
    type: 'memory'
  }
})
const apiClient = axios.create({
  // baseURL: `http://localhost:3000`,
  baseURL: Storyblok
})

export default {
  getProjects () {
    return apiClient.get('cdn/stories/', {
      version: 'draft',
      starts_with: 'projects/'
    })
  },
  getProject (id) {
    return apiClient.get('cdn/stories/' + id, {
      version: 'draft',
      starts_with: 'projects/'
    })
  },
  getAbout () {
    return apiClient.get('cdn/stories/about', { version: 'draft' })
  }
}
