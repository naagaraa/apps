import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFilterMenuStore = defineStore('filterMenu', () => {
  const isShowFilterMenu = ref(false)
  let viewKeyID = ref('')

  function toggleFilterMenu() {
    isShowFilterMenu.value = !isShowFilterMenu.value
    console.log(
      'Toggled ' + viewKeyID.value + ' isShowFilterMenu:',
      isShowFilterMenu.value,
    )
  }

  function applyKey(viewid: string) {
    // Check if the new viewid is different from the current viewKeyID
    if (viewKeyID.value !== viewid) {
      // Set the new viewID
      viewKeyID.value = viewid

      // Set isShowFilterMenu to false initially when page changes
      isShowFilterMenu.value = false
    } else {
      // If the viewID is the same, just toggle the visibility
      toggleFilterMenu()
    }
  }

  return {
    viewKeyID,
    isShowFilterMenu,
    toggleFilterMenu,
    applyKey,
  }
})
