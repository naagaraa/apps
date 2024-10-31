<template>
    <div class="hidden w-full md:flex md:w-auto" id="navbar-default">
        <ul
            class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <ListTopNavigation title="Academy" routeName="web.home" />
            <ListTopNavigation title="News Latters" routeName="web.news-letter" />
            <ListTopNavigation title="Event" routeName="web.event" />
            <ListTopNavigation title="Jobs" routeName="web.jobs" />
            <ListTopNavigation title="Mercendise" routeName="web.mercendise" />
        </ul>
    </div>
</template>
<script setup lang="ts">
import ListTopNavigation from '@/components/default/list/ListTopNavigation.vue';
</script>
