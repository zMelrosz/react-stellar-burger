import PropTypes from 'prop-types';
import styles from './IngredientCard.module.css'
import Price from "../Price/Price";
import {
    Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";

const IngredientCard = (props) => {

    return(
        <div className={styles.card}>
                <Counter count={1} size="default" />
                <img src={props.image} alt={props.name} />
                <Price amount={props.price} />
                <p className="text text_type_main-small" >{props.name}</p>
            </div> 
    )
}

IngredientCard.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
};


export default IngredientCard;