<script setup lang="ts">
import Button from "primevue/button";
import InputIcon from "primevue/inputicon";
import IconField from "primevue/iconfield";
import Column from "primevue/column";
import DataTable from "primevue/datatable";
import Dropdown from "primevue/dropdown";
import Calendar from "primevue/calendar";

const date = ref(null);
definePage({
  meta: {
    layout: "master-teacher",
  },
});
const student_info = [
  {
    no: "1",
    full_name: "POM MOUYLANG",
    id: "e20201008",
    gender: "F",
    class: "I5",
    email: "mouylangpom@gmail.com",
    contact: "069310609",
  },
  {
    no: "2",
    full_name: "DIN PICh",
    id: "e20201250",
    gender: "M",
    class: "I5",

    email: "monopich@gmail.com",
    contact: "069310609",
  },
  {
    no: "1",
    full_name: "TOM TITO",
    id: "e20200061",
    gender: "M",
    class: "I5",

    email: "titotom@gmail.com",
    contact: "069310609",
  },
];
const selectedOption = ref(null);
const years = [
  { name: "I1", value: 1 },
  { name: "I2", value: 2 },
  { name: "I3", value: 3 },
  { name: "I4", value: 4 },
  { name: "I5", value: 5 },
];
</script>

<template>
  <div class="profile-management">
    <!-- Top Bar -->
    <div class="bar-style-top">
      <div class="ml-3">Student Infomation</div>
    </div>

    <!-- Edit Section -->

    <div class="edit-section">
      <div class="flex align-content-end justify-content-end gap-4">
        <!--        btn select-->
        <div class="flex align-content-end justify-content-end gap-4 p-3">
          <Dropdown
            v-model="selectedOption"
            :options="years"
            optionLabel="name"
            placeholder="Year"
          />
          <div
            class="calendar-wrapper flex align-items-center justify-content-end text-color gap-4"
          >
            <span class="font text-color font-bold text-xl">Select Date: </span>
            <Calendar
              v-model="date"
              dateFormat="mm/dd/yy"
              placeholder="mm/dd/yyyy"
            >
              <template #icon>
                <i class="pi pi-calendar"></i>
              </template>
            </Calendar>
          </div>
        </div>

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
        <!--        table-->
        <div class="p-card mt-1">
          <DataTable
            :value="student_info"
            class="p-datatable-gridlines"
            scrollable
            scrollHeight="450px"
            tableStyle="min-width: 50rem"
          >
            <Column field="no" header="No" style="width: 4rem" />
            <Column field="full_name" header="Full Name" style="width: 15rem" />
            <Column field="id" header="ID" style="width: 10rem" />
            <Column field="class" header="Class" style="width: 10rem" />
            <Column field="email" header="Email" style="width: 12rem" />
            <Column field="contact" header="Contact" style="width: 12rem" />
            <!--            <Column field="status" header="Status" style="width: 10rem" />-->
            <Column header="Action" style="width: 9rem">
              <template #body="{ rowData }">
                <router-link to="/apps/teacher/profile-students-detail">
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
