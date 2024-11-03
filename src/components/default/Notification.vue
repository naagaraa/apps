<template>
    <div class="hidden md:flex items-center ms-3">
        <button id="dropdownNotificationButton" data-dropdown-toggle="dropdownNotification"
            class="relative inline-flex items-center text-sm font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none dark:hover:text-white dark:text-gray-400"
            type="button">
            <IconNotification />
            <div
                class="absolute block w-3 h-3 bg-red-500 border-2 border-white rounded-full -top-0.5 start-2.5 dark:border-gray-900">
            </div>
        </button>
        <DropDownNotification />
    </div>
</template>

<script lang="ts" setup>
import DropDownNotification from '@/components/default/dropdown/DropDownNotification.vue';
import IconNotification from '@/components/default/icons/IconNotification.vue';

</script>

<style></style>