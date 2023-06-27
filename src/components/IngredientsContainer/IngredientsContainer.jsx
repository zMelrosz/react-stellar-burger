import React from "react";
import IngredientCard from "../IngredientCard/IngredientCard";
import styles from './IngredientsContainer.module.css';

export default class IngredientsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: this.props.type
        }
    }
    render() {
        return(
            <div className={styles.container/*burgerIngredients.area*/}>
                    {this.props.data.map((ingredient) => {
                        if (ingredient.type === this.state.type) {
                            return <IngredientCard image={ingredient.image} price={ingredient.price} name={ingredient.name} key={ingredient._id}/>
                        } return null;
                    })}
            </div>
        ) 
    }
}