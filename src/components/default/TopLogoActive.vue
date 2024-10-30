<template>
    <div>
        <div class="hidden w-5 md:flex items-center justify-start rtl:justify-end">
            <div class="text-center">
                <button
                    class="text-dark hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 "
                    type="button" @click="useSidebar.toggleSidebar()">
                    <IconToggle />
                </button>
            </div>
            <a href="#" class="flex ms-2 md:me-24">
                <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white"></span>
            </a>
        </div>
    </div>
</template>

<script lang="ts" setup>
import IconToggle from "@/components/default/icons/IconToggle.vue";
import { useSidebarStore } from '@/stores/useSidebarStore';
import { computed, ref } from 'vue';

const useSidebar = useSidebarStore()

let minibar = computed(() => useSidebar.isMinibar);
let isLoggin = ref(false)
</script>

<style></style>