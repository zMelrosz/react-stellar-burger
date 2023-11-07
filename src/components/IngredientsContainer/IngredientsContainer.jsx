import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import IngredientCard from "../IngredientCard/IngredientCard";
import styles from "./IngredientsContainer.module.css";
import { useGetIngredientsQuery } from "../../services/api";
import LoadingIcon from "../LoadingIcon/LoadingIcon";
import { burgerConstructorSlice } from "../../services/store";

const IngredientsContainer = ({ type,  }) => {
  const { data: ingredientsResponce, isLoading, isError } = useGetIngredientsQuery(); // fetch all ingredients or go to cache
  const selectedIngredients = useSelector((state) => state.burgerConstructor.selectedIngredients); // check selected ingredients

  const dispatch = useDispatch();

  if (isLoading) {
    return <LoadingIcon />;
  }
  if (isError) {
    return console.log("error");
  }
  const allIngredients = ingredientsResponce.data ? ingredientsResponce.data : [];

  const onIngredientClick = (clickedIngredient) => {
    console.log(selectedIngredients);
    if (clickedIngredient.type === "bun" && selectedIngredients.some((ingredient) => ingredient.type === "bun")) {
      // replace bun check
      dispatch(burgerConstructorSlice.actions.replaceBun(clickedIngredient));
    } else {
      dispatch(burgerConstructorSlice.actions.addIngredient(clickedIngredient));
    }
  };

  return (
    <div className={styles.container}>
      {allIngredients.map((ingredient) => {
        if (ingredient.type === type) {
          return <IngredientCard ingredientInfo={ingredient} key={ingredient._id} onIngredientClick={onIngredientClick} />;
        }
        return null;
      })}
    </div>
  );
};

IngredientsContainer.propTypes = {
  type: PropTypes.string.isRequired,
};

export default IngredientsContainer;
