import styles from "./IngredientCard.module.css";
import Price from "../Price/Price";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import { ingredientType } from "../../utils/prop-types";
import { useSelector, useDispatch } from "react-redux";
import { burgerConstructorSlice } from "../../services/store";
import IngredientDetails from "../IngredientDetails/IngredientDetails";

const IngredientCard = ({ ingredientInfo }) => {
  const dispatch = useDispatch();
  const selectedIngredients = useSelector((state) => state.burgerConstructor.selectedIngredients); // check selected ingredients

  const onIngredientClick = (clickedIngredient) => {
    dispatch(burgerConstructorSlice.actions.openIngredientPopup(clickedIngredient))

    if (clickedIngredient.type === "bun" && selectedIngredients.some((ingredient) => ingredient.type === "bun")) {
      // replace bun check
      dispatch(burgerConstructorSlice.actions.replaceBun(clickedIngredient));
    } else {
      dispatch(burgerConstructorSlice.actions.addIngredient(clickedIngredient));
    }
  };

  return (
    <div className={styles.card} onClick={() => onIngredientClick(ingredientInfo)}>
      <Counter count={1} size="default" />
      <img src={ingredientInfo.image} alt={ingredientInfo.name} />
      <Price amount={ingredientInfo.price} />
      <p className="text text_type_main-small">{ingredientInfo.name}</p>
    </div>
  );
};

IngredientCard.propTypes = {
  ingredientInfo: ingredientType.isRequired,
};

export default IngredientCard;
