<template>
  <i class="pi pi-search"></i>
  <InputText
    type="text"
    class="w-10rem"
    placeholder="Search..."
    @click="visible = true"
  />
  <Dialog
    v-model:visible="visible"
    :modal="true"
    :style="{ width: '50vw' }"
    position="top"
    :close-on-escape="visible"
    :dismissableMask="true"
    class="card border-round-xl"
  >
    <template #container>
      <div class="">
        <div class="p-fluid">
          <IconField>
            <InputIcon class="pi pi-search" />
            <InputText
              placeholder="Search menus, shortcuts, contact and more..."
            />
          </IconField>
        </div>
        <div class="border-bottom-1 surface-border py-2">
          <h2 class="font-semibold text-xs text-500 mb-2 mt-0 px-1">RECENT</h2>
          <ul class="list-none m-0 p-0">
            <li
              class="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex justify-content-between align-items-center"
            >
              <span class="flex align-items-center"
                ><i class="pi pi-file mr-2"></i>Add new file</span
              >
              <div class="hidden md:flex align-items-center">
                <span
                  class="border-1 p-1 surface-border border-round surface-100 text-600 text-xs"
                  >CMD</span
                ><span class="mx-2 text-600">+</span
                ><span
                  class="border-1 p-1 surface-border border-round surface-100 text-600 text-xs"
                  >N</span
                >
              </div>
            </li>
            <li
              class="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex justify-content-between align-items-center"
            >
              <span class="flex align-items-center"
                ><i class="pi pi-lock mr-2"></i>Lock Session</span
              >
              <div class="hidden md:flex align-items-center">
                <span
                  class="border-1 p-1 surface-border border-round surface-100 text-600 text-xs"
                  >CMD</span
                ><span class="mx-2 text-600">+</span
                ><span
                  class="border-1 p-1 surface-border border-round surface-100 text-600 text-xs"
                  >L</span
                >
              </div>
            </li>
            <li
              class="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex justify-content-between align-items-center"
            >
              <span class="flex align-items-center"
                ><i class="pi pi-moon mr-2"></i>Dark Mode</span
              >
            </li>
          </ul>
        </div>
        <div class="py-2">
          <ul class="list-none m-0 p-0">
            <li
              class="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex justify-content-between align-items-center"
            >
              <span class="flex align-items-center"
                ><i class="pi pi-bell mr-2"></i>Notifications</span
              >
              <div class="hidden md:flex align-items-center">
                <span
                  class="border-1 p-1 surface-border border-round surface-100 text-600 text-xs"
                  >CMD</span
                ><span class="mx-2 text-600">+</span
                ><span
                  class="border-1 p-1 surface-border border-round surface-100 text-600 text-xs"
                  >C</span
                >
              </div>
            </li>
            <li
              class="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex justify-content-between align-items-center"
            >
              <span class="flex align-items-center"
                ><i class="pi pi-bookmark mr-2"></i>Bookmarks</span
              >
              <div class="hidden md:flex align-items-center">
                <span
                  class="border-1 p-1 surface-border border-round surface-100 text-600 text-xs"
                  >CMD</span
                ><span class="mx-2 text-600">+</span
                ><span
                  class="border-1 p-1 surface-border border-round surface-100 text-600 text-xs"
                  >B</span
                >
              </div>
            </li>
            <li
              class="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex justify-content-between align-items-center"
            >
              <span class="flex align-items-center"
                ><i class="pi pi-bolt mr-2"></i>Quick Actions</span
              >
              <div class="hidden md:flex align-items-center">
                <span
                  class="border-1 p-1 surface-border border-round surface-100 text-600 text-xs"
                  >SHIFT</span
                ><span class="mx-2 text-600">+</span
                ><span
                  class="border-1 p-1 surface-border border-round surface-100 text-600 text-xs"
                  >Q</span
                >
              </div>
            </li>
            <li
              class="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex justify-content-between align-items-center"
            >
              <span class="flex align-items-center"
                ><i class="pi pi-users mr-2"></i>Manage User Groups</span
              >
              <div class="hidden md:flex align-items-center">
                <span
                  class="border-1 p-1 surface-border border-round surface-100 text-600 text-xs"
                  >CMD</span
                ><span class="mx-2 text-600">+</span
                ><span
                  class="border-1 p-1 surface-border border-round surface-100 text-600 text-xs"
                  >U</span
                >
              </div>
            </li>
            <li
              class="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex justify-content-between align-items-center"
            >
              <span class="flex align-items-center"
                ><i class="pi pi-book mr-2"></i>Go to Documentation</span
              >
              <div class="hidden md:flex align-items-center">
                <span
                  class="border-1 p-1 surface-border border-round surface-100 text-600 text-xs"
                  >SHIFT</span
                ><span class="mx-2 text-600">+</span
                ><span
                  class="border-1 p-1 surface-border border-round surface-100 text-600 text-xs"
                  >L</span
                >
              </div>
            </li>
            <li
              class="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex justify-content-between align-items-center"
            >
              <span class="flex align-items-center"
                ><i class="pi pi-cog mr-2"></i>System Preferences</span
              >
              <div class="hidden md:flex align-items-center">
                <span
                  class="border-1 p-1 surface-border border-round surface-100 text-600 text-xs"
                  >CMD</span
                ><span class="mx-2 text-600">+</span
                ><span
                  class="border-1 p-1 surface-border border-round surface-100 text-600 text-xs"
                  >P</span
                >
              </div>
            </li>
          </ul>
        </div>
      </div>
    </template>
  </Dialog>
</template>

<script setup>
import IconField from "primevue/iconfield";
import InputIcon from "primevue/inputicon";

const visible = ref(false);
</script>
