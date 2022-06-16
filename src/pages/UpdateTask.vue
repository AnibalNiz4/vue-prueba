<template>
  <div class="row full-width justify-center bg-info">
    <p class="updateP text-h4 text-white q-py-lg">Update task</p>
  </div>

  <form class="full-width q-mt-md row justify-center" @submit.prevent="handleSubmit(name, task)">
    <input
      type="text"
      class="col-7 q-pa-sm q-my-sm"
      placeholder="Name"
      v-model.trim="name"
    >

    <input
      type="text"
      class="col-7 q-pa-sm q-my-sm"
      placeholder="Task"
      v-model.trim="task"
    >

    <button
      class="col-7 q-py-sm q-my-sm bg-secondary text-white cursor-pointer buttonForm"
    >Send task</button>
  </form>
</template>

<script setup lang="ts">
  import { useTasksStore } from 'src/stores/addTaskStorage';
  import { ref } from 'vue';
  import { useRoute, useRouter } from 'vue-router';

  const tasksStore = useTasksStore()

  const route = useRoute()
  const router = useRouter()

  const idParams = route.params.id

  const name = ref('')
  const task = ref('')

  const handleSubmit = (newName, newTask) => {
    if(newName === '' || newTask === '') {
      alert('Fill the fields please...')
      return
    }

    name.value = ''
    task.value = ''

    tasksStore.updateTask(newName, newTask, idParams)
    tasksStore.getTasksDatabase()

    router.push({
      name: 'list',
    })
  }



</script>

<style scoped>

  .updateP {
    margin: 0;
  }

  .buttonForm {
    border: 1px solid rgba(0, 0, 0, .5);
  }
</style>
