<template>
  <h1 class="font-bold mb-10">Academy main</h1>
  <div class="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
    <CardDefault />
    <CardTravel />
    <CardMateri title="SKD" category="CPNS,Kedinasan" />
  </div>
</template>

<script setup lang="ts">
import CardDefault from '@/components/default/card/CardDefault.vue';
import CardMateri from '@/components/default/card/CardMateri.vue';
import CardTravel from '@/components/default/card/CardTravel.vue';
</script>
