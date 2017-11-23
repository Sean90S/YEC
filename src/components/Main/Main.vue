<template>
    <div id="Main">
        <v-header></v-header>
        <v-banner></v-banner>
        <v-preferen></v-preferen>
        <v-group></v-group>
    </div>
</template>

<script type="text/ecmascript-6">
    import Header from './../header/header';
    import Banner from './../home/banner';      // 首页轮播
    import Preferen from './../home/preferen';  // 特惠专区
    import Group from './../home/group';        // 团购商品
    export default {
        name: 'Main',
        components: {
            'v-header': Header,
            'v-banner': Banner,
            'v-preferen': Preferen,
            'v-group': Group
        }
    }
</script>

<style lang="css">
</style>
