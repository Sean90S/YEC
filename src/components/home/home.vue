<template>
    <div class="home">
        <v-header></v-header>
        <v-banner></v-banner>
        <v-preferen></v-preferen>
        <v-group></v-group>
        <v-modden></v-modden>
    </div>
</template>

<script type="text/ecmascript-6">
    import Header from './../header/header';    // 头部
    import Banner from './../home/banner';      // 首页轮播
    import Preferen from './../home/preferen';  // 特惠专区
    import Group from './../home/group';        // 团购商品
    import Modden from './../home/madden';      // 劲爆商品
    export default {
        name: 'HOME',
        components: {
            'v-header': Header,
            'v-banner': Banner,
            'v-preferen': Preferen,
            'v-group': Group,
            'v-modden': Modden
        },
        data(){
          return {
              navID: this.$route.params.navId
          }
        },
        mounted(){
            console.log(this.navID);
        }
    }
</script>

<style lang="css">
</style>
