import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./BurgerConstructor.module.css";
import Price from "../Price/Price";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorIngredientCard from "../ConstructorIngredientCard/ConstructorIngredientCard";
import PropTypes from "prop-types";
import { usePostOrderMutation } from "../../services/api";
import { burgerConstructorSlice } from "../../services/store";
import { useDrop } from "react-dnd";

const BurgerConstructor = () => {

  const dispatch = useDispatch();
  const ingredients = useSelector((state) => state.burgerConstructor.selectedIngredients);
  const totalPrice = useSelector((state) => state.burgerConstructor.totalPrice);

  const { bun, otherIngredients } = {
    bun: ingredients.find((item) => item.type === "bun"),
    otherIngredients: ingredients.filter((item) => item.type !== "bun"),
  };

  //DND
  const [, dropRef] = useDrop({
    accept: 'ingredient',
    drop: (ingredient, monitor) => {
      if(monitor.canDrop()) {
        console.log(ingredient)
        if (ingredient.type === "bun" && ingredients.some((ingredient) => ingredient.type === "bun")) {
          dispatch(burgerConstructorSlice.actions.replaceBun(ingredient));
        } else {
          dispatch(burgerConstructorSlice.actions.addIngredient(ingredient));
        }
      }
    }
  });

  // order popup
  const [postOrder] = usePostOrderMutation();
  const order = {
    ingredients: useSelector((state) => {
      if (state.burgerConstructor.selectedIngredients) {
        return state.burgerConstructor.selectedIngredients.map((ingredient) => ingredient._id);
      } else return null;
    }),
  };

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
      return null;
    }
  };

  return (
    <div className={`${styles.burgerConstructor} pt-25 custom-scroll`} ref={dropRef}>
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

BurgerConstructor.propTypes = {};

export default BurgerConstructor;