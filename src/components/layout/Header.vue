<script setup lang="ts">
import { ref } from 'vue'

import logo from "@/assets/logo.png"
import TopNavigation from '@/components/TopNavigation.vue';
import DropDownUser from '@/components/DropDownUser.vue';
import SideBar from "@/components/SideNavigation.vue";

const minibar = ref(false);
</script>

<template>


    <SideBar />
    <nav :class="[
        minibar ? 'left-16' : 'left-56'
    ]" class="fixed right-0 top-0 z-50  bg-green-100 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <!-- pengumuman -->
        <!-- <Announcement /> -->
        <!-- end pengumuman -->
        <div class="px-3 py-3 lg:px-5 lg:pl-3">
            <div class="flex flex-wrap items-center justify-between">
                <div class="flex items-center justify-start rtl:justify-end">
                    <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar"
                        aria-controls="logo-sidebar" type="button"
                        class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                        <span class="sr-only">Open sidebar</span>
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path clip-rule="evenodd" fill-rule="evenodd"
                                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
                            </path>
                        </svg>
                    </button>
                    <div class="text-center">
                        <button
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                            type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation"
                            aria-controls="drawer-navigation">
                            Show navigation
                        </button>
                    </div>
                    <a href="#" class="flex ms-2 md:me-24">
                        <img :src="logo" class="h-8 me-3" alt="apps Logo" />
                        <span
                            class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white"></span>
                    </a>
                </div>
                <!-- <TopNavigation /> -->
                <div class="flex items-center">
                    <div class="flex items-center ms-3">
                        <div>
                            <button type="button"
                                class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                                aria-expanded="false" data-dropdown-toggle="dropdown-user">
                                <span class="sr-only">Open user menu</span>
                                <img class="w-8 h-8 rounded-full"
                                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                    alt="user photo">
                            </button>
                        </div>
                        <DropDownUser />
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>