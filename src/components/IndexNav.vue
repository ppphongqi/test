<template>
  <div class="news">

    <div class="wrapper">
      <!--<mt-navbar :class="totop?'fixed':'mint-navbar'" v-model="selected">-->
      <mt-navbar v-model="selected" fixed style="top: 60px;">
        <mt-tab-item id="1" style="margin-bottom:0px"><p class="f14">出售</p></mt-tab-item>
        <mt-tab-item id="2" style="margin-bottom:0px"><p class="f14">求购</p></mt-tab-item>
      </mt-navbar>
    </div>

    <!-- 内容主体 -->
    <mt-tab-container v-model="selected" class="container" style="top: 60px;">

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

        <p v-for="i in 100" :key="i">{{ i}}</p>


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
    components: {
    },
    data() {
      return {
        selected: '1',
        scroll_box_height: 0,

        productListBuy: [], // 存放求购这项的商品数据
        groupBuy: 0, // 第几次触发刷新，默认0
        limitBuy: 6, // 一次获取多少个

        productListSell: [], // 存放出售这项的商品数据
        groupSell: 0, // 第几次触发刷新，默认0
        limitSell: 6, // 一次获取多少个

      }
    },
    methods: {
      setScrollBoxHeight() {
        let height = document.documentElement.clientHeight;
        // let width = document.documentElement.clientWidth;
        this.scroll_box_height = height - 120;
      },
      getProductListBuy() {
        axios.get('http://localhost:8899/api/v1/products/buy', {
          params: {
            group: this.groupBuy,
            limit: this.limitBuy,
          }
        }).then((res) => {
          for (let p of res.data.data) {
            p.img = p.img.split(',')
            this.productListBuy.push(p)
          }
          // this.productListBuy = this.productListBuy.concat(res.data.data);
          this.groupBuy++
        })
      }
    },
    mounted() {
      this.setScrollBoxHeight();
      this.getProductListBuy()
    }
  }
</script>

<style lang="scss" scoped>

  .wrapper {
    width: 100%;
  }

  .news {
    margin: 0 auto;
  }

  .f14 {
    font-size: 1.4em;
    font-weight: bold
  }

  .nav {
    z-index: 9;
  }

  /*.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item:hover, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu-active, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu:hover {*/
  /*    color: #19be6b;*/
  /*    border-bottom: 2px solid #19be6b;*/
  /*}*/
  .mint-navbar .mint-tab-item.is-selected {
    border-bottom: .3rem solid #3CB371;
    color: #3CB371;
  }

  /*.fixed {*/
  /*  position: fixed;*/
  /*  top: 45px;*/
  /*  left: 0;*/
  /*  right: 0;*/
  /*  width: 100%;*/
  /*  z-index: 100;*/
  /*}*/
</style>
