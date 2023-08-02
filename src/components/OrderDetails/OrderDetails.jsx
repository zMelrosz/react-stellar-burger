import styles from "./OrderDetailsStyles.module.css"
import doneImage from "../../images/done.svg";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const OrderDetails = () => {
  return (
    <>
     <div className={styles.closeIcon}><CloseIcon  type="primary" /></div>
      <p className=" text text_type_digits-large mt-30">034536</p>
      <p className="text text_type_main-medium mt-8">идентификатор заказа</p>
      <img className="mt-15" src={doneImage} alt="done" />
      <p className="text text_type_main-small mt-15">
        Ваш заказ начали готовить
      </p>
      <p className="ext text_type_main-small text_color_inactive mt-2 mb-30">
        Дождитесь готовности на орбитальной станции
      </p>
    </>
  );
};

export default OrderDetails;
