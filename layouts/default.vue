<script setup lang="ts">
import Sidebar from 'components/layout/Sidebar.vue';
import Topbar from 'components/layout/Topbar.vue';
</script>

<template>
  <main class="bg-coal-H3 h-screen w-screen flex">
    <Sidebar />
    <div class="w-full">
      <Topbar />
      <slot />
    </div>
  </main>
</template>
