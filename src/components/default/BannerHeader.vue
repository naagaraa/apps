<template>
    <div class="top-3 bg-slate-400 px-4 py-24 md:py-32 h-3 lg:flex md:h-1 lg:items-center">
        <div :class="HeaderClassBase" class="text-start">
            <div class="pb-10">
                <h1 class="mt-5 md:mt-10 bg-clip-text text-black text-3xl font-extrabold">
                    {{ title }}
                </h1>
                <p>
                    {{ description }}
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useSidebarStore } from '@/stores/useSidebarStore';
import { useAuthenticationStore } from '@/stores/auth/useAuthenticationStore';

const useSidebar = useSidebarStore()
const useAuthentication = useAuthenticationStore()

let isVisible = computed(() => useSidebar.isShow);
let islogin = computed(() => useAuthentication.isAuth)
let HeaderClassBase = computed(() => [
    isVisible.value ? 'ml-0 md:ml-16' : '',
    !islogin.value ? 'ml-0 md:ml-0' : ''
])

interface props {
    title?: string
    description?: string
}

defineProps<props>()
</script>

<style></style>