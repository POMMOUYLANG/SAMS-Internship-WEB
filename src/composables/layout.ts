import { computed, ref } from "vue";

const layoutConfig = ref<any>({
  ripple: false,
  menuMode: "static",
  colorScheme: "light",
  theme: "denim",
  scale: 14,
  menuTheme: "light",
  topbarTheme: "light",
});

const layoutState = ref<any>({
  staticMenuDesktopInactive: false,
  overlayMenuActive: false,
  configSidebarVisible: false,
  staticMenuMobileActive: false,
  menuHoverActive: false,
  rightMenuActive: false,
  topbarMenuActive: false,
  sidebarActive: false,
  activeMenuItem: null as any,
  overlaySubmenuActive: false,
});
const tabs = ref<any[]>([]);

export function useLayout() {
  const changeColorScheme = (colorScheme: string) => {
    const themeLink = document.getElementById("theme-link");
    const themeLinkHref = themeLink?.getAttribute("href");
    const currentColorScheme =
      "theme-" + layoutConfig.value.colorScheme.toString();
    const newColorScheme = "theme-" + colorScheme;
    const newHref = themeLinkHref?.replace(currentColorScheme, newColorScheme);

    replaceLink(themeLink, newHref, () => {
      layoutConfig.value.colorScheme = colorScheme;
      if (layoutConfig.value.colorScheme === "dark") {
        layoutConfig.value.menuTheme = "dark";
      } else {
        layoutConfig.value.menuTheme = "light";
      }
    });
  };
  const replaceLink = (linkElement, href, onComplete) => {
    if (!linkElement || !href) {
      return;
    }

    const id = linkElement.getAttribute("id");
    const cloneLinkElement = linkElement.cloneNode(true);

    cloneLinkElement.setAttribute("href", href);
    cloneLinkElement.setAttribute("id", id + "-clone");

    linkElement.parentNode.insertBefore(
      cloneLinkElement,
      linkElement.nextSibling
    );

    cloneLinkElement.addEventListener("load", () => {
      linkElement.remove();

      const element = document.getElementById(id); // re-check
      element && element.remove();

      cloneLinkElement.setAttribute("id", id);
      onComplete && onComplete();
    });
  };
  const setScale = (scale: number) => {
    layoutConfig.value.scale = scale ?? 0;
  };

  const setActiveMenuItem = (item) => {
    layoutState.value.activeMenuItem = item.value || item;
  };

  const onMenuToggle = () => {
    if (layoutConfig.value.menuMode === "overlay") {
      layoutState.value.overlayMenuActive =
        !layoutState.value.overlayMenuActive;
    }

    if (window.innerWidth > 991) {
      layoutState.value.staticMenuDesktopInactive =
        !layoutState.value.staticMenuDesktopInactive;
    } else {
      layoutState.value.staticMenuMobileActive =
        !layoutState.value.staticMenuMobileActive;
    }
  };

  const onConfigSidebarToggle = () => {
    layoutState.value.configSidebarVisible =
      !layoutState.value.configSidebarVisible;
  };

  const onRightPanelToggle = () => {
    layoutState.value.rightMenuActive = !layoutState.value.rightMenuActive;
  };

  const openTab = (value) => {
    tabs.value = [...tabs.value, value];
  };
  const closeTab = (index) => {
    tabs.value.splice(index, 1);
    tabs.value = [...tabs.value];
  };

  const isSidebarActive = computed(
    () =>
      layoutState.value.overlayMenuActive ||
      layoutState.value.staticMenuMobileActive ||
      layoutState.value.overlaySubmenuActive
  );

  const isDesktop = computed(() => window.innerWidth > 991);
  const isMobile = computed(() => window.innerWidth <= 991);

  const isHorizontal = computed(
    () => layoutConfig.value.menuMode === "horizontal"
  );

  const isOverlay = computed(() => layoutConfig.value.menuMode === "overlay");

  return {
    layoutConfig,
    layoutState,
    setScale,
    onMenuToggle,
    isSidebarActive,
    setActiveMenuItem,
    onConfigSidebarToggle,
    onRightPanelToggle,
    isHorizontal,
    isDesktop,
    isMobile,
    changeColorScheme,
    replaceLink,
    isOverlay,
    openTab,
    tabs,
    closeTab,
    isStatic: computed(() => layoutConfig.value?.menuMode === "static"),
  };
}
