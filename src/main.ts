import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import router from "./router/index";
import i18n from "@/core/plugins/i18n";
import Tooltip from "primevue/tooltip";
import BadgeDirective from "primevue/badgedirective";
import ConfirmationService from "primevue/confirmationservice";
import DialogService from "primevue/dialogservice";
import ToastService from "primevue/toastservice";
import { initApexCharts } from "@/core/plugins/apexcharts";
import { initInlineSvg } from "@/core/plugins/inline-svg";
import { initVeeValidate } from "@/core/plugins/vee-validate";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import StyleClass from "primevue/styleclass";
import 'primeicons/primeicons.css';
// import "@/core/plugins/prismjs";
// import "primevue/resources/themes/mdc-light-indigo/theme.css";

import Ripple from "primevue/ripple";
import "@/assets/styles.scss";
const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(pinia);
app.use(router);

app.use(ToastService);
app.use(DialogService);
app.use(ConfirmationService);

app.directive("tooltip", Tooltip);
app.directive("badge", BadgeDirective);
app.directive("ripple", Ripple);
app.directive("styleclass", StyleClass);

initApexCharts(app);
initInlineSvg(app);
initVeeValidate();
app.use(PrimeVue, { ripple: true });
app.use(i18n);

app.mount("#app");
