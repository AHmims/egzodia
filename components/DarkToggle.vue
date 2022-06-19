<script lang="ts" setup>
const color = useColorMode();

function toggleDark() {
  color.preference = color.value === 'dark' ? 'light' : 'dark';
}
</script>

<template>
  <div class="flex items-center p-1 bg-coal-H4 rounded-full border-1 border-coal-H1 relative">
    <button :disabled="color.preference !== 'dark'" class="w-12 h-8 rounded-full flex items-center justify-center text-coal-L1 dark:text-coal-L3 transition-colors duration-100 z-1" @click="toggleDark()">
      <i i-tabler:sun class="w-6 h-6 fill-current" />
    </button>
    <button :disabled="color.preference === 'dark'" class="w-12 h-8 rounded-full flex items-center justify-center text-coal-L3 dark:text-coal-L1 transition-colors duration-100 z-1" @click="toggleDark()">
      <i i-tabler:moon-stars class="w-6 h-6 fill-current" />
    </button>
    <div ref="toggleHighliter" class="absolute w-12 h-8 bg-coal-L4 wtf-shadow rounded-full left-1 top-1 transition-transform duration-150" :class="{ 'translate-x-12': color.preference === 'dark' }" />
  </div>
</template>
