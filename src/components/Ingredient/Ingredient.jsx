// Represents a single ingredient in the list with an action button
const Ingredient = ({ ingredient, onClick, actionLabel }) => { // Receives ingredient, onClick function, and actionLabel as props
  return (
    <li style={{ backgroundColor: ingredient.color }}>
      {ingredient.name}
      <button onClick={onClick}>{actionLabel}</button>
    </li>
  );
};

export default Ingredient;
