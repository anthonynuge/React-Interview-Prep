import { useState } from "react";
import "./styles.css";
import { recipesData } from "./recipesData";

const RATING_THRESHOLDS = [4.0, 4.3, 4.5, 4.7, 4.9];

const FilterDropdown = ({ options, value, onChange }) => (
  <select
    className="filter__select"
    value={value}
    onChange={(e) => onChange(e.target.value)}
  >
    <option value="">All</option>
    {options.map((option) => (
      <option key={option} value={option}>
        {option}+
      </option>
    ))}
  </select>
);

const RecipeCard = ({ recipe, onAddToCart }) => (
  <article className="recipe-card">
    <img className="recipe-card__image" src={recipe.image} alt={recipe.name} />
    <h2 className="recipe-card__title">{recipe.name}</h2>
    <p className="recipe-card__meta">{recipe.cuisine}</p>
    <p className="recipe-card__meta">Rating: {recipe.rating}</p>
    <button
      type="button"
      className="recipe-card__button"
      onClick={() => onAddToCart(recipe.id)}
    >
      Add to Cart
    </button>
  </article>
);

const RecipeFilterApp = () => {
  const [rating, setRating] = useState("");
  const [cartCount, setCartCount] = useState(0);

  const filteredRecipes =
    rating === ""
      ? recipesData
      : recipesData.filter((r) => r.rating >= parseFloat(rating));

  const recipeCount = filteredRecipes.length;
  const averageRating = recipeCount
    ? filteredRecipes.reduce((sum, r) => sum + r.rating, 0) / recipeCount
    : 0;

  const addToCart = () => setCartCount((c) => c + 1);

  return (
    <div className="recipe-explorer">
      <h1 className="recipe-explorer__title">🍽️ Recipe Explorer</h1>
      <header className="toolbar">
        <div className="toolbar__row">
          <label className="filter">
            <span className="filter__label">Filter by Rating: </span>
            <FilterDropdown
              options={RATING_THRESHOLDS}
              value={rating}
              onChange={setRating}
            />
          </label>
          <div className="cart-count" aria-live="polite">
            Cart Items: {cartCount}
          </div>
        </div>
        <div className="toolbar__summary">
          Average Rating: {averageRating.toFixed(2)} ({recipeCount} Recipes)
        </div>
      </header>

      <ul className="recipe-grid">
        {filteredRecipes.map((recipe) => (
          <li className="recipe-grid__item" key={recipe.id}>
            <RecipeCard recipe={recipe} onAddToCart={addToCart} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeFilterApp;
