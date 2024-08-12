<template>
  <div class="body-2">
    <Button label="refresh" @click="store.getData()" />
    <ul>
      {{
        store.loading
      }}
      <li class="" v-for="(n, index) of store.destinations" :key="index">
        {{ n.name }}
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { useDestinationStore } from "@/stores/detinations";

const store = useDestinationStore();
</script>
