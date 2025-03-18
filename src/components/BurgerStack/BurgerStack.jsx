import Ingredient from "../Ingredient/Ingredient.jsx";

// Displays the stacked ingredients in the burger
const BurgerStack = ({ ingredients, removeFromBurger }) => {
  // Receives ingredients and removeFromBurger as props
  return (
    <ul>
      {ingredients.length === 0 ? ( // Check if the ingredients array is empty
        <li>No Ingredients</li> // Display a message if no ingredients are present
      ) : (
        ingredients.map(
          // Use .map() to iterate over the ingredients array and renders each with an X button
          (ingredient, index) => (
            <Ingredient key={index} ingredient={ingredient} onClick={() => removeFromBurger(index)} actionLabel="X" />
          )
        )
      )}
    </ul>
  );
};

export default BurgerStack;
