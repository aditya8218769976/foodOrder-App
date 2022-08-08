import { useEffect, useState } from "react";
import "./AvailableMeals.css";
import Card from "../UI/Card";
import MealsItem from "./MealsItem";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://form-29b35-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className="loading-text-style">
        <h2>Loading..</h2>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className="http-error-style">
        <h2>{httpError}</h2>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealsItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className="meals-style">
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
