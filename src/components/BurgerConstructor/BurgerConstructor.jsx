import React from "react";
import styles from "./BurgerConstructor.module.css";
import Price from "../Price/Price";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { data } from "../../utils/data";
import ConstructorIngredientCard from "../ConstructorIngredientCard/ConstructorIngredientCard";

export default class BurgerConstructor extends React.Component {
  render() {
    return (
      <>
        <div className={`${styles.burgerConstructor} pt-25 custom-scroll`}>
          <ConstructorIngredientCard
            text={
              data.find((item) => item.name === "Краторная булка N-200i").name +
              " (верх)"
            }
            thumbnail={
              data.find((item) => item.name === "Краторная булка N-200i").image
            }
            price={
              data.find((item) => item.name === "Краторная булка N-200i").price
            }
            isLocked={true}
            type="top"
          />

          <div
            className={`${styles.constructorIngredientsContainer} custom-scroll`}
          >
            <ConstructorIngredientCard
              text={
                data.find(
                  (item) => item.name === "Соус традиционный галактический"
                ).name
              }
              thumbnail={
                data.find(
                  (item) => item.name === "Соус традиционный галактический"
                ).image
              }
              price={
                data.find(
                  (item) => item.name === "Соус традиционный галактический"
                ).price
              }
            />

            <ConstructorIngredientCard
              text={
                data.find((item) => item.name === "Плоды Фалленианского дерева")
                  .name
              }
              thumbnail={
                data.find((item) => item.name === "Плоды Фалленианского дерева")
                  .image
              }
              price={
                data.find((item) => item.name === "Плоды Фалленианского дерева")
                  .price
              }
            />

            <ConstructorIngredientCard
              text={
                data.find(
                  (item) =>
                    item.name === "Мясо бессмертных моллюсков Protostomia"
                ).name
              }
              thumbnail={
                data.find(
                  (item) =>
                    item.name === "Мясо бессмертных моллюсков Protostomia"
                ).image
              }
              price={
                data.find(
                  (item) =>
                    item.name === "Мясо бессмертных моллюсков Protostomia"
                ).price
              }
            />

            <ConstructorIngredientCard
              text={
                data.find(
                  (item) => item.name === "Хрустящие минеральные кольца"
                ).name
              }
              thumbnail={
                data.find(
                  (item) => item.name === "Хрустящие минеральные кольца"
                ).image
              }
              price={
                data.find(
                  (item) => item.name === "Хрустящие минеральные кольца"
                ).price
              }
            />

            <ConstructorIngredientCard
              text={
                data.find(
                  (item) => item.name === "Хрустящие минеральные кольца"
                ).name
              }
              thumbnail={
                data.find(
                  (item) => item.name === "Хрустящие минеральные кольца"
                ).image
              }
              price={
                data.find(
                  (item) => item.name === "Хрустящие минеральные кольца"
                ).price
              }
            />
          </div>

          <ConstructorIngredientCard
            text={
              data.find((item) => item.name === "Краторная булка N-200i").name +
              " (низ)"
            }
            thumbnail={
              data.find((item) => item.name === "Краторная булка N-200i").image
            }
            price={
              data.find((item) => item.name === "Краторная булка N-200i").price
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
      </>
    );
  }
}
