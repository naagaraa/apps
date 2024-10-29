import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('sidebar', () => {
  let isShow = ref(true)
  let isMinibar = ref(true)

  /**
   * show sidebar
   */
  function toggleSidebar() {
    if (isShow.value) {
      isShow.value = false
      isMinibar.value = false
    } else {
      isShow.value = true
      isMinibar.value = true
    }
  }

  return { isShow, isMinibar, toggleSidebar }
})
