import IngredientList from "./components/IngredientList/IngredientList.jsx";
import BurgerStack from "./components/BurgerStack/BurgerStack.jsx";
import { useState } from "react";
import "./App.css";

const App = () => {
  const availableIngredients = [
    { name: "Kaiser Bun", color: "saddlebrown" },
    { name: "Sesame Bun", color: "sandybrown" },
    { name: "Gluten Free Bun", color: "peru" },
    { name: "Lettuce Wrap", color: "olivedrab" },
    { name: "Beef Patty", color: "#3F250B" },
    { name: "Soy Patty", color: "#3F250B" },
    { name: "Black Bean Patty", color: "#3F250B" },
    { name: "Chicken Patty", color: "burlywood" },
    { name: "Lettuce", color: "lawngreen" },
    { name: "Tomato", color: "tomato" },
    { name: "Bacon", color: "maroon" },
    { name: "Onion", color: "lightyellow" },
    { name: "Cheddar Cheese", color: "#FDE18B" },
    { name: "Swiss Cheese", color: "#F1E1A8" },
  ];

  // Initialize a new useState for burger stack
  const [stack, setStack] = useState([]);

  const addToBurger = (ingredient) => {
    setStack([...stack, ingredient]); // add ingredient to the stack
    console.log("Added to burger:", ingredient);
  };

  const removeFromBurger = (index) => {
    setStack(stack.filter((_, i) => i !== index)); // remove ingredient from the stack or at index
    console.log("Removed from burger at index:", index);
  };

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        <IngredientList ingredients={availableIngredients} addToBurger={addToBurger} />
        <BurgerStack ingredients={stack} removeFromBurger={removeFromBurger} />
      </section>
    </main>
  );
};

export default App;
