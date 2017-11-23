<template>
    <div id="header-content">
        <div class="header-top">
            <div class="dis-nav">
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
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'header',
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
</style>
