<script setup lang="ts">
defineProps({
  title: String,
});
</script>

<template>
  <div>
    <span class="block px-[0.875rem] text-sm text-coal-L2 mb-[0.875rem] select-none">{{ title }}</span>
    <div class="space-y-[0.125rem]">
      <slot />
    </div>
  </div>
</template>
