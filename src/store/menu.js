const state = {
  menuGroups: [],
  curGroupName: ''
}

const getters = {
  menuGroups: state => state.menuGroups,
  curGroupName: (state) => {
    let name = ''
    state.menuGroups.forEach(item => {
      if (item.selected) name = item.groupName
    })
    return name
  }
}

const actions = {
  setMenuGroups ({commit}, data) {
    commit('setMenuGroups', data)
  },
  switchMenuGroup ({commit}, data) {
    commit('switchMenuGroup', data)
  }
}

const mutations = {
  setMenuGroups (state, payload) {
    state.menuGroups = payload
  },
  switchMenuGroup (state, payload) {
    for (let i = 0; i < state.menuGroups.length; i++) {
      let item = state.menuGroups[i]
      if (payload === i) {
        item.selected = true
      } else {
        item.selected = false
      }
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
