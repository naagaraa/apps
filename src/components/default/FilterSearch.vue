<template>
    <!-- Dropdown menu -->
    <div class="md:hidden items-center mx-5 my-3">
        <button id="dropdownFilterSearchButton" data-dropdown-toggle="dropdownFilterSearch"
            class="relative right-0inline-flex items-center text-sm font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none dark:hover:text-white dark:text-gray-400"
            type="button">
            <IconFIlterSearch />
        </button>
        <DropDownFilterSearch />
    </div>
</template>

<script lang="ts" setup>
import DropDownFilterSearch from './dropdown/DropDownFilterSearch.vue';
import IconFIlterSearch from './icons/IconFIlterSearch.vue';

</script>

<style></style>