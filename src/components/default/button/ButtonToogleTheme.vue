<template>
    <button @click="toggleTheme" id="theme-toggle">
        <span v-if="isDarkMode" id="theme-toggle-light-icon">🌞</span>
        <span v-else id="theme-toggle-dark-icon">🌜</span>
    </button>
</template>

<script lang="js" setup>
import useTheme from "@/composables/useTheme.js"
const { isDarkMode, toggleTheme } = useTheme();
</script>

<style></style>