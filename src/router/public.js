import Blog from '../layouts/BlogBlue/Blog.vue'
import Home from '../views/Home.vue'
import Post from '../views/public/Post.vue'

export default {
  path: "/",
  name: "/",
  component: Blog,
  meta: { requiresAuth: false },
  children: [
    {
      path: '',
      component: Home,
      name: "Home"
    },
    {
      path: 'posts/:slug',
      component: Post,
      name: "Post"
    },
  ]
}