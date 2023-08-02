import styles from "./InfoItem.module.css";

const InfoItem = ({ label, value }) => {
    return (
      <div className={`${styles.infoItem}`}>
        <p className="text text_type_main-default text_color_inactive">{label}</p>
        <p className={`text text_type_main-default text_color_inactive`}>{value ? value : "N/A"}</p>
      </div>
    );
  };

export default InfoItem;