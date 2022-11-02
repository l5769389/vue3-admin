<template>
  <div class="app-wrapper">
    <sidebar />
    <div class="main-container">
      <navbar/>
      <dynamic-tab/>
      <app-main>
          <router-view/>
      </app-main>
    </div>
  </div>
</template>
<script setup>
import Sidebar from '@/layout/components/Sidebar'
import Navbar from '@/layout/components/Navbar'
import AppMain from '@/layout/components/AppMain'
import DynamicTab from '@/layout/components/DynamicTab'
</script>
<style lang="scss" scoped>
  @import "~@/style/varibles.module.scss";
  .app-wrapper{
    width: 100%;
    height: 100%;
    display: flex;
    .main-container{
      flex: 1;
      transition: width 2s;
    }
  }
</style>
