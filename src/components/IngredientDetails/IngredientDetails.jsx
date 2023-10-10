import styles from "./IngredientDetails.module.css";
import InfoItem from "../InfoItem/InfoItem";
import { ingredientType } from "../../utils/prop-types";

const IngredientDetails = ({ ingredient }) => {
  if (!ingredient) {
    return null;
  }
  return (
    <>
      <h3 className={`text text_type_main-large`}>
        Детали ингредиента
      </h3>
      <img
        className={styles.image}
        src={ingredient.image_large}
        alt={ingredient.name}
      />
      <p className="text text_type_main-medium mt-4 mb-8">{ingredient.name}</p>
      <div className={`${styles.nutritionInfo} mb-15`}>
        <InfoItem label="Калории, ккал" value={ingredient.calories} />
        <InfoItem label="Белки, г" value={ingredient.proteins} />
        <InfoItem label="Жиры, г" value={ingredient.fat} />
        <InfoItem label="Углеводы, г" value={ingredient.carbohydrates} />
      </div>
    </>
  );
};

IngredientDetails.propTypes = {
  ingredient: ingredientType.isRequired,
};

export default IngredientDetails;
