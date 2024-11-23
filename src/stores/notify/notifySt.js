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
  }),

  actions: {
    /**
     * Predefined notifications by type.
     * @param {String} notificationType - Notification identifier (e.g., 'infoA', 'successB').
     */
    notificationsCtrl(notificationType, component, functionName, messageTitle, messageNote, error) {
      const optionsMap = {
        infoA: { type: 'info', position: 'bottom-right', autoClose: 750 },
        infoB: { type: 'info', position: 'bottom-right', autoClose: 1000 },
        infoC: { type: 'info', position: 'top-right', autoClose: 2000 },
        successA: { type: 'success', position: 'bottom-right', autoClose: 1000 },
        successB: { type: 'success', position: 'top-right', autoClose: 2000 },
        warningA: { type: 'warning', position: 'bottom-right', autoClose: 2000 },
        warningB: { type: 'warning', position: 'top-right', autoClose: 3000 },
        errorA: { type: 'error', position: 'bottom-right', autoClose: 3000 },
        errorB: { type: 'error', position: 'top-right', autoClose: 4000 },
      }

      const notificationOptions = {
        ...this.defaultOptions,
        ...optionsMap[notificationType],
      }

      if (!notificationOptions) {
        toast('Unknown Notification Type!', notificationOptions)
      }

      toast(messageTitle, notificationOptions)
    },
  },
})
