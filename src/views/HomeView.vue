<template>
  <main>
    <section class="main mt-10" :class="[isVisible ? 'mt-16 md:mt-10' : 'mt-0']">
      <div class="p-4" :class="[isVisible ? 'sm:ml-20 ' : 'sm:ml-64']">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <h1 class="font-bold">content main</h1>
          <div class="grid grid-cols-3 gap-4 mb-4">
            <CardDefault />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { initFlowbite } from 'flowbite'
import { computed } from 'vue';
import { useSidebarStore } from '@/stores/useSidebarStore';
import CardDefault from '@/components/default/card/CardDefault.vue';
// Create a reactive reference for isActive
const useSidebar = useSidebarStore()

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
})

// Create a reactive reference for isActive
let isVisible = computed(() => useSidebar.isShow);

</script>
