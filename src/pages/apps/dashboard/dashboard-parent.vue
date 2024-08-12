<script setup lang="ts">
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Dialog from "primevue/dialog";
definePage({
  meta: {
    layout: "master-parent",
  },
});
const profile = {
  full_name: "Doeurn Sreynith",
  position: "Parent",
  id: "B20120001",
  gender: "Female",
  department:
    "Usually, I'm the one who organizes and prepares the family's meals.",
  email: "nithnith@gmail.com",
  mobile: "+855 11 740 7737",
  address: "Sangkat Toul Sangke I, Khan Russey Keo, Phnom Penh",
};
const calendar = [
  {
    time: "7:00 - 9:00 AM",
    year: "I5",
    subject: "Database II",
    room: "J701",
  },
  {
    time: "9:00 - 11:00 AM",
    year: "I5",
    subject: "Network II",
    room: "J701",
  },
  {
    time: "13:00 - 15:00 PM",
    year: "I5",
    subject: "Network Design",
    room: "J701",
  },
  {
    time: "15:00 - 17:00 PM",
    year: "I5",
    subject: "Internet Programming",
    room: "J701",
  },
];
const leave = [
  {
    time: "7:00 - 17:00 PM",
    leave_date: "Today",
    leave_type: "Sick",
    approve: "NOP PHEARUM",
  },
  {
    time: "7:00 - 17:00 PM",
    leave_date: "Yeserday",
    leave_type: "Sick",
    approve: "NOP PHEARUM",
  },
  {
    time: "7:00 - 17:00 PM",
    leave_date: "08/01/2024",
    leave_type: "Sick",
    approve: "NOP PHEARUM",
  },
  {
    time: "7:00 - 17:00 PM",
    leave_date: "08/02/2024",
    leave_type: "Sick",
    approve: "NOP PHEARUM",
  },
];
const attendance = [
  {
    no: "1",
    date: "Today",
    subject: "MOBILE",
    room: "J701",
    status: "Present",
  },
  {
    no: "2",
    date: "Yeserday",
    subject: "MOBILE",
    room: "J701",
    status: "Present",
  },
  {
    no: "3",
    date: "08/01/2024",
    subject: "MOBILE",
    room: "J701",
    status: "Present",
  },
];

const position = ref("center");
const visible = ref(false);

const openPosition = (pos) => {
  position.value = pos;
  visible.value = true;
};
</script>

