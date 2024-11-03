<template>


    <SideBar v-if="isLoggin" />
    <nav :class='classSidebarBase'
        class="fixed right-0 top-0 z-50  bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <!-- pengumuman -->
        <Suspense>
            <template #default>
                <Announcement v-if="announcement" message="The PHP Scratchpad: Tinkerwell 4 is available now!" />
            </template>
            <template #fallback>
                <AnnouncementSkeleton />
            </template>
        </Suspense>
        <!-- end pengumuman -->
        <div class="px-3 py-3 lg:px-5 lg:pl-3">
            <div class="flex flex-wrap md:items-center md:justify-between">
                <TopLogoActive />
                <TopNavigation />
                <SearchInput />
                <div v-if="isLoggin">
                    <TopUserActive />
                </div>
                <div v-else>
                    <TopUserInactive />
                </div>
            </div>
        </div>
    </nav>

</template>
<script setup lang="ts">

// vue
import { computed } from 'vue';

// component

import SideBar from "@/components/default/navigation/NavigationSide.vue";
import Announcement from "@/components/default/Announcement.vue";
import AnnouncementSkeleton from '@/components/skeleton/AnnouncementSkeleton.vue';
import TopNavigation from "@/components/default/navigation/NavigationTop.vue";

import TopUserActive from '@/components/default/TopUserActive.vue';
import TopLogoActive from '@/components/default/TopLogoActive.vue';
import TopUserInactive from '@/components/default/TopUserInactive.vue';
import SearchInput from '@/components/default/SearchInput.vue';

// State
import { useSidebarStore } from '@/stores/useSidebarStore';
import { useAnnouncementStore } from '@/stores/useAnnouncementStore';
import { useAuthenticationStore } from "@/stores/auth/useAuthenticationStore";

// store
const useSidebar = useSidebarStore()
const useAnnouncement = useAnnouncementStore()
const useAuth = useAuthenticationStore();

let minibar = computed(() => useSidebar.isMinibar);
let isLoggin = computed(() => useAuth.isAuth);
let announcement = computed(() => useAnnouncement.isShow);

// class base
const classSidebarBase = computed(() => [
    minibar.value ? 'left-0 sm:left-16' : 'left-0 sm:left-56'
])

</script>