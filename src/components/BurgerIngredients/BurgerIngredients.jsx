import React from "react";
import PropTypes from "prop-types";
import burgerIngredientsStyles from "./BurgerIngredients.module.css";
import IngredientsContainer from "../IngredientsContainer/IngredientsContainer";
import { ingredientType } from "../../utils/prop-types.js";

const BurgerIngredients = ({ onIngredientClick }) => {
  return (
    <div className={`${burgerIngredientsStyles.burgerIngredients}  mr-10 mt-10`}>
      <h2 className={`text text_type_main-large`}>Соберите бургер</h2>
      <div className={`${burgerIngredientsStyles.ingredientTypeArea} mt-5`}>
        <div className={`${burgerIngredientsStyles.buttonContainer}`}>
          <span className="text text_type_main-small">{"Булки"}</span>
        </div>
        <div className={`${burgerIngredientsStyles.buttonContainer}`}>
            <span className="text text_type_main-small text_color_inactive">{"Соусы"}</span>
        </div>
        <div className={`${burgerIngredientsStyles.buttonContainer}`}>
            <span className="text text_type_main-small text_color_inactive">{"Начинки"}</span>
        </div>
      </div>

      <div
        className={`${burgerIngredientsStyles.ingredientTypes} ingredientTypes custom-scroll`}
      >
        <h3 className="text text_type_main-medium mt-10 mb-6">Булки</h3>
        <IngredientsContainer
          type="bun"
          onIngredientClick={onIngredientClick}
        />
        <h3 className="text text_type_main-medium mt-10 mb-6">Соусы</h3>
        <IngredientsContainer
          type="sauce"
          onIngredientClick={onIngredientClick}
        />
        <h3 className="text text_type_main-medium mt-10 mb-6">Главное</h3>
        <IngredientsContainer
          type="main"
          onIngredientClick={onIngredientClick}
        />
      </div>
    </div>
  );
};

BurgerIngredients.propTypes = {
  onIngredientClick: PropTypes.func.isRequired,
};

export default BurgerIngredients;
