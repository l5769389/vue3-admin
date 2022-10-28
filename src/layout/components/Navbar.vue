<template>
  <div>
    <el-icon @click="toggleSidebar">
      <DArrowLeft></DArrowLeft>
    </el-icon>
  </div>
</template>

<script setup>
import { DArrowLeft } from '@element-plus/icons'
import { useStore } from 'vuex'
const store = useStore()
const toggleSidebar = () => {
  store.commit('app/toggleSideBar')
}

</script>
<style lang="scss" scoped>

</style>
