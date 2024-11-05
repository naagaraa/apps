import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFilterMenuStore = defineStore('filterMenu', () => {
  const isShowFilterMenu = ref(true)

  function toggleFilterMenu() {
    if (isShowFilterMenu.value) {
      isShowFilterMenu.value = false
    } else {
      isShowFilterMenu.value = true
    }
  }

  return {
    isShowFilterMenu,
    toggleFilterMenu,
  }
})
