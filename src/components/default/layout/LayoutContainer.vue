<template>
    <div>
        <main>
            <section class="main mt-10" :class="[isVisible ? 'mt-16 md:mt-10' : 'mt-0']">
                <div class="p-4" :class="[isVisible ? 'sm:ml-20 ' : 'sm:ml-64']">
                    <div :class="[
                        announcement ? 'mt-5 md:mt-10' : 'mt-0 md:mt-0'
                    ]" class="p-4 ">
                        <slot />
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useAnnouncementStore } from '@/stores/useAnnouncementStore';
import { useSidebarStore } from '@/stores/useSidebarStore';


const useAnnouncement = useAnnouncementStore()
const useSidebar = useSidebarStore()

let isVisible = computed(() => useSidebar.isShow);
let announcement = computed(() => useAnnouncement.isShow)

</script>