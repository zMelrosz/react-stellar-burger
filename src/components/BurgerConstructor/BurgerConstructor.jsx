import React from "react";
import styles from "./BurgerConstructor.module.css";
import Price from "../Price/Price";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorIngredientCard from "../ConstructorIngredientCard/ConstructorIngredientCard";

const BurgerConstructor = ({ ingredients }) => {
  return (
    <div className={`${styles.burgerConstructor} pt-25 custom-scroll`}>
      <ConstructorIngredientCard ingredient={ingredients.find(ingredient => ingredient.name === "Краторная булка N-200i")} isTop={true} />
      <ConstructorIngredientCard ingredient={ingredients.find(ingredient => ingredient.name === "Соус традиционный галактический")}  />
      <ConstructorIngredientCard ingredient={ingredients.find(ingredient => ingredient.name === "Мясо бессмертных моллюсков Protostomia")}  />
      <ConstructorIngredientCard ingredient={ingredients.find(ingredient => ingredient.name === "Плоды Фалленианского дерева")}  />
      <ConstructorIngredientCard ingredient={ingredients.find(ingredient => ingredient.name === "Хрустящие минеральные кольца")}  />
      <ConstructorIngredientCard ingredient={ingredients.find(ingredient => ingredient.name === "Хрустящие минеральные кольца")}  />
      <ConstructorIngredientCard ingredient={ingredients.find(ingredient => ingredient.name === "Краторная булка N-200i")} isBottom={true} />

      <div className={`${styles.orderInfo} mt-10`}>
        <Price amount={612} size="medium" />
        <Button htmlType="button" type="primary" size="medium">
          Оформить заказ
        </Button>
      </div>
    </div>
  );
};

export default BurgerConstructor;
