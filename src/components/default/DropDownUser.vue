<script setup lang="ts">
import ListDropdownUser from './list/ListDropdownUser.vue';

interface props {
    name?: string
    email?: string
}

const props = defineProps<props>()

</script>

<template>
    <div class="z-50 hidden my-4 text-base list-none bg-slate-100 divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600 w-2/12"
        id="dropdown-user">
        <div class="px-4 py-3" role="none">
            <p class="text-sm text-gray-900 dark:text-white" role="none">
                {{ props.name ?? "your name" }}
            </p>
            <p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                {{ props.email ?? "your mail" }}
            </p>
        </div>
        <ul class="py-1" role="none">
            <ListDropdownUser title="Akun Saya" />
            <ListDropdownUser title="Setelan" />
            <ListDropdownUser title="Bantuan" />
            <ListDropdownUser title="Keluar" />
        </ul>
    </div>
</template>