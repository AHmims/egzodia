<script setup lang="ts">
import Sidebar from 'components/layout/Sidebar.vue';
</script>

<template>
  <main class="bg-coal-H3 h-screen w-screen flex">
    <Sidebar />
    <div>
      <slot />
    </div>
  </main>
</template>
