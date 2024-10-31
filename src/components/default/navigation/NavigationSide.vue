<template>
    <aside id="logo-sidebar"
        class="fixed left-0 z-40 h-screen  transition-transform -translate-x-full bg-black border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        :class="[
            isVisible ? 'top-0' : 'top-0',
            minibar ? 'w-16 pt-16' : 'w-56 pt-20'
        ]">

        <div
            class="scrollbar-thin scrollbar-thumb-slate-500 scrollbar-track-slate-800 h-full px-3 pb-4 overflow-y-auto bg-black dark:bg-gray-800">
            <ul class="space-y-2 font-medium">
                <li>
                    <a href="#" class="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-900 dark:hover:bg-gray-700
                        group">
                        <iconDashboard />
                        <span class="ms-3 text-sm" :class="[
                            minibar ? 'hidden' : ''
                        ]">Dashboard</span>
                    </a>
                </li>
                <li class="border-t pt-5 border-gray-200 dark:border-gray-700">
                    <div v-if="minibar">
                        <button type="button"
                            class="flex items-center w-full p-2 text-base text-white transition duration-75 rounded-lg group hover:bg-gray-900 dark:text-white dark:hover:bg-gray-700">
                            <IconMylearning />
                            <span class="text-sm flex-1 ms-3 text-left rtl:text-right whitespace-nowrap" :class="[
                                minibar ? 'hidden' : ''
                            ]">Kelas</span>
                        </button>
                    </div>
                    <div v-else>
                        <button type="button" @click="toggleDropdown('kelas-saya')"
                            class="flex items-center w-full p-2 text-base text-white transition duration-75 rounded-lg group hover:bg-gray-900 dark:text-white dark:hover:bg-gray-700">
                            <IconMylearning />
                            <span class="text-sm flex-1 ms-3 text-left rtl:text-right whitespace-nowrap" :class="[
                                minibar ? 'hidden' : ''
                            ]">Kelas</span>
                            <svg class="w-3 h-3" :class="[
                                minibar ? 'hidden' : ''
                            ]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </button>
                    </div>
                    <ul v-if="dropdowns['kelas-saya']" class="py-2 space-y-2" :class="[minibar ? 'hidden' : '']">
                        <ListDropdownSideMenu title="Kelas Tersedia" />
                        <ListDropdownSideMenu title="Latihan Belajar" />
                        <ListDropdownSideMenu title="Progress Belajar" />
                    </ul>
                </li>
                <li>
                    <div v-if="minibar">
                        <button type="button"
                            class="flex items-center w-full p-2 text-base text-white transition duration-75 rounded-lg group hover:bg-gray-900 dark:text-white dark:hover:bg-gray-700">
                            <IconMateri />
                            <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap text-sm"
                                :class="[minibar ? 'hidden' : '']">Materi Bacaan</span>
                        </button>
                    </div>
                    <div v-else>
                        <button type="button" @click="toggleDropdown('materi-bacaan')"
                            class="flex items-center w-full p-2 text-base text-white transition duration-75 rounded-lg group hover:bg-gray-900 dark:text-white dark:hover:bg-gray-700">
                            <IconMateri />
                            <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap text-sm"
                                :class="[minibar ? 'hidden' : '']">Materi Bacaan</span>
                            <svg class="w-3 h-3" :class="[minibar ? 'hidden' : '']" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </button>
                    </div>
                    <ul v-if="dropdowns['materi-bacaan']" class="py-2 space-y-2" :class="[minibar ? 'hidden' : '']">
                        <ListDropdownSideMenu title="SKD" />
                        <ListDropdownSideMenu title="TIU" />
                        <ListDropdownSideMenu title="TKP" />
                        <ListDropdownSideMenu title="Psikotest" />
                    </ul>
                </li>
                <li>
                    <a href="#"
                        class="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-900 dark:hover:bg-gray-700 group">
                        <IconPaketBelajar />
                        <span class="flex-1 ms-3 whitespace-nowrap text-sm" :class="[
                            minibar ? 'hidden' : ''
                        ]">Beli Kelas</span>
                    </a>
                </li>
                <li>
                    <a href="#"
                        class="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-900 dark:hover:bg-gray-700 group">
                        <IconTryout />
                        <span class="flex-1 ms-3 whitespace-nowrap text-sm" :class="[
                            minibar ? 'hidden' : ''
                        ]">Tryout</span>
                    </a>
                </li>
                <li class="border-t border-gray-200 dark:border-gray-700">
                    <a href="#"
                        class="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-900 dark:hover:bg-gray-700 group">
                        <IconLainnya />
                        <span class="flex-1 ms-3 whitespace-nowrap text-sm" :class="[
                            minibar ? 'hidden' : ''
                        ]">Lainnya</span>
                    </a>
                </li>
                <li>
                    <a href="#"
                        class="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-900 dark:hover:bg-gray-700 group">
                        <IconHelpCenter />
                        <span class="flex-1 ms-3 whitespace-nowrap text-sm" :class="[
                            minibar ? 'hidden' : ''
                        ]">Help Center</span>
                    </a>
                </li>
            </ul>
        </div>
    </aside>
</template>

<script setup lang="ts">
import { useSidebarStore } from '@/stores/useSidebarStore';
import { computed, reactive } from 'vue';
import ListDropdownSideMenu from '@/components/default/list/ListDropdownSideMenu.vue';
import IconMylearning from '@/components/default/icons/IconMylearning.vue';
import IconTryout from '@/components/default/icons/IconTryout.vue';
import IconPaketBelajar from '@/components/default/icons/IconPaketBelajar.vue';
import IconLainnya from '@/components/default/icons/IconLainnya.vue';
import IconMateri from '@/components/default/icons/IconMateri.vue';
import IconHelpCenter from '@/components/default/icons/IconHelpCenter.vue';
import iconDashboard from '@/components/default/icons/IconDashboard.vue';

// Create a reactive reference for isActive
const useSidebar = useSidebarStore()

let isVisible = computed(() => useSidebar.isShow);
let minibar = computed(() => useSidebar.isMinibar);

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
