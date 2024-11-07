<template>
    <button @click="toggleTheme" id="theme-toggle">
        <span v-if="isDarkMode" id="theme-toggle-light-icon">🌞</span>
        <span v-else id="theme-toggle-dark-icon">🌜</span>
    </button>
</template>

<script setup lang="ts">
import useTheme from "@/composables/useTheme"
const { isDarkMode, toggleTheme } = useTheme();
</script>

<style></style>