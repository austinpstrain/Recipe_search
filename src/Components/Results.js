import { useState } from "react";
import React from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs} from 'firebase/firestore/lite';

const Results = () => {

  const [DBResults, setDBResults] = useState([{}]);

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
    var newState = [];
    async function readDB() {
      const recipieCllection = collection(db, 'results');
      const recipieSnapshot = await getDocs(recipieCllection);
      const recipeList = recipieSnapshot.docs.map(doc => doc.data());
      
      for(let i = 0; i < recipeList.length; i++){
        newState.push({
          id: recipeList[i].id,
          calories: recipeList[i].calories,
          carbohydrates: recipeList[i].carbohydrates,
          dat: recipeList[i].day,
          fats: recipeList[i].fats,
          proteins: recipeList[i].proteins,
          reminder: recipeList[i].reminder,
          text: recipeList[i].text,
        })
        
      }
    };
    readDB();
    setDBResults(newState);
    console.log(newState);
  }, []);

  return (
    <div>
    <p></p>
    </div>
  )
}

export default Results