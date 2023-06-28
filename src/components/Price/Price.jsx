import PropTypes from 'prop-types';
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './Price.module.css';

const Price = ({ amount, size = 'default' }) => {
    return (
        <div className={styles.priceDiv}>
            <p className={`text text_type_digits-${size} mr-2`}>{amount}</p>
            <CurrencyIcon />
        </div>
    );
};

Price.propTypes = {
    amount: PropTypes.number.isRequired,
    size: PropTypes.oneOf(['default', 'large', 'medium'])
};

export default Price;
