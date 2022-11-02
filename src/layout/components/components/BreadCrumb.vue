<template>
  <el-breadcrumb separator="/">
    <template v-for="item in routes" :key="item">
      <el-breadcrumb-item >{{item}}</el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const routes = ref([])
const setBreadcrumb = () => {
  routes.value = route.matched.filter(item => item.meta && item.meta.title).map(item => item.meta.title)
}
watch(route, () => {
  setBreadcrumb()
}, {
  immediate: true
})

</script>
<style lang="scss" scoped>

</style>
