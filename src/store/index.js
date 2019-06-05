import Vue from 'vue';
import Vuex from 'vuex';
// import createVuexAlong from 'vuex-along';

Vue.use(Vuex);

import actions from './action.js';
import mutation from './mutation.js';
export default new Vuex.Store({
    modules:{
        mutation
    },
    actions,
    // plugins:[createVuexAlong()]
});
