import styles from "./ColourSwatch.module.css";
import PropTypes from "prop-types";

ColourSwatch.propTypes = {
  leftColour: PropTypes.string,
  rightColour: PropTypes.string,
  handleColourChange: PropTypes.func,
};

export default function ColourSwatch({
  leftColour,
  rightColour,
  handleColourChange,
}) {
  return (
    // Displays circle containing colours to choose for theme
    <div className={styles["colour-swatch"]} onClick={handleColourChange}>
      <div style={{ backgroundColor: leftColour }}></div>
      <div style={{ backgroundColor: rightColour }}></div>
    </div>
  );
}
