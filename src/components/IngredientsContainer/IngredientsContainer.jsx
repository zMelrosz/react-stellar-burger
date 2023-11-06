import React from 'react'
import PropTypes from "prop-types";
import IngredientCard from "../IngredientCard/IngredientCard";
import styles from "./IngredientsContainer.module.css";
import { useGetIngredientsQuery, burgerApi } from "../../services/api";
import LoadingIcon from '../LoadingIcon/LoadingIcon';


const IngredientsContainer = ({ type, onIngredientClick }) => {
  
  const { data: ingredientsResponce, isLoading, isError } = useGetIngredientsQuery();

  if (isLoading) return <LoadingIcon />;
  if (isError) return console.log('error');

  const ingredients = ingredientsResponce.data ? ingredientsResponce.data : [];
  console.log(ingredients);

  return (
    <div className={styles.container}>
      {ingredients.map((ingredient) => {
        if (ingredient.type === type) {
          return (
            <IngredientCard
              ingredientInfo={ingredient}
              key={ingredient._id}
              onIngredientClick={onIngredientClick}
            />
          );
        }
        return null;
      })}
    </div>
  );
};

IngredientsContainer.propTypes = {
  type: PropTypes.string.isRequired,
  onIngredientClick: PropTypes.func.isRequired,
};

export default IngredientsContainer;
