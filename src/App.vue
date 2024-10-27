<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from "@/components/layout/Header.vue";
import BottomNavigation from '@/components/BottomNavigation.vue';
</script>

<template>
  <Header />
  <RouterView />
  <BottomNavigation />
</template>

<style scoped></style>
