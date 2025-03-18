import Ingredient from "../Ingredient/Ingredient.jsx";

// Displays the stacked ingredients in the burger
const BurgerStack = ({ ingredients, removeFromBurger }) => {
  return (
    <ul>
      {ingredients.length === 0 ? ( // Check if the ingredients array is empty
        <li>No Ingredients</li> // Display a message if no ingredients are present
      ) : (
        ingredients.map(
          (
            ingredient,
            index // Map over the ingredients array to display each ingredient
          ) => (
            <Ingredient key={index} ingredient={ingredient} onClick={() => removeFromBurger(index)} actionLabel="X" />
          )
        )
      )}
    </ul>
  );
};

export default BurgerStack;
