<template>
    <section class="bottom-navigation sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden">
        <div
            class="fixed bottom-0 left-0 z-20 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
            <div class="grid h-full max-w-lg grid-cols-5 mx-auto font-medium">
                <ButtonBottomMenu title="Home"
                    color="text-black-400 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                    <RouterLink :to="{
                        name: 'web.home'
                    }">
                        <IconDashboard color="black" size="w-4 h-4" />
                    </RouterLink>
                </ButtonBottomMenu>
                <ButtonBottomMenu title="Jobs"
                    color="text-gray-400 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                    <RouterLink :to="{
                        name: 'apps.jobs.index'
                    }">
                        <IconJobs color="gray" size="w-4 h-4" />
                    </RouterLink>
                </ButtonBottomMenu>
                <ButtonBottomMenu title="Event"
                    color="text-gray-400 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                    <RouterLink :to="{
                        name: 'apps.event.index'
                    }">
                        <IconTravel color="gray" size="w-4 h-4" />
                    </RouterLink>
                </ButtonBottomMenu>
                <ButtonBottomMenu title="Academy"
                    color="text-gray-400 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                    <RouterLink :to="{
                        name: 'apps.kelas.index'
                    }">
                        <IconMylearning color="gray" size="w-4 h-4" />
                    </RouterLink>
                </ButtonBottomMenu>
                <ButtonBottomMenu title="Profile"
                    color="text-gray-400 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                    <RouterLink :to="{
                        name: 'apps.profile.show',
                        params: {
                            id: 2
                        }
                    }">
                        <IconProfile color="gray" size="w-4 h-4" />
                    </RouterLink>
                </ButtonBottomMenu>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import ButtonBottomMenu from '@/components/default/button/ButtonBottomMenu.vue';
import IconDashboard from '@/components/default/icons/IconDashboard.vue';
import IconJobs from '@/components/default/icons/IconJobs.vue';
import IconMylearning from '@/components/default/icons/IconMylearning.vue';
import IconProfile from '@/components/default/icons/IconProfile.vue';
import IconTravel from '@/components/default/icons/IconTravel.vue';
</script>
