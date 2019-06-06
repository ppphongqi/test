<template>
  <div id="app">

    <router-view v-if="isRouterAlive"/>

  </div>
</template>


<script>
  // import axios from 'axios';
  // import {mapActions} from 'vuex';

  export default {
    name: 'App',

    provide() {
      return {
        reload: this.reload
      }
    },
    data() {
      return {
        isRouterAlive: true
      }
    },
    methods: {
      reload() {
        this.isRouterAlive = false;
        this.$nextTick(() => {
          this.isRouterAlive = true;
        })
      }
    },
    mounted() {

      // this.getUserInfo();
      // console.log('主页')
    }
  }


</script>

<style>

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

</style>
