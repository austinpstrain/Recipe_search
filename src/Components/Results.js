import { useState } from "react";
import React from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs} from 'firebase/firestore/lite';
import firestoreApi from '../API/firestoreApi'


const Results = () => {

  const [DBResults, setDBResults] = useState([]);

  const exmpleData = {
    calories: 1150,
    carbohydrates: 113,
    fats: 71,
    id: "3",
    price: 8.95,
    proteins: 11,
    text: "Korean Fried Cauliflower"
  };

  React.useEffect(()=>{
    firestoreApi.addData(exmpleData);

    firestoreApi.getDocs().then((response)=>{
     const parsedArray = response.docs.map((element)=>element.data());
      setDBResults(parsedArray);
    });

  }, []);
  console.log('State', DBResults);
  return (
    <table className="results">
      <tbody>
        <tr>
          <td><h1>Entrees</h1></td>
          <td>Calories</td>
          <td>Proteins</td>
          <td>Carbohydrates</td>
          <td>Fats</td>
        </tr>
        {DBResults.map((result) => {
          return (
          <tr className="dataResults">
            <td>{result.text}</td>
            <td>{result.calories}</td>
            <td>{result.proteins}</td>
            <td>{result.carbohydrates}</td>
            <td>{result.fats}</td>
          </tr>);
        })}
      </tbody>
    </table>
  )
}

export default Results