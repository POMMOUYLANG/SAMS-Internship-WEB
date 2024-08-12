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
        <h2>Reset Password</h2>
        <form @submit.prevent="handleSubmit">
          <div class="p-field p-grid gap-5">
            <div class="text-400 mb-3">
              <span>Enter your email below to reset your password</span>
            </div>

            <label
              for="password"
              class="p-col-12 p-mb-2 p-md-4 p-text-right text-600 font-blod"
              >New Password</label
            >
            <div class="p-col-12 p-md-8 mb-3">
              <InputText
                id="password"
                required
                autofocus
                class="input-field"
                type="password"
                placeholder="Enter your password"
              />
            </div>

            <label
              for="confirmPassword"
              class="p-col-12 p-mb-2 p-md-4 p-text-right text-600 font-blod"
              >Confirm Password</label
            >
            <div class="p-col-12 p-md-8 mb-3 text-50">
              <InputText
                id="confirmPassword"
                required
                autofocus
                class="input-field"
                type="password"
                placeholder="Enter your Confirm Password"
              />
            </div>
          </div>
          <div class="mb-5 text-600 font-blod">
            <span
              >Go Back to the
              <router-link to="/auth/login-page" class="text font-bold"
                >LOGIN </router-link
              >Page</span
            >
          </div>
          <router-link to="/auth/login-page">
            <Button label="Submit" class="w-full p-button-primary" />
          </router-link>
          <Message
            v-if="errorMessage"
            severity="error"
            text="Invalid username or password"
            class="mt-4"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import InputText from "primevue/inputtext";
import Password from "primevue/password";
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
