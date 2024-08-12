<template>
  <div
    class="layout-topbar"
    :class="{
      'border-bottom-none': layoutConfig.topbarTheme !== 'light',
    }"
  >
    <div class="layout-topbar-start">
      <a
        class="layout-menu-button-mobile lg:hidden p-ripple"
        v-ripple
        @click="onMenuButtonClick()"
      >
        <i class="pi pi-bars"></i>
      </a>
      <router-link to="/">
        <div
          class="layout-topbar-logo"
          id="logolink"
          style="cursor: pointer; outline: none"
        >
          <img
            id="app-logo"
            alt="poseidon-layout"
            :src="
              '/layout/images/logo-' +
              (layoutConfig.topbarTheme === 'light'
                ? 'poseidon'
                : 'poseidon-dark') +
              '.svg'
            "
          />
        </div>
      </router-link>
      <a
        class="lg:hidden"
        v-styleclass="{
          selector: '@next',
          enterFromClass: 'hidden',
          enterActiveClass: 'scalein',
          leaveToClass: 'hidden',
          leaveActiveClass: 'fadeout',
          hideOnOutsideClick: true,
        }"
      >
        <img
          src="/layout/images/avatar-profile.png"
          alt="demo"
          class="cursor-pointer"
        />
      </a>
      <div class="layout-topbar-menu shadow-2 px-3 hidden" style="top: 9rem">
        <ul class="list-none p-0 m-0">
          <li class="mb-2">
            <div class="flex gap-3 p-3 bg-primary-600">
              <img src="/layout/images/avatar-profile.png" alt="demo" />
              <!--              <div class="flex flex-column cursor-pointer">-->
              <!--                <span class="font-semibold text-white">Peter Taylor</span>-->
              <!--                <span class="text-xs font-normal text-white">Webmaster</span>-->
              <!--              </div>-->
            </div>
          </li>

          <li class="py-3 px-4 flex gap-2 cursor-pointer">
            <a>
              <i class="pi pi-file pi-lock text-lg mr-3"></i>
              <span class="font-semibold">My Account</span>
            </a>
          </li>
          <li class="py-3 px-4 flex gap-2 cursor-pointer">
            <router-link :to="{ name: 'apps' }">
              <i class="pi pi-compass pi-image text-lg mr-3"></i>
              <span class="font-semibold">Switch to Admin</span>
            </router-link>
          </li>
          <li class="py-3 px-4 flex gap-2 cursor-pointer">
            <a>
              <i class="pi pi-power-off pi-image text-lg mr-3"></i>
              <span class="font-semibold">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="layout-topbar-end surface-border">
      <div class="layout-topbar-actions-start"></div>

      <div class="layout-topbar-actions-end">
        <ul class="layout-topbar-items">
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
              <div class="flex gap-2">
                <img src="/layout/images/avatar-profile.png" alt="demo" />
                <!--                <div class="flex flex-column">-->
                <!--                  <span class="font-semibold">Peter Taylor</span>-->
                <!--                  <span class="text-sm">Webmaster</span>-->
                <!--                </div>-->
              </div>
            </a>
            <div class="layout-topbar-menu p-0 shadow-2 hidden">
              <ul class="list-none p-0 m-0">
                <li class="mb-2">
                  <div class="flex gap-3 p-3 bg-primary-600">
                    <img src="/layout/images/avatar-profile.png" alt="demo" />
                    <div class="flex flex-column cursor-pointer">
                      <span class="font-semibold text-white">Peter Taylor</span>
                      <span class="text-xs font-normal text-white"
                        >ID: 123904</span
                      >
                    </div>
                  </div>
                </li>

                <li class="py-3 px-4 flex gap-2 cursor-pointer">
                  <router-link :to="{ name: 'root' }">
                    <!--                    <i class="pi pi-file pi-lock text-lg"></i>-->
                    <span class="font-semibold mx-3">My Account</span>
                  </router-link>
                </li>
                <li class="py-3 px-4 flex gap-2 cursor-pointer">
                  <router-link :to="{ name: 'business' }">
                    <!--                    <i class="pi pi-file pi-lock text-lg"></i>-->
                    <span class="font-semibold mx-3">My Business</span>
                  </router-link>
                </li>
                <li class="py-3 px-4 flex gap-2 cursor-pointer">
                  <router-link :to="{ name: 'systems' }">
                    <span class="font-semibold mx-3">Develop System </span>
                  </router-link>
                </li>
                <li class="py-3 px-4 flex gap-2 cursor-pointer">
                  <router-link :to="{ name: 'apps' }">
                    <!--                    <i class="pi pi-compass pi-image text-lg"></i>-->
                    <span class="font-semibold mx-3">Switch to Admin Area</span>
                  </router-link>
                </li>
                <li class="py-3 px-4 flex gap-2 cursor-pointer">
                  <router-link :to="{ name: 'auth-page-logout' }">
                    <i class="pi pi-power-off pi-image text-lg"></i>
                    <span class="font-semibold mx-3">Logout</span>
                  </router-link>
                </li>
              </ul>
            </div>
          </li>
          <!--          <li class="layout-rightmenu-button">-->
          <!--            <a href="#" @click="onRightPanelToggle">-->
          <!--              <i class="pi pi-arrow-left"></i>-->
          <!--            </a>-->
          <!--          </li>-->
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useLayout } from "@/composables/layout";

const { layoutConfig, isMobile, onMenuToggle, onRightPanelToggle } =
  useLayout();

const onMenuButtonClick = () => {
  onMenuToggle();
};
</script>
