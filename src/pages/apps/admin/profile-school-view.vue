<template>
  <div class="profile-management">
    <div class="bar-style-top">
      <div class="ml-3">Profile</div>
      <router-link to="/apps/admin/profile-school-edit">
        <button class="add-button">Edit</button>
      </router-link>
    </div>
    <div class="edit-section">
      <div class="body">
        <div class="form-row-body">
          <div class="profile-pic-container">
            <img
              :src="
                profile.pic ||
                'https://png.pngtree.com/png-vector/20230415/ourmid/pngtree-school-logo-design-template-vector-png-image_6705854.png'
              "
              alt="Profile Picture"
            />
            <br />
            <label class="upload">Profile</label>
          </div>
          <div class="form-col-body">
            <div class="form-row">
              <div class="form-group">
                <label for="name">Name</label>
                <div class="display" id="name">{{ profile.name }}</div>
              </div>
              <div class="form-group">
                <label for="type">Type</label>
                <div class="display" id="type">{{ profile.type }}</div>
              </div>
              <div class="form-group">
                <label for="dob">Date of Birth</label>
                <div class="display" id="dob">{{ profile.dateOfBirth }}</div>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label for="telephone">Telephone</label>
                <div class="display" id="telephone">
                  {{ profile.telephone }}
                </div>
              </div>
              <div class="form-group">
                <label for="web">Website</label>
                <div class="display" id="web">{{ profile.web }}</div>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label for="address">Address</label>
                <div class="display" id="address">{{ profile.address }}</div>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label for="teacher">Total Teachers</label>
                <div class="display" id="teacher">{{ profile.teacher }}</div>
              </div>
              <div class="form-group">
                <label for="student">Total Students</label>
                <div class="display" id="student">{{ profile.student }}</div>
              </div>
              <div class="form-group">
                <label for="staff">Total Staff</label>
                <div class="display" id="staff">{{ profile.staff }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from "vue";
import { useRouter } from "vue-router";

definePage({
  meta: {
    layout: "master",
  },
});

const router = useRouter();

const profile = reactive({
  type: "",
  name: "",
  web: "",
  dateOfBirth: "",
  telephone: "",
  address: "",
  teacher: "",
  student: "",
  staff: "",
  pic: "",
});

// Simulate fetching profile data
const loadProfile = () => {
  profile.type = "University";
  profile.name = "CODE CLANS";
  profile.web = "https://codeclans.asia";
  profile.dateOfBirth = "01-01-2020";
  profile.telephone = "012 886 444";
  profile.address = "#22E, St 594, Beongkak II, Toulkok, Phnom Penh, Cambodia.";
  profile.teacher = "25";
  profile.student = "310";
  profile.staff = "10";
  profile.pic =
    "https://png.pngtree.com/png-vector/20230415/ourmid/pngtree-school-logo-design-template-vector-png-image_6705854.png";
};

// Load profile data on component mount
onMounted(() => {
  loadProfile();
});

const saveProfile = () => {
  console.log("Profile saved:", profile);
  router.push("/apps/admin/profile-school-view");
};

const cancelEdit = () => {
  console.log("Edit canceled");
  router.push("/apps/admin/profile-school-view");
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

.display {
  color: #203e61;
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
</style>
