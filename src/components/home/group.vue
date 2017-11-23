<template>
    <div class="group">
        <div class="details">
            <div class="details-title">
                <p class="E-title">GROUP</p>
                <p class="Z-title">团购商品</p>
            </div>
            <div class="particulars-details">
                <p class="particulars-title">Y'RC2017年冬季新品细跟尖头短靴</p>
                <p class="details-price">￥ 569</p>
            </div>
        </div>
        <div class="group-banner">

        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import { swiper, swiperSlide } from 'vue-awesome-swiper';
    export default {
        name: 'group',
        components: {
            swiper,
            swiperSlide
        },
        data(){

        }
    }
</script>

<style lang="less" type="text/less">
    @import "./../common/less/he.less";

    .group {
        width: 100%;
        .details {      /* 商品信息 */
            background: url("http://api.yrcmall.com/1511242657233.jpeg") no-repeat;
            height: auto;
            background-position: bottom;
            background-size: cover;
            padding-left: 40/@rem;
            .details-title {
                padding-top: 55/@rem;
                padding-bottom: 5.133333rem;
                .E-title {
                    font-size: 140/@rem;
                    opacity: .2;
                    line-height: 160/@rem;
                }
                .Z-title {
                    letter-spacing: 8/@rem;
                    font-weight: bold;
                    padding-left: 8/@rem;
                    padding-top: 8/@rem;
                }
            }
            .particulars-details {
                .particulars-title {
                    font-size: 40/@rem;
                    font-weight: 600;
                }
                .details-price {
                    font-size: 50/@rem;
                    font-weight: 600;
                    padding-top: 30/@rem;
                    padding-bottom: 40/@rem;
                }
            }
        }
        .group-banner {  /* 商品列表 */
            background: url("../common/img/bg-hw.png") no-repeat;
            background: cover;
            height: 600/@rem;
            text-align: center;

        }

    }
</style>
