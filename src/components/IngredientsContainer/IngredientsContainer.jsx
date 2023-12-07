import PropTypes from "prop-types";
import IngredientCard from "../IngredientCard/IngredientCard";
import styles from "./IngredientsContainer.module.css";
import { useGetIngredientsQuery } from "../../services/api";

const IngredientsContainer = ({ type }) => {

  const { data: ingredientsResponce, isError } = useGetIngredientsQuery(); // fetch all ingredients or go to cache

  if (isError) {
    return console.log("error");
  }

  const allIngredients = ingredientsResponce?.data ?? [];

  return (
    <div className={styles.container}>
      {allIngredients.map((ingredient) => {
        if (ingredient.type === type) {
          return <IngredientCard ingredientInfo={ingredient} key={ingredient._id}  />;
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