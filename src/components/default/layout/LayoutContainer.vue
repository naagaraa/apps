<template>
    <div>
        <main>
            <section class="main mt-10" :class="[isVisible ? 'mt-16 md:mt-10' : 'mt-0']">
                <div :class="[
                    isVisible ? 'left-0 md:left-16' : 'left-56',
                    !islogin ? 'left-0 md:left-0' : 'left-56'
                ]"
                    class="relative top-3 mx-auto bg-slate-400 max-w-screen-xl px-4 py-24 md:py-32 h-3 lg:flex md:h-1 lg:items-center">
                    <div class="max-w-3xl text-start">
                        <p class="mx-auto pb-10 max-w-xl sm:text-xl/relaxed">
                        <h1 class="bg-clip-text text-black text-3xl font-extrabold sm:text-5xl">
                            Laravel
                        </h1>
                        Join the Laravel Newsletter and never miss
                        </p>
                    </div>
                </div>
                <div class="p-4" :class="[isVisible ? 'sm:ml-20 ' : 'sm:ml-64']">
                    <div :class="containerClassBase" class="p-4 ">
                        <slot />
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useAnnouncementStore } from '@/stores/useAnnouncementStore';
import { useSidebarStore } from '@/stores/useSidebarStore';
import { useAuthenticationStore } from '@/stores/auth/useAuthenticationStore';

const useAnnouncement = useAnnouncementStore()
const useSidebar = useSidebarStore()
const useAuthentication = useAuthenticationStore()

let isVisible = computed(() => useSidebar.isShow);
let announcement = computed(() => useAnnouncement.isShow)
let islogin = computed(() => useAuthentication.isAuth)
let containerClassBase = computed(() => [
    announcement.value ? 'mt-5 md:mt-16' : 'mt-0 md:mt-0'
])

</script>