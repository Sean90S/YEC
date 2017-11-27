<template>
    <div class="madden">
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide class="product-items">
                <div class="img-responsive">
                    <img src="http://api.yrcmall.com/1511241264074.jpeg" alt="">
                </div>
                <ul class="commodity-name">
                    <li>Y'RC2017年冬季新品细跟尖头短靴</li>
                    <li class="price">￥222</li>
                </ul>
            </swiper-slide>
            <swiper-slide class="product-items">
                <div class="img-responsive">
                    <img src="http://api.yrcmall.com/1511241264074.jpeg" alt="">
                </div>
                <ul class="commodity-name">
                    <li>Y'RC2017年冬季新品细跟尖头短靴</li>
                    <li class="price">￥222</li>
                </ul>
            </swiper-slide>
            <swiper-slide class="product-items">
                <div class="img-responsive">
                    <img src="http://api.yrcmall.com/1511241264074.jpeg" alt="">
                </div>
                <ul class="commodity-name">
                    <li>Y'RC2017年冬季新品细跟尖头短靴</li>
                    <li class="price">￥222</li>
                </ul>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script type="text/ecmascript-6">
    import { swiper, swiperSlide } from 'vue-awesome-swiper';
    import API from './../../API';
    export  default {
        name: 'preferen',
        components: {
            swiper,
            swiperSlide
        },
        data(){
            return {
                swiperOption: {  // swiper
                    slidesPerView: "auto",
                    centeredSlides: !0,
                    loop: true,
                    watchSlidesProgress: !0,
                    initialSlide: 1,
                    autoplay: 2000
                }
            }
        }
    }
</script>

<style lang="less" type="text/less">
    @import "./../common/less/he.less";
    @import url("./../../assets/css/swiper.min.css");
    .madden {
        width: 100%;
        background-color: #c6b9b1;
        background-image:url("http://api.yrcmall.com/1510733491994.png");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        .swiper-slide-active {
            .img-responsive {
                background: #fff;
                -webkit-transform: scale(1.129, 1.1) !important;
                transform: scale(1.129, 1.1) !important;
            }
            .commodity-name {
                opacity: 1;
            }
        }
        .product-items {
            width: 58%!important;
            margin:120/@rem auto 70/@rem;
            background: none;
        }
        .img-responsive {
            height: 400/@rem;
            img {
                padding-left: 15%;
                width: 70%;
                height: 100%;
            }
        }
        .commodity-name {
            text-align: center;
            font-size: 20/@rem;
            margin-top: 60/@rem;
            line-height: 40/@rem;
            opacity: 0;
            .price {
                font-size: 40/@rem;
                font-weight: 300;
            }
        }
    }
</style>
