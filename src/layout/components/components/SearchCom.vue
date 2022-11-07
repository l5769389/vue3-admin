<template>
  <div class="search-container">
    <el-icon :size="35" @click="toggleSearch"><Search/></el-icon>
    <transition name="fade">
      <el-input
        v-if="isShowSearch"
        class="search-input"
        v-model="searchVal"
        placeholder="Please input" />
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const searchVal = ref('')
const isShowSearch = ref(false)
const toggleSearch = () => {
  isShowSearch.value = !isShowSearch.value
}
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
  .fade-enter-active,{
    transition: width 10s ease;
  }
  .fade-enter-from{
    width: 0;
    opacity: 0;
  }

</style>
