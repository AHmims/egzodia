<script setup lang="ts">
import TabGroup from 'components/layout/partials/TabGroup.vue';
</script>

<template>
  <div class="w-[18rem] bg-coal-H3 h-screen right-border">
    <div class="w-full flex items-center justify-between p-6 bottom-border">
      <NuxtLink to="/" class="flex items-center">
        <div class="p-[0.375rem] bg-coal-H2 rounded-3">
          <img src="~/assets/logos/ah.svg" alt="Ali HMIMS logo" class="w-7 h-7 select-none" draggable="false">
        </div>
        <div class="flex flex-col font-sans ml-4">
          <span class="text-md text-coal-l1">Sidi 3li</span>
          <span class="text-xs text-coal-L2">Ali HMIMS</span>
        </div>
      </NuxtLink>
      <i i-twemoji:speech-balloon />
    </div>
    <div class="w-full p-6 flex flex-col">
      <TabGroup />
    </div>
  </div>
</template>
