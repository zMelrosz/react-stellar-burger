import React from "react";
import styles from "./BurgerConstructor.module.css";
import Price from "../Price/Price";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorIngredientCard from "../ConstructorIngredientCard/ConstructorIngredientCard";

const BurgerConstructor = ({ingredients}) => {
  console.log(ingredients);
  return (
    <div className={`${styles.burgerConstructor} pt-25 custom-scroll`}>
    <ConstructorIngredientCard
      text={
        ingredients.find((item) => item.name === "Краторная булка N-200i").name +
        " (верх)"
      }
      thumbnail={
        ingredients.find((item) => item.name === "Краторная булка N-200i").image
      }
      price={
        ingredients.find((item) => item.name === "Краторная булка N-200i").price
      }
      isLocked={true}
      type="top"
    />

    <div
      className={`${styles.constructorIngredientsContainer} custom-scroll`}
    >
      <ConstructorIngredientCard
        text={
          ingredients.find(
            (item) => item.name === "Соус традиционный галактический"
          ).name
        }
        thumbnail={
          ingredients.find(
            (item) => item.name === "Соус традиционный галактический"
          ).image
        }
        price={
          ingredients.find(
            (item) => item.name === "Соус традиционный галактический"
          ).price
        }
      />

      <ConstructorIngredientCard
        text={
          ingredients.find((item) => item.name === "Плоды Фалленианского дерева")
            .name
        }
        thumbnail={
          ingredients.find((item) => item.name === "Плоды Фалленианского дерева")
            .image
        }
        price={
          ingredients.find((item) => item.name === "Плоды Фалленианского дерева")
            .price
        }
      />

      <ConstructorIngredientCard
        text={
          ingredients.find(
            (item) =>
              item.name === "Мясо бессмертных моллюсков Protostomia"
          ).name
        }
        thumbnail={
          ingredients.find(
            (item) =>
              item.name === "Мясо бессмертных моллюсков Protostomia"
          ).image
        }
        price={
          ingredients.find(
            (item) =>
              item.name === "Мясо бессмертных моллюсков Protostomia"
          ).price
        }
      />

      <ConstructorIngredientCard
        text={
          ingredients.find(
            (item) => item.name === "Хрустящие минеральные кольца"
          ).name
        }
        thumbnail={
          ingredients.find(
            (item) => item.name === "Хрустящие минеральные кольца"
          ).image
        }
        price={
          ingredients.find(
            (item) => item.name === "Хрустящие минеральные кольца"
          ).price
        }
      />

      <ConstructorIngredientCard
        text={
          ingredients.find(
            (item) => item.name === "Хрустящие минеральные кольца"
          ).name
        }
        thumbnail={
          ingredients.find(
            (item) => item.name === "Хрустящие минеральные кольца"
          ).image
        }
        price={
          ingredients.find(
            (item) => item.name === "Хрустящие минеральные кольца"
          ).price
        }
      />
    </div>

    <ConstructorIngredientCard
      text={
        ingredients.find((item) => item.name === "Краторная булка N-200i").name +
        " (низ)"
      }
      thumbnail={
        ingredients.find((item) => item.name === "Краторная булка N-200i").image
      }
      price={
        ingredients.find((item) => item.name === "Краторная булка N-200i").price
      }
      isLocked={true}
      type="bottom"
    />
    <div className={`${styles.orderInfo} mt-10`}>
      <Price amount={612} size="medium" />
      <Button htmlType="button" type="primary" size="medium">
        Оформить заказ
      </Button>
    </div>
  </div>
  )
}

export default BurgerConstructor;
