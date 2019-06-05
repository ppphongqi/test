<template>
    <div class="wrap">
        <div class="head">
            <div class="back" @click="back">
            </div>
            <div class="title">我发布的</div>
            <div class="zhanwei"></div>
        </div>

        <div class="block"></div>

<!--        已发布的-->
    <div class="fabuBox" v-if="show">

        <div class="goodsbox" v-for=" p in productList" :key="p.id" @click="toGoods">
        <!--<div class="goodsbox">-->
            <div class="username">
<!--                用户头像-->
                <img :src="url" alt="" class="avatar" >
                <p class="name">{{ username }}</p>
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
                <div class="kind"></div>
                <div class="time">{{ new Date(p.life).toLocaleString() }}</div>
            </div>

            <div class="operate" v-if="p.status != 1">
<!--                正式-->
                <div class="change" v-if="p.status != 1 && p.status == 0">待审核</div>
                <div class="del" v-if="p.status == -1">已下架</div>

            </div>
            <div class="operate" v-else>
                <div class="change" @click="change">修改</div>
                <div class="del" @click="del">删除</div>
            </div>

        </div>
    </div>
<!--        没有发布的情况-->
        <div class="nothingbox" v-if="hide">
            <div class="nothing">
                <img src="./images/nothing.jpg" alt="">
                <p class="warn">还没有发布宝贝哦</p>
                <van-button type="primary"
                            size="small"
                            @click="tofabu">立即发布</van-button>
            </div>
        </div>



    </div>
</template>

<script>
    import {mapGetters,mapActions,mapState} from 'vuex';
    import { reqUserFabu} from "../api";

    export default {
        computed:mapGetters(['userFabu','userInfo','username']),

        data(){
            return {
                status:0,
                show: true,
                hide: false,
                url:'',
                productList:[]
            }
        },
        methods:{

            back(){
                this.$router.push({path:'/my2'});
                this.$store.dispatch('setCurindex',1)
            },
            // 发布页
            tofabu(){
                this.$router.push({path:'/fabu'})
            },
            // 无商品
            nofabu(){

                if(Array.from(this.userFabu).length != null){
                    this.show = true;
                    this.hide = false;
                }else{
                    this.show = false;
                    this.hide = true;
                }
            },
            // 异步获取商品列表
            async getGoodsList(){
                let result = await reqUserFabu();
                for( let i of result.data){
                    i['img'] = i['img'].split(',');
                    this.productList.push(i)
                }
            },



            // 商品详情
            toGoods(){
                this.$store.dispatch('setCurGood',this.index);

            },
            // 下架物品
            del(){
            },
            // 修改物品
            change(){
            }

        },
        mounted(){
            this.getGoodsList();
            let username = window.localStorage.getItem('userName');
            this.$store.dispatch('setUsername',username);
            this.url = window.localStorage.getItem('avatar');
            this.userFabu = this.$store.state.userFabu;
            this.nofabu();
        }
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
    /*占位*/
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
    /*头像*/
    .username img {
        width: 18%;
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
