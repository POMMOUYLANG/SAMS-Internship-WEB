<template>
  <Button label="New Module" icon="pi pi-plus" @click="visible = true" />
  <Dialog
    v-model:visible="visible"
    modal
    header="Register Module"
    :style="{ width: '50vw' }"
    :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
  >
    <div class="card border-round-2xl">
      <div class="grid">
        <div class="col-12 lg:col-2">
          <p class="m-0 p-0 text-600 line-height-3 mr-3">
            Odio euismod lacinia at quis risus sed vulputate odio.
          </p>
        </div>
        <div class="col-12 lg:col-10">
          <div class="grid formgrid p-fluid">
            <div class="field mb-4 col-12">
              <label for="nickname" class="font-medium text-900">
                Module Name
              </label>
              <InputText id="nickname" type="text" value="Logs Service" />
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
                value="Logs Service"
              ></Textarea>
            </div>

            <div class="field mb-4 col-12 md:col-6">
              <label for="state" class="font-medium text-900">
                AccessKey
              </label>
              <InputText
                id="state"
                type="text"
                value="vW66pSf|?+T3Lx?2U~q_[$BhciS>"
              />
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
