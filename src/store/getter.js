

export default {
    login:(state) => {
        return state.isLogin
    },
    username:(state) => {
        return state.username
    },
    curindex: (state) => {
        return state.curindex
    },



    fabunum:(state) => {
        return state.fabunum
    },
    colnum:(state) => {
        return state.colnum
    },
    buynum:(state) => {
        return state.buynum
    },

    // 当前物品的数据
    curgood:(state) => {
        return state.curgood
    },
    // 用户信息
    userInfo:(state) => {
        return  state.userInfo
    },
    // 用户发布信息
    userFabu:(state) => {
        return  state.userFabu
    },
    userCollect:(state) => {
        return state.userCollect
    }



}
