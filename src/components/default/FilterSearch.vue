<template>
    <!-- Dropdown menu -->
    <div class="md:hidden items-center mx-5 my-3">
        <button @click="useFilterMenu.toggleFilterMenu()"
            class="relative right-0inline-flex items-center text-sm font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none dark:hover:text-white dark:text-gray-400"
            type="button">
            <IconFIlterSearch />
        </button>

    </div>
</template>

<script lang="js" setup>
import IconFIlterSearch from './icons/IconFIlterSearch.vue';
import { useFilterMenuStore } from '@/stores/useFilterMenuStore';

let useFilterMenu = useFilterMenuStore()
</script>

<style></style>