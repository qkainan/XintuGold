<script setup xmlns:style="http://www.w3.org/1999/xhtml">
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'

import { useLayoutStore } from '@/stores/layoutStore.js'
import GoodsItem from "@/views/Layout/components/GoodsItem.vue";

const layoutStore = useLayoutStore()


</script>

<template>
  <layout-header></layout-header>
  <Goods-item></Goods-item>
  <layout-footer></layout-footer>
</template>