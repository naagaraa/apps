<template>
    <div>
        <h1 class="font-bold mb-10">Mercendise</h1>
        <div class="w-3/6 border-t-2 border-l-2 border-r-2">
            <h2>Category A</h2>
            <swiper-container :slides-per-view="3" :space-between="spaceBetween" :centered-slides="true" :pagination="{
                hideOnClick: true
            }" :breakpoints="{
                768: {
                    slidesPerView: 3,
                },
            }" @swiperprogress="onProgress" @swiperslidechange="onSlideChange">

                <div slot="container-start">Rendered before wrapper</div>
                <div slot="container-end">Rendered after wrapper</div>
                <swiper-slide>Slide 1</swiper-slide>
                <swiper-slide>Slide 2</swiper-slide>
                <swiper-slide>Slide 3</swiper-slide>
            </swiper-container>
            <h2>Category B</h2>
            <swiper-container :slides-per-view="3" :space-between="spaceBetween" :centered-slides="true" :pagination="{
                hideOnClick: true
            }" :breakpoints="{
                768: {
                    slidesPerView: 3,
                },
            }" @swiperprogress="onProgress" @swiperslidechange="onSlideChange">
                <swiper-slide>Slide 1</swiper-slide>
                <swiper-slide>Slide 2</swiper-slide>
                <swiper-slide>Slide 3</swiper-slide>
            </swiper-container>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            spaceBetween: 10, // or any default value
        };
    },
    methods: {
        onProgress(event: CustomEvent) {
            // Handle the swiperprogress event here
            console.log("Progress event triggered:", event.detail);
        },
        onSlideChange(event: CustomEvent) {
            // Handle the swiperslidechange event here
            console.log("Slide changed:", event.detail);
        }
    }
});

</script>
>
