import React from 'react';
import styles from './BurgerConstructor.module.css';
import ConstructorIngredientCard from '../ConstructorIngredientCard/ConstructorIngredientCard';
import Price from '../Price/Price';

export default class BurgerConstructor extends React.Component {
    render() {
        return(

            <>
                <div className={`${styles.burgerConstructor} mt-25 custom-scroll`}>
                    {this.props.data.map((ingredient) => {
                        return <ConstructorIngredientCard image={ingredient.image} name={ingredient.name} price={ingredient.price} />
                    })}
                </div>
                <div><Price  amount={612} /></div>
            </>
        )
    }
}