<template>
    <div>
        <li>
            <a href="#"
                class="flex text-sm  text-smitems-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-gray-900 dark:text-white dark:hover:bg-gray-700">
                {{ title }}</a>
        </li>
    </div>
</template>

<script lang="ts" setup>
interface props {
    title?: string
}

const props = defineProps<props>()

// Destructure props for easier access in the template
const { title } = props;
</script>
