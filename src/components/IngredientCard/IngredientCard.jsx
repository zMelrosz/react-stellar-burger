import styles from "./IngredientCard.module.css";
import Price from "../Price/Price";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import { ingredientType } from "../../utils/prop-types";
import { useSelector, useDispatch } from "react-redux";
import { burgerConstructorSlice } from "../../services/store";
import { useDrag } from "react-dnd";

const IngredientCard = ({ingredientInfo}) => {
  const dispatch = useDispatch();
  const selectedIngredients = useSelector((state) => state.burgerConstructor.selectedIngredients); // check selected ingredients
  const counter = useSelector((state) => state.burgerConstructor.selectedIngredients.filter(ingredient => ingredientInfo.name === ingredient.name)).length;

  const [, dragRef] = useDrag({
    type: 'ingredient',
    item: ingredientInfo, 
  })

  const onIngredientClick = (clickedIngredient) => {
    dispatch(burgerConstructorSlice.actions.openIngredientPopup(clickedIngredient))
  };

  return (
    <div className={styles.card} onClick={() => onIngredientClick(ingredientInfo) } ref={dragRef}>
      {counter > 0 ? <Counter count={counter} size="default" /> : null } 
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
