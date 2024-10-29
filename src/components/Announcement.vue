<template>
  <div class="bg-lime-400 px-3 py-3 lg:px-5 lg:pl-3 text-white">
    <p class="text-center text-black text-sm font-medium">
      {{ props.message }}
    </p>
  </div>
</template>
<script setup lang="ts">

interface props {
  message?: string
}

const props = defineProps<props>()
</script>