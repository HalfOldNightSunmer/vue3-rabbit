<template>
  <div class="top-category">
    <div class="container m-top-20">
      <!-- 面包屑 -->
      <div class="bread-container">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{ categoryData.name }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>

      <div class="home-banner">
        <el-carousel trigger="click" height="500px">
          <el-carousel-item v-for="item in bannerList" :key="item.id">
            <img alt="" :src="item.imgUrl">
          </el-carousel-item>
        </el-carousel>
      </div>

      <div class="sub-list">
        <h3>全部分类</h3>
        <ul>
          <li v-for="i in categoryData.children" :key="i.id">
            <RouterLink to="/">
              <img :src="i.picture" />
              <p>{{ i.name }}</p>
            </RouterLink>
          </li>
        </ul>
      </div>
      <div class="ref-goods" v-for="item in categoryData.children" :key="item.id">
        <div class="head">
          <h3>- {{ item.name }}-</h3>
        </div>
        <div class="body">
          <GoodsItem v-for="good in item.goods" :good="good" :key="good.id" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { getTopCategoryAPI, getBannerAPI } from "@/apis/category"
// import { ref, onMounted } from "vue"
// import { useRoute } from "vue-router"
import GoodsItem from "../Home/components/GoodsItem.vue"
// import { onBeforeRouteUpdate } from "vue-router"
// import { getBanner } from '@/apis/layout'
// const bannerList = ref([])

// onMounted(async () => {
//   const res = await getBannerAPI({
//     distributionSite: '2'
//   })
//   bannerList.value = res.data.result
//   // console.log(res.data);
// })
import {useBanner} from '@/views/Category/composables/useBanner'
const {bannerList} = useBanner()
// const categoryData = ref({})
// const route = useRoute()
// const getCategory = async (id) => {
//   const res = await getTopCategoryAPI(id)
//   categoryData.value = res.data.result
//   console.log(res.data.result)
// }
// getCategory(route.params.id)

// onBeforeRouteUpdate((to) => {
//   // to是目标路由
//   getCategory(to.params.id)
// })
import {useCategory} from '@/views/Category/composables/useCategory'
const {categoryData} = useCategory()
</script>

<style scoped lang="scss">
.top-category {
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }

  .sub-list {
    margin-top: 20px;
    background-color: #fff;

    ul {
      display: flex;
      padding: 0 32px;
      flex-wrap: wrap;

      li {
        width: 168px;
        height: 160px;


        a {
          text-align: center;
          display: block;
          font-size: 16px;

          img {
            width: 100px;
            height: 100px;
          }

          p {
            line-height: 40px;
          }

          &:hover {
            color: $xtxColor;
          }
        }
      }
    }
  }

  .ref-goods {
    background-color: #fff;
    margin-top: 20px;
    position: relative;

    .head {
      .xtx-more {
        position: absolute;
        top: 20px;
        right: 20px;
      }

      .tag {
        text-align: center;
        color: #999;
        font-size: 20px;
        position: relative;
        top: -20px;
      }
    }

    .body {
      display: flex;
      justify-content: space-around;
      padding: 0 40px 30px;
    }
  }

  .bread-container {
    padding: 25px 0;
  }
}
</style>