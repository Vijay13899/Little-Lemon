import { Meals } from "./Meals.js";
import MealCard from "../Home/MealCard.js";
import "./Menu.css";

function Menu() {
  return (
    <section className="menu">
      <h1>Our Menu</h1>
      <div className="cards">
        {Meals.map((meal, index) => (
          <MealCard key={index} meal={meal} />
        ))}
      </div>
    </section>
  );
}
export default Menu;
