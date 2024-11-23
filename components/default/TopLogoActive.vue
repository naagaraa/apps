<template>

    <!-- when login -->
    <div v-if="islogin" class="w-auto hidden md:flex items-center justify-start rtl:justify-end">
        <div class="text-center">
            <button
                class="text-dark pt-2 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 "
                type="button" @click="useSidebar.toggleSidebar()">
                <IconToggle />
            </button>
        </div>
    </div>

    <!-- when is not login -->
    <div v-if="!islogin" class="w-auto hidden md:flex items-center justify-start rtl:justify-end">
        <div class="text-center">
            <button
                class="text-dark pt-2 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 "
                type="button">
            </button>
        </div>
    </div>

</template>

<script lang="ts" setup>
import { computed } from "vue";
import IconToggle from "@/components/default/icons/IconToggle.vue";
import { useSidebarStore } from '@/stores/useSidebarStore';
import { useAuthenticationStore } from "@/stores/auth/useAuthenticationStore";

const useSidebar = useSidebarStore();
const useAuth = useAuthenticationStore();

let islogin = computed(() => useAuth.isAuth);

</script>

<style></style>