<template>
    <LayoutFilterContainer :view-key-container="props.viewKey">
        <p>{{ title }}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aperiam ex necessitatibus commodi architecto
            excepturi delectus quidem dolorum eaque, repudiandae minima eius vitae nisi porro, alias ullam ducimus!
            Magnam, architecto.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eius facilis blanditiis corporis consectetur
            laudantium, vel odio veniam fugiat aperiam ipsum dolore velit vitae delectus, quod provident esse quis.
            Aliquam!
            At fugiat cum minus voluptates neque repellendus pariatur, quia reiciendis ratione tenetur eaque
            exercitationem, ut vero sed molestiae explicabo libero impedit earum quasi quod. Repudiandae alias molestiae
            labore incidunt quidem?
            Unde sunt ipsa quos odio aperiam? Quia corrupti incidunt dolorem quae perspiciatis id et, velit accusamus
            temporibus magni asperiores eligendi doloremque? Enim mollitia adipisci iure voluptates sint. Consequuntur,
            fuga ab?</p>
    </LayoutFilterContainer>
</template>

<script setup lang="ts">
import LayoutFilterContainer from '@/components/default/layout/LayoutFilterContainer.vue';
const props = defineProps<{
    title: string,
    viewKey: string
}>()


// console.log(typeof props.viewKey);

</script>

<style></style>