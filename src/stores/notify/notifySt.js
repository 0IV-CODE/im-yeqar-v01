import { defineStore } from 'pinia'
// Notifications
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

export const useNotifyStStore = defineStore('notifySt', {
  state: () => ({
    // Default notification settings
    defaultOptions: {
      theme: 'dark',
      position: 'bottom-right',
      autoClose: 1000,
      transition: 'slide',
      dangerouslyHTMLString: true,
    },
    altOptions: {
      type: 'error',
      theme: 'dark',
      closeOnClick: false,
      position: 'top-right',
      autoClose: 3000,
      transition: 'slide',
      dangerouslyHTMLString: true,
    },
  }),

  actions: {
    /**
     * Predefined notifications by @param {string} notificationType .
     * @param {Object} optionsMap - toastify settings mapper based on (e.g., 'infoA', 'successB').
     * @param {Object} uiMap - format ui html using (e.g., 'infoA', 'successB').
     * note: new Error().stack used for  @param {string} lineError.
     */
    notificationsCtrl(notificationType, messageTitle, messageNote, lineError, error) {
      const optionsMap = {
        infoA: {
          type: 'info',
          position: 'bottom-right',
          autoClose: 750,
          closeOnClick: true,
        }, // sm - single updates or notifications
        infoB: {
          type: 'info',
          position: 'bottom-right',
          autoClose: 1000,
          closeOnClick: true,
        }, // xl - looped updates or major updates
        infoC: {
          type: 'info',
          position: 'top-right',
          autoClose: 2000,
          closeOnClick: true,
        }, // announcement
        successA: {
          type: 'success',
          position: 'bottom-right',
          autoClose: 1000,
          closeOnClick: true,
        }, // sm - single create (team member)
        successB: {
          type: 'success',
          position: 'top-right',
          autoClose: 2000,
          closeOnClick: false,
        }, // xl - single create of company
        warningA: {
          type: 'warning',
          position: 'bottom-right',
          autoClose: 2000,
          closeOnClick: false,
        }, // sm - single delete of team member
        warningB: {
          type: 'warning',
          position: 'top-right',
          autoClose: 3000,
          closeOnClick: false,
        }, // xl - multiple deletes or company delete
        errorA: {
          type: 'error',
          position: 'top-right',
          autoClose: 5000,
          closeOnClick: false,
        }, // front-end function error
        errorB: {
          type: 'error',
          position: 'top-right',
          autoClose: 5000,
          closeOnClick: false,
        }, // backend crud or auth error
      }

      if (optionsMap[notificationType] !== undefined) {
        const uiMap = {
          // ... your existing info options ...
          warningA: {
            toastUi: `<details><summary> WARN_X </summary><hr/><p>⚠️::warning</p><table style="border:1px dotted white"><tr><th>Var</th><th>Val</th></tr><tr><td style="border:1px dotted white"> notificationType </td><td style="border:1px dotted white"> ${notificationType} </td></tr><tr><td style="border:1px dotted white"> messageTitle </td><td style="border:1px dotted white"> ${messageTitle} </td></tr><tr><td style="border:1px dotted white"> messageNote </td><td style="border:1px dotted white"> ${messageNote} </td></tr><tr><td style="border:1px dotted white"> location </td><td style="border:1px dotted white"> ${lineError ? lineError.split('\n')[1] : 'N/A'} </td></tr></table></details>`,
          },
          warningB: {
            toastUi: `<details><summary> ALERT_1 </summary><hr/><p>⚠️::warning</p><table style="border:1px dotted white"><tr><th>Var</th><th>Val</th></tr><tr><td style="border:1px dotted white"> notificationType </td><td style="border:1px dotted white"> ${notificationType} </td></tr><tr><td style="border:1px dotted white"> messageTitle </td><td style="border:1px dotted white"> ${messageTitle} </td></tr><tr><td style="border:1px dotted white"> messageNote </td><td style="border:1px dotted white"> ${messageNote} </td></tr><tr><td style="border:1px dotted white"> location </td><td style="border:1px dotted white"> ${lineError ? lineError.split('\n')[1] : 'N/A'} </td></tr></table></details>`,
          },
          errorA: {
            toastUi: `<details><summary> SYS_CRSH </summary><hr/><p>💻::front-end error</p><table style="border:1px dotted white"><tr><th>Var</th><th>Val</th></tr><tr><td style="border:1px dotted white"> notificationType </td><td style="border:1px dotted white"> ${notificationType} </td></tr><tr><td style="border:1px dotted white"> messageTitle </td><td style="border:1px dotted white"> ${messageTitle} </td></tr><tr><td style="border:1px dotted white"> messageNote </td><td style="border:1px dotted white"> ${messageNote} </td></tr><tr><td style="border:1px dotted white"> error </td><td style="border:1px dotted white"> ${error} </td></tr><tr><td style="border:1px dotted white"> location </td><td style="border:1px dotted white"> ${lineError ? lineError.split('\n')[1] : 'N/A'} </td></tr></table></details>`,
          },
          errorB: {
            toastUi: `<details><summary> API_FAIL </summary><hr/><p>🤖::back-end error</p><table style="border:1px dotted white"><tr><th>Var</th><th>Val</th></tr><tr><td style="border:1px dotted white"> notificationType </td><td style="border:1px dotted white"> ${notificationType} </td></tr><tr><td style="border:1px dotted white"> messageTitle </td><td style="border:1px dotted white"> ${messageTitle} </td></tr><tr><td style="border:1px dotted white"> messageNote </td><td style="border:1px dotted white"> ${messageNote} </td></tr><tr><td style="border:1px dotted white"> error </td><td style="border:1px dotted white"> ${error} </td></tr><tr><td style="border:1px dotted white"> location </td><td style="border:1px dotted white"> ${lineError ? lineError.split('\n')[1] : 'N/A'} </td></tr></table></details>`,
          },
        }

        // merge two objs into one: each object used to create toast type
        const notificationOptions = {
          ...this.defaultOptions,
          ...optionsMap[notificationType],
        }
        const ui = {
          ...uiMap[notificationType],
        }

        // Log to console for errors
        if (notificationType.startsWith('error')) {
          console.group(
            `%c[IM-YEQAR ${optionsMap[notificationType].type}]:  System: ${notificationType}`,
            'color: #ff5555; background: #000000',
          )
          lineError && console.warn('Error:', error)
          lineError && console.warn('Location:', lineError.split('\n')[1])
          lineError && console.log('notificationType:', notificationType)
          lineError && console.log('messageTitle:', messageTitle)
          lineError && console.log('messageNote:', messageNote)
          console.groupEnd()
        }

        toast(ui.toastUi, notificationOptions)
      } else {
        const unknownError = new Error().stack
        toast(
          `<details><summary>UNKNOWN VAR</summary><hr/><table style="border:1px dotted white"><tr><th>Var</th><th>Val</th></tr><tr><td style="border:1px dotted white"> notificationType </td><td style="border:1px dotted white"> ${notificationType} </td></tr><tr><td style="border:1px dotted white"> messageTitle </td><td style="border:1px dotted white"> ${messageTitle} </td></tr><tr><td style="border:1px dotted white"> messageNote </td><td style="border:1px dotted white"> ${messageNote} </td></tr><tr><td style="border:1px dotted white"> error </td><td style="border:1px dotted white"> ${error} </td></tr><tr><td style="border:1px dotted white"> location </td><td style="border:1px dotted white"> ${unknownError.split('\n')[1]} </td></tr></table></details>`,
          this.altOptions,
        )
      }
    },
  },
})
