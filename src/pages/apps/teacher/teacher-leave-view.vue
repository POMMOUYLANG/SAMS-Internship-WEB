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
      <div class="ml-3">View Leave</div>
      <div class="mr-2">
        <router-link to="/apps/teacher/teacher-leave-list">
          <Button icon="pi pi-times" text raised rounded aria-label="Cancel" />
        </router-link>
      </div>
    </div>
    <!-- Edit Section -->
    <div class="edit-section">
      <div class="form-grid">
        <!-- Left Section -->
        <div class="card-left">
          <div class="card">
            <label for="date_form" class="font text-color font-bold text-lg"
              >Date Form:</label
            ><br />
            <div class="display" id="date_form">July, 15, 2024</div>
          </div>
          <div class="card">
            <label for="time_form" class="font text-color font-bold text-lg"
              >Time Form:</label
            ><br />
            <div class="display" id="time_form">7:00 AM</div>
          </div>
          <div class="card">
            <label for="leave_type" class="font text-color font-bold text-lg"
              >Leave Type:</label
            ><br />
            <div class="display" id="leave_type">Sick</div>
          </div>
        </div>
        <!-- Right Section -->
        <div class="card-right">
          <div class="card">
            <label for="date_type" class="font text-color font-bold text-lg"
              >Date To:</label
            ><br />
            <div class="display" id="date_to">July, 15, 2024</div>
          </div>
          <div class="card">
            <label for="time_to" class="font text-color font-bold text-lg"
              >Time To:</label
            ><br />
            <div class="display" id="time_to">5:00 PM</div>
          </div>
          <div class="card">
            <label for="line_manager" class="font text-color font-bold text-lg"
              >Line manager:</label
            ><br />
            <div class="display" id="line_manager">NOP PHEARUM</div>
          </div>
        </div>
      </div>
      <!-- Bottom Section -->
      <div class="card-bottom">
        <div class="card flex justify-center">
          <div class="">
            <label for="reason" class="font text-color font-bold text-lg"
              >Reason:</label
            >
            <br />
            <Textarea
              v-model="value"
              placeholder="I'm not feeling well."
              style="height: 100px; width: 76rem"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Battambang:wght@100;300;400;700;900&display=swap");

.text-color {
  color: #203e61;
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

.edit-section {
  background: white;
  padding: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  color: black;
  padding-left: 4rem;
}

.form-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.width {
  width: 35rem;
}

.card-left,
.card-right {
  flex: 1;
  min-width: 280px;
}

.card {
  margin-bottom: 1rem;
}

.textarea {
  width: 100%;
}

.button-submit {
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
}

@media (max-width: 968px) {
  .form-grid {
    flex-direction: column;
  }

  .bar-style-top {
    font-size: 16px;
  }

  .width {
    width: 30rem;
  }

  .font {
    font-size: 14px;
  }

  .card {
    margin-bottom: 0.5rem;
  }

  .button-submit {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .bar-style-top {
    font-size: 16px;
    padding: 5px;
  }

  .width {
    width: 24rem;
  }

  .edit-section {
    padding: 10px;
  }

  .card-left,
  .card-right {
    min-width: 100%;
  }

  .button-submit {
    margin-top: 1rem;
  }
}
</style>
