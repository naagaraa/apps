<!-- typescript code -->
<script setup lang="ts">
import CardMateri from '@/components/default/card/CardMateri.vue';
import CardTravel from '@/components/default/card/CardTravel.vue';
import BottomFilterMenu from '@/components/default/bottom/BottomFilterMenu.vue';
import HeaderEvent from './components/HeaderEvent.vue';
</script>


<!-- vue html code -->
<template>
    <Teleport to="#filter-menu-teleport-component">
        <BottomFilterMenu view-key="event" title="Filter Menu Event" />
    </Teleport>
    <header-event />
    <h1 class="font-bold mb-10">Event Post By Category</h1>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
        <CardTravel />
        <CardMateri title="SKD" category="CPNS,Kedinasan" />
    </div>
</template>
