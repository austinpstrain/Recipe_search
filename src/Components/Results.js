import { useState } from "react";
import React from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs} from 'firebase/firestore/lite';
import firestoreApi from '../API/firestoreApi'

const Results = () => {

  const [DBResults, setDBResults] = useState([]);

  // firestoreApi.getDocs().then((response)=>{console.log('Response',response.docs[0].data());})

  React.useEffect(()=>{
    firestoreApi.getDocs().then((response)=>{
     const parsedArray = response.docs.map((element)=>element.data());
      setDBResults(parsedArray);
    });
    // setDBResults(newState);
    //console.log(newState);
  }, []);
  console.log('State', DBResults);
  return (
    <div>
    <h1>Results</h1>
    <p>
    {DBResults.map((result) => result.text)}
    </p>
    </div>
  )
}

export default Results


/**
<p>{DBResults.map((result) => (
  <li key={result.id}>
    {result.calories}
  </li>
))}
*/