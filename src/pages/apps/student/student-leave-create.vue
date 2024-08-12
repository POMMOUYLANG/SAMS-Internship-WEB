<script setup lang="ts">
definePage({
  meta: {
    layout: "master-student",
  },
});
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import Checkbox from "primevue/checkbox";

const subject = ref();
</script>

<template>
  <div class="profile-management">
    <!-- Top Bar -->
    <div class="bar-style-top">
      <div class="ml-3">Request Leave</div>
      <div class="mr-2">
        <router-link to="/apps/student/student-leave-list">
          <Button icon="pi pi-times" text raised rounded aria-label="Cancel" />
        </router-link>
      </div>
    </div>
    <!-- Edit Section -->
    <div class="edit-section">
      <!--      Top Section-->
      <div class="form-grid">
        <!-- Left Section -->
        <div class="card-left">
          <div class="card">
            <label for="date_form" class="font text-color font-bold text-lg"
              >Date Form:</label
            ><br />
            <InputText id="date_form" v-model="value" class="font top width" />
          </div>
          <div class="card">
            <label for="time_form" class="font text-color font-bold text-lg"
              >Time Form:</label
            ><br />
            <InputText id="time_form" v-model="value" class="font top width" />
          </div>
          <div class="card">
            <label for="leave_type" class="font text-color font-bold text-lg"
              >Leave Type:</label
            ><br />
            <InputText id="leave_type" v-model="value" class="font top width" />
          </div>
        </div>
        <!-- Right Section -->
        <div class="card-right">
          <div class="card">
            <label for="date_type" class="font text-color font-bold text-lg"
              >Date To:</label
            ><br />
            <InputText id="date_type" v-model="value" class="font top width" />
          </div>
          <div class="card">
            <label for="time_to" class="font text-color font-bold text-lg"
              >Time To:</label
            ><br />
            <InputText id="time_to" v-model="value" class="font top width" />
          </div>
          <div class="card">
            <label for="line_manager" class="font text-color font-bold text-lg"
              >Line manager:</label
            ><br />
            <InputText
              id="line_manager"
              v-model="value"
              class="font top width"
            />
          </div>
        </div>
      </div>
      <!-- Bottom Section -->
      <div class="ml-3">
        <div class="div">
          <label for="line_manager" class="font text-color font-bold text-lg"
            >Subject:</label
          ><br />
          <div class="card flex flex-wrap justify-center gap-4">
            <div class="flex items-center">
              <Checkbox
                v-model="subject"
                inputId="subject1"
                name="DatabaseII"
                value="DatabaseII"
              />
              <label for="subject1" class="ml-2"> Database II </label>
            </div>
            <div class="flex items-center">
              <Checkbox
                v-model="subject"
                inputId="subject2"
                name="Internetprogramming"
                value="Internetprogramming"
              />
              <label for="subject2" class="ml-2"> Internet Programming </label>
            </div>
            <div class="flex items-center">
              <Checkbox
                v-model="subject"
                inputId="subject3"
                name="network"
                value="network"
              />
              <label for="subject3" class="ml-2"> Network II </label>
            </div>
            <div class="flex items-center">
              <Checkbox
                v-model="subject"
                inputId="subject4"
                name="network_design"
                value="network_design"
              />
              <label for="subject4" class="ml-2"> Network Design </label>
            </div>
            <div class="flex items-center">
              <Checkbox
                v-model="subject"
                inputId="subject5"
                name="distribute_system"
                value="distribute_system"
              />
              <label for="subject5" class="ml-2"> Distribute Systems</label>
            </div>
          </div>
        </div>
      </div>
      <div class="card-bottom">
        <div class="card flex justify-center">
          <div class="">
            <label for="reason" class="font text-color font-bold text-lg"
              >Reason:</label
            >
            <br />
            <Textarea v-model="value" style="height: 100px; width: 76rem" />
          </div>
        </div>
      </div>

      <!-- Submit Button -->
      <div class="button-submit">
        <router-link to="/apps/student/student-leave-list">
          <Button
            label="Submit"
            severity="contrast"
            class="font pt-2 pb-2 pr-6 pl-6 mr-8"
          />
        </router-link>
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
