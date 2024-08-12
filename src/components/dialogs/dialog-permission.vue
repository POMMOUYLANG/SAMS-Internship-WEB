<template>
  <Button
    label="New Permission"
    severity="secondary"
    icon="pi pi-plus"
    @click="visible = true"
  />
  <Dialog
    v-model:visible="visible"
    modal
    header="Create Permission"
    :style="{ width: '30vw' }"
    :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
  >
    <div class="card border-round-2xl">
      <div class="grid">
        <div class="col-12">
          <div class="grid formgrid p-fluid">
            <div class="field mb-4 col-12">
              <label for="nickname" class="font-medium text-900">
                Permission Name
              </label>
              <InputText id="nickname" type="text" value="Read Logs" />
            </div>

            <div class="field mb-4 col-12">
              <label for="bio" class="font-medium text-900">
                Description
              </label>
              <Textarea
                id="bio"
                type="text"
                :rows="5"
                autoResize
                value="Read Logs"
              ></Textarea>
            </div>

            <div class="col-12">
              <Button
                label="Submit"
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
