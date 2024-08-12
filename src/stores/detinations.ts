import type { DestinationDto } from "@/api";
import { DepartInfoAPI } from "@/api";

export const useDestinationStore = defineStore("DestinationStore", () => {
  const destinations = ref<DestinationDto[]>();
  const loading = ref<Boolean>(false);

  const getData = async () => {
    loading.value = true;
    await DepartInfoAPI.getDestinations({
      search: "",
    })
      .then((res) => {
        destinations.value = res;
      })
      .catch()
      .finally(() => {
        loading.value = false;
      });
  };
  onMounted(async () => {
    await getData();
  });

  return {
    destinations,
    loading,
    getData,
  };
});
