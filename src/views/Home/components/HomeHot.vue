<script setup>
import HomePanal from './HomePanal.vue'
import { ref } from 'vue'
import { getHotAPI } from '@/apis/layout'
const hotList = ref([])
const getHotList = async () => {
    const res = await getHotAPI()
    hotList.value = res.data.result
}
getHotList()
</script>

<template>
    <HomePanal title="人气推荐" subTitle="人气爆款 不容错过">
        <ul class="goods-list">
            <li v-for="item in hotList" :key="item.id">
              <RouterLink to="/">
                <!-- <img :v-img-lazy="item.picture" alt=""> -->
                <img v-img-lazy="item.picture" alt="">
                <p class="name">{{ item.title }}</p>
                <p class="desc">{{ item.alt }}</p>
              </RouterLink>
            </li>
          </ul>
    </HomePanal>
</template>


<style scoped lang="scss">
.goods-list {
    display: flex;
    justify-content: space-between;
    height: 426px;
  
    li {
      width: 306px;
      height: 406px;
      transition: all .5s;
  
      &:hover {
        transform: translate3d(0, -3px, 0);
        box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
      }
  
      img {
        width: 306px;
        height: 306px;
      }
  
      p {
        font-size: 22px;
        padding-top: 12px;
        text-align: center;
      }
  
      .desc {
        color: #999;
        font-size: 18px;
      }
    }
  }
</style>