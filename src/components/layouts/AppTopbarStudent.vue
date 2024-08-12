<template>
  <div
    class="layout-topbar"
    :class="{
      'border-bottom-none': layoutConfig.topbarTheme !== 'light',
    }"
  >
    <div class="layout-topbar-end surface-border">
      <div class="layout-topbar-actions-start">
        <a
          v-if="layoutConfig.menuMode !== 'horizontal'"
          class="layout-menu-button-desktop hidden lg:flex"
          @click="onMenuButtonClick()"
        >
          <i class="pi pi-bars"></i>
        </a>
      </div>

      <div class="layout-topbar-actions-end">
        <ul class="layout-topbar-items">
          <!--          <li class="layout-topbar-search hidden lg:flex">-->
          <!--            <dialog-search />-->
          <!--          </li>-->
          <li class="lg:hidden">
            <a
              class="p-ripple"
              v-ripple
              v-styleclass="{
                selector: '@next',
                enterFromClass: 'hidden',
                enterActiveClass: 'scalein',
                leaveToClass: 'hidden',
                leaveActiveClass: 'fadeout',
                hideOnOutsideClick: true,
              }"
            >
              <i class="pi pi-search"></i>
            </a>
            <div
              class="layout-topbar-search hidden absolute origin-top surface-overlay p-2 border-top-1 surface-border shadow-2"
              style="top: 3.5rem"
            >
              <IconField iconPosition="left" class="w-full">
                <InputIcon class="pi pi-search" />
                <InputText placeholder="Search" class="w-full" />
              </IconField>
            </div>
          </li>
          <li>
            <a
              class="p-ripple"
              v-ripple
              v-styleclass="{
                selector: '@next',
                enterFromClass: 'hidden',
                enterActiveClass: 'scalein',
                leaveToClass: 'hidden',
                leaveActiveClass: 'fadeout',
                hideOnOutsideClick: true,
              }"
            >
              <i class="pi pi-bell" v-badge="2"></i>
            </a>
            <div class="layout-topbar-menu shadow-2 pt-0 hidden">
              <ul class="list-none p-0 m-0">
                <li
                  class="flex justify-content-between align-items-center px-3 p-3 mb-3 cursor-pointer"
                >
                  <h6 class="m-0 font-semibold">Notifications</h6>
                  <span class="p-badge">3</span>
                </li>
                <li>
                  <a
                    class="py-2 px-3 flex gap-2 cursor-pointer hover:text-primary"
                  >
                    <div
                      class="flex align-items-center justify-content-center border-1 border-circle border-transparent bg-blue-100 text-500"
                      style="height: 30px; width: 30px"
                    >
                      <i class="pi pi-shopping-cart text-lg text-blue-500"></i>
                    </div>
                    <div>
                      <h6 class="m-0 font-semibold">
                        Order <span>#2254</span> is placed
                      </h6>

                      <span class="text-sm text-700"
                        >Total Amount of
                        <span class="font-semibold">$34.50</span></span
                      >
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    class="py-2 px-3 flex gap-2 cursor-pointer hover:text-primary"
                  >
                    <div
                      class="flex align-items-center justify-content-center border-1 border-circle border-transparent bg-cyan-100 text-500"
                      style="height: 30px; width: 30px"
                    >
                      <i class="pi pi-clock text-lg text-cyan-500"></i>
                    </div>
                    <div>
                      <h6 class="m-0 font-semibold">
                        Meeting with <span>AF04</span> Team
                      </h6>

                      <span class="text-sm text-700">Google Meets</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    class="py-2 px-3 flex gap-2 cursor-pointer hover:text-primary"
                  >
                    <div
                      class="flex align-items-center justify-content-center border-1 border-circle border-transparent bg-pink-100 text-500"
                      style="height: 30px; width: 30px"
                    >
                      <i class="pi pi-th-large text-lg text-pink-500"></i>
                    </div>
                    <div>
                      <h6 class="m-0 font-semibold">
                        Task <span>#41</span> is complete
                      </h6>

                      <span class="text-sm text-700">9 Remaining Tasks</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    class="py-2 px-3 flex gap-2 cursor-pointer hover:text-primary"
                  >
                    <div
                      class="flex align-items-center justify-content-center border-1 border-circle border-transparent bg-blue-100 text-500"
                      style="height: 30px; width: 30px"
                    >
                      <i class="pi pi-shopping-cart text-lg text-blue-500"></i>
                    </div>
                    <div>
                      <h6 class="m-0 font-semibold">
                        Order <span>#2255</span> is placed
                      </h6>

                      <span class="text-sm text-700"
                        >Total Amount of
                        <span class="font-semibold">$40.45</span></span
                      >
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <!--btn profile-->
          <li class="layout-topbar-profile">
            <a
              v-if="!isMobile"
              class="p-ripple"
              v-ripple
              v-styleclass="{
                selector: '@next',
                enterFromClass: 'hidden',
                enterActiveClass: 'scalein',
                leaveToClass: 'hidden',
                leaveActiveClass: 'fadeout',
                hideOnOutsideClick: true,
              }"
            >
              <div class="mt-2">
                <router-link to="/apps/student/student-profile-view">
                  <img
                    class="profile"
                    src="/layout/images/img.png"
                    alt="demo"
                  />
                </router-link>
              </div>
            </a>
          </li>
          <!--          bnt logout-->
          <li>
            <router-link
              to="/auth/login-page"
              class="p-ripple"
              v-ripple
              v-styleclass="{
                selector: '@next',
                enterFromClass: 'hidden',
                enterActiveClass: 'scalein',
                leaveToClass: 'hidden',
                leaveActiveClass: 'fadeout',
                hideOnOutsideClick: true,
              }"
            >
              <i class="pi pi-power-off"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useLayout } from "@/composables/layout";
import DialogSearch from "@/components/dialogs/dialog-search.vue";

const { layoutConfig, isMobile, onMenuToggle, onRightPanelToggle } =
  useLayout();

const onMenuButtonClick = () => {
  onMenuToggle();
};
</script>
