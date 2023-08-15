import React from "react";
import PropTypes from "prop-types";
import IngredientCard from "../IngredientCard/IngredientCard";
import styles from "./IngredientsContainer.module.css";
import { ingredientType } from "../../utils/prop-types";

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
  ingredients: PropTypes.arrayOf(ingredientType).isRequired,
  onIngredientClick: PropTypes.func.isRequired,
};

export default IngredientsContainer;
