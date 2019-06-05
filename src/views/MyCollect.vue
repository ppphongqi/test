<template>
    <div class="wrap">
        <div class="head">
            <div class="back" @click="back">
            </div>
            <div class="title">我的收藏</div>
            <div class="zhanwei"></div>
        </div>

        <div class="block"></div>


        <div class="fabuBox" v-if="show">
            <div class="goodsbox" v-for="p in productList" :key="p.id">
                <!--<div class="goodsbox">-->
                <div class="username">


                    <p class="price"> ￥{{ p.price }}</p>
                </div>


                <div class="swipe">
                    <van-swipe :autoplay="3000" v-if="show" height="250" width="300">
                        <van-swipe-item  v-for="(img, i) in p.img" :key="i">
                            <img v-lazy="img" alt=""  class="images" />
                            <!--<img src="./images/111.jpg" />-->
                        </van-swipe-item>
                    </van-swipe>
                </div>


                <div class="detail">
                    <p class="desc">{{ p.title }}</p>
                </div>

                <div class="bottom">
                    <div class="kind">发布时间：{{ new Date(p.life).toLocaleString() }}</div>
                    <div class="time"></div>
                </div>

                <div class="operate" >
                    <div class="del" @click="del(p.id)">删除</div>
                </div>

            </div>
        </div>
        <!--        没有发布的情况-->
        <div class="nothingbox" v-if="hide">
            <div class="nothing">
                <img src="./images/nothing.jpg" alt="">
                <p class="warn">还没有收藏宝贝哦</p>

            </div>
        </div>

    </div>
</template>


<script>
    import axios from 'axios';
    import { Toast } from 'vant';
    import {reqCollect} from "../api";
    import {mapGetters,mapActions,mapState} from 'vuex';
    export default {
        inject:['reload'],
        data(){
            return {
                status:0,
                show: true,
                hide: false,
                productList: [],

            }
        },
        computed:mapGetters(['userCollect']),



        methods:{

            back(){
                this.$router.push({path:'/my2'});
                this.$store.dispatch('setCurindex',1)
            },
            // 异步获取商品列表
            async getGoodsList(){
                let result = await reqCollect();
                for( let i of result.data){
                    i['img'] = i['img'].split(',');
                    this.productList.push(i)
                }
            },
            del(pid){
                    axios.delete( 'http://localhost:8899/api/v1/user/collect',{
                    data:{
                        "id": pid
                    }
                }).then((res)=>{
                    if(res.status === 200){
                        Toast('取消收藏成功');
                        setTimeout(()=>{
                            this.reload()
                        },600)
                    }else{
                        Toast('取消收藏失败')
                    }
                })
            }


        },
        mounted(){
            this.getGoodsList()
        },

    }
</script>

<style lang="css" scoped>
    *{
        margin:0;
        padding:0
    }
    .wrap {
        width: 100%;
        height: 100vh;
        background-color: #f7f7f7;
        overflow-y: scroll;
    }
    .head {
        width: 100%;
        height: 3rem;
        display: -webkit-flex;
        display: flex;
        align-items: center;
        background-color: #fff;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index:10;
    }
    .back{
        width:12%;
        height: 3rem;
        position: relative;
        bottom: 0;
        left: 0;
        background:#fff url('images/back.png') no-repeat;
        background-position: 50% 50%;
        background-size: 100% 100% ;
    }
    .zhanwei{
        width: 12%;
    }
    .title {
        flex: 1;
        font-size: 1.2rem;
        font-weight: 700;
        position: relative;
        text-align: center;
    }
    div{
        display:block;
    }
    .block{
        height: 3rem;
    }


    /*有发布样式*/
    .goodsbox {
        width: 95%;
        display: -webkit-flex;
        display: flex;
        flex-direction: column;
        /*align-items: center;*/
        background-color: #fff;
        margin: 0 auto;
        margin-top: 1rem;
    }
    .username {
        display: -webkit-flex;
        display: flex;
        font-size: 1.2rem;
        height: 5rem;
        /*line-height: 5rem;*/
        align-items: center;
        padding: 0rem 1rem;
        box-sizing: border-box;
        border-bottom: 1px solid #f6f6f6;
    }
    .username img {
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 50%;
    }
    .name {
        flex:1;
        color: #000;
        font-weight: 700;
        padding-left: 1rem;
        box-sizing: border-box;
        background-position: 0 center;
    }
    .goodstitle{
        height:2.5rem;
        font-size:2rem;
        text-align: center;
    }
    .price {
        color: red;
        font-size: 1.5rem;
    }
    .detail {
        width: 100%;
        margin-top: .8rem;
        padding: 0 1rem;
        box-sizing: border-box;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
    }

    .detail .desc{
        font-size: 1.1rem;
        color: #000;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space:nowrap;

    }

    .detail .desc{
        font-size: 1.1rem;
        color: #000;
        font-weight: 550;
    }
    .bottom{
        display: -webkit-flex;
        height: 2rem;
        line-height: 2rem;
        padding: 0 1.2rem;
        box-sizing: border-box;
        color: #17abe3;
        border-bottom: 1px solid #f6f6f6;
    }
    .kind {
        flex: 1;
    }
    .time{

    }
    .operate {
        width: 100%;
        height: 4rem;
        display: -webkit-flex;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        position: relative;

    }
    .change{
        width: 6rem;
        height: 2.5rem;
        text-align:center;
        border:2px solid #3CB371;
        border-radius: 1.4rem;
        line-height:2.25rem;
        color:#3CB371;
        position:absolute;
        right:8rem;
        font-size:1rem;
        font-weight: 400;

    }
    .del {
        width: 6rem;
        height: 2.5rem;
        text-align: center;
        border: 2px solid red;
        border-radius: 1.4rem;
        line-height: 2.25rem;
        color: red;
        position: absolute;
        right: 1.2rem;
        font-size: 1rem;
        font-weight: 400;
    }
    .swipe{
        height:250px;
        z-index:1;
    }
    .images{
        height:100%;
        /*width:90%;*/
        margin:0 auto;
    }



    /*无发布样式*/
    .nothingbox{
        width: 100%;
        height: 100%;
        display: -webkit-flex;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .nothing {
        width: 20rem;
        height: 20rem;
        display: -webkit-flex;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .nothing img {
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
    }
    .nothing .warn {
        margin: .6rem 0;
        font-size: 1rem;
        color: #888;
    }

</style>
