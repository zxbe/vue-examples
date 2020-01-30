/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

export const CHANGE = 'change';

export default {
  namespaced: true,
  state: {
    value: 2020
  },
  mutations: {
    [CHANGE](state, value) {
      state.value = value;
    }
  },
  actions: {
    [CHANGE]({ commit }, payload) {
      commit(CHANGE, payload.value);
    }
  }
};
