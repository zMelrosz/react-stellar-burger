import React from "react";
import PropTypes from 'prop-types';
import IngredientCard from "../IngredientCard/IngredientCard";
import styles from './IngredientsContainer.module.css';

class IngredientsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: this.props.type
        }
    }

    render() {
        return (
            <div className={styles.container}>
                {this.props.data.map((ingredient) => {
                    if (ingredient.type === this.state.type) {
                        return <IngredientCard image={ingredient.image} price={ingredient.price} name={ingredient.name} key={ingredient._id} />
                    }
                    return null;
                })}
            </div>
        );
    }
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
