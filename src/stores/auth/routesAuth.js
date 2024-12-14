import { defineStore } from 'pinia'

export const useRoutesAuthStore = defineStore('routesAuth', {
  state: () => ({
    companies: [
      {
        key: '5311uytbsi!d',
        name: 'STBS',
        icon: '$Domain',
        color: '#ff6600',
        active: true,
        desc: 'Design and Manufacture Metal Building',
      },
      {
        key: '5486uldosi@d',
        name: 'CUSA',
        icon: '$Domain',
        color: '#00FFFF',
        active: false,
        desc: 'Cold-formed Steel Components',
      },
      {
        key: '93201uysmmi)d',
        name: 'GALIN',
        icon: '$Domain',
        color: '#006400',
        active: false,
        desc: 'Delivery',
      },
    ],
    parentRoutes: [
      {
        name: 'user',
        icon: '$AccountCircleOutline',
        active: true,
        desc: 'All user associated data',
      },
      {
        name: 'leader',
        icon: '$AccountTie',
        active: false,
        desc: 'Team Management Portal',
      },
      { name: 'data', icon: '$DatabaseOutline', active: false, desc: 'All Org info' },
      { name: 'admin', icon: '$Security', active: false, desc: 'AD for Org & Team' },
      { name: 'it', icon: '$Incognito', active: false, desc: 'Backups & logs' },
    ],
    childRoutes: [
      // user
      {
        parent: 'user',
        name: 'Dashboard',
        icon: '$ViewDashboardOutline',
        path: '/user/dashboard/:viewType',
      },
      {
        parent: 'user',
        name: 'Profile',
        icon: '$BadgeAccountOutline',
        path: '/user/profile/:viewType',
      },
      { parent: 'user', name: 'Growth Plans', icon: '$Finance', path: '/user/growthplans' },
      { parent: 'user', name: 'Reports', icon: '$TestTube', path: '/user/reports' },
      { parent: 'user', name: 'Settings', icon: '$CogOutline', path: '/user/settings' },
      { parent: 'user', name: 'Logout', icon: '$Logout', path: '/login' },
      // leader
      {
        parent: 'leader',
        name: 'My Team',
        icon: '$AccountGroupOutline',
        path: '/leader/myteam/:viewType',
      },
      {
        parent: 'leader',
        name: 'Team Growth Plans',
        icon: '$Finance',
        path: '/leader/teamgrowthplans/:viewType',
      },
      {
        parent: 'leader',
        name: 'Team Reports',
        icon: '$TestTube',
        path: '/leader/teamreports/:viewType',
      },
      // data
      {
        parent: 'data',
        name: 'Team',
        icon: '$AccountGroupOutline',
        path: '/data/:company/team/:viewType',
      },
      {
        parent: 'data',
        name: 'Org',
        icon: '$SitemapOutline',
        path: '/data/:company/org/:viewType',
      },
      { parent: 'data', name: 'Map', icon: '$Earth', path: '/data/:company/map/:viewType' },
      {
        parent: 'data',
        name: 'Graph',
        icon: '$ChartScatterPlotHexbin',
        path: '/data/:company/graph/:viewType',
      },
      {
        parent: 'data',
        name: 'Contacts',
        icon: '$PhoneInTalkOutline',
        path: '/data/:company/contacts/',
      },
      // admin
      {
        parent: 'admin',
        name: 'Onboarding',
        icon: '$HandshakeOutline',
        path: '/admin/onboarding',
      },
      { parent: 'admin', name: 'Users', icon: '$TableAccount', path: '/admin/users' },
      {
        parent: 'admin',
        name: 'Teams',
        icon: '$AccountGroupOutline',
        path: '/admin/teams',
      },
      { parent: 'admin', name: 'Leaders', icon: '$AccountTie', path: '/admin/leaders' },
      { parent: 'admin', name: 'Companies', icon: '$Domain', path: '/admin/companies' },

      //   it
      { parent: 'it', name: 'Tech Inventory', icon: '$Sd', path: '/it/techinvt' },
      { parent: 'it', name: 'Logs', icon: '$ClipboardTextClockOutline', path: '/it/logs' },
      { parent: 'it', name: 'Archive', icon: '$BackupRestore', path: '/it/archive' },
    ],
  }),

  actions: {
    stateToggleParentRoute(item) {
      this.parentRoutes.forEach((route) => {
        route.active = route.name === item.name
      })
    },
    stateToggleCompanyRoute(item) {
      // key or special id needed for no duplicate names
      this.companies.forEach((route) => {
        route.active = route.key === item.key
      })
    },
  },
})
