import { useEffect, useState } from "react";
import MealKitCard from "../components/MealKitCard";
import Loader from "../components/Loader";
import { fetchMealKits } from "../api";
import { Link } from "react-router-dom";
import "./Home.scss";
import Button from "../components/Button";

const Home = () => {
  const [mealKits, setMealKits] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchMealKits()
      .then((response) => {
        setMealKits(response);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <main className="container">
      <div className="header">
        <h3 className="section-title">Mitybos rinkiniai</h3>
        <Link to="/new">
          <Button>Pridėti naują mitybos rinkinį</Button>
        </Link>
      </div>
      {isLoading && (
        <div className="loader">
          <Loader />
        </div>
      )}
      <div className="cards">
        {mealKits.map((mealKit) => (
          <MealKitCard key={mealKit.title} mealKit={mealKit} />
        ))}
      </div>
    </main>
  );
};

export default Home;
