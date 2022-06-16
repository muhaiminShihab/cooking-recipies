import { useEffect, useState } from "react";
import Recipy from "./Recipy";

const MealDB = () => {

    const [text, setText] = useState('');
    const [recipies, setRecipies] = useState([]);

    const inputHandler = e => {
        let textValue = e.target.value;
        setText(textValue);
    }

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`;
        fetch(url)
        .then(response => response.json())
        .then(data => setRecipies(data.meals));

    }, [text]);

    

    return (
        <div className="mealDb-page">
            {/* Search Area */}
            <div className="search-area mt-150">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="card rounded">
                                <div className="card-body">
                                    <div className="mb-3 text-center">
                                        <h3>Recipy Finder</h3>
                                        <p>Search by a name, like fish.</p>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" onChange={inputHandler} className="form-control" placeholder="Search what you want..." />
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recipies Area */}
            <div className="recipies-area mt-150">
                <div className="container">
                    <div className="row">
                        {
                            recipies.map(meal => 
                                <Recipy key={meal.idMeal} id={meal.idMeal} name={meal.strMeal} thumb={meal.strMealThumb} tutorial={meal.strYoutube}></Recipy>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MealDB;