import React from "react";
import PropTypes from "prop-types";
import IngredientCard from "../IngredientCard/IngredientCard";
import styles from "./IngredientsContainer.module.css";
import { ingredientType } from "../../utils/prop-types";
import { IngredientsContext } from "../../services/IngredientsContext";

const IngredientsContainer = ({ type, onIngredientClick }) => {
  const { ingredients } = React.useContext(IngredientsContext);
  return (
    <div className={styles.container}>
      {ingredients.all.map((ingredient) => {
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
  onIngredientClick: PropTypes.func.isRequired,
};

export default IngredientsContainer;
