import defaultSettings from '@/settings'
import variables from '@/styles/element-variables.scss'

const { showSettings, tagsView, fixedHeader, sidebarLogo } = defaultSettings

const state = {
  theme: variables.theme,
  sideTheme: 'light',
  showSettings: showSettings,
  tagsView: tagsView,
  fixedHeader: fixedHeader,
  sidebarLogo: sidebarLogo
}

const mutations = {
  CHANGE_SETTING: (state, { key, value }) => {
    if (state.hasOwnProperty(key)) {
      state[key] = value
    }
  }
}

const actions = {
  changeSetting({ commit }, data) {
    commit('CHANGE_SETTING', data)
  },
  changeSideTheme({ commit }, theme) {
    commit('CHANGE_SETTING', { key: 'sideTheme', value: theme })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
