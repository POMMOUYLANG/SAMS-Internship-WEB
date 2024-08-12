<script setup lang="ts">
import { ref } from "vue";
import IconField from "primevue/iconfield";
import InputIcon from "primevue/inputicon";
import InputText from "primevue/inputtext";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import ConfirmDialog from "primevue/confirmdialog";

definePage({
  meta: {
    layout: "master",
  },
});
// Dialog state and selected user
const visible = ref(false);
// Search query data
const searchQuery = ref("");

// Sample users data (replace with actual data source)
const users = [
  // Example user data
  {
    no: 1,
    date: "01-08-2024",
    clock_in: "00:00:00",
    clock_out: "00:00:00",
    status: "present",
  },
  {
    no: 2,
    date: "01-08-2024",
    clock_in: "00:00:00",
    clock_out: "00:00:00",
    status: "present",
  },
  // Add more users as needed
];

// Handler functions for button clicks
function viewUser(rowData: any) {
  selectedUser.value = rowData;
  displayDialog.value = true;
}

function editUser(rowData: any) {
  console.log("Editing user:", rowData);
  // Implement edit logic here
}

function deleteUser(rowData: any) {
  console.log("Deleting user:", rowData);
  // Implement delete logic here
}
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";

const confirm = useConfirm();
const toast = useToast();

const confirm1 = () => {
  confirm.require({
    message: "Do you want to reject or approve this request?",
    header: "Approve Request",
    icon: "pi pi-exclamation-triangle",
    rejectProps: {
      label: "Cancel",
      severity: "secondary",
      outlined: true,
    },
    acceptProps: {
      label: "Save",
    },
    accept: () => {
      toast.add({
        severity: "info",
        summary: "Confirmed",
        detail: "You have accepted",
        life: 3000,
      });
    },
    reject: () => {
      toast.add({
        severity: "error",
        summary: "Rejected",
        detail: "You have rejected",
        life: 3000,
      });
    },
  });
};

const confirm2 = () => {
  confirm.require({
    message: "Do you want to reject this request?",
    header: "Reject Request",
    icon: "pi pi-info-circle",
    rejectLabel: "Cancel",
    rejectProps: {
      label: "Cancel",
      severity: "secondary",
      outlined: true,
    },
    acceptProps: {
      label: "Delete",
      severity: "danger",
    },
    accept: () => {
      toast.add({
        severity: "info",
        summary: "Confirmed",
        detail: "Record deleted",
        life: 3000,
      });
    },
    reject: () => {
      toast.add({
        severity: "error",
        summary: "Rejected",
        detail: "You have rejected",
        life: 3000,
      });
    },
  });
};
</script>

<template>
  <div class="profile-management">
    <!-- Top Bar -->
    <div class="bar-style-top">
      <div class="ml-3">Report</div>
      <div class="flex align-items-center gap-4 mr-4">
        <IconField>
          <InputIcon class="pi pi-search" />
          <InputText v-model="searchQuery" placeholder="Search" />
        </IconField>
        <!--        <Button label="Report" class="btn" />-->
      </div>
    </div>
    <div class="div edit-section">
      <!-- Data Table -->
      <div class="p-card">
        <DataTable :value="users" class="p-datatable-gridlines">
          <Column field="no" header="No" style="width: 5rem" />
          <Column field="date" header="Date" style="width: 15rem" />
          <Column field="clock_in" header="Clock in" style="width: 15rem" />
          <Column field="clock_out" header="Clock out" style="width: 15rem" />
          <Column field="status" header="Status" style="width: 15rem" />
          <Column header="Action" style="width: 15rem">
            <template #body="{ rowData }">
              <Button
                icon="pi pi-eye"
                class="p-button-rounded p-button-info p-mr-2 ml-4"
                aria-label="View"
                @click="visible = true"
              />
              <Button
                icon="pi pi-pencil"
                class="p-button-rounded p-button-success p-mr-2 ml-2"
                aria-label="Edit"
                @click="confirm1()"
              />
              <Button
                icon="pi pi-trash"
                class="p-button-rounded p-button-danger ml-2"
                aria-label="Delete"
                @click="confirm2()"
              />
            </template>
          </Column>
        </DataTable>
      </div>
    </div>

    <!--    dialog view-->
    <div class="p-dialog">
      <Dialog
        class="dialog"
        v-model:visible="visible"
        modal
        header="View Report"
        :style="{ width: '55rem' }"
      >
        <div class="form-col">
          <div class="form-row">
            <div class="form-group">
              <label for="time_from">Clock In*</label>
              <div class="display" id="time_from">7:00 AM</div>
            </div>
            <div class="form-group">
              <label for="time_to">Clock Out*</label>
              <div class="display" id="time_to">5:00 PM</div>
            </div>
          </div>
        </div>
        <div class="form-col">
          <div class="form-row">
            <div class="form-group">
              <label for="date">Date</label>
              <div class="display" id="date">01-08-2024</div>
            </div>
            <div class="form-group">
              <label for="type">Status</label>
              <div class="display" id="type">Present</div>
            </div>
          </div>
        </div>
      </Dialog>
    </div>

    <!--    dialog delete-->
    <Toast />
    <ConfirmDialog></ConfirmDialog>

    <!-- Bottom Bar -->
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

.btn {
  color: white;
  background-color: #203e61;
  border-radius: 5px;
  padding: 9px 36px;
}

.edit-section {
  background: white;
  padding: 20px;
  height: 100vh;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}

.form-group select {
  width: 100%;
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-sizing: border-box;
}

.form-row {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.form-group {
  flex: 1;
  font-family: "Battambang", sans-serif;
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

.display {
  color: #203e61;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-sizing: border-box;
  font-family: "Battambang", sans-serif;
  font-size: 12px;
}

.field {
  margin-bottom: 1rem;
}

.field label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #203e61;
}

.field input {
  width: 100%;
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 10px;
}

.bar-style-top {
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom: 2px solid #284b63;
}
.bar-style-bottom {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  display: flex;
  background-color: #284b63;
  color: white;
  padding: 10px;
  height: 40px;
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
}

.p-card {
  padding: 20px;
}

.p-datatable-gridlines {
  margin-top: 1rem;
  font-family: "Battambang", sans-serif;
}
</style>
