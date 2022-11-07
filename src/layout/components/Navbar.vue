<template>
  <div class="nav-bar-container">
    <el-icon @click="toggleSidebar" :class="isSideOpened ? 'arrow-left':'arrow-right'">
      <DArrowLeft></DArrowLeft>
    </el-icon>
    <bread-crumb/>
    <div class="right">
       <search-com/>
      <el-icon @click="handleScreenfull"><FullScreen /></el-icon>
      <el-dropdown>
    <span class="el-dropdown-link">
       <el-avatar shape="square" :size="size" :src="squareUrl" />

    </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>首页</el-dropdown-item>
            <el-dropdown-item divided>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { DArrowLeft } from '@element-plus/icons'
import { useStore, mapState } from 'vuex'
import { computed } from 'vue'
import BreadCrumb from './components/BreadCrumb'
import screenfull from 'screenfull'
import SearchCom from '@/layout/components/components/SearchCom'
const store = useStore()
const toggleSidebar = () => {
  store.commit('app/toggleSideBar')
}
const squareUrl = computed(() => {
  return store.getters.userInfo.avatar
})
const size = 40
const isSideOpened = computed(() => store.getters.sideBarOpened)

const handleScreenfull = () => {
  screenfull.request()
}
</script>
<style lang="scss" scoped>
  .nav-bar-container{
    height: 60px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0 10px;
    box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
    >.el-icon{
      margin-right: 20px;
    }
    .right{
      display: flex;
      align-items: center;
      margin-left: auto;
      >.el-icon{
        margin-right: 20px;
        font-size: 30px;
      }
    }
    .arrow-left{
      transform: rotate(360deg);
      transition: transform 0.5s;
    }
    .arrow-right{
      transform: rotate(180deg);
      transition: transform 0.5s;
    }
  }
</style>
