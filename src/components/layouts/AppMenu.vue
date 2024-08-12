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
        to: "/apps/dashboard/dashboard-admin",
      },
      {
        label: "Schedule",
        icon: "pi pi-calendar",
        to: "/apps/admin/schedule",
      },
      {
        label: "Teacher Management",
        icon: "pi pi-user",
        items: [
          {
            label: "Report",
            icon: "pi  pi-flag",
            to: "/apps/admin/report-list-teacher",
          },
          {
            label: "Leave",
            icon: "pi pi-users",
            to: "/apps/admin/leave-teacher",
          },
          {
            label: "Profile Management",
            icon: "pi pi-user",
            to: "/apps/admin/profile-teacher",
          },
        ],
      },
      {
        label: "Student Management",
        icon: "pi pi-user",
        items: [
          {
            label: "Report",
            icon: "pi  pi-flag",
            to: "/apps/admin/report-list-student",
          },
          {
            label: "Leave",
            icon: "pi pi-users",
            to: "/apps/admin/leave-student",
          },
          {
            label: "Profile Management",
            icon: "pi pi-user",
            to: "/apps/admin/profile-student",
          },
        ],
      },
      {
        label: "Staff Management",
        icon: "pi pi-user",
        items: [
          {
            label: "Report",
            icon: "pi  pi-flag",
            to: "/apps/admin/report-list-staff",
          },
          {
            label: "Leave",
            icon: "pi pi-users",
            to: "/apps/admin/leave-staff",
          },
          {
            label: "Profile Management",
            icon: "pi pi-user",
            to: "/apps/admin/profile-staff",
          },
        ],
      },
      {
        label: "Setting",
        icon: "pi pi-cog",
        items: [
          {
            label: "School Setting",
            icon: "pi  pi-image",
            to: "/apps/admin/profile-school-view",
          },
        ],
      },
    ],
  },
]);
</script>
