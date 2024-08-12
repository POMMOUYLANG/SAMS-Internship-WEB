<script setup lang="ts">
import Button from "primevue/button";
import IconField from "primevue/iconfield";
import InputIcon from "primevue/inputicon";
import Column from "primevue/column";
import DataTable from "primevue/datatable";

definePage({
  meta: {
    layout: "master-teacher",
  },
});

const users = [
  // Example user data
  {
    no: 1,
    full_name: "John Doe",
    leave_time: "9:00",
    leave_type: "Sick",
    leave_date: "01-08-2024",
    approve: "By LAY HENG",
  },
  {
    no: 2,
    full_name: "John Doe",
    leave_time: "9:00",
    leave_type: "Sick",
    leave_date: "01-08-2024",
    approve: "By LAY HENG",
  },
  {
    no: 2,
    full_name: "John Doe",
    leave_time: "9:00",
    leave_type: "Sick",
    leave_date: "01-08-2024",
    approve: "By LAY HENG",
  },
  {
    no: 2,
    full_name: "John Doe",
    leave_time: "9:00",
    leave_type: "Sick",
    leave_date: "01-08-2024",
    approve: "By LAY HENG",
  },
  {
    no: 2,
    full_name: "John Doe",
    leave_time: "9:00",
    leave_type: "Sick",
    leave_date: "01-08-2024",
    approve: "By LAY HENG",
  },
  {
    no: 2,
    full_name: "John Doe",
    leave_time: "9:00",
    leave_type: "Sick",
    leave_date: "01-08-2024",
    approve: "By LAY HENG",
  },
  {
    no: 2,
    full_name: "John Doe",
    leave_time: "9:00",
    leave_type: "Sick",
    leave_date: "01-08-2024",
    approve: "By LAY HENG",
  },
  {
    no: 2,
    full_name: "John Doe",
    leave_time: "9:00",
    leave_type: "Sick",
    leave_date: "01-08-2024",
    approve: "By LAY HENG",
  },
  {
    no: 2,
    full_name: "John Doe",
    leave_time: "9:00",
    leave_type: "Sick",
    leave_date: "01-08-2024",
    approve: "By LAY HENG",
  },
  {
    no: 2,
    full_name: "John Doe",
    leave_time: "9:00",
    leave_type: "Sick",
    leave_date: "01-08-2024",
    approve: "By LAY HENG",
  },
  {
    no: 2,
    full_name: "John Doe",
    leave_time: "9:00",
    leave_type: "Sick",
    leave_date: "01-08-2024",
    approve: "By LAY HENG",
  },
  {
    no: 2,
    full_name: "John Doe",
    leave_time: "9:00",
    leave_type: "Sick",
    leave_date: "01-08-2024",
    approve: "By LAY HENG",
  },
  {
    no: 2,
    full_name: "John Doe",
    leave_time: "9:00",
    leave_type: "Sick",
    leave_date: "01-08-2024",
    approve: "By LAY HENG",
  },
];
</script>

<template>
  <div class="profile-management">
    <!-- Top Bar -->
    <div class="bar-style-top">
      <div class="ml-3">Leave</div>
    </div>

    <!-- Edit Section -->
    <div class="edit-section">
      <div class="flex align-content-end justify-content-end gap-4 mr-4">
        <div
          class="card flex flex-wrap align-content-center justify-content-center gap-4"
        >
          <IconField>
            <InputIcon class="pi pi-search" />
            <InputText v-model="value1" placeholder="Search" class="font" />
          </IconField>
          <router-link to="/apps/teacher/teacher-leave-create">
            <Button label="Request" icon="pi pi-plus" severity="contrast" />
          </router-link>
        </div>
      </div>
      <div class="p-card mt-4">
        <DataTable
          :value="users"
          class="p-datatable-gridlines"
          scrollable
          scrollHeight="450px"
          tableStyle="min-width: 50rem"
        >
          <Column field="no" header="No" style="width: 5rem" />
          <Column field="full_name" header="Full Name" style="width: 15rem" />
          <Column field="leave_time" header="Leave Time" style="width: 12rem" />
          <Column field="leave_date" header="Leave Date" style="width: 12rem" />
          <Column field="leave_type" header="Leave Type" style="width: 12rem" />
          <Column field="approve" header="Approve" style="width: 13rem" />
          <Column header="Action" style="width: 15rem">
            <template #body="{ rowData }">
              <router-link to="/apps/teacher/teacher-leave-view">
                <Button
                  icon="pi pi-eye"
                  class="p-button-rounded p-button-info p-mr-2 ml-4"
                  aria-label="View"
                />
              </router-link>
              <router-link to="/apps/teacher/teacher-leave-edit">
                <Button
                  icon="pi pi-pencil"
                  class="p-button-rounded p-button-success p-mr-2 ml-2"
                  aria-label="Edit"
                />
              </router-link>
            </template>
          </Column>
        </DataTable>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Battambang:wght@100;300;400;700;900&display=swap");

.font,
Column,
Button {
  font-family: "Battambang", sans-serif;
}
.profile-management {
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;
  font-family: "Battambang", sans-serif;
}
.edit-section {
  background: white;
  padding: 20px;
  height: 85vh;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
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
.p-card {
  padding: 20px;
}

.p-datatable-gridlines {
  margin-top: 1rem;
  font-family: "Battambang", sans-serif;
}
</style>
