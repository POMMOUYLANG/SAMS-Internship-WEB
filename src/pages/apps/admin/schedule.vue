<template>
  <div class="profile-management">
    <!-- Top Bar -->
    <div class="bar-style-top">
      <div class="ml-3">Timetable</div>
      <div class="flex align-items-center gap-4 mr-4">
        <IconField>
          <InputIcon class="pi pi-search" />
          <InputText v-model="searchQuery" placeholder="Search" />
        </IconField>
      </div>
    </div>

    <!-- Filter Section -->
    <div class="edit-section">
      <div class="div flex gap-5">
        <div class="form-group">
          <label for="academic">Academic</label>
          <select id="academic" v-model="profile.academic" required>
            <option value="">Select</option>
            <option value="2024">2024-2029</option>
            <option value="2023">2023-2028</option>
            <option value="2022">2022-2027</option>
            <option value="2021">2021-2026</option>
            <option value="2020">2020-2025</option>
          </select>
        </div>
        <div class="form-group">
          <label for="year">Year</label>
          <select id="year" v-model="profile.year" required>
            <option value="">Select</option>
            <option value="2024">Y1</option>
            <option value="2023">Y2</option>
            <option value="2022">Y3</option>
            <option value="2021">Y4</option>
            <option value="2020">Y5</option>
          </select>
        </div>
        <div class="form-group">
          <label for="semester">Semester</label>
          <select id="semester" v-model="profile.semester" required>
            <option value="">Select</option>
            <option value="S1">S1</option>
            <option value="S2">S2</option>
          </select>
        </div>
        <div class="form-group">
          <label for="day">Day</label>
          <select id="day" v-model="profile.day" required>
            <option value="">Select</option>
            <option value="mon">Monday</option>
            <option value="tue">Tuesday</option>
            <option value="wed">Wednesday</option>
            <option value="thu">Thursday</option>
            <option value="fri">Friday</option>
          </select>
        </div>
      </div>
      <div class="div flex gap-5">
        <div class="form-group">
          <label for="building">Building</label>
          <select id="building" v-model="profile.building" required>
            <option value="">Select</option>
            <option value="a">A</option>
            <option value="b">B</option>
            <option value="c">C</option>
            <option value="d">D</option>
            <option value="e">E</option>
          </select>
        </div>
        <div class="form-group">
          <label for="floor">Floor</label>
          <select id="floor" v-model="profile.floor" required>
            <option value="">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div class="form-group">
          <label for="room">Room</label>
          <select id="room" v-model="profile.room" required>
            <option value="">Select</option>
            <option value="1">01</option>
            <option value="2">02</option>
            <option value="3">03</option>
            <option value="4">04</option>
            <option value="5">05</option>
            <option value="6">06</option>
          </select>
        </div>
      </div>

      <div class="edit">
        <router-link to="/apps/admin/schedule_edit">
          <button
            class="edit-button mt-4"
            aria-label="Edit"
            @click="editUser(slot)"
          >
            Edit
          </button>
        </router-link>
      </div>

      <!-- Timetable -->
      <div class="timetable-container">
        <table class="timetable">
          <thead>
            <tr>
              <th>Time</th>
              <th v-for="day in days" :key="day">{{ day }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="slot in timeSlots" :key="slot.time">
              <td>{{ slot.time }}</td>
              <td v-for="day in days" :key="day">
                <div class="info-group">
                  <div class="info-group-item">
                    <span class="info-label"></span>
                    <span>{{ timetable[slot.time][day].subject }}</span>
                  </div>
                  <div class="info-group-item">
                    <span class="info-label"></span>
                    <span>{{ timetable[slot.time][day].teacher }}</span>
                  </div>
                  <div class="info-group-item">
                    <span class="info-label"></span>
                    <span>{{ timetable[slot.time][day].type }}</span>
                  </div>
                  <div class="info-group-item">
                    <span class="info-label"></span>
                    <span>{{ timetable[slot.time][day].group }}</span>
                  </div>
                  <div class="info-group-item">
                    <span class="info-label"></span>
                    <span>{{ timetable[slot.time][day].class }}</span>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";
import IconField from "primevue/iconfield";
import InputIcon from "primevue/inputicon";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import { useRouter } from "vue-router";

definePage({
  meta: {
    layout: "master",
  },
});

// Reactive state for profile data
const profile = reactive({
  year: "",
  academic: "",
  semester: "",
  day: "",
  building: "",
  floor: "",
  room: "",
});

const searchQuery = ref("");

const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const timeSlots = [
  { time: "7:00 - 9:00" },
  { time: "9:00 - 11:00" },
  { time: "1:00 - 3:00" },
  { time: "3:00 - 5:00" },
];

// Initialize a timetable object to hold the input data
const timetable = reactive(
  timeSlots.reduce((acc, slot) => {
    acc[slot.time] = days.reduce((dayAcc, day) => {
      dayAcc[day] = {
        subject: "",
        teacher: "",
        type: "",
        group: "",
        class: "",
      };
      return dayAcc;
    }, {});
    return acc;
  }, {})
);

timetable["7:00 - 9:00"]["Mon"] = {
  subject: "Math",
  teacher: "Mr. Smith",
  type: "Lecture",
  group: "A",
  class: "101",
};

timetable["9:00 - 11:00"]["Tue"] = {
  subject: "Science",
  teacher: "Ms. Johnson",
  type: "Lab",
  group: "B",
  class: "102",
};

const router = useRouter();
const confirm = useConfirm();
const toast = useToast();

function viewUser(slot: any) {
  console.log("Viewing user:", slot);
  // Implement view logic here
}

function editUser(slot: any) {
  console.log("Editing user:", slot);
  // Implement edit logic here
}

function confirmDelete(slot: any) {
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
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Battambang:wght@100;300;400;700;900&display=swap");

.profile-management {
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;
  font-family: "Battambang", sans-serif;
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

.edit-section {
  background: white;
  padding: 20px;
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

.timetable-container {
  margin-top: 20px;
}

.timetable {
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  color: #0d3c61;
}

.timetable th,
.timetable td {
  border: 1px solid #ccc;
  padding: 8px;
  width: 210px;
  text-align: center;
  height: 200px;
}

.timetable th {
  background-color: #f5f5f5;
  font-weight: bold;
  height: 40px;
}

.info-group {
  display: flex;
  flex-direction: column;
}

.info-group-item {
  margin-bottom: 5px;
}

.info-label {
  font-weight: bold;
  color: #203e61;
}
button {
  width: 100px;
  background-color: #203e61;
  color: white;
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-family: "Battambang", sans-serif;
  border-radius: 20px;
  text-align: center;
  height: 30px;
}
.edit {
  text-align: right;
}
</style>
