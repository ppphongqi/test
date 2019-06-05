

/*
包含n个接口请求函数的模块
函数的返回值：promise对象
*/

import ajax from './ajax'

// const BASE_URL = 'http://172.29.51.137:8899/api/v1';

const BASE_URL = 'http://localhost:8899/api/v1';









// 密码登录
export const reqPwdLogin = (phone , pwd) => ajax(BASE_URL+'/user/login', { phone, pwd }, 'POST');

// 获取用户信息
export const reqUserInfo = () =>ajax(BASE_URL+'/user');

// 获取用户收藏的商品信息
export const reqCollect = () => ajax(BASE_URL+'/user/collect');

// 用户退出登录
export const unlogin = () => ajax(BASE_URL+'/user/unlogin');

// 获取用户发布信息
export const reqUserFabu = () => ajax(BASE_URL+'/user/order');

//当前物品信息
export const reqGood =() => ajax(BASE_URL+'/product',{ goodId } );

