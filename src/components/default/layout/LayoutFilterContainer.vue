<template>
    <!-- Dropdown menu -->
    <div :class="filterMenuClass"
        class="absolute bottom-0 md:hidden lg:hidden rounded-lg left-0 right-0 bg-green-400 divide-y shadow dark:bg-gray-800 dark:divide-gray-700">
        <div class="divide-y px-8 py-10 mb-14 divide-gray-100 dark:divide-gray-700">
            <slot />
        </div>
    </div>

</template>

<script lang="js" setup>
import { useFilterMenuStore } from '@/stores/useFilterMenuStore';
import { computed } from 'vue';

const useFilterMenu = useFilterMenuStore()
let isFilterShow = computed(() => useFilterMenu.isShowFilterMenu)

const filterMenuClass = computed(() => [
    isFilterShow.value ? 'inline-block    ' : 'hidden'
]);


console.log(useFilterMenu);

</script>

<style></style>