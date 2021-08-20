// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {
    theme: {
        dark: false,
        themes: {
            light: {
                primary: '#0dd6b8',
                secondary: '#b0bec5',
                anchor: '#8c9eff',
            }
        }
    },
    icons: {
        iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    }
}

export default new Vuetify(opts)