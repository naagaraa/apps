<template>
  <h1 class="font-bold mb-10">News Letters By Apps</h1>
  <div class="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia porro neque eligendi quas consequuntur eius
      repudiandae assumenda distinctio possimus rerum laboriosam nihil id maxime inventore tempora consequatur dolor,
      veritatis natus!</p>
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