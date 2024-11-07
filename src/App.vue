<script setup lang="ts">
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

import LayoutHeader from "@/components/default/layout/LayoutHeader.vue";
import layoutContainer from '@/components/default/layout/LayoutContainer.vue';
import BottomNavigation from '@/components/default/navigation/NavigationBottom.vue';

onMounted(() => {
  initFlowbite();
})


</script>

<template>
  <LayoutHeader />
  <layoutContainer>
    <RouterView />
    <BottomNavigation />
  </layoutContainer>
</template>

<style scoped></style>