<template>
  <div class="profile-management">
    <!-- Top Bar -->
    <div class="bar-style-top">
      <div class="ml-3">Dashboard</div>
    </div>

    <!-- Edit Section -->
    <div class="edit-section">
      <div
        class="text-color flex align-items-start justify-content-between mt-5 gap-5"
      >
        <!--        Card-Left-->
        <div class="card-left p-4 shadow-5">
          <span class="font-bold text-xl">Profile</span>
          <div class="flex align-items-start gap-3 mt-4">
            <div class="div">
              <Image
                src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg"
                alt="Image"
                width="180"
                preview
              />
            </div>
            <div class=" ">
              <p class="text-2xl font-bold">{{ profile.full_name }}</p>
              <p>
                {{ profile.department }}
              </p>
            </div>
          </div>
          <div class="div">
            <ul class="list-none pl-0">
              <li class="list-info">
                <div class="flex align-items-center">
                  <strong class="text-xl w-4">Teacher's ID:</strong>
                  <p>{{ profile.id }}</p>
                </div>
              </li>

              <li class="list-info">
                <div class="flex align-items-center">
                  <strong class="text-xl w-4">Full Name:</strong>
                  <p>{{ profile.full_name }}</p>
                </div>
              </li>
              <li class="list-info">
                <div class="flex align-items-center">
                  <strong class="text-xl w-4">Gender:</strong>
                  <p>{{ profile.gender }}</p>
                </div>
              </li>

              <li class="list-info">
                <div class="flex align-items-center">
                  <strong class="text-xl w-4">Position:</strong>
                  <p>{{ profile.position }}</p>
                </div>
              </li>
              <li class="list-info">
                <div class="flex align-items-center gap-6">
                  <strong class="text-xl w-4">Occupation:</strong>
                  <p>{{ profile.department }}</p>
                </div>
              </li>
              <li class="list-info">
                <div class="flex align-items-center">
                  <strong class="text-xl w-4">Email:</strong>
                  <p>{{ profile.email }}</p>
                </div>
              </li>
              <li class="list-info">
                <div class="flex align-items-center">
                  <strong class="text-xl w-4">Mobile:</strong>
                  <p>{{ profile.mobile }}</p>
                </div>
              </li>
              <li class="list-info">
                <div class="flex align-items-center gap-3">
                  <strong class="text-xl w-4">Address:</strong>
                  <p>{{ profile.address }}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!--        Card-Right-->
        <div class="card-right">
          <!--          session1-->
          <div class="card-right-2 mt-5">
            <div class="div">
              <Button
                class="text-xl font-bold font"
                label="Today Calendar"
                icon="pi pi-calendar"
                severity="contrast"
                text
                outlined
              />
            </div>
            <div class="card">
              <DataTable class="font p-2" :value="calendar">
                <Column
                  field="time"
                  header="Time"
                  style="width: 14rem"
                ></Column>
                <Column
                  field="year"
                  header="Year"
                  style="width: 10rem; padding-left: 2px"
                ></Column>
                <Column
                  field="subject"
                  header="Subject"
                  style="width: 15rem; padding-left: 2px"
                ></Column>
                <Column
                  field="room"
                  header="Room"
                  style="width: 10rem; padding-left: 2px"
                ></Column>
              </DataTable>
            </div>
          </div>
          <!--          session2-->
          <div class="card-right-2 mt-5">
            <div class="div">
              <Button
                class="text-xl font-bold font"
                label="Request Leave"
                severity="contrast"
                text
                outlined
              />
            </div>
            <div class="card">
              <DataTable
                class="font"
                :value="leave"
                tableStyle="min-width: 1rem"
              >
                <Column
                  field="time"
                  header="Time"
                  style="width: 10rem"
                ></Column>
                <Column
                  field="leave_date"
                  header="Leave Date"
                  style="width: 10rem; padding-left: 2px"
                ></Column>
                <Column
                  field="leave_type"
                  header="Leave Type"
                  style="width: 10rem; padding-left: 2px"
                ></Column>
                <Column
                  field="approve"
                  header="Approve By"
                  style="width: 10rem; padding-left: 2px"
                ></Column>
              </DataTable>
            </div>
          </div>
          <!--          session3-->
          <div class="card-right-2 mt-5">
            <div class="div">
              <Button
                class="text-xl font-bold font"
                label="Attendances"
                severity="contrast"
                text
                outlined
              />
            </div>
            <div class="card">
              <DataTable
                class="font"
                :value="attendance"
                tableStyle="min-width: 1rem"
              >
                <Column field="no" header="No" style="width: 10rem"></Column>
                <Column
                  field="date"
                  header="Date"
                  style="width: 10rem; padding-left: 2px"
                ></Column>
                <Column
                  field="subject"
                  header="Subject"
                  style="width: 10rem; padding-left: 2px"
                ></Column>
                <Column
                  field="room"
                  header="Room"
                  style="width: 10rem; padding-left: 2px"
                ></Column>
                <Column
                  field="status"
                  header="Status"
                  style="width: 10rem; padding-left: 2px"
                ></Column>
              </DataTable>
            </div>
          </div>
        </div>
        <!--        Dialog-->
        <Dialog
          v-model:visible="visible"
          header="Clock In"
          :style="{ width: '70rem' }"
          :position="position"
          :modal="true"
          :draggable="false"
          class="font"
        >
          <span
            class="font text-surface-500 dark:text-surface-400 block mb-4 flex gap-3"
            >Select Location: <i class="pi pi-map-marker"> </i>
          </span>
          <div class="font flex items-center gap-4 mb-4">
            <InputText
              id="username"
              class="font flex-auto"
              placeholder="School"
              autocomplete="off"
            />
          </div>

          <div class="flex align-content-end justify-content-end gap-2">
            <Button
              type="button"
              label="Cancel"
              severity="contrast"
              outlined
              @click="visible = false"
            />
            <Button
              type="button"
              label="Confirm"
              severity="contrast"
              @click="visible = false"
            />
          </div>
        </Dialog>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Battambang:wght@100;300;400;700;900&display=swap");

.font,
Column,
Dialog,
InputText,
Button {
  font-family: "Battambang", sans-serif;
}
.custom-dialog {
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
  height: 120vh;
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
.text-color {
  color: black;
}
.card-left {
  border-radius: 15px;
  width: 85%;
  height: 750px;
}
.card-right {
  //border: 1px solid black;
  width: 100%;
}
.list-info {
  padding-top: 20px;
}
</style>
