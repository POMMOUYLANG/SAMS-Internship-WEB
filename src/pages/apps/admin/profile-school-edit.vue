<template>
  <div class="profile-management">
    <div class="bar-style-top">
      <div class="ml-3">Edit</div>
      <div class="flex gap-3">
        <router-link to="/apps/admin/profile-school-view">
          <button class="add-button" @click="cancelEdit">Cancel</button>
        </router-link>
        <router-link to="/apps/admin/profile-school-view">
          <button class="add-button" type="submit" @click="saveProfile">
            Save
          </button>
        </router-link>
      </div>
    </div>
    <div class="edit-section">
      <div class="body">
        <form @submit.prevent="saveProfile">
          <div class="form-row-body">
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
            <div class="form-col-body">
              <div class="form-row">
                <div class="form-group">
                  <label for="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    v-model="profile.name"
                    placeholder="Enter name"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="type">Type</label>
                  <input
                    type="text"
                    id="type"
                    v-model="profile.type"
                    placeholder="Enter type"
                    required
                  />
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
                  <label for="telephone">Telephone</label>
                  <input
                    type="text"
                    id="telephone"
                    v-model="profile.telephone"
                    placeholder="Enter telephone number"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="web">Website</label>
                  <input
                    type="text"
                    id="web"
                    v-model="profile.web"
                    placeholder="Enter website URL"
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
                    placeholder="Enter address"
                    required
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label for="teacher">Total Teachers</label>
                  <input
                    type="text"
                    id="teacher"
                    v-model="profile.teacher"
                    placeholder="Enter total teachers"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="student">Total Students</label>
                  <input
                    type="text"
                    id="student"
                    v-model="profile.student"
                    placeholder="Enter total students"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="staff">Total Staff</label>
                  <input
                    type="text"
                    id="staff"
                    v-model="profile.staff"
                    placeholder="Enter total staff"
                    required
                  />
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
import { useRouter } from "vue-router";

definePage({
  meta: {
    layout: "master",
  },
});

const router = useRouter();

const profile = reactive({
  type: "University",
  name: "CODE CLANS",
  web: "https://codeclans.asia",
  dateOfBirth: "01-01-2020",
  department: "GIC",
  telephone: "012 886 444",
  address: "#22E, St 594, Beongkak II, Toulkok, Phnom Penh, Cambodia.",
  teacher: "25",
  student: "310",
  staff: "10",
  pic: "https://png.pngtree.com/png-vector/20230415/ourmid/pngtree-school-logo-design-template-vector-png-image_6705854.png",
});

const saveProfile = () => {
  console.log("Profile saved:", profile);
  router.push("/apps/admin/profile-school-view"); // Navigate to view after saving
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

const cancelEdit = () => {
  console.log("Edit canceled");
  router.push("/apps/admin/profile-school-view"); // Navigate to view on cancel
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

.upload-button {
  display: inline-block;
  margin-top: 10px;
  padding: 5px 10px;
  color: #203e61;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  font-size: medium;
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
  width: 95%;
  margin: 30px auto;
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
