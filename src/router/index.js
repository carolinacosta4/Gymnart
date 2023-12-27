import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SearchView from '../views/SearchView.vue'
import DashboardView from '../views/DashboardView.vue'
import FavoritesView from '../views/FavoritesView.vue'
import UserPageView from '../views/UserPageView.vue'
import CalendarView from '../views/CalendarView.vue'
import QuizView from '../views/QuizView.vue'
import LandingPageView from '../views/LandingPageView.vue'
import LoginView from '../views/LoginSignUpView.vue'
import PageNotFoundView from '../views/PageNotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landingPage',
      component: LandingPageView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/search',
      name: 'seach',
      component: SearchView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/user', // add username to the path
      name: 'user',
      component: UserPageView
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: FavoritesView
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: CalendarView
    },
    {
      path: '/quiz',
      name: 'quiz',
      component: QuizView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: "/:pathMatch(.*)*",
      name: "pageNotFound",
      component: PageNotFoundView,
    },
  ]
})

export default router
