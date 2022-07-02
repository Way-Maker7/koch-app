import React, {useEffect, useState} from 'react';

import './App.css';
import axios from "axios";

function App() {

    const[mealsData, setMealsData] = useState([])

    useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
            .then((res) => setMealsData(res.data.meals))
    }, [])

  return(
   <div className="">
     <h1>React Koch App</h1>
     <input type="text" placeholder="Geben Sie den Namen der Speise ein (auf English bitte)"/>
       <div className="meals-container">
           {mealsData.map((meal) => (<h2>{meal.strMeal}</h2>))}
       </div>
   </div>
  );
}

export default App;
