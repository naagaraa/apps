<template>
    <button type="button"
        class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
        <slot />
        <span
            class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">{{
            title }}</span>
    </button>
</template>

<script lang="ts" setup>

defineProps<{
    title?: string
}>()

</script>

<style></style>