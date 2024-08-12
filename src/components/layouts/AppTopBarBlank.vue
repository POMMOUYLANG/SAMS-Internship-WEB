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
