<template>
    <div class="preferen">
        <div class="preferen-title">特惠专区</div>
        <div class="preferen-commodity">
            <swiper :options="swiperOption" ref="mySwiper" class="index-swiper-mobile">
                <swiper-slide class="product-items">
                    <span class="icon iconfont icon-chakanxiangqing product-link-arrow"></span>
                    <div class="img-responsive">
                        <img src="http://api.yrcmall.com/1510625654427.jpeg" alt="">
                    </div>
                    <ul class="commodity-name">
                        <li>Y'RC2017年冬季新品细跟尖头短靴</li>
                        <li>￥222</li>
                    </ul>
                </swiper-slide>
                <swiper-slide class="product-items">
                    <span class="icon iconfont icon-chakanxiangqing product-link-arrow"></span>
                    <div class="img-responsive">
                        <img src="http://api.yrcmall.com/1510625654427.jpeg" alt="">
                    </div>
                    <ul class="commodity-name">
                        <li>Y'RC2017年冬季新品细跟尖头短靴</li>
                        <li>￥222</li>
                    </ul>
                </swiper-slide>
                <swiper-slide class="product-items">
                    <span class="icon iconfont icon-chakanxiangqing product-link-arrow"></span>
                    <div class="img-responsive">
                        <img src="http://api.yrcmall.com/1510625654427.jpeg" alt="">
                    </div>
                    <ul class="commodity-name">
                        <li>Y'RC2017年冬季新品细跟尖头短靴</li>
                        <li>￥222</li>
                    </ul>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import { swiper, swiperSlide } from 'vue-awesome-swiper';
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
                }
            }
        }
    }
</script>

<style lang="less" type="text/less">
    @import "./../common/less/he.less";
    .preferen {
        width: 100%;
        height: 650/@rem;
        margin-bottom: 70/@rem;
        overflow: hidden;
        .index-swiper-mobile {
            overflow: visible;
        }
        .preferen-title {   /* 标题 */
            width: 100%;
            height: 130/@rem;
            line-height: 130/@rem;
            text-align: center;
            font-size: 29/@rem;
            font-weight: bold;
            background: url("./../common/img/special-zone.png") no-repeat;
            background-position: center 30/@rem;
            background-size: 58%;
        }
        .preferen-commodity {
            width: 100%;
            height: 410/@rem;
            text-align: center;
            perspective: 1200px;
            .product-items {
                width: 58%;
                height: 100%;
                margin: 0 auto;
                .img-responsive {
                    width: 90%;
                    height: 410/@rem;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
                .commodity-name {
                    line-height: 40/@rem;
                    font-size: 25/@rem;
                }
                .product-link-arrow{
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    z-index: 2;
                    opacity: 0;
                    font-size: 40/@rem;
                    color: rgba(72, 64, 53, 0.3);
                    -webkit-animation-duration: 1s;
                    animation-duration: 1s;
                    -webkit-animation-fill-mode: both;
                    animation-fill-mode: both;
                }
            }
            .swiper-slide-active{
                position: relative;
                z-index: 100;
                -webkit-box-shadow: 0 -2px 35px 4px rgba(0, 0, 0, 0.15);
                box-shadow: 0 -2px 35px 4px rgba(0, 0, 0, 0.15);
                .product-link-arrow{
                    -webkit-animation-name: showLinkArrow;
                    animation-name: showLinkArrow;
                }
                @-webkit-keyframes showLinkArrow {
                    from {
                        opacity: 0;
                        transform: translateX(-100px);
                    }
                    to{
                        opacity: 1;
                        transform: none;
                    }
                }
            }
        }
    }
</style>
