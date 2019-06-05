<template>
    <div class="news" >

        <div class="wrapper">
        <!--<mt-navbar :class="totop?'fixed':'mint-navbar'" v-model="selected">-->
        <mt-navbar  v-model="selected">
            <mt-tab-item id="1" style="margin-bottom:0px"><p class="f14">出售</p></mt-tab-item>
            <mt-tab-item id="2" style="margin-bottom:0px"><p class="f14">求购</p></mt-tab-item>
        </mt-navbar>
        </div>

        <!-- 内容主体 -->
        <mt-tab-container v-model="selected" class="container">

<!--            出售-->
            <mt-tab-container-item class="container-item" id="1">

<!--                <div class="sell">-->
<!--                    <VueWaterfallEasy :imgsArr="imgsArr" @scrollReachBottom="getData">-->
<!--&lt;!&ndash;                        <template slot-scope="props">&ndash;&gt;-->
<!--&lt;!&ndash;                            <div class="play_info">&ndash;&gt;-->
<!--&lt;!&ndash;                                <div class="title"><i class="tt tt-quanburen"></i>{{ props.value.info}}</div>&ndash;&gt;-->
<!--&lt;!&ndash;                                <div class="ticket">&ndash;&gt;-->
<!--&lt;!&ndash;                                    <mt-button @click="upLoadTicket(props.value.id)" size="small"><i class="tt tt-quanburen"></i></mt-button>&ndash;&gt;-->
<!--&lt;!&ndash;                                </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                <p class="num">{{ props.index + 1 }}票</p>&ndash;&gt;-->
<!--&lt;!&ndash;                            </div>&ndash;&gt;-->
<!--&lt;!&ndash;                        </template>&ndash;&gt;-->
<!--                    </VueWaterfallEasy>-->


<!--                </div>-->






            </mt-tab-container-item>


<!--            求购-->
            <mt-tab-container-item class="container-item" id="2">









            </mt-tab-container-item>


        </mt-tab-container>


    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        // components: { VueWaterfallEasy },
        data(){
            return {
                selected : '1' ,
                imgArr:[],
                group: 0,

            }
        },
        methods: {
            // getData() {
            //     axios.get('./static/mock/data.json?group=' + this.group)
            //         .then(res => {
            //             this.imgsArr = this.imgsArr.concat(res.data);
            //             this.group++
            //         })
            // },
            // created(){
            //     this.getData()
            // }


        }

    }
</script>

<style lang="scss" scoped>

.wrapper{
    width:100%;
}

.news{
    margin: 0 auto ;
}
.f14 {
    font-size: 1.4em;
    font-weight:bold
}
.nav{
    z-index:9;
}
/*.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item:hover, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu-active, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu:hover {*/
/*    color: #19be6b;*/
/*    border-bottom: 2px solid #19be6b;*/
/*}*/
.mint-navbar .mint-tab-item.is-selected {
    border-bottom: .3rem solid 	#3CB371;
    color: 	#3CB371;
}

.fixed{
    position: fixed;
    top: 45px;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 100;
}
</style>
