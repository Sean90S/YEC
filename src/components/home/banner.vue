<template>
    <div class="banner">
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for="item in lbt"><img :src="item.imgs" alt=""></swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script type="text/ecmascript-6">
    import { swiper, swiperSlide } from 'vue-awesome-swiper';
    export default {
        name: 'banner',
        components: {
            swiper,
            swiperSlide
        },
        data() {
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
    @import url("./../../assets/css/swiper.min.css");
    @import url("./../common/less/he.less");

    .banner {
        margin-top: 120 / @rem;
        width: 100%;
        height: 366 / @rem;
        .swiper-container {
            width: 100%;
            height: 100%;
            position: relative;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .swiper-pagination {
            position: absolute;
            top: 0;
            width: auto;
            .swiper-pagination-bullet {
                width: 20/@rem;
                height: 3px;
            }

            .swiper-pagination-bullet-active{
                background: #fff;
            }
        }
    }
</style>
