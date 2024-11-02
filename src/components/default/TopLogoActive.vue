<template>
    <div>
        <div class="w-5 flex md:flex items-center justify-start rtl:justify-end">
            <div class="text-center">
                <button
                    class="text-dark hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 "
                    type="button" @click="useSidebar.toggleSidebar()">
                    <IconToggle />
                </button>
            </div>
            <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse ml-3">
                <span class=" text-lime-400 self-center text-xl font-semibold sm:text-2xl whitespace-nowrap ">
                    UMERKA
                </span>
            </a>
        </div>
    </div>
</template>

<script lang="ts" setup>
import IconToggle from "@/components/default/icons/IconToggle.vue";
import { useSidebarStore } from '@/stores/useSidebarStore';
const useSidebar = useSidebarStore()

</script>

<style></style>