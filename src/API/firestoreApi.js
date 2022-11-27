import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc} from 'firebase/firestore/lite';

const startSession = () => {
    const firebaseConfig = {
      apiKey: "AIzaSyAkBkc4-tYi52B9Y4HU9JQ0bixY7-b28bQ",
      authDomain: "recipe-finder-5f0aa.firebaseapp.com",
      databaseURL: "https://recipe-finder-5f0aa-default-rtdb.firebaseio.com/",
      projectId: "recipe-finder-5f0aa",
      storageBucket: "recipe-finder-5f0aa.appspot.com",
      messagingSenderId: "211665410735",
      appId: "1:211665410735:web:b597cf786acc9395b5925a",
      measurementId: "G-V8Y4CFERW0"
    };
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    return db;
  };
  
  export default {
    getDocs: () => {
      const db = startSession();
      const citiesCol = collection(db, 'results');
      const citySnapshot = getDocs(citiesCol);
      return citySnapshot;
    },
    addDocs: (data) => {
        const db = startSession();
        const citiesCol = collection(db, 'results');
        const citySnapshot = getDocs(citiesCol);
        return citySnapshot;
    }
  }