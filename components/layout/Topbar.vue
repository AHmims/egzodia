<script lang="ts" setup>
</script>

<template>
  <div class="h-[5.625rem] px-[2.875rem] w-full flex items-center bg-coal-H3 bottom-border">
    <div class="text-coal-L2 w-full flex items-center">
      <i i-tabler:search class="fill-current w-5 h-5 mr-[14px]" />
      <input type="text" value="" placeholder="What are you looking for?" class="bg-transparent text-current w-full placeholder:text-current focus:outline-none">
    </div>

    <div class="flex items-center space-x-6 h-10">
      <div class="flex items-center space-x-6">
        <DarkToggle />
        <button class="relative">
          <i i-tabler:news class="block text-coal-L2" />
          <span class="flex items-center justify-center absolute rounded-full bg-coal-L1 text-coal-H3 right-0 top-0 w-[12px] h-[12px] text-tiny font-700 border-2 border-coal-H3 box-content">3</span>
        </button>
      </div>
      <div class="h-full w-[2px] right-border" />
      <div class="flex items-center text-coal-L2 space-x-6">
        <a href="/" i-tabler:brand-twitter class="w-6 h-6 fill-current transition-colors duration-100 hover:text-coal-L1" />
        <a href="/" i-tabler:brand-linkedin class="w-6 h-6 fill-current transition-colors duration-100 hover:text-coal-L1" />
        <a href="/" i-tabler:brand-github class="w-6 h-6 fill-current transition-colors duration-100 hover:text-coal-L1" />
      </div>
    </div>
  </div>
</template>
