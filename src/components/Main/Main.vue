<template>
    <div id="Main">
        <div id="header-content">
            <div class="header-top">
                <div class="dis-nav" @click="navBool = !navBool">
                    <img src="./../common/img/menu-down-icon.png" alt="">
                </div>
                <div class="sign">
                    <img src="./../common/img/mobile-logo.png" alt="">
                </div>
                <div class="shop-cart">
                    <i class="iconfont icon-gerenzhongxin"></i>
                    <i class="iconfont icon-gouwuche"></i>
                </div>
            </div>
        </div>

        <div class="navbar" v-show="navBool">
            <div class="search">
                <input type="text" class="search-text">
            </div>
            <div class="nav">
                <router-link @click.native="navBool=false" :to="{name: item.route, params: {navId:item.id}}" v-for="item in navBarData" class="nav-bar">
                    <i class="iconfont icon-biaojifuhao YRC-biaojiafuhao"></i>
                    {{item.navname}}
                </router-link>
            </div>
        </div>
        <div class="modality" v-show="navBool" @click="navBool=!navBool"></div>
        <router-view></router-view>
    </div>
</template>

<script type="text/ecmascript-6">
    import API from './../../API';   // api
    export default {
        name: 'Main',
        data(){
            return {
                navBarData: [],
                navBool: false,
                navRouter: ['home', 'express', '1', '2', '3', '4']
            }
        },
        methods: {
            async navBar(){ // 导航
                const navBarResponse = await API.query('api/v/Navigation');
                if (navBarResponse.Success == true) {
                    this.navBarData = navBarResponse.Data;
                    this.navBarData.forEach(function(item, index){
                        item.route = this.navRouter[index];
                    }.bind(this));
                }
            }
        },
        mounted() {
            this.navBar();
        }
    }
</script>

<style lang="less" type="text/less">
    @import "./../common/less/he.less";

    #header-content {
        width: 100%;
        height: 120 / @rem;
        line-height: 120 / @rem;
        background: #000;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000;
        .header-top {
            width: 100%;
            display: flex;
            padding: 0 20/@rem;
            div {
                flex: 1;
                color: #fff;
            }
            .sign {
                text-align: center;
                position: relative;
                top: 3px;
            }
            .shop-cart {
                text-align: right;
                font-size: 30/@rem;
                .icon-gerenzhongxin {
                    padding-right: 24/@rem;
                }
            }
        }
    }

    .navbar {
        width: 80%;
        height: 100%;
        background: #000;
        position: fixed;
        top: 120 / @rem;
        z-index: 4;
        color: #d7d7d7;
        padding-top: 20/@rem;
        .nav {
            width: 100%;
            height: 100%;
            padding-left: 50/@rem;
            .nav-bar {
                display: block;
                width: 100%;
                height: 60/@rem;
                color: #d7d7d7;
                line-height: 60/@rem;
                font-size: 36/@rem;
                .YRC-biaojiafuhao {
                    font-size: 14/@rem;
                }
            }
        }

        .search {
            padding: 0 7%;
            font-size: 18/@rem;
            margin-bottom: 20/@rem;
            .search-text {
                width: 100%;
                height: 55/@rem;
                padding: 0 20/@rem;
                background: #000;
                outline: none;
                border: 1px solid #88898d;
                border-radius: 20px;
                color: #88898d;
                -webkit-box-sizing: border-box;
                -moz-box-sizing: border-box;
                box-sizing: border-box;
            }
        }
    }

    .modality {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        z-index: 3;
    }
</style>
