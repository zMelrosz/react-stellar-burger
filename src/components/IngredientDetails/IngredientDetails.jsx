import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./IngredientDetails.module.css";
import InfoItem from "../InfoItem/InfoItem";

const IngredientDetails = ({calories, proteins, fats, carbs, imageLarge, closePopup }) => {

  return (
    <>
      <div className={`${styles.header} mt-10 ml-10`}>
        <h3 className={`${styles.name} text text_type_main-large`}>
          Детали ингредиента
        </h3>
        <div style={{ cursor: "pointer" }} onClick={closePopup}>
          <CloseIcon />
        </div>
      </div>
      <img
        className={styles.image}
        src={imageLarge}
        alt="no"
      />
      <p className="text text_type_main-medium mt-4 mb-8">
        Биокотлета из марсианской Магнолии
      </p>
      <div className={`${styles.nutritionInfo} mb-15`}>
        <InfoItem label="Калории, ккал" value={calories} />
        <InfoItem label="Белки, г" value={proteins} />
        <InfoItem label="Жиры, г" value={fats} />
        <InfoItem label="Углеводы, г" value={carbs} />
      </div>
    </>
  );
};

export default IngredientDetails;
