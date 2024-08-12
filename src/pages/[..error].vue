<template>
  <div class="h-screen">
    <div
      class="flex align-items-center justify-content-center"
      style="height: 30%"
    ></div>
    <div class="flex align-items-center flex-column" style="height: 70%">
      <img
        src="/media/icons/locked.svg"
        alt="poseidon-layout"
        width="100px"
        class="block"
      />
      <div class="p-7 text-center">
        <span class="block text-5xl font-bold mb-4">Page Not Found</span
        ><span class="block mb-6"
          >The resource you are looking for does not exist.</span
        >
        <Button
          label="Home"
          class="w-full"
          size="large"
          @click="$router.push('/')"
          type="button"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default { name: "error-page" };
</script>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
