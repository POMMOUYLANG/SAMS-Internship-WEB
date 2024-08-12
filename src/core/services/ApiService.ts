import axiosStatic from "axios";
// import { useAuthStore } from "@/stores/auth";
import { useToast } from "vue-toast-notification";

const axiosInstance = axiosStatic.create({});

axiosInstance.interceptors.request.use(async (config) => {
  // const authStore = useAuthStore();
  // if (authStore.stateAuth?.access_token) {
  //   config.headers.Authorization = `Bearer ${authStore.stateAuth?.access_token}`;
  // }
  return config;
});
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    // const authStore = useAuthStore();
    const $toast = useToast();
    const originalRequest = error.config;

    // if from refreshToken, return error ('/v1/portal/auth/refreshToken')
    // if (originalRequest.url?.includes("/portal/auth/refreshToken")) {
    //   // throw new Error('Refresh token failed')
    //   return Promise.reject(error);
    // }

    // if 401 Unauthorized, refresh token
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      if (window.history.state.current != "bus") {
        window.location.href = "/sign-in";
      }
    } else {
      $toast.error(
        error.response.data.message +
          `<br> <small>${error.response.data.correlationId}</small>`,
        { position: "bottom" }
      );
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
