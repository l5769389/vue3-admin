<template>
  <div class="search-container">
    <el-icon :size="35" @click="toggleSearch"><Search/></el-icon>
    <transition name="fade">
      <el-input
        v-if="isShowSearch"
        class="search-input"
        v-model="searchVal"
      />
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const searchVal = ref('')
const isShowSearch = ref(false)
const toggleSearch = () => {
  isShowSearch.value = !isShowSearch.value
}

const router = useRouter()
const routes = router.getRoutes()
console.log(routes)
function filterRoute (routes) {
  return routes.map(item => {
    return {
      title: item.meta.title,
      path: item.path
    }
  })
}
const filtered = filterRoute(routes)

</script>
<style lang="scss" scoped>
  .search-container{
    display: flex;
    align-items: center;
    margin-right: 10px;
  }
  .search-input{
    width: 200px;
  }
  .fade-enter-active,.fade-leave-active{
    transition: all 0.7s ease;
  }
  .fade-enter-from,.fade-leave-to{
    width: 0;
    opacity: 0;
  }

</style>
