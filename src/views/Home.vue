<template>
  <div id="app">
    <NavTop class="top"></NavTop>

    <IndexBanner class="banner"></IndexBanner>

    <IndexNav></IndexNav>

    <div class="block"></div>

    <suspendedBall/>

  </div>

</template>

<script>


import suspendedBall from "../components/suspendedBall.vue";
import vueWaterfallEasy from "vue-waterfall-easy";
import axios from "axios";
import NavTop from '../components/NavTop'
import IndexBanner from '../components/IndexBanner.vue';
import IndexNav from '../components/IndexNav'

import {mapActions} from 'vuex';


export default {
  name: "Home",
  components: {
    NavTop,
    vueWaterfallEasy,
    suspendedBall,
    IndexBanner,
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
      curgood:[],


    };
  },
  mounted(){

    this.$store.dispatch('setCurindex',0);
    this.$store.dispatch('hasLogin');

  },
  methods: {
    setScrollBoxHeight() {
      let height = document.documentElement.clientHeight;
      // let width = document.documentElement.clientWidth;
      this.scroll_box_height = height - 50;
    },
    getData() {
      axios
        .get("/static/mock/data.json?group=" + this.group) // 真实环境中，后端会根据参数group返回新的图片数组，这里我用一个静态json文件模拟
        .then(res => {
          this.group++;
          if (this.group === 10) {
            // 模拟已经无新数据，显示 slot="waterfall-over"
            this.$refs.waterfall.waterfallOver();
            return;
          }
          this.imgsArr = this.imgsArr.concat(res.data);
        });
    },
    changeImgArr() {
      axios
        .get("/static/mock/data-change.json")
        .then(res => {
          this.imgsArr = res.data;
        });
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
    getInfo(){
      this.$store.disptch('getUserInfo')
    }

  },
  created() {
    this.setScrollBoxHeight();
    this.getData();
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
  .tab_active{
    z-index: 9;
  }

  .top{
    top:0px;

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
html,
body,
#app {
  height: 100%;
}
#scroll-box {
  top: 46px;
  bottom: 0;
  width: 100%;
  position: absolute;
}
#app {
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
  .block{
    height:100px;
  }
</style>
