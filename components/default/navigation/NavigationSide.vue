<template>
    <aside id="logo-sidebar"
        class="fixed left-0 z-40 h-screen  transition-transform -translate-x-full bg-black border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        :class="sidebarClasses">
        <div class="mx-4">
            <IconUdemy />
        </div>
        <div
            class="scrollbar-thin scrollbar-thumb-slate-500 scrollbar-track-slate-800 h-full px-3 pb-4 overflow-y-auto bg-black dark:bg-gray-800">
            <ul class="space-y-2 font-medium">
                <ListSidebarLink title="Dashboard" route-name="index" :border='false'>
                    <IconDashboard color="white" />
                </ListSidebarLink>

                <!-- elearning saya -->
                <ListSidebarLink title="Kelas Saya" route-name="index" :border='true'>
                    <IconMylearning color="white" />
                </ListSidebarLink>
                <ListSidebarLink title="Materi Bacaan" route-name="index" :border='false'>
                    <IconMateri color="white" />
                </ListSidebarLink>

                <!-- jobs dan event -->
                <ListSidebarLink title="Event Saya" route-name="index" :border='false'>
                    <IconEvent color="white" />
                </ListSidebarLink>
                <ListSidebarLink title="Kuliner & Destinasi" route-name="index" :border='false'>
                    <IconTravel color="white" />
                </ListSidebarLink>

                <!-- mini games -->
                <ListSidebarLink title="Mini Games" route-name="index" :border='true'>
                    <IconMylearning color="white" />
                </ListSidebarLink>
                <ListSidebarLink title="Mini Quiz" route-name="index" :border='false'>
                    <IconMateri color="white" />
                </ListSidebarLink>

                <!-- lainnya -->
                <ListSidebarLink title="Lainnya" :border='true'>
                    <IconLainnya color="white" />
                </ListSidebarLink>
                <ListSidebarLink title="Help Center" route-name="index" :border='false'>
                    <IconHelpCenter color="white" />
                </ListSidebarLink>
            </ul>
        </div>
    </aside>
</template>

<script setup lang="ts">
import { useSidebarStore } from '@/stores/useSidebarStore';
import { computed, reactive } from 'vue';
import ListSidebarLink from '@/components/default/list/ListSidebarLink.vue';
import IconMylearning from '@/components/default/icons/IconMylearning.vue';
import IconLainnya from '@/components/default/icons/IconLainnya.vue';
import IconMateri from '@/components/default/icons/IconMateri.vue';
import IconHelpCenter from '@/components/default/icons/IconHelpCenter.vue';
import IconDashboard from '@/components/default/icons/IconDashboard.vue';
import IconTravel from '@/components/default/icons/IconTravel.vue';
import IconUdemy from '@/components/default/icons/IconUdemy.vue';
import IconEvent from '@/components/default/icons/IconEvent.vue';

// Create a reactive reference for isActive
const useSidebar = useSidebarStore()

let isVisible = computed(() => useSidebar.isShow);
let minibar = computed(() => useSidebar.isMinibar);

const sidebarClasses = computed(() => [
    isVisible.value ? 'top-0' : 'top-0',
    minibar.value ? 'w-16 pt-5' : 'w-56 pt-3'
]);

// Define a type for the dropdown keys
type DropdownKeys = 'materi-bacaan' | 'kelas-saya';
const dropdowns = reactive<Record<DropdownKeys, boolean>>({
    'materi-bacaan': false,
    'kelas-saya': false,
});

// Function to toggle dropdowns by key
const toggleDropdown = (key: DropdownKeys) => {
    dropdowns[key] = !dropdowns[key];
};

</script>
