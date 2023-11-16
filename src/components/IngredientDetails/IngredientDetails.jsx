import styles from "./IngredientDetails.module.css";
import InfoItem from "../InfoItem/InfoItem";
import { ingredientType } from "../../utils/prop-types";

const IngredientDetails = ({ ingredientDetails }) => {
  if (!ingredientDetails) {
    return null;
  }
  return (
    <>
      <h3 className={`text text_type_main-large`}>Детали ингредиента</h3>
      <img className={styles.image} src={ingredientDetails.image_large} alt={ingredientDetails.name} />
      <p className="text text_type_main-medium mt-4 mb-8">{ingredientDetails.name}</p>
      <div className={`${styles.nutritionInfo} mb-15`}>
        <InfoItem label="Калории, ккал" value={ingredientDetails.calories} />
        <InfoItem label="Белки, г" value={ingredientDetails.proteins} />
        <InfoItem label="Жиры, г" value={ingredientDetails.fat} />
        <InfoItem label="Углеводы, г" value={ingredientDetails.carbohydrates} />
      </div>
    </>
  );
};

IngredientDetails.propTypes = {
};

export default IngredientDetails;
