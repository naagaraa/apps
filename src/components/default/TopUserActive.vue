<template>
    <div>
        <div class="flex items-center">
            <div class="flex items-center ms-3">
                <button @click="toggleTheme" id="theme-toggle">
                    <span v-if="isDarkMode" id="theme-toggle-light-icon">🌞</span>
                    <span v-else id="theme-toggle-dark-icon">🌜</span>
                </button>
            </div>

            <div class="flex items-center ms-3">
                <button id="dropdownNotificationButton" data-dropdown-toggle="dropdownNotification"
                    class="relative inline-flex items-center text-sm font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none dark:hover:text-white dark:text-gray-400"
                    type="button">
                    <IconNotification />

                    <div
                        class="absolute block w-3 h-3 bg-red-500 border-2 border-white rounded-full -top-0.5 start-2.5 dark:border-gray-900">
                    </div>
                </button>
                <Notification />
            </div>
            <div class="flex items-center ms-3">
                <div>
                    <button type="button"
                        class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                        aria-expanded="false" data-dropdown-toggle="dropdown-user">
                        <span class="sr-only">Open user menu</span>
                        <img class="w-8 h-8 rounded-full"
                            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo">
                    </button>
                </div>
                <slot />
            </div>
        </div>
    </div>
</template>

<script lang="js" setup>
import Notification from '@/components/default/Notification.vue';
import { ref, onMounted, watch } from 'vue';
import IconNotification from '@/components/default/icons/IconNotification.vue';

const isDarkMode = ref(false);

// Check initial theme from localStorage or prefers-color-scheme
onMounted(() => {
    const storedTheme = localStorage.getItem('color-theme');
    if (storedTheme) {
        isDarkMode.value = storedTheme === 'dark';
    } else {
        isDarkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    applyTheme();
});

// Watch for changes in `isDarkMode` and apply the theme accordingly
watch(isDarkMode, applyTheme);

function toggleTheme() {
    isDarkMode.value = !isDarkMode.value;
    localStorage.setItem('color-theme', isDarkMode.value ? 'dark' : 'light');
}

function applyTheme() {
    if (isDarkMode.value) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}
</script>

<style></style>