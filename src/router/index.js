import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SearchView from '../views/SearchView.vue'
import DashboardView from '../views/DashboardView.vue'
import FavoritesView from '../views/FavoritesView.vue'
import UserPageView from '../views/UserPageView.vue'
import CalendarView from '../views/CalendarView.vue'
import QuizView from '../views/QuizView.vue'
import QuizSelectedView from '../views/QuizSelectedView.vue'
import LandingPageView from '../views/LandingPageView.vue'
import LoginView from '../views/LoginSignUpView.vue'
import PageNotFoundView from '../views/PageNotFoundView.vue'
import ManageAthletesView from '../views/ManageAthletesView.vue'
import ManageTeamsView from '../views/ManageTeamsView.vue'
import ManageUsersView from '../views/ManageUsersView.vue'

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
      name: 'search',
      component: SearchView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/account/:id',
      name: 'account',
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
      path: '/quizSelected',
      name: 'quizSelected',
      component: QuizSelectedView
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
    {
      path: "/manageUsers",
      name: "manageUsers",
      component: ManageUsersView,
    },
    {
      path: "/manageAthletes",
      name: "manageAthletes",
      component: ManageAthletesView,
    },
    {
      path: "/manageTeams",
      name: "manageTeams",
      component: ManageTeamsView,
    },
  ]
})

export default router
