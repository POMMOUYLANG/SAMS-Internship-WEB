<template>
  <div class="profile-management">
    <div class="bar-style-top">
      <div class="ml-3">Profile</div>
      <router-link to="/apps/admin/profile-admin-edit">
        <button class="add-button">Edit</button>
      </router-link>
    </div>
    <div class="edit-section row">
      <div class="body">
        <form @submit.prevent="saveProfile">
          <div class="form-row-body">
            <div class="profile-pic-container">
              <img
                :src="'https://static.mothership.sg/1/2023/06/IMG_0945.jpg'"
                alt="Profile Picture"
              />
              <label for="profilePic" class="upload"> Profile </label>
            </div>
            <div class="form-col-body">
              <div class="form-row">
                <div class="form-group">
                  <label for="firstName">First Name</label>
                  <div class="display" id="firstName">DIN</div>
                </div>
                <div class="form-group">
                  <label for="lastName">Last Name</label>
                  <div class="display" id="lastName">PICH</div>
                </div>
                <div class="form-group">
                  <label for="gender">Gender</label>
                  <div class="display" id="gender">M</div>
                </div>
                <div class="form-group">
                  <label for="dob">Date of Birth</label>
                  <div id="dob" class="display">
                    {{ formatDate(profile.dateOfBirth) }}
                  </div>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label for="id">ID</label>
                  <div class="display" id="id">e20201250</div>
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
                  <div class="display" id="telephone">086 318 261</div>
                </div>
                <div class="form-group">
                  <label for="email">Email</label>
                  <div class="display" id="email">e20201250@itc.edu.kh</div>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label for="username">Username</label>
                  <div class="display" id="username">admin</div>
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <div class="display" id="password">12345678</div>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label for="address">Address</label>
                  <div class="display" id="address">Phnom Penh</div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

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
  dateOfBirth: "01-08-2003",
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

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};
</script>

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
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}

.profile-pic-container {
  text-align: center;
  margin-bottom: 0;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

.form-row-body {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.form-col-body {
  width: 60%;
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

button {
  width: 100px;
  background-color: white;
  border: #203e61;
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-family: "Battambang", sans-serif;
  border-radius: 20px;
  text-align: center;
  height: 30px;
}

button:hover {
  background-color: lightgrey;
  color: #203e61;
}

.body {
  width: 95%;
  margin: 30px auto;
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
