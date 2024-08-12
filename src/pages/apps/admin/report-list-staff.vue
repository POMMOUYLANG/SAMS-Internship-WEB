<script setup lang="ts">
import { reactive, ref } from "vue";
import IconField from "primevue/iconfield";
import InputIcon from "primevue/inputicon";
import InputText from "primevue/inputtext";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";

definePage({
  meta: {
    layout: "master",
  },
});

// Search query data
const searchQuery = ref("");

// Sample users data (replace with actual data source)
const users = [
  // Example user data
  {
    no: 1,
    fullname: "SREY SOKHOM",
    gender: "F",
    email: "sreysokhom@example.com",
    id: "P20201250",
    major: "e-learning",
  },
  {
    no: 2,
    fullname: "CHOM SREYLAM",
    gender: "F",
    email: "chomsreylam@example.com",
    id: "P20200061",
    major: "e-learning",
  },
];
// function generateReport(rowData: any) {
//   console.log("Generating report for user:", rowData);
//   // Implement report generation logic here
// }
</script>

<template>
  <div class="profile-management">
    <!-- Top Bar -->
    <div class="bar-style-top">
      <div class="ml-3">Report</div>
      <!--      <div class="flex align-items-center gap-4 mr-4">-->
      <!--        <IconField>-->
      <!--          <InputIcon class="pi pi-search" />-->
      <!--          <InputText v-model="searchQuery" placeholder="Search" />-->
      <!--        </IconField>-->
      <!--      </div>-->
    </div>

    <!-- Edit Section -->
    <div class="edit-section">
      <div class="flex align-items-center justify-content-end gap-4 mr-4">
        <IconField>
          <InputIcon class="pi pi-search" />
          <InputText v-model="searchQuery" class="font" placeholder="Search" />
        </IconField>
      </div>
      <!-- Data Table -->
      <div class="p-card mt-4">
        <DataTable
          :value="users"
          class="p-datatable-gridlines"
          scrollable
          scrollHeight="400px"
          tableStyle="min-width: 50rem"
        >
          <Column
            field="no"
            header="No"
            style="width: 4rem"
            class="id-column"
          />
          <Column
            field="fullname"
            header="Full Name"
            style="width: 15rem"
            class="fullname-column"
          /><Column
            field="id"
            header="ID"
            style="width: 10rem"
            class="id-column"
          />
          <Column
            field="gender"
            header="Gender"
            style="width: 6rem"
            class="gender-column"
          />
          <Column
            field="major"
            header="Major"
            style="width: 8rem"
            class="major-column"
          />
          <Column
            field="email"
            header="Email"
            style="width: 20rem"
            class="email-column"
          />
          <Column header="Actions" style="width: 10rem" class="actions-column">
            <template #body="{ rowData }">
              <router-link to="/apps/admin/report-attendance-staff">
                <Button
                  icon="pi pi-info-circle"
                  class="p-button-rounded p-mr-2 ml-4"
                  aria-label="Detial"
                />
              </router-link>
            </template>
          </Column>
        </DataTable>
      </div>
    </div>

    <!-- Bottom Bar -->
    <!--    <div class="bar-style-bottom"></div>-->
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Battambang:wght@100;300;400;700;900&display=swap");

.font {
  font-family: "Battambang", sans-serif;
}
.p-button {
  background-color: #203e61;
}
.profile-management {
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;
  font-family: "Battambang", sans-serif;
}

.btn {
  color: white;
  background-color: #203e61;
  border-radius: 5px;
  padding: 9px 36px;
}

.edit-section {
  font-family: "Battambang", sans-serif;
  background: white;
  padding: 20px;
  height: 100vh;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}

.form-group {
  flex: 1;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #203e61;
  padding-left: 5px;
  padding-top: 10px;
}

.form-group select {
  width: 100%;
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-sizing: border-box;
}

.bar-style-top {
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom: 2px solid #284b63;
}
.bar-style-bottom {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}
.bar-style-bottom {
  display: flex;
  background-color: #284b63;
  color: white;
  padding: 10px;
  height: 40px;
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
}

.p-card {
  font-family: "Battambang", sans-serif;
  padding: 20px;
}

.p-datatable-gridlines {
  margin-top: 1rem;
  font-family: "Battambang", sans-serif;
}
</style>
