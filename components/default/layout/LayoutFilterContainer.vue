<template>
    <!-- Dropdown menu -->
    <div v-if="isFilterShow">
        <div :class="filterMenuClass"
            class="absolute z-30 bottom-0 md:hidden lg:hidden rounded-t-lg left-0 right-0 bg-black text-white divide-y shadow dark:bg-gray-800 dark:divide-gray-700">
            <div class="divide-y h-80 px-8 py-10 mb-8 mt-10 divide-gray-100 dark:divide-gray-700 overflow-scroll">
                <slot />
            </div>
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