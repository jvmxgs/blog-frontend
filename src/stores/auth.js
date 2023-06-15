import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') || null,
    user: localStorage.getItem('user') || null,
  }),
  actions: {
    setToken(token) {
      this.token = token;
    },
    setUser(user) {
      this.user = user;
    },
    saveToken(token) {
      localStorage.setItem('token', token);
      this.setToken(token);
    },
    saveUser(user) {
      localStorage.setItem('user', JSON.stringify(user));
      this.setUser(user);
    },
    removeToken() {
      this.token = null;
      localStorage.removeItem('token');
    },
    removeUser() {
      this.user = null;
      localStorage.removeItem('user');
    },
  },
});