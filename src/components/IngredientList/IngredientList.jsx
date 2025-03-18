import Ingredient from "../Ingredient/Ingredient.jsx";

// Displays a list of available ingredients to add to the burger
const IngredientList = ({ ingredients, addToBurger }) => {
  // Destructure the props to get ingredients and addToBurger
  return (
    <ul>
      {ingredients.map((ingredient, index) => (
        <Ingredient key={index} ingredient={ingredient} onClick={() => addToBurger(ingredient)} actionLabel="+" />
      ))}
    </ul>
  );
};

export default IngredientList;
