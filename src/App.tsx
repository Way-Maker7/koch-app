import React, {useEffect, useState} from 'react';

import './App.css';
import axios from "axios";
import MealsCard from "./components/MealsCard";

function App() {

    const[mealsData, setMealsData] = useState([])
    const[inputSearch, setInputSearch] = useState("")

    useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + inputSearch)
            .then((res) => setMealsData(res.data.meals))
    },[inputSearch])

  return(
   <div className="">
     <h1>React Koch App</h1>
     <input type="text" placeholder="Geben Sie den Namen der Speise ein (auf English bitte)"
     onChange={(e) => setInputSearch(e.target.value)}/>
       <div className="meals-container">
           {mealsData.map((meal) => (<MealsCard key={meal.idMeal} meal={meal}/>))}
       </div>
   </div>
  );
}

export default App;
