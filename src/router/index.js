import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AddProjectView from '../views/AddProjectView.vue';
import EditProjectView from '../views/EditProjectView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/add',
    name: 'addProject',
    component: AddProjectView,
  },
  {
    path: '/projects/:id',
    name: 'editProject',
    component: EditProjectView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
