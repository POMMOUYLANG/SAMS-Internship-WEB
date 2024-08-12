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
        to: "/apps/dashboard/dashboard-student",
      },
      {
        label: "Schedule",
        icon: "pi pi-calendar",
        to: "/apps/student/student-schedule",
      },
      {
        label: "Leave",
        icon: "pi pi-users",
        to: "/apps/student/student-leave-list",
      },
      {
        label: "Attendance",
        icon: "pi pi-objects-column",
        to: "/apps/student/student-attendance-list",
      },
      {
        label: "Teacher",
        icon: "pi pi-user",
        to: "/apps/student/profile-teacher",
      },
      {
        label: "Setting",
        icon: "pi pi-cog",
        items: [
          {
            label: "Profile Setting",
            icon: "pi  pi-image",
            to: "/apps/student/student-profile-view",
          },
        ],
      },
    ],
  },
]);
</script>
