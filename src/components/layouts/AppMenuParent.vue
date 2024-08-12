<template>
  <ul class="layout-menu">
    <template v-for="(item, i) in model" :key="item">
      <img
        src="/src/assets/images/logos.png"
        alt="logo"
        class="w-12 mt-5 pr-6"
      />
      <AppMenuItem :item="item" root :index="i" class="mt-5" />
    </template>
  </ul>
</template>

<style lang="scss" scoped></style>
<script setup lang="ts">
import AppMenuItem from "./AppMenuItem.vue";
import type { IMenuItem } from "@/composables/interfaces";

const model = ref<IMenuItem[]>([
  {
    label: "",
    icon: "pi pi-fw pi-home",
    items: [
      {
        label: "Dashboard",
        icon: "pi pi-desktop",
        to: "/apps/dashboard/dashboard-parent",
      },
      {
        label: "Schedule",
        icon: "pi pi-users",
        to: "/apps/parent/parent-schedule",
      },
      {
        label: "Attendance",
        icon: "pi pi-objects-column",
        to: "/apps/parent/parent-attendance-list",
      },
      {
        label: "Teacher",
        icon: "pi pi-user",
        to: "/apps/parent/profile-teacher",
      },
      {
        label: "Setting",
        icon: "pi pi-cog",
        items: [
          {
            label: "Profile Setting",
            icon: "pi  pi-image",
            to: "/apps/parent/parent-profile-view",
          },
        ],
      },
    ],
  },
]);
</script>
