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

// Reactive profile data
const profile = reactive({
  year: "",
  academic: "",
  semester: "",
  subject: "",
});

// Search query data
const searchQuery = ref("");

// Sample users data (replace with actual data source)
const users = [
  // Example user data
  {
    no: 1,
    fullname: "DIN PICH",
    gender: "M",
    email: "monopich@example.com",
    id: "e20201250",
    year: "I5",
  },
  {
    no: 2,
    fullname: "TOM TITO",
    gender: "M",
    email: "titotom@example.com",
    id: "e20200061",
    year: "I5",
  },
  {
    no: 3,
    fullname: "POM MOUYLANG",
    gender: "F",
    email: "mouylangpom@example.com",
    id: "e20202008",
    year: "I5",
  },
];
</script>

<template>
  <div class="profile-management">
    <!-- Top Bar -->
    <div class="bar-style-top">
      <div class="ml-3">Report</div>
      <!--      <div class="flex align-items-center gap-4 mr-4">-->
      <!--        <IconField>-->
      <!--          <InputIcon class="pi pi-search" />-->
      <!--          <InputText v-model="searchQuery" class="font" placeholder="Search" />-->
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
      <div class="div flex gap-5">
        <div class="form-group">
          <label for="academic">Academic</label>
          <select id="academic" v-model="profile.academic" required>
            <option value="2024">2024-2029</option>
            <option value="2023">2023-2028</option>
            <option value="2022">2022-2027</option>
            <option value="2021">2021-2026</option>
            <option value="2021">2020-2025</option>
          </select>
        </div>
        <div class="form-group">
          <label for="year">Year</label>
          <select id="year" v-model="profile.year" required>
            <option value="2024">I1</option>
            <option value="2023">I2</option>
            <option value="2022">I3</option>
            <option value="2021">I4</option>
            <option value="2021">I5</option>
          </select>
        </div>
        <div class="form-group">
          <label for="semester">Semester</label>
          <select id="semester" v-model="profile.semester" required>
            <option value="S1">S1</option>
            <option value="S2">S2</option>
          </select>
        </div>
        <div class="form-group">
          <label for="subject">Subject</label>
          <select id="subject" v-model="profile.subject" required>
            <option value="IP">IP</option>
            <option value="N">N</option>
            <option value="DS">DS</option>
            <option value="NAS">NAS</option>
          </select>
        </div>
      </div>
      <!-- Data Table -->
      <div class="p-card mt-5">
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
            field="year"
            header="Year"
            style="width: 6rem"
            class="year-column"
          />
          <Column
            field="email"
            header="Email"
            style="width: 20rem"
            class="email-column"
          />
          <Column header="Actions" style="width: 10rem" class="actions-column">
            <template #body="{ rowData }">
              <router-link to="/apps/admin/report-attendance-student">
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

.p-button {
  background-color: #203e61;
}
.font {
  font-family: "Battambang", sans-serif;
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
  font-family: "Battambang", sans-serif;
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
