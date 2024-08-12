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

// Handler functions for button clicks
function viewUser(rowData: any) {
  console.log("Viewing user:", rowData);
  // Implement view logic here
}

function editUser(rowData: any) {
  console.log("Editing user:", rowData);
  // Implement edit logic here
}

function deleteUser(rowData: any) {
  console.log("Deleting user:", rowData);
  // Implement delete logic here
}

import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";

const confirm = useConfirm();
const toast = useToast();

const confirm2 = () => {
  confirm.require({
    message: "Do you want to delete this user?",
    header: "Delete User",
    icon: "pi pi-info-circle",
    rejectLabel: "Cancel",
    rejectProps: {
      label: "Cancel",
      severity: "secondary",
      outlined: true,
    },
    acceptProps: {
      label: "Delete",
      severity: "danger",
    },
    accept: () => {
      toast.add({
        severity: "info",
        summary: "Confirmed",
        detail: "Record deleted",
        life: 3000,
      });
    },
    reject: () => {
      toast.add({
        severity: "error",
        summary: "Rejected",
        detail: "You have rejected",
        life: 3000,
      });
    },
  });
};
</script>

<template>
  <div class="profile-management">
    <!-- Top Bar -->
    <div class="bar-style-top">
      <div class="ml-3">Profile</div>
    </div>

    <!-- Edit Section -->
    <div class="edit-section">
      <div class="flex align-items-center justify-content-end gap-4 mr-4">
        <IconField>
          <InputIcon class="pi pi-search" />
          <InputText v-model="searchQuery" class="font" placeholder="Search" />
        </IconField>
        <router-link to="/apps/admin/profile-staff-add">
          <Button label="Create" icon="pi pi-plus" class="btn font" />
        </router-link>
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
          <Column header="Action" style="width: 15rem">
            <template #body="{ rowData }">
              <router-link to="/apps/admin/profile-staff-view">
                <Button
                  icon="pi pi-eye"
                  class="p-button-rounded p-button-info p-mr-2 ml-4"
                  aria-label="View"
                  @click="viewUser(rowData)"
                />
              </router-link>
              <router-link to="/apps/admin/profile-staff-edit">
                <Button
                  icon="pi pi-pencil"
                  class="p-button-rounded p-button-success p-mr-2 ml-2"
                  aria-label="Edit"
                  @click="editUser(rowData)"
                />
              </router-link>
              <Button
                icon="pi pi-trash"
                class="p-button-rounded p-button-danger ml-2"
                aria-label="Delete"
                @click="confirm2()"
              />
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
