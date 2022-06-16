import { defineStore } from 'pinia';
import { dataBase } from 'src/firebaseConfig';
import { ref, child, get, set, push, remove, update } from 'firebase/database';


export const useTasksStore = defineStore('tasks', {
  state: () => ({
    tasks: null,
  }),
  getters: {
    getTasks: (state) => state.tasks,
  },
  actions: {

    async addTaskDatabase(name: string, task: string) {

      let newTaskRef = ref(dataBase, 'Tasks')

      newTaskRef = push(newTaskRef)

      const newTask = {
        id: newTaskRef.key,
        name: name,
        description: task
      }

      try {
        await set(newTaskRef, newTask)
      } catch (error) {
        return {
          status: 400,
          message: error
        }
      }

      if(!this.tasks) this.tasks = {}

      this.tasks[newTask.id] = newTask
    },

    getTasksDatabase() {
      try {
        const dbRef = ref(dataBase)

        get(child(dbRef, 'Tasks')).then((snapshot) => {
          if (snapshot.exists()) {
            this.tasks = snapshot.val()
          } else {
            this.tasks = {}
          }
        })

      } catch (error) {
        console.log(error);
      }
    },

    removeTaskDatabase(id) {
      remove(ref(dataBase, 'Tasks/' + id))
    },

    updateTask(newName, newTask, id) {

      const dB = ref(dataBase)

      update(child(dB, 'Tasks/' + id), {
        name: newName,
        description: newTask,
        id: id
      })
    }

  },
});
