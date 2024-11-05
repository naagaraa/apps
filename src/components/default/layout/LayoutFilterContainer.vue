<template>
    <!-- Dropdown menu -->
    <div :class="filterMenuClass"
        class="absolute bottom-0 md:hidden lg:hidden rounded-lg left-0 right-0 bg-green-400 divide-y shadow dark:bg-gray-800 dark:divide-gray-700">
        <div class="divide-y px-8 py-10 mb-14 divide-gray-100 dark:divide-gray-700">
            <slot />
        </div>
    </div>

</template>

<script lang="ts" setup>
import { useFilterMenuStore } from '@/stores/useFilterMenuStore';
import { computed, watch } from 'vue';

const props = defineProps<{
    viewKeyContainer: string
}>()

const useFilterMenu = useFilterMenuStore()

let isFilterShow = computed(() => useFilterMenu.isShowFilterMenu)


watch(
    () => props.viewKeyContainer,
    (newViewKey) => {
        // value change on change view components
        console.log(newViewKey);

        // update key store
        useFilterMenu.applyKey(newViewKey);
        // isFilterShow.value = useFilterMenu.isShowFilterMenu;
    },
    {
        immediate: true
    }
)


const filterMenuClass = computed(() => [
    isFilterShow.value ? 'inline-block' : 'hidden'
]);


</script>

<style></style>