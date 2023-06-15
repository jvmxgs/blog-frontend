import { createAxiosInstance } from '../api';

const api = createAxiosInstance()

export default {
  index: async () => {
    return await api.get("/api/admin/posts")
      .then(function ({data}) {
        return data
      })
      .catch(function (error) {
        console.log(error)
      })
  },

  create: async (value) => {
    return await api.post("/api/admin/posts", value)
      .then(function ({data}) {
        return data.data
      })
      .catch(function (error) {
        console.log(error)
      })
  },

  edit: async (post_id) => {
    return await api.get("/api/admin/posts/" + post_id + "/edit")
      .then(function ({data}) {
        return data.data
      })
      .catch(function (error) {
        console.log(error)
      })
  },

  update: async (post_id, data) => {
    return await api.put("/api/admin/posts/" + post_id, data)
      .then(function ({data}) {
        return data.data
      })
      .catch(function (error) {
        console.log(error)
      })
  },
}