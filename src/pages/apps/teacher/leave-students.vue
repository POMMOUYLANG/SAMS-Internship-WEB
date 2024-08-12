<script setup lang="ts">
import Button from "primevue/button";
import InputIcon from "primevue/inputicon";
import IconField from "primevue/iconfield";
import MeterGroup from "primevue/metergroup";
import Column from "primevue/column";
import DataTable from "primevue/datatable";

definePage({
  meta: {
    layout: "master-teacher",
  },
});
const value = ref([
  { label: "Reject", color: "#FF0000", value: 10 },
  { label: "Approve", color: "#008000", value: 30 },
  { label: "Padding", color: "#FFA500", value: 60 },
]);
const leave = [
  {
    no: "1",
    full_name: "POM MOUYLANG",
    id: "e20201008",
    subject: "Database II",
    leave_date: "Today",
    leave_time: "7:00-17:00 PM",
    status: "Approve",
  },
  {
    no: "1",
    full_name: "DIN PIC",
    id: "e20201250",
    subject: "Database II",
    leave_date: "Today",
    leave_time: "7:00-17:00 PM",
    status: "Approve",
  },
  {
    no: "1",
    full_name: "TOM TITO",
    id: "e20200061",
    subject: "Database II",
    leave_date: "Today",
    leave_time: "7:00-17:00 PM",
    status: "Approve",
  },
];
</script>

<template>
  <div class="profile-management">
    <!-- Top Bar -->
    <div class="bar-style-top">
      <div class="ml-3">All Request</div>
    </div>

    <!-- Edit Section -->

    <div class="edit-section">
      <div class="flex align-content-end justify-content-end gap-4 mr-4">
        <!--        btn search-->
        <div
          class="card flex flex-wrap align-content-center justify-content-center gap-4"
        >
          <IconField>
            <InputIcon class="pi pi-search" />
            <InputText v-model="value1" placeholder="Search" class="font" />
          </IconField>
        </div>
      </div>
      <div class="card">
        <!--        btn group-->
        <MeterGroup :value="value" />
        <!--        btn reject,approve-->
        <div class="flex align-content-end justify-content-end gap-3">
          <Button type="button" label="Reject All" severity="danger" outlined />
          <Button type="button" label="Approve All" severity="contrast" />
        </div>
        <!--        table-->
        <div class="p-card mt-4">
          <DataTable
            :value="leave"
            class="p-datatable-gridlines"
            scrollable
            scrollHeight="450px"
            tableStyle="min-width: 50rem"
          >
            <Column field="no" header="No" style="width: 4rem" />
            <Column field="full_name" header="Full Name" style="width: 15rem" />
            <Column field="id" header="ID" style="width: 10rem" />
            <Column field="subject" header="Subject" style="width: 12rem" />
            <Column
              field="leave_date"
              header="Leave Date"
              style="width: 12rem"
            />
            <Column
              field="leave_time"
              header="Leave Time"
              style="width: 12rem"
            />
            <Column field="status" header="Status" style="width: 10rem" />
            <Column header="Action" style="width: 9rem">
              <template #body="{ rowData }">
                <router-link to="/apps/teacher/leave-students-detail">
                  <Button
                    icon="pi pi-info-circle"
                    class="p-button-rounded p-button-info p-mr-2 ml-4"
                    aria-label="Detial"
                  />
                </router-link>
              </template>
            </Column>
          </DataTable>
        </div>
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
  padding: 10px;
  height: 100vh;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  color: black !important;
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
