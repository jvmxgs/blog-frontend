import { createAxiosInstance } from './api';

const api = createAxiosInstance()

export default {
  login: async (value) => {
    return await api.post("/api/login", value)
      .then(function (data) {
        return data
      })
  },
}