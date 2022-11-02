<template>
  <el-menu-item
    :index="index"
    @click="() => handleClick(item)">
    <i class="sub-el-icon" :class="item.icon"></i>
    <template #title>{{item.title}}</template>
  </el-menu-item>
</template>

<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
defineProps(['item', 'index'])

const handleClick = (item) => {
  router.push(item.route)
}
</script>
<style lang="scss" scoped>

</style>
