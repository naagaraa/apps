<script setup lang="ts">
import { RouterView } from 'vue-router'
import LayoutHeader from "@/components/default/layout/LayoutHeader.vue";
import BottomNavigation from '@/components/default/navigation/NavigationBottom.vue';
</script>

<template>
  <LayoutHeader />
  <RouterView />
  <BottomNavigation />
</template>

<style scoped></style>
