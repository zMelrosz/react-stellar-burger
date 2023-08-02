import React from "react";
import PropTypes from "prop-types";
import IngredientCard from "../IngredientCard/IngredientCard";
import styles from "./IngredientsContainer.module.css";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import Modal from "../Modal/Modal";

const IngredientsContainer = ({ type, ingredients }) => {

    const [popup, setPopup] = React.useState({
        isOpen: false,
        ingredient: null
    });

    const closePopup = () => {
        setPopup({
            ...popup,
            isOpen: false,
        })
    }

  const handleIngredientClick = (ingredientInfo) => {
    setPopup({
        isOpen: true,
        ingredient: ingredientInfo,
    })
  };

  return (
    <div className={styles.container}>
      {ingredients.map((ingredient) => {
        if (ingredient.type === type) {
          return (
            <IngredientCard
              ingredientInfo={ingredient}
              key={ingredient._id}
              onIngredientClick={handleIngredientClick}
            />
          );
        }
        return null;
      })}

      { popup.isOpen ? (
        <Modal 
        content={
            <IngredientDetails 
                calories={popup.ingredient.calories}
                proteins={popup.ingredient.proteins}
                fats={popup.ingredient.fat}
                carbs={popup.ingredient.carbohydrates}
                imageLarge={popup.ingredient.image_large}
                closePopup={closePopup}
            />
        }
        isOpen={popup.isOpen} 
    />    
      ) : null } 
    </div>
  );
};

IngredientsContainer.propTypes = {
  type: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      price: PropTypes.number,
      name: PropTypes.string,
      type: PropTypes.string,
      _id: PropTypes.string,
    })
  ).isRequired,
};

export default IngredientsContainer;
