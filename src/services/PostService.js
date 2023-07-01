import { createAxiosInstance } from './api';

const api = createAxiosInstance()

export default {
  index: async () => {
    return await api.get("/api/posts")
      .then(function ({data}) {
        return data
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  show: async (slug) => {
    return await api.get("/api/posts/" + slug)
      .then(function ({data}) {
        return data
      })
  },
}