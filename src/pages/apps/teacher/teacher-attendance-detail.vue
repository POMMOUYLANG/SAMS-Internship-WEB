<script setup lang="ts">
definePage({
  meta: {
    layout: "master-teacher",
  },
});
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
</script>

<template>
  <div class="profile-management">
    <!-- Top Bar -->
    <div class="bar-style-top">
      <div class="ml-3">Detail Info</div>
      <div class="mr-2">
        <router-link to="/apps/teacher/teacher-attendance-list">
          <Button icon="pi pi-times" text raised rounded aria-label="Cancel" />
        </router-link>
      </div>
    </div>
    <!-- Edit Section -->
    <div class="edit-section">
      <div
        class="flex align-items-start justify-content-between mt-2 gap-5 p-3"
      >
        <!--        left-->
        <div class="card-left">
          <div class="card flex justify-center">
            <div class="">
              <label for="username" class="font text-color font-bold text-xl"
                >Full Name:</label
              >
              <br />
              <div class="display" id="username">NOP Phearum</div>
            </div>
          </div>
          <div class="card flex justify-center">
            <div class="">
              <label for="clock_in" class="font text-color font-bold text-xl"
                >Clock In:</label
              >
              <br />
              <div class="display" id="clock_in">7:00 AM</div>
            </div>
          </div>
          <div class="card flex justify-center">
            <div class="">
              <label for="leave_type" class="font text-color font-bold text-xl"
                >Leave Type:</label
              >
              <br />
              <div class="display" id="leave_type">Sick</div>
            </div>
          </div>
          <div class="card flex justify-center">
            <div class="">
              <label for="reason" class="font text-color font-bold text-xl"
                >Reason:</label
              >
              <br />
              <div class="display" id="reason">I'm not feeling well.</div>
            </div>
          </div>
        </div>
        <!--        right-->
        <div class="card-right">
          <div class="card flex justify-center">
            <div class="">
              <label for="date_to" class="font text-color font-bold text-xl"
                >Date:</label
              >
              <br />
              <div class="display" id="date_to">July, 15, 2024</div>
            </div>
          </div>
          <div class="card flex justify-center">
            <div class="">
              <label for="clock_out" class="font text-color font-bold text-xl"
                >Clock Out:</label
              >
              <br />
              <div class="display" id="clock_out">5:00 PM</div>
            </div>
          </div>
          <div class="card flex justify-center">
            <div class="">
              <label
                for="line_manager"
                class="font text-color font-bold text-xl"
                >Line manager:</label
              >
              <br />
              <div class="display" id="line_manager">LAY HENG</div>
            </div>
          </div>
          <div class="card flex justify-center">
            <div class="">
              <label for="approve" class="font text-color font-bold text-xl"
                >status:</label
              >
              <br />
              <div class="display" id="approve">Approve By: LAY HENG</div>
            </div>
          </div>
        </div>
      </div>

      <!--        bottom-->
      <!--      <div class="card-bottom p-3">-->
      <!--        <div class="card flex justify-center">-->
      <!--          <div class="">-->
      <!--            <label for="reason" class="font text-color font-bold text-xl"-->
      <!--            >Reason:</label-->
      <!--            >-->
      <!--            <br />-->
      <!--            <Textarea placeholder="I'm not feeling well." rows="5" cols="143" />-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </div>-->
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Battambang:wght@100;300;400;700;900&display=swap");

.text-color {
  color: #203e61;
}
.top {
  margin-top: 1rem;
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
.edit-section {
  background: white;
  padding: 20px;
  height: 80vh;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  color: black;
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
.card-left {
  width: 100%;
}
.card-right {
  width: 100%;
}
.display {
  margin-top: 10px;
  width: 500px;
  color: #203e61;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  font-family: "Battambang", sans-serif;
  font-size: 12px;
}
</style>
