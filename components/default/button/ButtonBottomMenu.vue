<template>
    <button type="button"
        class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
        <slot />
        <span :class="color" class="text-sm ">{{
            title }}</span>
    </button>
</template>

<script lang="ts" setup>

withDefaults(
    defineProps<{
        title?: string
        color?: string
    }>(), {
    color: 'text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500',
    title: 'title'
})

</script>

<style></style>