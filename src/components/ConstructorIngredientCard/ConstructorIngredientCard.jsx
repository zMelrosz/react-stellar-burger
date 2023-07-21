import React from "react";
import styles from "./ConstructorIngredientCard.module.css";
import {
  DragIcon,
  ConstructorElement
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';

 const ConstructorIngredientCard = ({ingredient, isTop, isBottom}) => {

  if (isTop) {
    return (
      <div className={`${styles.cardContainer}`}>
        <div className={styles.dragContainer}></div>
        <ConstructorElement text={ingredient.name + " (верх)"} thumbnail={ingredient.image} price={ingredient.price} type={"top"} isLocked={true} />
      </div>
    )
  }

  if (isBottom) {
    return (
      <div className={`${styles.cardContainer}`}>
        <div className={styles.dragContainer}></div>
        <ConstructorElement text={ingredient.name + " (низ)"} thumbnail={ingredient.image} price={ingredient.price} type={"bottom"} isLocked={true} />
      </div>
    )
  }

  return (
    <div className={`${styles.cardContainer}`}>
      <div className={styles.dragContainer}><DragIcon type="primary"/></div>
      <ConstructorElement text={ingredient.name} thumbnail={ingredient.image} price={ingredient.price} type={ingredient.type} isLocked={false} />
    </div>
  )
}; 

export default ConstructorIngredientCard;