


import React from 'react';

const MealsCard = ({meal}) => {
    return (
        <div className="meal-card">
            <h2>{meal.strMeal}</h2>
            <p>Origin: {meal.strArea}</p>
            <img src={meal.strMealThumb} alt={"Foto " + meal.strMeal}/>
            <p>{meal.strInstructions}</p>
        </div>
    );
};

export default MealsCard;