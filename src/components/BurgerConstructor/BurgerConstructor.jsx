import React from "react";
import styles from "./BurgerConstructor.module.css";
import Price from "../Price/Price";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorIngredientCard from "../ConstructorIngredientCard/ConstructorIngredientCard";
import PropTypes from "prop-types";
import { ingredientType } from "../../utils/prop-types";

const BurgerConstructor = ({ ingredients, onSubmitClick }) => {
  const { bun, otherIngredients } = {
    bun: ingredients.find(item => item.type === 'bun'),
    otherIngredients: ingredients.filter(item => item.type !== 'bun'),
  };
  return (
    <div className={`${styles.burgerConstructor} pt-25 custom-scroll`}>
      {bun && <ConstructorIngredientCard ingredient={bun} isTop={true} />}
      {otherIngredients.map((ingredient, index) => (
        <ConstructorIngredientCard key={index} ingredient={ingredient} />
      ))}
      {bun && <ConstructorIngredientCard ingredient={bun} isBottom={true} />}
      <div className={`${styles.orderInfo} mt-10`}>
        <Price amount={612} size="medium" />
        <Button htmlType="button" type="primary" size="medium" onClick={onSubmitClick} >
          Оформить заказ
        </Button>
      </div>
    </div>
  );
};

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientType.isRequired).isRequired,
  onSubmitClick: PropTypes.func.isRequired,
};

export default BurgerConstructor;
