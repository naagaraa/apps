<template>
    <LayoutFilterContainer :view-key-container="props.viewKey">
        <p>{{ title }}</p>
    </LayoutFilterContainer>
</template>

<script setup lang="ts">
import LayoutFilterContainer from '@/components/default/layout/LayoutFilterContainer.vue';
const props = defineProps<{
    title: string,
    viewKey: string
}>()


// console.log(typeof props.viewKey);

</script>

<style></style>