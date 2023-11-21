import { useEffect, useState } from "react";
import MealKitCard from "../components/MealKitCard";
import Loader from "../components/Loader";
import { fetchMealKits, updateCart } from "../api";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import styles from "./Home.module.scss";

const Home = () => {
  const [mealKits, setMealKits] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { isDarkMode } = useContext(ThemeContext);

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

  const handlePlusClick = (mealKit) => {
    console.log(mealKit);
    updateCart(mealKit);
  };

  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <h3 style={{ color: isDarkMode ? "white" : "inherit" }}>
          Mitybos rinkiniai
        </h3>
        <Link to="/new">
          <Button>Pridėti naują mitybos rinkinį</Button>
        </Link>
      </div>
      {isLoading && (
        <div className={styles.loader}>
          <Loader />
        </div>
      )}
      <div className={styles.cards}>
        {mealKits.map((mealKit) => (
          <MealKitCard
            key={mealKit.id}
            mealKit={mealKit}
            handlePlusClick={() => handlePlusClick(mealKit)}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
