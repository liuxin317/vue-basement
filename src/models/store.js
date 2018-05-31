import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex); // 安装vuex

var store = new Vuex.Store({
    debug: true,
    state: {
        count: 0
    },
    mutations: { // 更改store的唯一方式mutation
        changeState: (state, payload) => {
            state = Object.assign(state, payload)
        }
    },
    getters: {//对store进行过滤
        
    },
    actions: { // 异步提交mutation
        asyncChangeState ({ commit }, info) {
            setTimeout(() => {
                commit(info.name, info.payload)
            }, 2000)
        }
    }
})

export default store;