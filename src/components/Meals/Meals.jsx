import MealItem from "./MealItem.jsx";
import useHTTP from "../../hooks/useHTTP.js";
import Error from "../Error/Error.jsx";

const requestConfig = {};

export default function Meals() {
  const {
    data: loadedMeals = [],
    Isloading,
    error,
  } = useHTTP("http://localhost:3000/meals", requestConfig, []);

  if (Isloading) {
    return <p className="center">Loading...</p>;
  }

  if (error) {
    return <Error title="Failed to fetch meals" message={error} />;
  }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
