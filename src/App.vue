<template>
  <div id="app">

    <router-view/>

  </div>
</template>



<script>

  import {mapActions} from 'vuex';

  export default{
    mounted() {

      this.getUserInfo();

      console.log('主页')
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
