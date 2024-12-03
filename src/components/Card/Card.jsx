import styles from "./Card.module.css";
import PropTypes from "prop-types";

Card.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  body: PropTypes.string,
  pageLink: PropTypes.string,
  codeLink: PropTypes.string,
};

// Card component for displaying projects
export default function Card({ title, image, body, pageLink, codeLink }) {
  return (
    <div className={styles["card"]} title={title}>
      {/* Image container */}
      <div className={styles["image-container"]}>
        <img src={image} alt="Placeholder text..." />
      </div>

      {/* Title and description */}
      <div className={styles["card-content"]}>
        <div className={styles["card-title"]}>
          <h3>{title}</h3>
        </div>
        <div className={styles["card-body"]}>
          <p>{body}</p>
        </div>
      </div>

      {/* Card buttons */}
      <div className={styles["card-button-container"]}>
        {/* Link to hosted page */}
        <button
          className={styles["btn-page"]}
          onClick={(e) => e.stopPropagation()}
          title={pageLink === "" ? "Unavailable" : "Go to page"}
          disabled={pageLink === ""}
        >
          {/* Conditional redering of link to disable button when no link supplied  */}
          {pageLink ? (
            <a
              href={pageLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#1B9CFC" }}
            >
              Visit Page
            </a>
          ) : (
            <span className={styles["disbled-button"]}>Visit Page</span>
          )}
        </button>

        {/* Link to code repo */}
        <button
          className={styles["btn-code"]}
          onClick={(e) => e.stopPropagation()}
          title={codeLink === "" ? "Unavailable" : "Go to GitHub repo"}
          disabled={codeLink === ""}
        >
          {/* Conditional redering of link to disable button when no link supplied  */}
          {codeLink ? (
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#1B9C" }}
            >
              See Code
            </a>
          ) : (
            <span className={styles["disbled-button"]}>See Code</span>
          )}
        </button>
      </div>
    </div>
  );
}
