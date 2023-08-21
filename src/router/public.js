import Blog from '../layouts/BlogBlue/Blog.vue'
import Home from '../views/Home.vue'
import Post from '../views/public/Post.vue'
import PostService from "@/services/PostService"

export default {
  path: "/",
  name: "/",
  component: Blog,
  meta: {
    requiresAuth: false,
    title: "Home",
  },
  children: [
    {
      path: '',
      component: Home,
      name: "Home",
    },
    {
      path: 'posts/:slug',
      component: Post,
      name: "Post",
      beforeEnter: (to, from, next) => {
        const urlParts = to.path.split('/');
        PostService.show(urlParts[2])
          .then(({ data }) => {
            to.params.post = data
            document.title = data.title + ' - ' + import.meta.env.VITE_APP_TITLE
            // to.meta.title = data.title
            next();
          })
          .catch((error) => {
            if (error.response?.request?.status == 404) {
              next({ name: 'NotFound' });
            }

            console.error(error)
          });
      },
    },
  ]
}