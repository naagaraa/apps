<template>
    <section class="bottom-navigation sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden">
        <div
            class="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
            <div class="grid h-full max-w-lg grid-cols-5 mx-auto font-medium">
                <ButtonBottomMenu title="Home">
                    <RouterLink :to="{
                        name: 'web.home'
                    }">
                        <IconDashboard color="gray" size="w-5 h-5" />
                    </RouterLink>
                </ButtonBottomMenu>
                <ButtonBottomMenu title="Jobs">
                    <RouterLink :to="{
                        name: 'apps.jobs.index'
                    }">
                        <IconJobs color="gray" size="w-5 h-5" />
                    </RouterLink>
                </ButtonBottomMenu>
                <ButtonBottomMenu title="Event">
                    <RouterLink :to="{
                        name: 'apps.event.index'
                    }">
                        <IconTravel color="gray" size="w-5 h-5" />
                    </RouterLink>
                </ButtonBottomMenu>
                <ButtonBottomMenu title="Academy">
                    <RouterLink :to="{
                        name: 'apps.kelas.index'
                    }">
                        <IconMylearning color="gray" size="w-5 h-5" />
                    </RouterLink>
                </ButtonBottomMenu>
                <ButtonBottomMenu title="Profile">
                    <RouterLink :to="{
                        name: 'apps.profile.show',
                        params: {
                            id: 2
                        }
                    }">
                        <IconProfile color="gray" size="w-5 h-5" />
                    </RouterLink>
                </ButtonBottomMenu>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import ButtonBottomMenu from '../button/ButtonBottomMenu.vue';
import IconDashboard from '../icons/IconDashboard.vue';
import IconJobs from '../icons/IconJobs.vue';
import IconMylearning from '../icons/IconMylearning.vue';
import IconProfile from '../icons/IconProfile.vue';
import IconTravel from '../icons/IconTravel.vue';
</script>
