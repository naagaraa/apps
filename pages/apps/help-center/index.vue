<template>
    <h1 class="font-bold mb-10">Help Center main</h1>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
        <p>helo center</p>
    </div>
</template>

<script setup lang="ts">
import CardMateri from '@/components/default/card/CardMateri.vue';
import CardTravel from '@/components/default/card/CardTravel.vue';

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