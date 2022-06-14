import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database'


const firebaseConfig = {
  apiKey: 'AIzaSyBEM_7SRusdUe-mNMRPw1yJ8SiPSH8b4yY',
  authDomain: 'prueba-vue-57441.firebaseapp.com',
  projectId: 'prueba-vue-57441',
  storageBucket: 'prueba-vue-57441.appspot.com',
  messagingSenderId: '901976409750',
  appId: '1:901976409750:web:5ee69dfe651c56582524b7'
};

const app = initializeApp(firebaseConfig);

const dataBase = getDatabase(app)

export { dataBase }
