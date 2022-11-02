<template>
  <el-submenu :index="index">
    <template #title>
      <i class="sub-el-icon" :class="item.icon"></i>
      <span>{{item.title}}</span>
    </template>
    <el-menu-item-group>
      <template v-for="(item1) in item.children"  :key="item1.route">
          <el-menu-item
            :index="item1.route"
            :item="item1" />
      </template>
    </el-menu-item-group>
  </el-submenu>
</template>

<script setup>
import { defineProps } from 'vue'
import ElMenuItem from './MenuItem'
defineProps(['item', 'index'])
</script>
<style lang="scss" scoped>

</style>
