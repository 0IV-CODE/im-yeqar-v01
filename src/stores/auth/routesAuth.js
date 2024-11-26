import { defineStore } from 'pinia'

export const useRoutesAuthStore = defineStore('routesAuth', {
  state: () => ({
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
        path: '/:userid/user/dashboard/:viewType',
      },
      {
        parent: 'user',
        name: 'Profile',
        icon: '$BadgeAccountOutline',
        path: '/:userid/user/profile/:viewType',
      },
      { parent: 'user', name: 'Growth Plans', icon: '$Finance', path: '/:userid/user/growthplans' },
      { parent: 'user', name: 'Reports', icon: '$TestTube', path: '/:userid/user/reports' },
      { parent: 'user', name: 'Settings', icon: '$CogOutline', path: '/:userid/user/settings' },
      // leader
      {
        parent: 'leader',
        name: 'My Team',
        icon: '$AccountGroupOutline',
        path: '/:userid/leader/myteam/:viewType',
      },
      {
        parent: 'leader',
        name: 'Team Growth Plans',
        icon: '$Finance',
        path: '/:userid/leader/teamgrowthplans/:viewType',
      },
      {
        parent: 'leader',
        name: 'Team Reports',
        icon: '$TestTube',
        path: '/:userid/leader/teamreports/:viewType',
      },
      // data
      {
        parent: 'data',
        name: 'Team',
        icon: '$AccountGroupOutline',
        path: '/:userid/data/team/:viewType',
      },
      { parent: 'data', name: 'Org', icon: '$SitemapOutline', path: '/:userid/data/org/:viewType' },
      { parent: 'data', name: 'Map', icon: '$Earth', path: '/:userid/data/map/:viewType' },
      {
        parent: 'data',
        name: 'Graph',
        icon: '$ChartScatterPlotHexbin',
        path: '/:userid/data/graph/:viewType',
      },
      {
        parent: 'data',
        name: 'Contacts',
        icon: '$PhoneInTalkOutline',
        path: '/:userid/data/contacts/',
      },
      // admin
      { parent: 'admin', name: 'Users', icon: '$TableAccount', path: '/:userid/admin/users' },
      { parent: 'admin', name: 'Companies', icon: '$Domain', path: '/:userid/admin/companies' },
      { parent: 'admin', name: 'Leaders', icon: '$AccountTie', path: '/:userid/admin/leaders' },
      {
        parent: 'admin',
        name: 'Teams',
        icon: '$AccountGroupOutline',
        path: '/:userid/admin/teams',
      },
      //   it
      { parent: 'it', name: 'Tech Inventory', icon: '$Sd', path: '/:userid/it/techinvt' },
      { parent: 'it', name: 'Logs', icon: '$ClipboardTextClockOutline', path: '/:userid/it/logs' },
      { parent: 'it', name: 'Archive', icon: '$BackupRestore', path: '/:userid/it/archive' },
    ],
  }),

  actions: {
    stateToggleParentRoute(item) {
      this.parentRoutes.forEach((route) => {
        route.active = route.name === item.name
      })
    },
  },
})
