<script setup lang="ts">
import { reactive, ref } from "vue";
import IconField from "primevue/iconfield";
import InputIcon from "primevue/inputicon";
import InputText from "primevue/inputtext";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";
import Paginator from "primevue/paginator";
import ConfirmDialog from "primevue/confirmdialog";

definePage({
  meta: {
    layout: "master-student",
  },
});

// Search query data
const searchQuery = ref("");

// Reactive profile data
const profile = reactive({
  year: "",
  academic: "",
  semester: "",
  subject: "",
});

// Sample users data (replace with actual data source)
const users = [
  // Example user data
  {
    no: 1,
    fullname: "SEAK LENG",
    gender: "F",
    email: "lengseak@example.com",
    id: "P20201250",
    major: "DB",
  },
  {
    no: 2,
    fullname: "NOP PHEARUM",
    gender: "M",
    email: "phearumnop@example.com",
    id: "P20200061",
    major: "WEB/DB",
  },
  {
    no: 3,
    fullname: "HOT TIN",
    gender: "M",
    email: "hottin@example.com",
    id: "P20202008",
    major: "WEB",
  },
];

function viewUser(rowData: any) {
  console.log("Viewing user:", rowData);
}
</script>

<template>
  <div class="profile-management">
    <!-- Top Bar -->
    <div class="bar-style-top">
      <div class="ml-3">Profile</div>
    </div>

    <!-- Edit Section -->
    <div class="edit-section">
      <div class="flex align-items-end justify-content-end gap-4 mr-4">
        <IconField>
          <InputIcon class="pi pi-search" />
          <InputText v-model="searchQuery" class="font" placeholder="Search" />
        </IconField>
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
            field="major"
            header="Major"
            style="width: 6rem"
            class="major-column"
          />
          <Column
            field="email"
            header="Email"
            style="width: 20rem"
            class="email-column"
          />
          <Column header="Action" style="width: 15rem">
            <template #body="{ rowData }">
              <router-link to="/apps/student/profile-teacher-detail">
                <Button
                  icon="pi pi-eye"
                  class="p-button-rounded p-button-info p-mr-2 ml-4"
                  aria-label="View"
                  @click="viewUser(rowData)"
                />
              </router-link>
            </template>
          </Column>
        </DataTable>
      </div>
    </div>
    <!--    dialog delete-->
    <Toast />
    <ConfirmDialog></ConfirmDialog>

    <!-- Bottom Bar -->
    <!--    <div class="bar-style-bottom">-->
    <!--      &lt;!&ndash;      <div class="cards font-lg">&ndash;&gt;-->
    <!--      &lt;!&ndash;        <Paginator&ndash;&gt;-->
    <!--      &lt;!&ndash;          :rows="10"&ndash;&gt;-->
    <!--      &lt;!&ndash;          :totalRecords="120"&ndash;&gt;-->
    <!--      &lt;!&ndash;          :rowsPerPageOptions="[10, 20, 30]"&ndash;&gt;-->
    <!--      &lt;!&ndash;        ></Paginator>&ndash;&gt;-->
    <!--      &lt;!&ndash;      </div>&ndash;&gt;-->
    <!--    </div>-->
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Battambang:wght@100;300;400;700;900&display=swap");

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
  background-color: #284b63;
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
  padding: 20px;
}

.p-datatable-gridlines {
  margin-top: 1rem;
  font-family: "Battambang", sans-serif;
}
</style>
