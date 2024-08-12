<script setup lang="ts">
import Button from "primevue/button";
import { ref } from "vue";
import QRCode from "qrcode";

definePage({
  meta: {
    layout: "master-teacher",
  },
});

const text = ref("");
const canvas = ref<HTMLCanvasElement | null>(null);

const generateQRCode = async () => {
  if (canvas.value) {
    try {
      await QRCode.toCanvas(canvas.value, text.value, { width: 30 }); // Set QR code width to 30rem (480px)
    } catch (error) {
      console.error("QR Code generation failed:", error);
    }
  }
};
</script>

<template>
  <div class="flex justify-content-start align-items-start ml-6">
    <router-link to="/apps/dashboard/dashboard-teacher">
      <Button
        label="BACK"
        severity="contrast"
        @click="openPosition('top')"
        class="mt-4 pl-5 pr-5 font text-md"
      />
    </router-link>
  </div>
  <div class="profile-management">
    <!-- QR Code Generator -->
    <div class="qr-code-section">
      <h2 class="title">QR Code Generator</h2>
      <input
        v-model="text"
        class="text-input font"
        placeholder="Enter text for QR code"
      />
      <Button
        label="Generate QR Code"
        class="generate-button"
        @click="generateQRCode"
      />
      <canvas ref="canvas" class="qr-canvas"></canvas>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Battambang:wght@100;300;400;700;900&display=swap");

.font,
Column,
Dialog,
InputText,
Button {
  font-family: "Battambang", sans-serif;
}
.profile-management {
  width: 70rem; /* Adjusted width */
  margin: 0 auto;
  padding: 20px;
  font-family: "Battambang", sans-serif;
  text-align: center;
  margin-top: 10px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
}

.qr-code-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.title {
  font-size: 24px;
  font-weight: 700;
  color: #284b63;
}

.text-input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 100%;
  box-sizing: border-box;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease;
}

.text-input:focus {
  border-color: #284b63;
}

.generate-button {
  background-color: #284b63;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
}

.generate-button:hover {
  background-color: #203e61;
}

.qr-canvas {
  width: 25rem; /* Adjusted QR code width */
  height: 25rem; /* Match height to width */
  border: 1px solid #ccc;
  border-radius: 8px;
}
</style>
