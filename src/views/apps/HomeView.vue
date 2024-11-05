<template>
  <Teleport to="#banner-header-teleport-component">
    <BannerHeader title="Beranda" description="Increase Your bussiness" />
  </Teleport>
  <Teleport to="#filter-menu-teleport-component">
    <BottomFilterMenu title="Filter Menu Beranda" />
  </Teleport>
  <h1 class="font-bold mb-10">Academy main</h1>
  <div class="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
    <CardTravel />
    <CardMateri title="SKD" category="CPNS,Kedinasan" />
  </div>
</template>

<script setup lang="js">
import BannerHeader from '@/components/default/BannerHeader.vue';
import CardMateri from '@/components/default/card/CardMateri.vue';
import CardTravel from '@/components/default/card/CardTravel.vue';
import BottomFilterMenu from '@/components/default/Bottom/BottomFilterMenu.vue'
</script>
