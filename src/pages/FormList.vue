<template>
  <p class="q-pa-md q-mt-md text-white bg-dark text-center text-h4">Add Task</p>
  <q-form class="row full-width justify-center">
    <q-input
      standout="bg-teal text-white"
      label="Name"
      class="col-7 q-my-sm"
    />
    <q-input
      standout="bg-teal text-white"
      label="Task"
      class="col-7 q-my-sm"
    />

    <q-btn
      class="col-7 q-my-sm q-py-sm"
    >Add Task</q-btn>
  </q-form>
</template>

<script setup lang="ts">
import { useTasksStore } from 'src/stores/addTaskStorage';

const taskStore = useTasksStore()

taskStore.getTasksDatabase()
console.log(taskStore.tasks);


</script>

<style scoped>

</style>
