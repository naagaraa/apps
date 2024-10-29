<template>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
            class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <ListTopNavigation title="Home" />
            <ListTopNavigation title="Academy" />
            <ListTopNavigation title="Event" />
            <ListTopNavigation title="Jobs" />
            <ListTopNavigation title="Mercendise" />
        </ul>
    </div>
</template>
<script setup lang="ts">
import ListTopNavigation from './list/ListTopNavigation.vue';
</script>
