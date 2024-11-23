<template>
    <!-- Dropdown menu -->
    <div :class="filterMenuClass"
        class="absolute bottom-10 md:hidden rounded-lg left-0 right-0 bg-green-400 divide-y shadow dark:bg-gray-800 dark:divide-gray-700">
        <div class="divide-y px-8 py-10 divide-gray-100 dark:divide-gray-700">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus necessitatibus reprehenderit architecto
                eius voluptatibus alias exercitationem voluptate deserunt accusantium ipsum laboriosam, cum labore
                facilis voluptates rerum, iste ipsa, tempore consequatur!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus necessitatibus reprehenderit architecto
                eius voluptatibus alias exercitationem voluptate deserunt accusantium ipsum laboriosam, cum labore
                facilis voluptates rerum, iste ipsa, tempore consequatur!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus necessitatibus reprehenderit architecto
                eius voluptatibus alias exercitationem voluptate deserunt accusantium ipsum laboriosam, cum labore
                facilis voluptates rerum, iste ipsa, tempore consequatur!</p>
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


</script>

<style></style>