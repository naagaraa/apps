<template>

    <div class="flex items-center justify-center">
        <!-- <ToogleTheme /> -->
        <FilterSearch />
        <Notification />
        <TopUserProfile>
            <DropDownUser name="Miyuki Nagara" email="yuki@gmail.com" />
        </TopUserProfile>
    </div>

</template>

<script lang="ts" setup>
import ToogleTheme from '@/components/default/ToogleTheme.vue';
import Notification from '@/components/default/Notification.vue';
import TopUserProfile from '@/components/default/TopUserProfile.vue';
import DropDownUser from '@/components/default/dropdown/DropDownUser.vue';
import FilterSearch from './FilterSearch.vue';

</script>

<style></style>