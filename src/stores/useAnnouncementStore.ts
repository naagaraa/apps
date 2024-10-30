import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAnnouncementStore = defineStore('announcement', () => {
  let isShow = ref(true)

  /**
   * show sidebar
   */
  function closeAnnouncement() {
    if (isShow.value) {
      isShow.value = false
    } else {
      isShow.value = true
    }
  }

  return { isShow, closeAnnouncement }
})
