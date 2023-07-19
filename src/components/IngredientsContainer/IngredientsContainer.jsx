import React from "react";
import PropTypes from 'prop-types';
import IngredientCard from "../IngredientCard/IngredientCard";
import styles from './IngredientsContainer.module.css';

const IngredientsContainer = (props) => {
    const [state, setState] = React.useState({
        type: props.type,
    })

    return(
        <div className={styles.container}>
                {props.data.map((ingredient) => {
                    if (ingredient.type === state.type) {
                        return <IngredientCard image={ingredient.image} price={ingredient.price} name={ingredient.name} key={ingredient._id} />
                    }
                    return null;
                })}
            </div>
    )
}

IngredientsContainer.propTypes = {
    type: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string,
            price: PropTypes.number,
            name: PropTypes.string,
            type: PropTypes.string,
            _id: PropTypes.string
        })
    ).isRequired
};

export default IngredientsContainer;
