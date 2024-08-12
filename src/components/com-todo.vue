<template>
  <div class="card p-2">
    {{ toDo.name }}
  </div>
</template>
<script lang="ts" setup>
import type { ITodo } from "@/core/intefaces";

defineProps<{ toDo: ITodo }>();
</script>
