<template>
    <Teleport to="#filter-menu-teleport-component">
        <BottomFilterMenu view-key="jobs" title="Filter Menu Jobs" />
    </Teleport>
    <h1 class="font-bold mb-10">Jobs List</h1>

</template>
<script setup lang="js">
import BottomFilterMenu from '@/components/default/Bottom/BottomFilterMenu.vue'
</script>