<template>
  <main>
    <section class="main mt-10" :class="[isVisible ? 'mt-16 md:mt-10' : 'mt-0']">
      <div class="p-4" :class="[isVisible ? 'sm:ml-20 ' : 'sm:ml-64']">
        <div :class="[
          announcement ? 'mt-5 md:mt-10' : 'mt-0 md:mt-0'
        ]" class="p-4 ">
          <h1 class="font-bold mb-10">content main</h1>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
            <CardDefault />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { initFlowbite } from 'flowbite'

import { useAnnouncementStore } from '@/stores/useAnnouncementStore';
import { useSidebarStore } from '@/stores/useSidebarStore';

import CardDefault from '@/components/default/card/CardDefault.vue';



// Create a reactive reference for isActive
const useSidebar = useSidebarStore()
const useAnnouncement = useAnnouncementStore()

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
})

// Create a reactive reference for isActive
let isVisible = computed(() => useSidebar.isShow);
let announcement = computed(() => useAnnouncement.isShow)
</script>
