import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFilterMenuStore = defineStore('filterMenu', () => {
  const isShowFilterMenu = ref(false)
  const viewKeyID = ref('')

  function toggleFilterMenu() {
    isShowFilterMenu.value = !isShowFilterMenu.value
    console.log(
      'Toggled ' + viewKeyID.value + ' isShowFilterMenu:',
      isShowFilterMenu.value,
    )
  }

  function closeFilterMenu() {
    isShowFilterMenu.value = !isShowFilterMenu.value
    console.log(
      'Toggled ' + viewKeyID.value + ' closed :',
      isShowFilterMenu.value,
    )
  }

  function applyKey(viewid: string) {
    console.log('params is', viewid)
    console.log('ref is', viewKeyID.value)

    // Always reset `isShowFilterMenu` to `false` when applying a new view ID
    if (viewKeyID.value !== viewid) {
      // viewKeyID.value = viewid
      isShowFilterMenu.value = false // Reset the menu visibility when the page changes
    } else if (isShowFilterMenu.value) {
      // If the view ID is the same and the menu is already open, close it
      isShowFilterMenu.value = false
    } else {
      // If the view ID is the same and the menu is closed, open it
      isShowFilterMenu.value = false
    }
  }

  return {
    viewKeyID,
    isShowFilterMenu,
    toggleFilterMenu,
    closeFilterMenu,
    applyKey,
  }
})
