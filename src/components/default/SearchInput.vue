<template>
    <div class="md:hidden">
        <div class="flex items-center space-x-3 rtl:space-x-reverse">
            <span class=" text-lime-400 self-center text-xl font-semibold sm:text-2xl whitespace-nowrap ">
                <div>
                    <label for="simple-search" class="sr-only">Search</label>
                    <div class="relative w-full">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <IconSearch />
                        </div>
                        <input type="text" id="simple-search"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search anything ..." required />
                    </div>
                </div>
            </span>
        </div>
    </div>
</template>

<script lang="ts" setup>
import IconSearch from '@/components/default/icons/IconSearch.vue';


</script>

<style></style>