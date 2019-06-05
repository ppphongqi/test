import getters from './getter.js';

const state = {
    // change
    isLogin: false,
    fabuinfo: [] ,
    username: '',
    curindex: 0,

    // my  isLogin
    fabunum: 99,  //发布数量
    colnum: 99,  //收藏数
    buynum: 99,  //购买数





    userInfo:{}, //用户信息
    curgood:{},//当前物品信息
    userCollect:[],//用户的收藏
    userFabu:[],//用户的发布

};

const mutations = {


        // storeLocalStore :(state) =>{
        // window.localStorage.setItem("publicTit",JSON.stringify(state));
        // },



        hasLogin:(state) => {
            state.isLogin = true;
            console.log(`登录状态：`+state.isLogin)
        },

    // 传递当前物品数据
        setCurGood:(state,curgood) =>{
            state.curgood = curgood
        },



        noLogin:(state) => {

            state.isLogin = false;

            console.log('登录状态' + state.isLogin)
        },

        // 传出用户姓名
        setUsername:(state, username ) =>{
            state.username  = username;
            console.log('用户名：'+ state.username)
        },



        setCurindex:(state,index) =>{
            state.curindex = index;
            console.log('curindex:' + state.curindex )
        },








        // 接收用户信息
        receiveInfo:( state, { userInfo })  =>{
            state.userInfo = userInfo;
            window.localStorage.setItem('userInfo', JSON.stringify(userInfo));
            window.localStorage.setItem('userName',state.userInfo.name );
            window.localStorage.setItem('avatar',state.userInfo.avatar);
            window.localStorage.setItem('dormitory',state.userInfo.dormitory);
            window.localStorage.setItem('qq',state.userInfo.qq);
            window.localStorage.setItem('wx',state.userInfo.wx);


            console.log(state.userInfo)

        },

        // 接收用户收藏信息
        receiveCollect:( state, { userCollect} ) =>{
            state.userCollect = userCollect;

            console.log(state.userCollect)

        },
        // 接收用户发布信息
        receiveUserFabu:( state , { userFabu }) =>{
            state.userFabu = userFabu;
            console.log(state.userFabu)

        }

};

export default{



    getters,
    state,
    mutations



}
