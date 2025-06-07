<script setup>
import { ref, onMounted } from 'vue'
import { getCategoryFilterAPI, getSubCategoryAPI } from '@/apis/category';
import { useRoute } from 'vue-router';
import GoodsItem from '../Home/components/GoodsItem.vue'

const route = useRoute()
const id = route.params.id
const filterData = ref({})
const goodList = ref([])
const disabled = ref(false)
const reqData = ref({
  categoryId: id,
  page: 1,
  pageSize: 10,
  sortField: 'publishTime'
})

const getSubCategory = async () => {
  const res = await getSubCategoryAPI(reqData.value)
  goodList.value = res.data.result.items
}
const getCategoryFilter = async () => {
  const res = await getCategoryFilterAPI(id)
  filterData.value = res.data.result
}

const handleClick =((tab, event) => {
  console.log(tab, event)
  reqData.value.page = 1
  getSubCategory()
}) 

const load = async () => {
  console.log('到底了')
  reqData.value.page ++
  const res = await getSubCategoryAPI(reqData.value)
  goodList.value.push(...res.data.result.items)
  if  (res.data.result.items.length === 0) {
    disabled.value = true
  }
}

onMounted( () => {
  getCategoryFilter()
  getSubCategory()
})

</script>

<template>
  <div class="container ">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${filterData.parentId}` }">{{ filterData.parentName }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ filterData.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="reqData.sortField" @tab-click="handleClick">
        <el-tab-pane label="最新商品" name="publishTime"> </el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div class="body" v-infinite-scroll="load" :infinite-scroll-disabled="disabled">
         <!-- 商品列表-->
            <GoodsItem v-for="item in goodList" :key="item.id" :good="item"></GoodsItem>
      </div>
    </div>
  </div>

</template>



<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }


}
</style>