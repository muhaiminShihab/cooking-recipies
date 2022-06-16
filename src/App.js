import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import MealDB from "./pages/MealDB/MealDB";
import MealDetails from "./pages/MealDB/MealDetails";

function App() {
  return (
    <BrowserRouter>

        {/* Navbar Area */}
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <h3>Cooking Recipies</h3>
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/search-meals">Recipies</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/search-meals" element={<MealDB></MealDB>} />
            <Route path="/meal-details/:mealId" element={<MealDetails></MealDetails>} />

            <Route path="*" element={
                <div className="mt-150 text-center">
                    <div className="container">
                        <h1>404 | Something unexpected happened.</h1>
                        <p>Please visit the main directory for better experience.</p>
                    </div>
                </div>
            } />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
