import React from "react";
import PropTypes from "prop-types";
import styles from "./IngredientCard.module.css";
import Price from "../Price/Price";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";

const IngredientCard = ({ ingredientInfo, onIngredientClick }) => {
  return (
    <div
      className={styles.card}
      onClick={() => onIngredientClick(ingredientInfo)}
    >
      <Counter count={1} size="default" />
      <img src={ingredientInfo.image} alt={ingredientInfo.name} />
      <Price amount={ingredientInfo.price} />
      <p className="text text_type_main-small">{ingredientInfo.name}</p>
    </div>
  );
};

IngredientCard.propTypes = {
    ingredientInfo: PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }).isRequired,
    onIngredientClick: PropTypes.func.isRequired,
  };
  

export default IngredientCard;
