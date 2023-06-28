import styles from "./ConstructorIngredientCard.module.css";
import {
  DragIcon,
  ConstructorElement
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';


const ConstructorIngredientCard = (props) => {
  return (
    
    <div className={`${styles.cardContainer}`}>
      {props.isLocked ? <div className={styles.dragContainer}></div> : <div className={styles.dragContainer}><DragIcon type="primary"/></div>  }
        <ConstructorElement text={props.text} thumbnail={props.thumbnail} price={props.price} type={props.type} isLocked={props.isLocked} />
    </div>
  );
};

ConstructorIngredientCard.propTypes = {
  isLocked: PropTypes.bool,
  text: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
  type: PropTypes.string
};

export default ConstructorIngredientCard;