<template>
    <svg :style="{ fill: color }" :class="size"
        class="w-4 h-4 text-white transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <path
            d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z" />
    </svg>
</template>
<script setup lang="ts">
withDefaults(
    defineProps<{
        color?: string
        size?: string
    }>(), {
    color: 'black',
    size: 'w-4 h-4'
})
</script>