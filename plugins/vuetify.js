// MDI - JS SVG (Adv - Optimized)
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
// Import Icons here
import { mdiAccountCircleOutline } from '@mdi/js'
import { mdiDatabaseOutline } from '@mdi/js'
import { mdiBadgeAccountOutline } from '@mdi/js'
import { mdiFinance } from '@mdi/js'
import { mdiAccountTie } from '@mdi/js'
import { mdiTestTube } from '@mdi/js'
import { mdiSecurity } from '@mdi/js'
import { mdiIncognito } from '@mdi/js'
import { mdiAccountGroupOutline } from '@mdi/js'
import { mdiDomain } from '@mdi/js'
import { mdiSitemapOutline } from '@mdi/js'
import { mdiEarth } from '@mdi/js'
import { mdiChartScatterPlotHexbin } from '@mdi/js'
import { mdiTableAccount } from '@mdi/js'
import { mdiClipboardTextClockOutline } from '@mdi/js'
import { mdiBackupRestore } from '@mdi/js'
import { mdiCogOutline } from '@mdi/js'
import { mdiPhoneInTalkOutline } from '@mdi/js'
import { mdiPhoneInTalk } from '@mdi/js'
import { mdiSd } from '@mdi/js'
import { mdiViewDashboardOutline } from '@mdi/js'

// Vuetify
// how too add vuetify: https://www.youtube.com/watch?v=w6bj_GCxwqg
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      dark: {
        variables: {},
        dark: true,
        colors: {
          // RED
          primary: '#BD2A2A',
          // BLUE
          secondary: '#00346A ',
        },
      },
      light: {
        variables: {},
        dark: false,
        colors: {
          // RED
          primary: '#BD2A2A',
          // BLUE
          secondary: '#00346A ',
        },
      },
    },
  },
  icons: {
    defaultSet: 'mdi',
    // Add alias to reuse icons in web/app
    // ex: <v-icon icon="$account" />
    aliases: {
      ...aliases,
      ViewDashboardOutline: mdiViewDashboardOutline,
      Sd: mdiSd,
      PhoneInTalk: mdiPhoneInTalk,
      PhoneInTalkOutline: mdiPhoneInTalkOutline,
      CogOutline: mdiCogOutline,
      BackupRestore: mdiBackupRestore,
      ClipboardTextClockOutline: mdiClipboardTextClockOutline,
      TableAccount: mdiTableAccount,
      ChartScatterPlotHexbin: mdiChartScatterPlotHexbin,
      Earth: mdiEarth,
      SitemapOutline: mdiSitemapOutline,
      Domain: mdiDomain,
      AccountGroupOutline: mdiAccountGroupOutline,
      Incognito: mdiIncognito,
      Security: mdiSecurity,
      TestTube: mdiTestTube,
      AccountTie: mdiAccountTie,
      Finance: mdiFinance,
      BadgeAccountOutline: mdiBadgeAccountOutline,
      DatabaseOutline: mdiDatabaseOutline,
      AccountCircleOutline: mdiAccountCircleOutline,
    },
    sets: {
      mdi,
    },
  },
})
