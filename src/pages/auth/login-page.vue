<template>
  <div class="login-container">
    <div class="flex align-items-center justify-content-center gap-4">
      <img src="@/assets/images/logo.png" class="w-3" alt="logo" />
      <span class="text font-bold text-3xl"
        >School Attendance Management Systems</span
      >
    </div>
    <div class="flex justify-content-center pb-8">
      <div class="card">
        <h2>Login Form</h2>
        <form @submit.prevent="handleSubmit">
          <div class="p-field p-grid gap-5">
            <label
              for="email"
              class="p-col-12 p-mb-2 p-md-4 p-text-right text-600 font-blod"
              >Email</label
            >
            <div class="p-col-12 p-md-8 mb-3">
              <InputText
                id="email"
                v-model="email"
                required
                autofocus
                class="input-field"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <label
              for="password"
              class="p-col-12 p-mb-2 p-md-4 p-text-right text-600 font-blod"
              >Password</label
            >
            <div class="p-col-12 p-md-8 mb-3">
              <InputText
                id="password"
                v-model="password"
                required
                autofocus
                class="input-field"
                type="password"
                placeholder="Enter your password "
              />
            </div>
          </div>
          <div class="flex items-center justify-content-between mb-6 mt-4">
            <div class="flex items-center justify-content-start gap-2">
              <Checkbox v-model="checked" :binary="true" />
              <span class="text-600 font-blod">Remember me</span>
            </div>
            <div class="">
              <router-link
                to="/auth/forgotpasswd-page"
                class="cursor-pointer text font-bold"
              >
                Forgot password
              </router-link>
            </div>
          </div>
          <router-link to="/apps/dashboard/dashboard-admin">
            <Button label="Login" class="w-full p-button-primary" />
          </router-link>
          <Message
            v-if="errorMessage"
            severity="error"
            text="Invalid username or password"
            class="mt-4"
          />
        </form>
        <div class="card flex justify-center">
          <CascadeSelect
              v-model="selectedCity"
              :options="countries"
              optionLabel="cname"
              optionGroupLabel="name"
              :optionGroupChildren="['states', 'cities']"
              style="min-width: 14rem"
              placeholder="Select Options"
          />
        </div>

        <div v-if="selectedCity">
          <router-link :to="`/apps/dashboard/${selectedCity.code}`">
            Go to Click here:  {{ selectedCity.cname }} Dashboard
          </router-link>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import CascadeSelect from "primevue/cascadeselect";
import Button from "primevue/button";
import Message from "primevue/message";

const username = ref<string>("");
const email = ref<string>("");
const password = ref<string>("");
const errorMessage = ref<boolean>(false);

const handleSubmit = () => {
  if (username.value === "admin" && password.value === "password") {
    alert("Login successful!");
  } else {
    errorMessage.value = true;
  }
};

import { ref } from 'vue';

const selectedCity = ref(null);
const countries = ref([
  {
    cname: "Admin",
    code: "dashboard-admin",

  },
  {
    cname: "Teacher",
    code: "dashboard-teacher",
  },
  {
    cname: "Student",
    code: "dashboard-student",
  },
  {
    cname: "Staff",
    code: "dashboard-staff",
  },
  {
    cname: "Parent",
    code: "dashboard-parent",
  },
]);
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Battambang:wght@100;300;400;700;900&display=swap");

.login-container {
  display: grid;
  justify-content: center;
  align-items: center;
  height: 90vh;
  /* background-color: #f0f0f0; */
  font-family: "Battambang", sans-serif;
}

.card {
  padding: 2rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
}

h2 {
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: #203e61;
}
.text {
  color: #203e61;
}

.p-field {
  margin-bottom: 1rem;
}

.input-field {
  width: 450px; /* Fixed width for InputText components */
}

#password {
  width: 450px; /* Fixed width for Password component */
}

.p-button.p-button-primary {
  background-color: #203e61;
  border-color: #203e61;
  color: white;
}

.p-button.p-button-primary:hover {
  background-color: #1b2a41;
  border-color: #1b2a41;
}

.p-button.p-button-primary:focus {
  box-shadow: 0 0 0 0.2rem rgba(0, 0, 0, 0.25);
}

.mt-4 {
  margin-top: 1rem;
}
</style>
