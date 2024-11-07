<template>
  <swiper-container
    :slides-per-view="3"
    :space-between="spaceBetween"
    :centered-slides="true"
    :pagination="{
      hideOnClick: true,
    }"
    :breakpoints="{
      768: {
        slidesPerView: 3,
      },
    }"
    @swiperprogress="onProgress"
    @swiperslidechange="onSlideChange"
  >
    <div slot="container-start">Header</div>
    <div slot="container-end">Footer</div>

    <swiper-slide v-for="item in items" :key="item.id">
      {{ item.name }}
    </swiper-slide>
  </swiper-container>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    items?: any[]
  }>(),
  {
    items: () => [
      {
        id: 1,
        name: 'eka',
      },
      {
        id: 2,
        name: 'salsa',
      },
    ],
  },
)
let spaceBetween: 10
function onProgress(event: CustomEvent) {
  // Handle the swiperprogress event here
  console.log('Progress event triggered:', event.detail)
}
function onSlideChange(event: CustomEvent) {
  // Handle the swiperslidechange event here
  console.log('Slide changed:', event.detail)
}
</script>

<style></style>
