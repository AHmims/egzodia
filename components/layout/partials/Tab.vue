<script setup lang="ts">
defineProps({
  path: String,
  icon: String,
  title: String,
});
const route = useRoute();
</script>

<template>
  <div class="w-full bg-coal-H3 rounded-2 text-coal-L2 hover:bg-coal-H1 transition-colors duration-150" :class="{ 'bg-coal-L3': path === route.path }">
    <NuxtLink :to="path" class="flex items-center px-[14px] py-3" :class="{ 'text-coal-L1 bg-text-coal-L3': path === route.path }">
      <i class="fill-current w-6 h-6" :class="icon" />
      <span class="ml-3 text-current text-sm font-600 font-sans">{{ title }}</span>
    </NuxtLink>
  </div>
</template>
