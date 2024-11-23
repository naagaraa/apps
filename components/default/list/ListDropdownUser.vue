<template>
    <div>
        <li>
            <RouterLink :to="{
                name: 'index',
                params: {
                    id: 1
                }
            }" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                {{ props.title }}</RouterLink>
        </li>
    </div>
</template>

<script lang="ts" setup>
interface props {
    title?: string
}

const props = defineProps<props>()

</script>
