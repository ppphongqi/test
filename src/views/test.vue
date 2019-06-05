<template>



    <div class="vant-cell">
        <van-cell title="单元格" value="内容" size="large" is-link />
        <van-cell title="单元格" value="内容" size="large" is-link/>
        <van-cell title="单元格" value="内容" size="large" is-link/>
    </div>


</template>

<script>
    export default {
        data() {
            return {
                selected : '1' ,
            }
        },
        methods: {

        }
    }
</script>

<style lang="scss" scoped >

    .vant-cell{
        height: 400px;
    };
    .van-cell--large{
        height:33%;
    }

    /*top测试*/
    /*.wrapper{*/
    /*    width: 100% ;*/
    /*    position: relative;*/
    /*    height: 2000px;*/
    /*    .header{*/
    /*        width: 100%;*/
    /*        height: 4.5rem;*/
    /*        z-index: 10;*/
    /*        position: fixed;*/
    /*        top: 0;*/
    /*        align-items:center;*/
    /*    }*/
    /*}*/

    /*.mint-navbar .mint-tab-item.is-selected {*/
    /*    border-bottom: .3rem solid #ffda44;*/
    /*    color: #ffda44;*/
    /*    margin-bottom: 0;*/
    /*}*/


</style>
