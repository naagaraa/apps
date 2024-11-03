import { ref, onMounted, watch } from 'vue'

export default function useTheme() {
  const isDarkMode = ref(false)

  // Check initial theme from localStorage or prefers-color-scheme
  onMounted(() => {
    const storedTheme = localStorage.getItem('color-theme')
    if (storedTheme) {
      isDarkMode.value = storedTheme === 'dark'
    } else {
      isDarkMode.value = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches
    }
    applyTheme()
  })

  // Watch for changes in `isDarkMode` and apply the theme accordingly
  watch(isDarkMode, applyTheme)

  function toggleTheme() {
    isDarkMode.value = !isDarkMode.value
    localStorage.setItem('color-theme', isDarkMode.value ? 'dark' : 'light')
  }

  function applyTheme() {
    if (isDarkMode.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return {
    isDarkMode,
    toggleTheme,
    applyTheme,
  }
}
