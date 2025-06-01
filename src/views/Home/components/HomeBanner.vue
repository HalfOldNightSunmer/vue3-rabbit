<script setup>
// import { getBanner } from '@/apis/layout'
// import { onMounted, ref } from 'vue';
// const bannerList = ref([])

// onMounted(async () => {
//     const res = await getBanner()
//     bannerList.value = res.data.result
//     // console.log(res.data);
// })
import {useBanner} from '@/views/Category/composables/useBanner'
const {bannerList} = useBanner()
</script>

<template>
    <div class="home-banner">
        <el-carousel trigger="click" height="500px">
            <el-carousel-item v-for="item in bannerList" :key="item.id">
                <img alt="" :src="item.imgUrl">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>


<style scoped lang='scss'>
.home-banner {
    width: 1240px;
    height: 500px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 98;

    img {
        width: 100%;
        height: 500px;
    }
}
</style>