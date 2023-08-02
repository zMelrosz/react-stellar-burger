import React from "react";
import PropTypes from "prop-types";
import IngredientCard from "../IngredientCard/IngredientCard";
import styles from "./IngredientsContainer.module.css";

const IngredientsContainer = ({ type, ingredients, onIngredientClick }) => {

  return (
    <div className={styles.container}>
      {ingredients.map((ingredient) => {
        if (ingredient.type === type) {
          return (
            <IngredientCard
              ingredientInfo={ingredient}
              key={ingredient._id}
              onIngredientClick={onIngredientClick}
            />
          );
        }
        return null;
      })}
    </div>
  );
};

IngredientsContainer.propTypes = {
  type: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      price: PropTypes.number,
      name: PropTypes.string,
      type: PropTypes.string,
      _id: PropTypes.string,
    })
  ).isRequired,
};

export default IngredientsContainer;
