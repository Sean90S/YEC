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
            <swiper :options="swiperOption" ref="mySwiper">
                <swiper-slide class="product-items">
                    <div class="img-responsive">
                        <img src="http://api.yrcmall.com/1510625654427.jpeg" alt="">
                    </div>
                    <ul class="commodity-name">
                        <li>Y'RC2017年冬季新品细跟尖头短靴</li>
                        <li class="price">￥222</li>
                    </ul>
                </swiper-slide>
                <swiper-slide class="product-items">
                    <div class="img-responsive">
                        <img src="http://api.yrcmall.com/1510625654427.jpeg" alt="">
                    </div>
                    <ul class="commodity-name">
                        <li>Y'RC2017年冬季新品细跟尖头短靴</li>
                        <li class="price">￥222</li>
                    </ul>
                </swiper-slide>
                <swiper-slide class="product-items">
                    <div class="img-responsive">
                        <img src="http://api.yrcmall.com/1510625654427.jpeg" alt="">
                    </div>
                    <ul class="commodity-name">
                        <li>Y'RC2017年冬季新品细跟尖头短靴</li>
                        <li class="price">￥222</li>
                    </ul>
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
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
            return {
                swiperOption: {  // swiper
                    autoplay: 3000,
                    loop: true,
                    pagination : '.swiper-pagination'
                },
                lbt: [
                    {imgs: 'http://api.yrcmall.com/1510629864256.png'},
                    {imgs: 'http://api.yrcmall.com/1510625654427.jpeg'},
                    {imgs: 'http://api.yrcmall.com/1510629864256.png'}
                ]
            }
        }
    }
</script>

<style lang="less" type="text/less">
    @import "./../common/less/he.less";
    @import url("./../../assets/css/swiper.min.css");

    .group {
        width: 100%;
        .details {      /* 商品信息 */
            background: url("http://api.yrcmall.com/1511242657233.jpeg") no-repeat;
            height: auto;
            background-position: bottom;
            background-size: cover;
            overflow: hidden;
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
            background-size: cover;
            height: 600/@rem;
            text-align: center;
            .product-items {
                margin-top: 40/@rem;
            }
            .img-responsive {
                width: 90%;
                height: 400/@rem;
                margin: auto;
                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .swiper-pagination {
                position: relative;
                bottom: 35/@rem;
                .swiper-pagination-bullet {
                    width: 30/@rem;
                    height: 3px;
                    background: #946d44;

                }
            }

            .commodity-name {
                font-size: 30/@rem;
                line-height: 70/@rem;
                .price {
                    font-size: 40/@rem;
                    color: #946d44;
                }
            }
        }

    }
</style>
