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
