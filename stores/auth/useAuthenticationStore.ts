import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthenticationStore = defineStore('authentication', () => {
  let isAuth = ref(true)

  function logout() {
    if (isAuth.value == true) {
      isAuth.value = false
    }
  }

  function login() {
    if (isAuth.value == false) {
      isAuth.value = true
    }
  }
  return { isAuth, logout, login }
})
