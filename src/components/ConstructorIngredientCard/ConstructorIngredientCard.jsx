import Price from "../Price/Price";
import styles from "./ConstructorIngredientCard.module.css";
import {
  DragIcon,
  LockIcon,
  DeleteIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

const ConstructorIngredientCard = (props) => {
  return (
    <div className={`${styles.cardContainer} pl-8  ml-4 mr-4 mb-4`}>
        <div className={`${styles.dragContainer} `}>
        <DragIcon type="primary" />
        </div>
      <div className={`${styles.card} pt-4 pb-4`}>
        <img
          className={`${styles.cardPicture} ml-6 `}
          src={props.image}
          alt={props.name}
        />
        <span className={`${styles.cardName} ml-5 mr-5 text text_type_main-default `}>{props.name}</span>
        <div className="mr-5">
            <Price amount={props.price} />
        </div>
        <div className="mr-8">
            <LockIcon type="secondary" />
        </div>
      </div>
    </div>
  );
};

export default ConstructorIngredientCard;