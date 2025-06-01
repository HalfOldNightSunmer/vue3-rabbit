<template>
  <LayoutFixed />
  <LayoutNav />
  <LayoutHeader />
  <RouterView></RouterView>
  <LayoutFooter />
</template>

<script setup>
import LayoutFixed from './components/LayoutFixed.vue';
import LayoutNav from './components/LayoutNav.vue';
import LayoutFooter from './components/LayoutFooter.vue';
import LayoutHeader from './components/LayoutHeader.vue';
import {useCategoryStore} from  '@/stores/category'
import {onMounted} from 'vue'

const useCategory = useCategoryStore()
onMounted(() => {
  useCategory.getCategoryList()
})
</script>

<style lang="scss">
.index {
  color: $xtxColor;
}
</style>