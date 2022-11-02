<template>
  <div class="tag-view-container">
    <el-tag
      v-for="item in routeTags"
      :key="item.label"
      :type="activeTags === item.label ? '': 'info'"
      effect="dark"
      :closable="item.closable"
      style="margin-right: 5px"
      @click="handleClick(item)"
    >
      {{ item.label }}
    </el-tag>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
const route = useRoute()
const store = useStore()
const router = useRouter()
const historyRoutes = computed(() => store.getters.historyRoutes)
const routeTags = computed(() => {
  return historyRoutes.value.map(item => {
    if (item.path === '/') {
      return { label: '首页', route: '/', closable: false }
    } else {
      return { label: item.title, route: item.path, closable: true }
    }
  })
})
const activeTags = ref('首页')
watch(route, () => {
  if (route.meta.title) {
    activeTags.value = route.meta.title
  }
}, {
  immediate: true
})

const handleClick = (item) => {
  activeTags.value = item.label
  router.push(item.route)
}

</script>
<style lang="scss" scoped>
  .tag-view-container{
    margin-top: 5px;
    margin-bottom: 5px;
  }
</style>
