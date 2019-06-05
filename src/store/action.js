

import axios from 'axios'


import {
    reqCollect, reqGood, reqUserFabu,
    reqUserInfo,
    unlogin,

} from "../api";


export default{

    // 异步获取用户信息
    async getUserInfo({commit}){
        console.log('1.1');
        const result = await reqUserInfo();
        if(result.status === "200"){
            const userInfo = result.data;
            console.log(userInfo);
            commit('receiveInfo',{ userInfo })
        }
    },

    // 获取收藏信息
    async getCollect({ commit }){
        const result = await reqCollect();
        console.log('11');
        if(result.status === "200"){
            console.log('22');
            const userCollect = result.data;
            commit('receiveCollect',{userCollect})
        }
    },

    // 用户退出登录
    async loginOut({ commit }) {
        const result = await unlogin();
        if(result.data === true){
            commit('noLogin')
        }
    },

    // 传递当前物品数据
    setCurGood:({ commit },curgood) =>{
        commit('setCurGood',curgood)
    },

    //异步获取用户发布
    async getUserFabu( {commit} ){

        const result = await reqUserFabu();
        // for(let userfabu of result.data){
        //     if(userfabu.status === 0){
        //         commit('receiveUserFabu',userfabu )
        //     }else{
        //             console.log('已删除')
        //     }
        // }
        if(result.status === "200"){
            const userFabu = result.data;
            commit('receiveUserFabu',{ userFabu })
        }

    },


    // 删除收藏
    // async delCol({ commit } , goodId ){
    //     const result = await reqGood();
    // },














    hasLogin:({ commit }) => {
        if(window.localStorage.getItem('phone') != null || window.localStorage.getItem('password') != null ){
            commit('hasLogin')
        }else{
            console.log('没有登录')
        }
    },

    noLogin:({ commit }) => {
        if(window.localStorage.getItem('username') == null && window.localStorage.getItem('password') == null ){
            commit('noLogin')
        }
    },


    setCurindex:({ commit },index) => {
        commit('setCurindex',index)
    },

    setUserinfo: ({commit}, userinfo) =>{
        commit('setUserinfo', userinfo)
    },

    // 发送用户姓名
    setUsername: ({ commit }, username) => {
        commit('setUsername', username)
    },


}
