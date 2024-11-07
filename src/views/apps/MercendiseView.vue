<script setup lang="ts">
import ListSlider from '@/components/default/list/ListSlider.vue';

let spaceBetween: 10
function onProgress(event: CustomEvent) {
    // Handle the swiperprogress event here
    console.log("Progress event triggered:", event.detail);
}
function onSlideChange(event: CustomEvent) {
    // Handle the swiperslidechange event here
    console.log("Slide changed:", event.detail);
}

</script>

<template>
    <div>
        <h1 class="font-bold mb-10">Mercendise</h1>
        <div class="w-3/6 border-t-2 border-l-2 border-r-2">
            <h2>Category A</h2>
            <list-slider>

            </list-slider>

        </div>
    </div>
</template>
