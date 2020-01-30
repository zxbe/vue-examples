/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

export const CHANGE = 'change';

export default {
  namespaced: true,
  state: {
    name: 'Original'
  },
  mutations: {
    [CHANGE](state, value) {
      state.name = value;
    }
  },
  actions: {
    [CHANGE]({ commit }, payload) {
      commit(CHANGE, payload.name);
    }
  }
};
