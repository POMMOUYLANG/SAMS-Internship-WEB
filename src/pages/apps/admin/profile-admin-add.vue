<template>
  <div class="profile-management">
    <div class="bar-style-top">
      <div>Add</div>
      <button class="add-button">Save</button>
    </div>
    <div class="edit-section">
      <div class="body">
        <form @submit.prevent="saveProfile">
          <div class="form-col">
            <div class="profile-pic-container">
              <img
                :src="profile.pic"
                alt="Profile Picture"
                v-if="profile.pic"
              />
              <br />
              <label for="profilePic" class="upload-button">Upload Image</label>
              <input
                type="file"
                id="profilePic"
                @change="onFileChange"
                accept="image/*"
              />
            </div>
            <div class="form-row">
              <div class="form-group">
                <label for="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  v-model="profile.firstName"
                  required
                />
              </div>
              <div class="form-group">
                <label for="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  v-model="profile.lastName"
                  required
                />
              </div>
              <div class="form-group">
                <label for="gender">Gender</label>
                <select id="gender" v-model="profile.gender" required>
                  <option value="M">M</option>
                  <option value="F">F</option>
                  <option value="O">Other</option>
                </select>
              </div>
              <div class="form-group">
                <label for="dob">Date of Birth</label>
                <input
                  type="date"
                  id="dob"
                  v-model="profile.dateOfBirth"
                  required
                />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label for="id">ID</label>
                <input type="text" id="id" v-model="profile.id" required />
              </div>
              <div class="form-group">
                <label for="position">Position</label>
                <select
                  type="text"
                  id="position"
                  v-model="profile.position"
                  required
                >
                  <option value="Software Engineering">
                    Software Engineering
                  </option>
                  <option value="Network Engineering">
                    Network Engineering
                  </option>
                  <option value="Research Methodology">
                    Research Methodology
                  </option>
                </select>
              </div>
              <div class="form-group">
                <label for="department">Department</label>
                <select id="department" v-model="profile.department" required>
                  <option value="AMS">AMS</option>
                  <option value="GAR">GAR</option>
                  <option value="GCA">GCA</option>
                  <option value="GCI">GCI</option>
                  <option value="GEE">GEE</option>
                  <option value="GGG">GGG</option>
                  <option value="GIC">GIC</option>
                  <option value="GIM">GIM</option>
                  <option value="GRU">GRU</option>
                  <option value="GTR">GTR</option>
                </select>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label for="telephone">Telephone</label>
                <input
                  type="text"
                  id="telephone"
                  v-model="profile.telephone"
                  required
                />
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  v-model="profile.email"
                  required
                />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label for="username">Username</label>
                <input
                  type="text"
                  id="username"
                  v-model="profile.username"
                  required
                />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  id="password"
                  v-model="profile.password"
                  required
                />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label for="address">Address</label>
                <input
                  type="text"
                  id="address"
                  v-model="profile.address"
                  required
                />
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

const onFileChange = (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      profile.pic = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  }
};

const handleAdd = () => {
  console.log("Add button clicked");
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

.upload-button {
  display: inline-block;
  margin-top: 10px;
  padding: 5px 10px;
  color: #203e61;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}

.upload-button:hover {
  background-color: #203e61;
  color: white;
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
  border-radius: 20px;
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

input {
  color: #203e61;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-sizing: border-box;
  font-family: "Battambang", sans-serif;
  font-size: 12px;
}
</style>
