import React from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs} from 'firebase/firestore/lite';

const Results = () => {
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

  React.useEffect(()=>{
    async function readDB() {
      const citiesCol = collection(db, 'results');
      const citySnapshot = await getDocs(citiesCol);
      const cityList = citySnapshot.docs.map(doc => console.log('Data', doc.data()));
    };
    readDB();
  }, []);

  return (
    // When we use .map, and output a JSK, that is called a list. Parten (h3) of list needs a key defined
    <>
    <p>peepee poopoo</p>
    </>
  )
}

export default Results