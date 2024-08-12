<script setup lang="ts">
import Button from "primevue/button";
import Calendar from "primevue/calendar";
import Column from "primevue/column";
import DataTable from "primevue/datatable";
const date = ref(null);

definePage({
  meta: {
    layout: "master-parent",
  },
});

const users = [
  // Example user data
  {
    status: "Present",
    date: "07/15/2024",
    clock_in: "7:00 AM",
    clock_out: "5:00 PM",
    total: "10hr 01mins",
  },
  {
    status: "Present",
    date: "08/15/2024",
    clock_in: "7:00 AM",
    clock_out: "5:00 PM",
    total: "10hr 01mins",
  },
  {
    status: "Present",
    date: "09/15/2024",
    clock_in: "7:00 AM",
    clock_out: "5:00 PM",
    total: "10hr 01mins",
  },
  {
    status: "Present",
    date: "09/15/2024",
    clock_in: "7:00 AM",
    clock_out: "5:00 PM",
    total: "10hr 01mins",
  },
  {
    status: "Present",
    date: "09/15/2024",
    clock_in: "7:00 AM",
    clock_out: "5:00 PM",
    total: "10hr 01mins",
  },
  {
    status: "Present",
    date: "09/15/2024",
    clock_in: "7:00 AM",
    clock_out: "5:00 PM",
    total: "10hr 01mins",
  },
  {
    status: "Present",
    date: "09/15/2024",
    clock_in: "7:00 AM",
    clock_out: "5:00 PM",
    total: "10hr 01mins",
  },
  {
    status: "Present",
    date: "09/15/2024",
    clock_in: "7:00 AM",
    clock_out: "5:00 PM",
    total: "10hr 01mins",
  },
  {
    status: "Present",
    date: "09/15/2024",
    clock_in: "7:00 AM",
    clock_out: "5:00 PM",
    total: "10hr 01mins",
  },
  {
    status: "Present",
    date: "09/15/2024",
    clock_in: "7:00 AM",
    clock_out: "5:00 PM",
    total: "10hr 01mins",
  },
  {
    status: "Present",
    date: "09/15/2024",
    clock_in: "7:00 AM",
    clock_out: "5:00 PM",
    total: "10hr 01mins",
  },
  {
    status: "Present",
    date: "09/15/2024",
    clock_in: "7:00 AM",
    clock_out: "5:00 PM",
    total: "10hr 01mins",
  },
  {
    status: "Present",
    date: "09/15/2024",
    clock_in: "7:00 AM",
    clock_out: "5:00 PM",
    total: "10hr 01mins",
  },
];
</script>

<template>
  <div class="profile-management">
    <!-- Top Bar -->
    <div class="bar-style-top">
      <div class="ml-3">Attendances</div>
    </div>

    <!-- Edit Section -->
    <div class="edit-section">
      <div>
        <div
          class="calendar-wrapper flex align-items-center justify-content-end text-color gap-4"
        >
          <span class="font text-color font-bold text-xl">Select Date: </span>
          <Calendar v-model="date" dateFormat="mm/dd/yy">
            <template #icon>
              <i class="pi pi-calendar"></i>
            </template>
          </Calendar>
        </div>
      </div>
      <div class="p-card mt-5">
        <DataTable
          :value="users"
          class="p-datatable-gridlines"
          scrollable
          scrollHeight="450px"
          tableStyle="min-width: 50rem"
        >
          <Column field="status" header="Status" style="width: 13rem" />
          <Column field="date" header="Date" style="width: 18rem" />
          <Column field="clock_in" header="Clock In" style="width: 13rem" />
          <Column field="clock_out" header="Clock Out" style="width: 13rem" />
          <Column field="total" header="Total" style="width: 15rem" />
          <Column header="Action" style="width: 10rem">
            <template #body="{ rowData }">
              <router-link to="/apps/parent/parent-attendance-detail">
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
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Battambang:wght@100;300;400;700;900&display=swap");

.p-button {
  background-color: #203e61;
}
.text-color {
  color: #203e61;
}
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
