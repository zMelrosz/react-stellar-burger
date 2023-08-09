import React from "react";
import PropTypes from "prop-types";
import IngredientTypeBtn from "../IngredientTypeBtn/IngredientTypeBtn";
import burgerIngredients from "./BurgerIngredients.module.css";
import IngredientsContainer from "../IngredientsContainer/IngredientsContainer";

const BurgerIngredients = ({ ingredients, onIngredientClick }) => {
  return (
    <div className={`${burgerIngredients.burgerIngredients}  mr-10 mt-10`}>
      <h2 className={`text text_type_main-large`}>Соберите бургер</h2>
      <div className={`${burgerIngredients.ingredientTypeArea} mt-5`}>
        <IngredientTypeBtn name="Булки" />
        <IngredientTypeBtn name="Соусы" />
        <IngredientTypeBtn name="Начинки" />
      </div>

      <div
        className={`${burgerIngredients.ingredientTypes} ingredientTypes custom-scroll`}
      >
        <h3 className="text text_type_main-medium mt-10 mb-6">Булки</h3>
        <IngredientsContainer
          ingredients={ingredients}
          type="bun"
          onIngredientClick={onIngredientClick}
        />
        <h3 className="text text_type_main-medium mt-10 mb-6">Соусы</h3>
        <IngredientsContainer
          ingredients={ingredients}
          type="sauce"
          onIngredientClick={onIngredientClick}
        />
        <h3 className="text text_type_main-medium mt-10 mb-6">Главное</h3>
        <IngredientsContainer
          ingredients={ingredients}
          type="main"
          onIngredientClick={onIngredientClick}
        />
      </div>
    </div>
  );
};

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.object).isRequired,
  onIngredientClick: PropTypes.func.isRequired,
};
export default BurgerIngredients;