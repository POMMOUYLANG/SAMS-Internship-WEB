<script setup lang="ts">
import { reactive } from "vue";

definePage({
  meta: {
    layout: "master",
  },
});

const profile = reactive({
  firstName: "",
  lastName: "",
  gender: "M",
  dateOfBirth: "",
  id: "",
  position: "",
  department: "",
  username: "",
  password: "",
  telephone: "",
  email: "",
  address: "",
  pic: "",
});

const saveProfile = () => {
  console.log("Profile saved:", profile);
};

const handleAdd = () => {
  console.log("Add button clicked");
};
</script>

<template>
  <div class="profile-management">
    <div class="bar-style-top">
      <div class="ml-3">Profile</div>
      <router-link to="/apps/teacher/profile-students">
        <button class="add-button mr-3">Back</button>
      </router-link>
    </div>
    <div class="edit-section">
      <div class="body">
        <form @submit.prevent="saveProfile">
          <div class="form-col">
            <div class="profile-pic-container">
              <img
                :src="'https://p16-va.lemon8cdn.com/tos-alisg-v-a3e477-sg/7b06a6982a31403eacc7c9d5826731fd~tplv-tej9nj120t-origin.webp'"
                alt="Profile Picture"
              />
              <br />
              <label for="profilePic" class="upload"> Profile </label>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label for="firstName">First Name</label>
                <div class="display" id="firstName">POM</div>
              </div>
              <div class="form-group">
                <label for="lastName">Last Name</label>
                <div class="display" id="lastName">MOUYLANG</div>
              </div>
              <div class="form-group">
                <label for="gender">Gender</label>
                <div class="display" id="gender">F</div>
              </div>
              <div class="form-group">
                <label for="dob">Date of Birth</label>
                <div class="display" id="dob">04/23/2024</div>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label for="id">ID</label>
                <div class="display" id="id">e20201008</div>
              </div>
              <div class="form-group">
                <label for="position">Position</label>
                <div class="display" id="position">Software Engineering</div>
              </div>
              <div class="form-group">
                <label for="department">Department</label>
                <div class="display" id="department">GIC</div>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label for="telephone">Telephone</label>
                <div class="display" id="telephone">069 310 609</div>
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <div class="display" id="email">mouylangpom@gmail.com</div>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label for="username">Username</label>
                <div class="display" id="username">mouylang_pom</div>
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <div class="display" id="password">HI@12345678</div>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label for="address">Address</label>
                <div class="display" id="address">Phnom Penh</div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <!--    <div class="bar-style-bottom"></div>-->
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Battambang:wght@100;300;400;700;900&display=swap");

.profile-management {
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;
  font-family: "Battambang", sans-serif;
}

.edit-section {
  background: white;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding-bottom: 60px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}

.profile-pic-container {
  text-align: center;
  margin-bottom: 0;
}

.profile-pic-container img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
}

.upload {
  display: inline-block;
  margin-top: 10px;
  padding: 5px 10px;
  color: #203e61;
  border-radius: 5px;
  cursor: pointer;
  font-size: medium;
  font-weight: bold;
}

.profile-pic-container input[type="file"] {
  display: none;
}

.form-row {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.form-group {
  flex: 1;
}

.form-group label {
  display: block;
  margin-bottom: 0px;
  font-weight: normal;
  color: #203e61;
  padding-left: 5px;
  padding-top: 10px;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-sizing: border-box;
  font-family: "Battambang", sans-serif;
  font-size: 12px;
}

.bar-style-top {
  display: flex;
  background-color: #203e61;
  justify-content: space-between;
  color: white;
  padding: 10px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  font-size: 18px;
  align-item: center;
}

.bar-style-bottom {
  display: flex;
  background-color: #203e61;
  color: white;
  padding: 10px;
  height: 40px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}

button {
  width: 100px;
  background-color: white;
  border: #203e61;
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-family: "Battambang", sans-serif;
  border-radius: 10px;
  text-align: center;
  height: 30px;
}

button:hover {
  background-color: lightgrey;
  color: #203e61;
}

.body {
  width: 75%;
  margin: auto;
}

.display {
  color: #203e61;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-sizing: border-box;
  font-family: "Battambang", sans-serif;
  font-size: 12px;
}
</style>
