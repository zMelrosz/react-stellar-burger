import React from "react";
import PropTypes from "prop-types";
import styles from "./ConstructorIngredientCard.module.css";
import { DragIcon, ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { ingredientType } from "../../utils/prop-types";
import { useSelector, useDispatch } from "react-redux";
import { burgerConstructorSlice } from "../../services/store";
import { useDrag } from "react-dnd";

const ConstructorIngredientCard = ({ ingredient, isTop, isBottom }) => {
  const dispatch = useDispatch();

  const [{isDragging }, dragRef] = useDrag({
    type:'constructorIngredient',
    item: ingredient,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    })
  });

  const removeIngredient = () => {
    dispatch(burgerConstructorSlice.actions.removeIngredient(ingredient.name));
    //console.log(ingredient.name)
  }

  if (isTop) {
    return (
      <div className={`${styles.cardContainer}`}>
        <div className={styles.dragContainer}></div>
        <ConstructorElement
          text={ingredient.name + " (верх)"}
          thumbnail={ingredient.image}
          price={ingredient.price}
          type={"top"}
          isLocked={true}
        />
      </div>
    );
  }

  if (isBottom) {
    return (
      <div className={`${styles.cardContainer}`}>
        <div className={styles.dragContainer}></div>
        <ConstructorElement
          text={ingredient.name + " (низ)"}
          thumbnail={ingredient.image}
          price={ingredient.price}
          type={"bottom"}
          isLocked={true}
        />
      </div>
    );
  }

  return (
    <div className={`${styles.cardContainer}`} ref={dragRef}>
      <div className={styles.dragContainer}>
        <DragIcon type="primary" />
      </div>
      <ConstructorElement
        text={ingredient.name}
        thumbnail={ingredient.image}
        price={ingredient.price}
        type={ingredient.type}
        isLocked={false}
        handleClose={removeIngredient}
      />
    </div>
  );
};

ConstructorIngredientCard.propTypes = {
  ingredient: ingredientType.isRequired,
  isTop: PropTypes.bool,
  isBottom: PropTypes.bool,
};

export default ConstructorIngredientCard;
