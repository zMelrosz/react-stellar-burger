import styles from "./IngredientTypeBtn.module.css";

const IngredientTypeBtn = props => {
    return (
        <div className={`${styles.buttonContainer}`}><span className="textChosen text text_type_main-small ">{props.name}</span></div>
    )
}

export default IngredientTypeBtn;