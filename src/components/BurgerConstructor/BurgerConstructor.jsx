import React from 'react';
import styles from './BurgerConstructor.module.css';
import ConstructorIngredientCard from '../ConstructorIngredientCard/ConstructorIngredientCard';
import Price from '../Price/Price';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';

export default class BurgerConstructor extends React.Component {
    render() {
        return(

            <>
                <div className={`${styles.burgerConstructor} pt-25 custom-scroll`}>
                    {this.props.data.map((ingredient) => {
                        return <ConstructorIngredientCard image={ingredient.image} name={ingredient.name} price={ingredient.price} key={ingredient._id} />
                    })}
                    <div className={`${styles.orderInfo} mt-10`}>
                        <Price  amount={612} size='medium' /><Button htmlType='button' type='primary' size='medium' >Оформить заказ</Button>
                    </div>
                </div>
            </>
        )
    }
}