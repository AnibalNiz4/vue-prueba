<template>
  <p class="q-pa-lg text-white bg-dark text-center text-h4">Add Task</p>

  <form class="full-width row justify-center" @submit.prevent="handleSubmit(name, task)">
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

  <q-list class="row full-width justify-center q-mt-lg">
    <q-item class="col-7 shadow-1 q-py-md q-mt-sm" v-for="(task, index) in Object.values(tasksArray)" :key="index">
      <q-item-section avatar top>
        <q-icon name="task" color="primary" size="24px" />
      </q-item-section>

      <q-item-section top class="col-2 gt-sm">
        <q-item-label class="q-mt-sm text-bold">Task</q-item-label>
      </q-item-section>

      <q-separator vertical></q-separator>

      <q-item-section class="text-center">
        <q-item-label>
          <span class="text-weight-medium">{{ task.name }}</span>
        </q-item-label>
        <q-item-label caption>
          {{ task.description }}
        </q-item-label>
      </q-item-section>

      <q-item-section top side>
        <div class="text-grey-8 q-gutter-xs">
          <q-btn @click="updateTask(`${task.id}`)" class="gt-xs text-primary" size="12px" flat dense round icon="update" />
          <q-btn @click="removeTask(`${task.id}`)" class="gt-xs text-negative" size="12px" flat dense round icon="delete" />
        </div>
      </q-item-section>
    </q-item>
  </q-list>

</template>

<script setup lang="ts">
  import { useTasksStore } from 'src/stores/addTaskStorage';
  import { computed, onMounted, ref } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter()

  const taskStore = useTasksStore()


  const name = ref('')
  const task = ref('')

  const handleSubmit = (nameForm, taskForm) => {
    if(nameForm === '' || taskForm === '') {
      alert('Fill the fields please...')
      return
    }


    taskStore.addTaskDatabase(nameForm, taskForm)
    name.value = ''
    task.value = ''
  }

  const removeTask = (id) => {
    taskStore.removeTaskDatabase(id)
    taskStore.getTasksDatabase()
  }

  const updateTask = (id) => {
    router.push({
      name: 'update',
      params: {id}
    })
  }

  onMounted(async () => {
    if(!taskStore.getTasks) {
      await taskStore.getTasksDatabase()
    }
  })

  const tasksArray = computed(() => {
    return taskStore.getTasks ?? {}
  })


</script>





<style scoped>
  .buttonForm {
    opacity: .9;
    border: 1px solid rgba(0, 0, 0, .5);
  }

  .buttonForm:hover {
    opacity: 1;
  }
</style>
