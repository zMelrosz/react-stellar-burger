import React from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './Price.module.css'

export default function Price ({amount, size='default'}) {

    return (
        <div className={styles.priceDiv}>
                <p className={`text text_type_digits-${size} mr-2`}>{amount}</p>
                <CurrencyIcon />
        </div>
    )
}