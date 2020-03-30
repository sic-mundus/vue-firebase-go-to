import * as types from './mutation_types'

export default {
  [types.SET_KEY] (state, key) {
    state.key = key
  },
  [types.SET_DDT] (state, ddt) {
    state.ddt = ddt
  },
  [types.SET_USER] (state, user) {
    state.user = user
  },
  [types.INIT_DDT] (state) {
    state.user = {}
    state.number = ''
    state.cane = ''
  }
}
