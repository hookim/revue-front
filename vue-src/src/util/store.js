import { ref } from 'vue';
import { defineStore } from 'pinia'

export const useStore = defineStore('store', () =>{
  const searchKeyword = ref("")
  const setSearchKeyword = (keyword) => {
    searchKeyword.value = keyword
  }
  const getSearchKeyword = () => {
    return searchKeyword.value
  }

  return {getSearchKeyword, setSearchKeyword}
})
