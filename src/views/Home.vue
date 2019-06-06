<template>
  <div id="home">
    <NavTop class="top"/>

<!--    <IndexBanner class="banner"/>-->

    <IndexNav class="tabs"/>

    <!--    <div class="block"></div>-->

    <suspendedBall/>

  </div>

</template>

<script>


  import suspendedBall from "../components/suspendedBall.vue";
  // import axios from "axios";
  import NavTop from '../components/NavTop'
  // import IndexBanner from '../components/IndexBanner.vue';
  import IndexNav from '../components/IndexNav'

  // import {mapActions} from 'vuex';


  export default {
    name: "Home",
    components: {
      NavTop,
      suspendedBall,
      // IndexBanner,
      IndexNav
    },
    data() {
      return {
        // tab_active: 0,
        // imgsArr: [],
        // // 当前加载的加载图片的次数
        // group: 0,
        // scroll_box_height: null

        // 当前物品
        curgood: [],


      };
    },
    mounted() {

      this.$store.dispatch('setCurindex', 0);
      this.$store.dispatch('hasLogin');

    },
    methods: {
      setScrollBoxHeight() {
        let height = document.documentElement.clientHeight;
        // let width = document.documentElement.clientWidth;
        this.scroll_box_height = height - 50;
      },
      onClickLogin() {
        this.$toast("您还未登录");
        this.$router.push("/top")
      },
      onClickSearch() {
        this.$toast("您点击了搜索");
        this.$router.push("/search");
      },
      onClickComment() {
        this.$toast("您点击了信息");
      },
      getInfo() {
        this.$store.disptch('getUserInfo')
      }

    },
    created() {
      this.setScrollBoxHeight();
      // this.getInfo();

      //   //在页面加载时读取localStorage状态 复制对象是解决新vuex管理的状态中新添加的字段也可以存入localStorage中
      // localStorage.getItem("publicTit") && this.$store.replaceState(Object.assign(this.$store.state,JSON.parse(localStorage.getItem("publicTit"))));
      //   //在页面刷新时将vuex里的信息保存到localStorage里，避免多次调用localStorage进行存储降低性能,beforeunload是在页面刷新之前调用
      // window.addEventListener("beforeunload",()=> {
      //   localStorage.setItem("publicTit", JSON.stringify(this.$store.state))
      // });

    }
  };
</script>


<style lang="scss">

  .banner {
    z-index: 0;
  }

  .tab_active {
    z-index: 9;
  }

  .top {
    top: 0;
  }

  * {
    margin: 0;
    padding: 0;
  }

  a {
    color: #000;
    text-decoration: none;

    &:active {
      color: #000;
    }
  }

  #home {
    height: 100vh;
    overflow: auto;
    position: relative;

    .some-info {
      line-height: 1.6;
      text-align: center;
    }
  }

  .van-tabs__wrap {
    width: 100px;
    left: 50%;
    transform: translateX(-50%);
  }

  .message-icon {
    margin-left: 20px;
    margin-right: 15px;
  }

  .block {
    height: 100px;
  }
</style>
