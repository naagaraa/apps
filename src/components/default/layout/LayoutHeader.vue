<template>
    <div v-if="isLoggin">
        <SideBar />
        <nav :class='classSidebarBase'
            class="fixed right-0 top-0 z-50  bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <!-- pengumuman -->
            <Suspense>
                <template #default>
                    <div v-if="announcement">
                        <Announcement message="The PHP Scratchpad: Tinkerwell 4 is available now!" />
                    </div>
                </template>
                <template #fallback>
                    <AnnouncementSkeleton />
                </template>
            </Suspense>
            <!-- end pengumuman -->
            <div class="px-3 py-3 lg:px-5 lg:pl-3">
                <div class="flex flex-wrap md:items-center justify-between">
                    <TopLogoActive />
                    <TopNavigation />
                    <div v-if="isLoggin">
                        <TopUserActive>
                            <DropDownUser name="Miyuki Nagara" email="yuki@gmail.com" />
                        </TopUserActive>
                    </div>
                    <div v-else>
                        <TopUserInactive />
                    </div>
                </div>
            </div>
        </nav>
    </div>
    <div v-else>
        <nav
            class="left-0 fixed right-0 top-0 z-50  bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <!-- pengumuman -->
            <Suspense>
                <template #default>
                    <div v-if="announcement">
                        <Announcement message="The PHP Scratchpad: Tinkerwell 4 is available now!" />
                    </div>
                </template>
                <template #fallback>
                    <AnnouncementSkeleton />
                </template>
            </Suspense>
            <!-- end pengumuman -->
            <div class="px-3 py-3 lg:px-5 lg:pl-3">
                <div class="flex flex-wrap md:items-center justify-between">
                    <TopLogoActive />
                    <TopNavigation />
                    <div v-if="isLoggin">
                        <TopUserActive>
                            <DropDownUser name="Miyuki Nagara" email="yuki@gmail.com" />
                        </TopUserActive>
                    </div>
                    <div v-else>
                        <TopUserInactive />
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>
<script setup lang="ts">

// vue
import { computed, ref } from 'vue';

// component
import DropDownUser from '@/components/default/DropDownUser.vue';
import SideBar from "@/components/default/navigation/NavigationSide.vue";
import Announcement from "@/components/default/Announcement.vue";
import AnnouncementSkeleton from '@/components/skeleton/AnnouncementSkeleton.vue';
import TopNavigation from "@/components/default/navigation/NavigationTop.vue";

import TopUserActive from "@/components/default/TopUserActive.vue";
import TopLogoActive from '@/components/default/TopLogoActive.vue';
import TopUserInactive from '@/components/default/TopUserInactive.vue';

// State
import { useSidebarStore } from '@/stores/useSidebarStore';
import { useAnnouncementStore } from '@/stores/useAnnouncementStore';

const useSidebar = useSidebarStore()
const useAnnouncement = useAnnouncementStore()

let minibar = computed(() => useSidebar.isMinibar);
let isLoggin = ref(true)
let announcement = computed(() => useAnnouncement.isShow);
const classSidebarBase = computed(() => [
    minibar.value ? 'left-0 sm:left-16' : 'left-0 sm:left-56'
])

</script>