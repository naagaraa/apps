<template>
    <Teleport to="#filter-menu-teleport-component">
        <BottomFilterMenu view-key="jobs" title="Filter Menu Jobs" />
    </Teleport>
    <h1 class="font-bold mb-10">Jobs List</h1>

</template>
<script setup lang="js">
import BottomFilterMenu from '@/components/default/bottom/BottomFilterMenu.vue'

useSeoMeta(
    {
        title: 'My Amazing Site',
        ogTitle: 'My Amazing Site',
        description: 'This is my amazing site, let me tell you all about it.',
        ogDescription: 'This is my amazing site, let me tell you all about it.',
        ogImage: 'https://example.com/image.png',
        twitterCard: 'summary_large_image',
    }
)


</script>