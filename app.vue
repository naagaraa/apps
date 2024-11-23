<script setup lang="js">
// import { onMounted } from 'vue'
// import { initFlowbite } from 'flowbite'

import LayoutHeader from "@/components/default/layout/LayoutHeader.vue";
import layoutContainer from '@/components/default/layout/LayoutContainer.vue';
import BottomNavigation from '@/components/default/navigation/NavigationBottom.vue';

// onMounted(() => {
//   initFlowbite();
// })

import { onMounted } from 'vue'
import { useFlowbite } from '~/composables/useFlowbite';

// initialize components based on data attribute selectors
onMounted(() => {
  useFlowbite(() => {
    initFlowbite();
  })
})


</script>

<template>
  <LayoutHeader />
  <layoutContainer>
    <NuxtPage />
    <!-- <NuxtRouteAnnouncer /> -->
    <!-- <BottomNavigation /> -->
  </layoutContainer>
</template>
