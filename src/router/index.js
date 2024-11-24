import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// user
import DashboardView from '../views/user/DashboardView.vue'
import ProfileView from '../views/user/ProfileView.vue'
import GrowthPlansView from '../views/user/GrowthPlansView.vue'
import ReportsView from '../views/user/ReportsView.vue'
import SettingsView from '../views/user/SettingsView.vue'
// leader
import MyTeamView from '../views/leader/MyTeamView.vue'
import TeamGrowthPlansView from '../views/leader/TeamGrowthPlansView.vue'
import TeamReportsView from '../views/leader/TeamReportsView.vue'
// data
import TeamView from '../views/data/TeamView.vue'
import OrgView from '../views/data/OrgView.vue'
import MapView from '../views/data/MapView.vue'
import GraphView from '../views/data/GraphView.vue'
import ContactsView from '../views/data/ContactsView.vue'
// admin
import UsersView from '../views/admin/UsersView.vue'
import CompaniesView from '../views/admin/CompaniesView.vue'
import LeadersView from '../views/admin/LeadersView.vue'
import TeamsView from '../views/admin/TeamsView.vue'
// it
import TechInvtView from '../views/it/TechInvtView.vue'
import LogsView from '../views/it/LogsView.vue'
import ArchiveView from '../views/it/ArchiveView.vue'
// auth
import LoginView from '../views/auth/LoginView.vue'
// misc
import ErrorView from '../views/error/ErrorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Auth
    // sensitive = strict path aka no change
    {
      path: '/login',
      sensitive: false,
      name: 'Login',
      component: LoginView,
      meta: {
        authRequired: false,
        page: 'login',
      },
    },
    // user
    // :userid = user identification key from backend
    // dashboard :viewType = guest, regular, leader, & admin
    {
      path: '/:userid/user/dashboard/:viewType',
      sensitive: false,
      name: 'Dashboard',
      component: DashboardView,
      meta: {
        // auth may be true if leader or admin :viewType
        authRequired: false,
        page: 'dashboard',
      },
    },
    // profile :viewType = guest (no profile assigned) & regular (profile assigned)
    {
      path: '/:userid/user/profile/:viewType',
      sensitive: false,
      name: 'Profile',
      component: ProfileView,
      meta: {
        authRequired: false,
        page: 'profile',
      },
    },
    {
      path: '/:userid/user/growthplans',
      sensitive: false,
      name: 'GrowthPlans',
      component: GrowthPlansView,
      meta: {
        authRequired: false,
        page: 'growthplans',
      },
    },
    {
      path: '/:userid/user/reports',
      sensitive: false,
      name: 'Reports',
      component: ReportsView,
      meta: {
        authRequired: false,
        page: 'reports',
      },
    },
    {
      path: '/:userid/user/settings',
      sensitive: false,
      name: 'Settings',
      component: SettingsView,
      meta: {
        authRequired: false,
        page: 'settings',
      },
    },
    // leader
    // MyTeam :viewType = single || multiple team/s from company/ies
    {
      path: '/:userid/leader/myteam/:viewType',
      sensitive: false,
      name: 'MyTeam',
      component: MyTeamView,
      meta: {
        authRequired: true,
        page: 'myteam',
      },
    },
    // TeamGrowthPlans :viewType = single || multiple team/s files from company/ies
    {
      path: '/:userid/leader/teamgrowthplans/:viewType',
      sensitive: false,
      name: 'TeamGrowthPlans',
      component: TeamGrowthPlansView,
      meta: {
        authRequired: true,
        page: 'teamgrowthplans',
      },
    },
    // TeamReports :viewType = single || multiple team/s reports from company/ies
    {
      path: '/:userid/leader/teamreports/:viewType',
      sensitive: false,
      name: 'TeamReports',
      component: TeamReportsView,
      meta: {
        authRequired: true,
        page: 'teamreports',
      },
    },
    // data
    // Team :viewType = guest (limited data view) or regular
    {
      path: '/:userid/data/team/:viewType',
      sensitive: false,
      name: 'Team',
      component: TeamView,
      meta: {
        authRequired: false,
        page: 'team',
      },
    },
    // Org :viewType = guest (limited data view) or regular
    {
      path: '/:userid/data/org/:viewType',
      sensitive: false,
      name: 'Org',
      component: OrgView,
      meta: {
        authRequired: false,
        page: 'org',
      },
    },
    // Map :viewType = guest (limited data view) or regular
    {
      path: '/:userid/data/map/:viewType',
      sensitive: false,
      name: 'Map',
      component: MapView,
      meta: {
        authRequired: false,
        page: 'map',
      },
    },
    // Graph :viewType = guest (limited data view) or regular
    {
      path: '/:userid/data/graph/:viewType',
      sensitive: false,
      name: 'Graph',
      component: GraphView,
      meta: {
        authRequired: false,
        page: 'graph',
      },
    },
    {
      path: '/:userid/data/contacts/',
      sensitive: false,
      name: 'Contacts',
      component: ContactsView,
      meta: {
        authRequired: true,
        page: 'contacts',
      },
    },
    // admin
    {
      path: '/:userid/admin/users',
      name: 'Users',
      sensitive: true,
      component: UsersView,
      meta: {
        authRequired: true,
        page: 'users',
      },
    },
    {
      path: '/:userid/admin/companies',
      sensitive: true,
      name: 'Companies',
      component: CompaniesView,
      meta: {
        authRequired: true,
        page: 'companies',
      },
    },
    {
      path: '/:userid/admin/leaders',
      sensitive: true,
      name: 'Leaders',
      component: LeadersView,
      meta: {
        authRequired: true,
        page: 'leaders',
      },
    },
    {
      path: '/:userid/admin/teams',
      sensitive: true,
      name: 'Teams',
      component: TeamsView,
      meta: {
        authRequired: true,
        page: 'teams',
      },
    },
    // it
    {
      path: '/:userid/it/techinvt',
      sensitive: true,
      name: 'TechInvt',
      component: TechInvtView,
      meta: {
        authRequired: true,
        page: 'techinvt',
      },
    },
    {
      path: '/:userid/it/logs',
      sensitive: true,
      name: 'Logs',
      component: LogsView,
      meta: {
        authRequired: true,
        page: 'logs',
      },
    },
    {
      path: '/:userid/it/archive',
      sensitive: true,
      name: 'Archive',
      component: ArchiveView,
      meta: {
        authRequired: true,
        page: 'archive',
      },
    },
    // misc
    // :errorCode = 404 etc passed
    {
      path: '/:userid/error/:errorCode',
      sensitive: false,
      name: 'Error',
      component: ErrorView,
      meta: {
        authRequired: false,
        page: 'error',
      },
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
  ],
  strict: true,
})

export default router
