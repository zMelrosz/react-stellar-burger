import styles from "./InfoItem.module.css";
import PropTypes from "prop-types";

const InfoItem = ({ label, value }) => {
  return (
    <div className={`${styles.infoItem}`}>
      <p className="text text_type_main-default text_color_inactive">{label}</p>
      <p className={`text text_type_main-default text_color_inactive`}>{value ? value : "N/A"}</p>
    </div>
  );
};

InfoItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default InfoItem;
