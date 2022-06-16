import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MealDetails = () => {
    const { mealId } = useParams();

    const [details, setDetails] = useState([]);
    useEffect(() => {
        let url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
        fetch(url)
        .then(response => response.json())
        .then(data => setDetails(data.meals));

    }, [mealId])

    console.log(details);

    return (
        <div className="MealDetails-page">
            <div className="details-area mt-150">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="card mb-3">
                                <div className="card-body text-center">
                                    {
                                        details.map(detail =>
                                            <div key={detail.idMeal}>
                                                <table className="mb-5 table table-bordered table-striped">
                                                    <thead>
                                                    <tr>
                                                        <th>Meal From</th>
                                                        <th>Meal Category</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td>{detail.strArea}</td>
                                                        <td>{detail.strCategory}</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                                <img src={detail.strMealThumb} alt="" className="img-fluid rounded" />
                                                <h1>{detail.strMeal}</h1>

                                                <p className="text-justify">
                                                    {detail.strInstructions}
                                                </p>    

                                                <div className="mt-3 btn-group">
                                                    <a href={detail.strYoutube} className="btn btn-primary">Watch tutorial</a>
                                                    <a href={detail.strSource} className="btn btn-warning">Get the recipy</a>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MealDetails;