<template>
  <div class="sidebar-container"
       :class="isSideOpened ? 'open': 'close'"> side</div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const isSideOpened = computed(() => store.getters.sideBarOpened)
</script>
<style lang="scss" scoped>
@import "~@/style/varibles.scss";
  .sidebar-container{
    height: 100%;
    background-color: rebeccapurple;
    transition: width 0.8s;
  }
  .open{
    width: $sideBarWidth;
  }
  .close{
    width: $hideBarWidth;
  }
</style>
