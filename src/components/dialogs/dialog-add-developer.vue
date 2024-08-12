<template>
  <Button
    label="Invite Developer"
    severity="secondary"
    icon="pi pi-plus"
    @click="visible = true"
  />
  <Dialog
    v-model:visible="visible"
    modal
    header="Invite a member to ppds-school-system"
    :style="{ width: '30vw' }"
    :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
  >
    <div class="card border-round-2xl">
      <div class="grid">
        <div class="col-12">
          <div class="grid formgrid p-fluid">
            <div class="field mb-4 col-12">
              <label for="nickname" class="font-medium text-900">
                Permission NameSearch by username, full name or email address
              </label>
              <InputText id="nickname" type="text" value="Enter username" />
            </div>

            <div class="col-12">
              <Button
                label="Invite"
                icon="pi pi-save"
                class="w-auto"
                @click="visible = false"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Dialog>
</template>

<script setup>
import { ref } from "vue";

const visible = ref(false);
</script>
