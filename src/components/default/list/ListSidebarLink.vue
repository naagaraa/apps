<template>
    <li :class="[
        border ? 'border-t' : ''
    ]">
        <RouterLink :to="{
            name: routeName
        }"
            class="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-900 dark:hover:bg-gray-700 group">
            <slot />
            <span class="flex-1 ms-3 whitespace-nowrap text-sm" :class="[
                minibar ? 'hidden' : ''
            ]">{{ title }}</span>
        </RouterLink>
    </li>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useSidebarStore } from '@/stores/useSidebarStore';


const useSidebar = useSidebarStore()
let minibar = computed(() => useSidebar.isMinibar);

interface props {
    title?: string
    routeName?: string
    border?: boolean
}
const props = defineProps<props>()

</script>

<style></style>