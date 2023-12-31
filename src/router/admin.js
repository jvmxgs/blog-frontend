import Admin from '../layouts/BlogBlue/Admin.vue'
import Dashboard from '../views/admin/Dashboard.vue'
import AdminPosts from '../views/admin/posts/Posts.vue'
import PostList from '../views/admin/posts/List.vue'
import PostsNew from '../views/admin/posts/New.vue'
import PostsEdit from '../views/admin/posts/Edit.vue'

export default {
  path: "/admin",
  name: "Admin",
  component: Admin,
  meta: { requiresAuth: true },
  children: [
    {
      path: '',
      component: Dashboard,
      name: "Dashboard",
      meta: {
        title: 'Dashboard'
      },
    },
    {
      path: 'posts',
      component: AdminPosts,
      name: "AdminPosts",
      children: [
        {
          path: '',
          component: PostList,
          name: "PostsList",
          meta: {
            title: 'Posts'
          },
        },
        {
          path: 'new',
          component: PostsNew,
          name: "PostsNew",
          meta: {
            title: 'New post'
          },
        },
        {
          path: ':id/edit',
          component: PostsEdit,
          name: "PostsEdit",
          meta: {
            title: 'Edit Post'
          },
        },
      ]
    }
  ]
}