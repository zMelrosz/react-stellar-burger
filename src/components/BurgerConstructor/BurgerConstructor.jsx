import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./BurgerConstructor.module.css";
import Price from "../Price/Price";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorIngredientCard from "../ConstructorIngredientCard/ConstructorIngredientCard";
import PropTypes from "prop-types";

const BurgerConstructor = ({ onSubmitClick }) => {
  const ingredients = useSelector(state => state.burgerConstructor.selectedIngredients);
  const totalPrice = useSelector(state => state.burgerConstructor.totalPrice)

  const { bun, otherIngredients } = {
    bun: ingredients.find((item) => item.type === "bun"),
    otherIngredients: ingredients.filter((item) => item.type !== "bun"),
  };
  return (
    <div className={`${styles.burgerConstructor} pt-25 custom-scroll`}>
      {bun && <ConstructorIngredientCard ingredient={bun} isTop={true} />}
      <div className={`${styles.ingredientsScroll} custom-scroll`}>
        {otherIngredients.map((ingredient, index) => (
          <ConstructorIngredientCard key={index} ingredient={ingredient} />
        ))}
      </div>
      {bun && <ConstructorIngredientCard ingredient={bun} isBottom={true} />}
      <div className={`${styles.orderInfo} mt-10`}>
        <Price amount={totalPrice} size="medium" />
        <Button htmlType="button" type="primary" size="medium" onClick={onSubmitClick}>
          Оформить заказ
        </Button>
      </div>
    </div>
  );
};

BurgerConstructor.propTypes = {
  onSubmitClick: PropTypes.func.isRequired,
};

export default BurgerConstructor;
