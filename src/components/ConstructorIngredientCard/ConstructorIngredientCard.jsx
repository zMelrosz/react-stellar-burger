import React from "react";
import styles from "./ConstructorIngredientCard.module.css";
import {
  DragIcon,
  ConstructorElement
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';


const ConstructorIngredientCard = ({ingredientName, isLocked, text, thumbnail, price, type}) => {
  return (
    
    <div className={`${styles.cardContainer}`}>
      {isLocked ? <div className={styles.dragContainer}></div> : <div className={styles.dragContainer}><DragIcon type="primary"/></div>  }
        <ConstructorElement text={text} thumbnail={thumbnail} price={price} type={type} isLocked={isLocked} />
    </div>
  );
};

ConstructorIngredientCard.propTypes = {
  isLocked: PropTypes.bool,
  text: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
  type: PropTypes.string
};

export default ConstructorIngredientCard;