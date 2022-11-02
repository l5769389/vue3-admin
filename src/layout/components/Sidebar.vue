<template>
  <div class="sidebar-container"
       :style="{background:bgColor}"
       :class="isSideOpened ? 'open': 'close'"
  >
    <el-menu
      :default-active="$route.path"
      :background-color="bgColor"
      text-color="#fff"
      class="el-menu-vertical-demo"
      :collapse="!isSideOpened"
      @open="handleOpen"
      @close="handleClose"
    >
      <template v-for="(item,index) in menus">
        <template v-if="item.children && item.children.length>0">
            <sub-menu :item="item"  :key="item.route" :index="item.route"/>
        </template>
        <template v-else>
          <menu-item  :key="index.route"  :index="item.route"  :item="item"/>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import variable from '@/style/varibles.module.scss'
import MenuItem from './components/MenuItem'
import SubMenu from './components/SubMenu'
const store = useStore()
const isSideOpened = computed(() => store.getters.sideBarOpened)
const handleOpen = () => {}
const handleClose = () => {}
const menus = ref(
  [
    {
      icon: 'el-icon-location',
      title: '首页',
      route: '/'
    },
    {
      icon: 'el-icon-location',
      title: '个人中心',
      route: '/profile'
    },
    {
      icon: 'el-icon-location',
      title: '用户',
      route: '/user',
      children: [
        {
          icon: 'el-icon-location',
          title: '员工管理',
          route: '/user/manage'
        },
        {
          icon: 'el-icon-location',
          title: '角色列表',
          route: '/user/role'
        },
        {
          icon: 'el-icon-location',
          title: '权限列表',
          route: '/user/permissions'
        }
      ]
    },
    {
      icon: 'el-icon-location',
      title: '文章',
      children: [
        {
          icon: 'el-icon-location',
          title: '文章排名',
          route: '/article/rank'
        },
        {
          icon: 'el-icon-location',
          title: '创建文章',
          route: '/article/create'
        }

      ]
    }
  ]
)
const bgColor = ref(variable.menuBg)
const handleClick = (item) => {
}
</script>
<style lang="scss" scoped>
@import "~@/style/varibles.module.scss";
  .sidebar-container{
    height: 100%;
  }
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
:deep(.sub-el-icon){
  margin-right: 5px;
}

:deep(.el-submenu__title){
  display: flex;
  align-items: center;
}

</style>
