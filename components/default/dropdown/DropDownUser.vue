<template>
    <div class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 md:w-2/12"
        id="dropdown-user">
        <div class="px-4 py-3" role="none">
            <p class="text-sm text-gray-900 dark:text-white" role="none">
                {{ name ?? "your name" }}
            </p>
            <p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                {{ email ?? "your mail" }}
            </p>
        </div>
        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" role="none">
            <ListDropdownUser title="Akun Saya" />
            <ListDropdownUser title="Setelan" />
            <ListDropdownUser title="Bantuan" />
            <ListDropdownUser title="Keluar" />
        </ul>
    </div>
</template>

<script setup lang="ts">
import ListDropdownUser from '@/components/default/list/ListDropdownUser.vue';

interface props {
    name?: string
    email?: string
}

const props = defineProps<props>()

</script>