import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./BurgerConstructor.module.css";
import Price from "../Price/Price";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorIngredientCard from "../ConstructorIngredientCard/ConstructorIngredientCard";
import PropTypes from "prop-types";
import { usePostOrderMutation } from "../../services/api";
import { burgerConstructorSlice } from "../../services/store";

const BurgerConstructor = () => {
  const dispatch = useDispatch();
  const ingredients = useSelector(state => state.burgerConstructor.selectedIngredients);
  const totalPrice = useSelector(state => state.burgerConstructor.totalPrice)

  const { bun, otherIngredients } = {
    bun: ingredients.find((item) => item.type === "bun"),
    otherIngredients: ingredients.filter((item) => item.type !== "bun"),
  };

    // order popup
    const isOrderPopupOpen = false;
    const [postOrder, {isLoading, isSucces, isError, data, error }] = usePostOrderMutation();
    const order = {
      ingredients: useSelector((state) => {
        if (state.burgerConstructor.selectedIngredients) {
          return state.burgerConstructor.selectedIngredients.map(ingredient => ingredient._id) 
        } else return null;
      })
    }
    
    const orderSubmit = async () => {
      try {
        const res = await postOrder(order).unwrap();
        if (res.success) {
          const orderInfo = {
            name: res.name,
            number: res.order.number,
          }
          dispatch(burgerConstructorSlice.actions.openOrderPopup(orderInfo));
          dispatch(burgerConstructorSlice.actions.addOrder(orderInfo));
        }
      } catch (err) {
        console.log(err); 
      }
    }

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
        <Button htmlType="button" type="primary" size="medium" onClick={orderSubmit}>
          Оформить заказ
        </Button>
      </div>
    </div>
  );
};

BurgerConstructor.propTypes = {
};

export default BurgerConstructor;
