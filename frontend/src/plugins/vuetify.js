/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import { zhHant } from 'vuetify/locale'

export default createVuetify({
  locale: {
    locale: 'zhHant',
    messages: { zhHant },
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#57C7FF',
          secondary: '#FF4FA3',
          background: '#EAF8FF',
          surface: '#FFFFFF',
        },
      },
    },
  },
})
