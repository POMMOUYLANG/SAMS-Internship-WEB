`
<script setup lang="ts">
definePage({
  meta: {
    layout: "master-student",
  },
});
import Button from "primevue/button";
import FileUpload from "primevue/fileupload";
import { useToast } from "primevue/usetoast";
const toast = useToast();

const onAdvancedUpload = () => {
  toast.add({
    severity: "info",
    summary: "Success",
    detail: "File Uploaded",
    life: 3000,
  });
};
</script>

<template>
  <div class="profile-management">
    <!-- Top Bar -->
    <div class="bar-style-top">
      <div class="ml-3">Generate QR Code...</div>
      <div class="mr-2">
        <router-link to="/apps/dashboard/dashboard-student">
          <Button icon="pi pi-times" text raised rounded aria-label="Cancel" />
        </router-link>
      </div>
    </div>

    <!-- Edit Section -->
    <div class="edit-section">
      <div class="card">
        <Toast />
        <FileUpload
          name="demo[]"
          url="/api/upload"
          @upload="onAdvancedUpload($event)"
          :multiple="true"
          accept="image/*"
          :maxFileSize="1000000"
        >
        </FileUpload>
      </div>
      <div class="div"></div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Battambang:wght@100;300;400;700;900&display=swap");

.profile-management {
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;
  font-family: "Battambang", sans-serif;
}
.edit-section {
  background: white;
  padding: 20px;
  height: 100vh;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  color: black;
}

.bar-style-top {
  display: flex;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  color: #203e61;
  font-weight: bold;
  font-size: 18px;
  padding: 10px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom: 2px solid #284b63;
}
</style>
