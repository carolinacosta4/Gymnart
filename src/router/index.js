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
import AthleteView from '../views/AthleteView.vue'
import { useUserStore } from '../stores/users'

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
      component: SearchView,
      meta: { requiresAuth: true }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      meta: { requiresAuth: true }
    },
    {
      path: '/account/:id',
      name: 'account',
      component: UserPageView,
      meta: { requiresAuth: true }
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: FavoritesView,
      meta: { requiresAuth: true }
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: CalendarView,
      meta: { requiresAuth: true }
    },
    {
      path: '/quiz',
      name: 'quiz',
      component: QuizView,
      meta: { requiresAuth: true }
    },
    {
      path: '/quizSelected',
      name: 'quizSelected',
      component: QuizSelectedView,
      meta: { requiresAuth: true }
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true }
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
      meta: { requiresAuth: true }
    },
    {
      path: "/manageAthletes",
      name: "manageAthletes",
      component: ManageAthletesView,
      meta: { requiresAuth: true }
    },
    {
      path: "/manageTeams",
      name: "manageTeams",
      component: ManageTeamsView,
      meta: { requiresAuth: true }
    },
    {
      path: "/athlete",
      name: "athlete",
      component: AthleteView,
      meta: { requiresAuth: false }
    },
  ]
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();

  if (to.meta.requiresAuth && !userStore.isUser) {
    return next({
      path: "/login",
      query: { redirect: to.fullPath },
    });
  }

  if ((to.name === 'login' || to.name === 'landingPage') && userStore.isUser) {
    return next({ name: 'home' }); 
  }

  next();
});

export default router
