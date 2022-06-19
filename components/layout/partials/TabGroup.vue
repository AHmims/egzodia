<script setup lang="ts">
import Tab from 'components/layout/partials/Tab.vue';
</script>

<template>
  <div class="space-y-[0.125rem]">
    <Tab path="/" icon="i-tabler:home" title="Overview" />
    <Tab path="/blog" icon="i-tabler:book-2" title="Blog" />
    <Tab path="/projects" icon="i-tabler:folder" title="Projects" />
  </div>
</template>
