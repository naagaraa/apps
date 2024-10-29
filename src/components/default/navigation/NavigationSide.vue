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
                        <svg style="fill: white;"
                            class="w-4 h-4 text-white transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                            <path
                                d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                        </svg>
                        <span class="ms-3 text-sm" :class="[
                            minibar ? 'hidden' : ''
                        ]">Dashboard</span>
                    </a>
                </li>
                <li class="border-t pt-5 border-gray-200 dark:border-gray-700">
                    <button type="button"
                        class="flex items-center w-full p-2 text-base text-white transition duration-75 rounded-lg group hover:bg-gray-900 dark:text-white dark:hover:bg-gray-700"
                        aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                        <IconMylearning />
                        <span class="text-sm flex-1 ms-3 text-left rtl:text-right whitespace-nowrap" :class="[
                            minibar ? 'hidden' : ''
                        ]">Kelas</span>
                        <svg class="w-3 h-3" :class="[
                            minibar ? 'hidden' : ''
                        ]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 1 4 4 4-4" />
                        </svg>
                    </button>
                    <ul id="dropdown-example" class="hidden py-2 space-y-2" :class="[
                        minibar ? 'hidden' : ''
                    ]">
                        <li>
                            <a href="#"
                                class="flex text-sm items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-gray-900 dark:text-white dark:hover:bg-gray-700">Kelas
                                Tersedia</a>
                        </li>
                        <li>
                            <a href="#"
                                class="flex text-sm items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-gray-900 dark:text-white dark:hover:bg-gray-700">Latihan
                                Belajar</a>
                        </li>
                        <li>
                            <a href="#"
                                class="flex text-sm items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-gray-900 dark:text-white dark:hover:bg-gray-700">Progress
                                Belajar</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <button type="button"
                        class="flex items-center w-full p-2 text-base text-white transition duration-75 rounded-lg group hover:bg-gray-900 dark:text-white dark:hover:bg-gray-700"
                        aria-controls="dropdown-example" data-collapse-toggle="materi-bacaan">
                        <IconMateri />
                        <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap text-sm" :class="[
                            minibar ? 'hidden' : ''
                        ]">Materi
                            Bacaan</span>
                        <svg class="w-3 h-3" :class="[
                            minibar ? 'hidden' : ''
                        ]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 1 4 4 4-4" />
                        </svg>
                    </button>
                    <ul id="materi-bacaan" class="hidden py-2 space-y-2" :class="[
                        minibar ? 'hidden' : ''
                    ]">
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
import { computed } from 'vue';
import ListDropdownSideMenu from '@/components/default/list/ListDropdownSideMenu.vue';
import IconMylearning from '@/components/default/icons/IconMylearning.vue';
import IconTryout from '@/components/default/icons/IconTryout.vue';
import IconPaketBelajar from '@/components/default/icons/IconPaketBelajar.vue';
import IconLainnya from '@/components/default/icons/IconLainnya.vue';
import IconMateri from '@/components/default/icons/IconMateri.vue';
import IconHelpCenter from '@/components/default/icons/IconHelpCenter.vue';

// Create a reactive reference for isActive
const useSidebar = useSidebarStore()

let isVisible = computed(() => useSidebar.isShow);
let minibar = computed(() => useSidebar.isMinibar);

</script>
