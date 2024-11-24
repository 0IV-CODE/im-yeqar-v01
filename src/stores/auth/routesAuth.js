import { defineStore } from 'pinia'

export const useRoutesAuthStore = defineStore('routesAuth', {
  state: () => ({
    parentRoutes: [
      {
        name: 'user',
        icon: '$AccountCircleOutline',
        path: '/',
        active: true,
        desc: 'All user associated data',
      },
      {
        name: 'leader',
        icon: '$AccountTie',
        path: '/',
        active: false,
        desc: 'Team Management Portal',
      },
      { name: 'data', icon: '$DatabaseOutline', path: '/', active: false, desc: 'All Org info' },
      { name: 'admin', icon: '$Security', path: '/', active: false, desc: 'AD for Org & Team' },
      { name: 'it', icon: '$Incognito', path: '/', active: false, desc: 'Backups & logs' },
    ],
    childRoutes: [
      // user
      { parent: 'user', name: 'Dashboard', icon: '$ViewDashboardOutline', path: '/' },
      { parent: 'user', name: 'Profile', icon: '$BadgeAccountOutline', path: '/' },
      { parent: 'user', name: 'Growth Plans', icon: '$Finance', path: '/' },
      { parent: 'user', name: 'Reports', icon: '$TestTube', path: '/' },
      { parent: 'user', name: 'Settings', icon: '$CogOutline', path: '/' },
      // leader
      { parent: 'leader', name: 'My Team', icon: '$AccountGroupOutline', path: '/' },
      { parent: 'leader', name: 'Team Growth Plans', icon: '$Finance', path: '/' },
      { parent: 'leader', name: 'Team Reports', icon: '$TestTube', path: '/' },
      // data
      { parent: 'data', name: 'Team', icon: '$AccountGroupOutline', path: '/' },
      { parent: 'data', name: 'Org', icon: '$SitemapOutline', path: '/' },
      { parent: 'data', name: 'Map', icon: '$Earth', path: '/' },
      { parent: 'data', name: 'Graph', icon: '$ChartScatterPlotHexbin', path: '/' },
      { parent: 'data', name: 'Contacts', icon: '$PhoneInTalkOutline', path: '/' },
      // admin
      { parent: 'admin', name: 'Users', icon: '$TableAccount', path: '/' },
      { parent: 'admin', name: 'Companies', icon: '$Domain', path: '/' },
      { parent: 'admin', name: 'Leaders', icon: '$AccountTie', path: '/' },
      { parent: 'admin', name: 'Teams', icon: '$AccountGroupOutline', path: '/' },
      //   it
      { parent: 'it', name: 'Tech Inventory', icon: '$Sd', path: '/' },
      { parent: 'it', name: 'Logs', icon: '$ClipboardTextClockOutline', path: '/' },
      { parent: 'it', name: 'Archive', icon: '$BackupRestore', path: '/' },
    ],
  }),

  actions: {},
})
