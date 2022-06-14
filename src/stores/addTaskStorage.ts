import { defineStore } from 'pinia';
import { dataBase } from 'src/firebaseConfig';
import { getDatabase, ref, child, get } from 'firebase/database';


export const useTasksStore = defineStore('tasks', {
  state: () => ({
    tasks: [],
  }),
  getters: {
    getTasks: (state) => console.log(state.tasks),
  },
  actions: {
    getTasksDatabase() {
      try {
        const dbRef = ref(dataBase)

        get(child(dbRef, 'Tasks')).then((snapshot) => {
          if (snapshot.exists()) {
            console.log(snapshot.val());
            snapshot.val().forEach(element => {
              console.log(element);

            });
            this.tasks.push({
              name: snapshot.val().name,
              description: snapshot.val().description
            })
          } else {
            console.log('No data available');
          }
        })

      } catch (error) {
        console.log(error);
      }
    }
  },
});
