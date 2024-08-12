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
        to: "/apps/dashboard/dashboard-teacher",
      },
      {
        label: "Schedule",
        icon: "pi pi-calendar",
        to: "/apps/teacher/teacher-schedule",
      },
      {
        label: "Leave",
        icon: "pi pi-users",
        to: "/apps/teacher/teacher-leave-list",
      },
      {
        label: "Attendance",
        icon: "pi pi-objects-column",
        to: "/apps/teacher/teacher-attendance-list",
      },
      {
        label: "Student Management",
        icon: "pi pi-user",
        items: [
          {
            label: "Request Leave",
            icon: "pi  pi-address-book",
            to: "/apps/teacher/leave-students",
          },
          {
            label: "Attendance List",
            icon: "pi pi-user",
            to: "/apps/teacher/attendance-students",
          },
          {
            label: "Student List",
            icon: "pi pi-users",
            to: "/apps/teacher/profile-students",
          },
        ],
      },

      {
        label: "Setting",
        icon: "pi pi-cog",
        items: [
          {
            label: "Profile Setting",
            icon: "pi  pi-image",
            to: "/apps/teacher/teacher-profile-view",
          },
        ],
      },
    ],
  },
]);
</script>
