<script setup lang="ts">
import TabGroup from 'components/layout/partials/TabGroup.vue';
import Tab from 'components/layout/partials/Tab.vue';
</script>

<template>
  <div class="w-[18rem] bg-coal-H3 h-screen right-border">
    <div class="w-full flex items-center justify-between p-6 bottom-border">
      <NuxtLink to="/" class="flex items-center">
        <div class="p-[0.375rem] bg-coal-H2 rounded-3">
          <img src="~/assets/logos/ah.svg" alt="Ali HMIMS logo" class="w-7 h-7 select-none" draggable="false">
        </div>
        <div class="flex flex-col font-sans ml-4">
          <span class="text-md text-coal-L1">Sidi 3li</span>
          <span class="text-xs text-coal-L2">Ali HMIMS</span>
        </div>
      </NuxtLink>
      <i i-twemoji:speech-balloon w-6 h-6 />
    </div>
    <div class="w-full p-6 flex flex-col space-y-6">
      <TabGroup title="Main menu">
        <Tab path="/" icon="i-tabler:home" title="Overview" />
        <Tab path="/blog" icon="i-tabler:book-2" title="Blog" />
        <Tab path="/projects" icon="i-tabler:folder" title="Projects" />
      </TabGroup>
      <hr bottom-border border-t-0 class="mx-[0.875rem] h-[0.125rem]">
      <TabGroup title="Playground">
        <Tab path="/solder" icon="i-tabler:shopping-cart" title="Solder" />
        <Tab path="/love-notes" icon="i-tabler:note" title="Live notes" />
      </TabGroup>
    </div>
  </div>
</template>
