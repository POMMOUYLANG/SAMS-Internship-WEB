<template>
  <div>
    <div class="text-center">
      <div
        class="border-round shadow-1 hover:shadow-4 border-200 surface-50 flex align-items-center justify-content-center border-round mb-3 mx-auto cursor-pointer"
        style="width: 90px; height: 90px"
      >
        <img :src="`/media/icons/${icon}.svg`" class="w-full p-3" />
      </div>
      <span class="text-900 font-medium"> {{ name }}</span>
      <!--      <p>-->
      <!--        <Tag-->
      <!--          class="m-2"-->
      <!--          severity="secondary"-->
      <!--          :value="status ? 'Active' : 'DisActive'"-->
      <!--          style="-->
      <!--            background-color: rgba(76, 175, 80, 0.1);-->
      <!--            border-radius: 2.5rem;-->
      <!--            color: green;-->
      <!--          "-->
      <!--        ></Tag>-->
      <!--      </p>-->
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  name: {
    type: String,
    default: "Unknown",
  },
  status: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: "school",
  },
});
</script>
