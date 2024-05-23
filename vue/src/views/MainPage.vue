<script setup>
import { ref } from 'vue'
import  { useStore }  from '../util/store'
import { useRouter } from 'vue-router';
import video from "../../../videos/video.mp4"

const searchKeyword = ref("")
const { setSearchKeyword } = useStore()
const router = useRouter()

const switchHandler = () => {
  setSearchKeyword(searchKeyword.value)
  router.push("/map")
}

</script>

<template>
    <video autoplay loop ref="video">
        <source :src="video" type="video/mp4">
    </video>
    <div class="search-bar">
      <input placeholder="검색" v-model="searchKeyword">  
      <svg @click= "switchHandler" width="20px" height="20px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M448 768A320 320 0 1 0 448 128a320 320 0 0 0 0 640z m297.344-76.992l214.592 214.592-54.336 54.336-214.592-214.592a384 384 0 1 1 54.336-54.336z" fill="#000000" /></svg> 
    </div> 
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
video{
  width : 100%;
  height : 100%;
  object-fit: cover;
  border : black 2px solid;
}
.search-bar{
  position : absolute;
  width : 420px;
  height : 50px;
  top : 50%;
  left: 50%;
  transform: translate(-50%, 0);
}
.search-bar input{
  border-radius: 5px;
  border: none;
  right : 20%;
  padding : 10px;
  width : 100%;
}
.search-bar svg{
  position : absolute;
  right : 5px;
  top : 8px;
}
</style>
