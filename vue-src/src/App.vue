<script setup>
import { RouterView } from 'vue-router';
import HeaderNav from './components/HeaderNav.vue';
import FooterInfo from './components/FooterInfo.vue';
</script>


<template>
  <div class="app">
    <div class="app__header">
      <HeaderNav/>
    </div>
    <div class="app__main">
      <RouterView/>
    </div>
    <div class="app__footer">
      <FooterInfo/>
    </div>
  </div>
</template>

<style scoped>
.app{
  height: 100vh;
}
.app__header{
  height : 50px;
}
.app__main{
  display : relative;
  height : 90%;
}
.app__footer{
  
}
</style>
