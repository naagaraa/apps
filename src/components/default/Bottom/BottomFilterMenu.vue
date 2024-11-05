<template>
    <LayoutFilterContainer>
        <p>{{ title }}</p>
    </LayoutFilterContainer>
</template>

<script lang="js" setup>
import LayoutFilterContainer from '@/components/default/layout/LayoutFilterContainer.vue';

defineProps({
    title: String
})

</script>

<style></style>